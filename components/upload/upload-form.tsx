"use client";
import { z } from "zod";
import UploadFormInput from "./upload-form-input";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      "File size must be atleast 20MB"
    )
    .refine(
      (file) => file.type.startsWith("application/pdf"),
      "File must be a PDF"
    ),
});

const UploadForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

      return;
    }

    //schema with zod
    //upload the file to upload-thing
    //parse the pdf using langchain
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
