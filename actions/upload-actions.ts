//anytime you want to expose a specific fn as a public HTTP endpoint without having to use an API folder, we use server actions
"use server";

import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/gemini";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAi } from "@/lib/openai";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { title } from "process";

interface PdfSummaryType {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

export async function generatePdfSummary({
  fileUrl,
  fileName,
}: {
  fileUrl: string;
  fileName: string;
}) {
  if (!fileUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  if (!fileUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(fileUrl);
    console.log("PDF TEXT:", pdfText);
    let summary;
    try {
      summary = await generateSummaryFromOpenAi(pdfText);
      console.log("SUMMARY", { summary });
    } catch (error) {
      console.log("OpenAI error:", error);

      // FIXED: More robust error handling
      const isRateLimitExceeded =
        (error instanceof Error && error.message === "RATE_LIMIT_EXCEEDED") ||
        (error &&
          typeof error === "object" &&
          "status" in error &&
          error.status === 429);

      if (isRateLimitExceeded) {
        console.log("OpenAI rate limit exceeded, trying Gemini...");
        try {
          summary = await generateSummaryFromGemini(pdfText);
          console.log("SUMMARY FROM GEMINI:", summary);
        } catch (geminiError) {
          console.error(
            "Gemini API failed after OpenAi quota exceeded",
            geminiError
          );
          throw new Error(
            "Failed to generate summary with available AI providers"
          );
        }
      } else {
        console.error("Non-rate-limit OpenAI error:", error);
        throw error; // Re-throw non-rate-limit errors
      }
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }
    const formattedFileName = formatFileNameAsTitle(fileName);

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        summary,
        title: formattedFileName,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  //sql inserting pdf summary
  try {
    const sql = await getDbConnection();
    const [savedSummary] = await sql`
INSERT INTO pdf_summaries (
    user_id,
    original_file_url,
    summary_text,
    title,
    file_name
) VALUES (
    ${userId},
    ${fileUrl},
    ${summary},
    ${title},
    ${fileName}
) RETURNING id, summary_text;
`;
    return savedSummary;
  } catch (error) {
    console.error("Error saving pdf summary", error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  // check user is logged in and has a user id
  //save pdf summary

  let savedSummary: any;
  try {
    const { userId } = await auth(); //get stuff from auth() from clerk whenever u want userID on the server side

    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }

    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return {
        success: false,
        message: "Failed to save pdf summary, please try again...",
      };
    }
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF summary",
    };
  }

  //revalidate our cache
  //revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: "PDF summary saved successfully",
    data: {
      id: savedSummary.id,
    },
  };
}
