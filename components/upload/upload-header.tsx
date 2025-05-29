import { Sparkles, Sparkle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const UploadHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="flex">
        <div className="p-[4px] relative overflow-hidden rounded-full bg-linear-to-r from-cyan-500 bg-cyan-600 to-cyan-800 animate-gradient-x ">
          <Badge className="relative px-6 py-2 text-base bg-black font-medium rounded-full group-hover:bg-cyan-600 transition-colors duration-200">
            <Sparkles className="h-10 w-10 mr-2 text-cyan-200 animate-pulse" />
            <p className="text-white text-base">AI-Powered Content Creation</p>
          </Badge>
        </div>
      </div>

      <h1 className="font-bol py-6 text-center text-white">
        Start Uploading{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2 text-black">Your PDFs</span>
          <span
            className="absolute inset-0 bg-amber-200/50 -rotate-2 rounded-lg transform w-2/5-skew-y-1"
            aria-hidden="true"
          ></span>{" "}
        </span>
      </h1>
      <h3 className="flex items-center justify-center text-cyan-400">
        Upload your PDF and let our AI do the magic <Sparkle />
      </h3>
    </div>
  );
};

export default UploadHeader;
