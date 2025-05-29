"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UploadFormInput = ({ onSubmit }: UploadFormInputProps) => {
  return (
    <form
      className="flex flex-col justify-center items-center gap-y-4 w-full max-w-2xl"
      onSubmit={onSubmit}
    >
      <div className="flex items-center justify-center gap-x-2">
        <div className="bg-linear-to-l from-cyan-400 to-slate-950 h-0.5 w-2xs"></div>
        <p>Upload PDF</p>
        <div className="bg-linear-to-r from-cyan-400 to-slate-950  h-0.5 w-2xs"></div>
      </div>
      <div className="flex items-center justify-end gap-2 w-full">
        <Input
          type="file"
          id="file"
          name="file"
          accept="application/pdf"
          required
          className=""
        ></Input>
        <Button className="bg-cyan-950">Upload your PDF</Button>
      </div>
    </form>
  );
};

export default UploadFormInput;
