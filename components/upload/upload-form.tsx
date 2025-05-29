"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { generatePdfSummary } from "@/actions/upload-actions";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be atmost 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  //useUploadThimg is what we defined in utils/uploadthing.ts
  //it is a custom hook that uses the generateReactHelpers from uploadthing/react
  //it takes the endpoint name and an optional config object
  //the first argument in the useUploadThing hook should match what we created in the api/uploadthing/core.ts file
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      console.log("uploaded successfully!");
      toast.success("File uploaded successfully");
    },
    onUploadError: (err) => {
      console.error("error occured while uploading", err);
      toast.error("Error occured while uploading the file");
    },
    onUploadBegin: (file) => {
      console.log("upload has begun for", file);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
    const formData = new FormData(e.currentTarget); //digital envelope that contains all the data from the form's fields
    const file = formData.get("file") as File; //we called the 'file' as 'file' in the form input component

    //validate the fields
    const validatedFields = schema.safeParse({ file }); // safeParse checks if the data matches the schema and returns an object with success or error

    if (!validatedFields.success) {
      console.log(
        validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Inavlid File"
      );
      toast.error("Something went wrong  with the file upload.");

      return;
    }

    toast.loading("Almost there! We are uploading your PDF");

    //schema with zod: done above ^

    //upload the file to upload-thing
    const response = await startUpload([file]);
    if (!response) {
      toast.error("Something went wrong! Please use a different file");
      return;
    }

    toast.loading("Hang tight! Our AI is reading through your document");

    //parse the pdf using langchain
    const summary = await generatePdfSummary(response);
    console.log("SUMMARY:", { summary });
    //summarize the pdf using ai
    //save the summary to the db
    //redirect to the [id] summary page
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} />
    </div>
  );
};

export default UploadForm;
