import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINIAI_API_KEY });

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    const prompt = `${SUMMARY_SYSTEM_PROMPT}\n\nTransform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`;

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
        maxOutputTokens: 1500,
      },
    });
    const response = result.text;

    if (!response) {
      throw new Error("Empty response from Gemini API");
    }
    return response;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
