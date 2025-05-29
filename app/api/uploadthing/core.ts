import { currentUser } from "@clerk/nextjs/server";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  //thi is going to be the one responsible for uploading the files, interacting with uploadthing and giving us necessary details
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async () => {
      //get user info here and return that to upload thing
      const user = await currentUser();
      console.log("USER: ", user); //simple way to get the current user from Clerk
      if (!user) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completed for user id", metadata.userId);
      console.log("file url:", file.ufsUrl);
      return { userId: metadata.userId, file: file };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
