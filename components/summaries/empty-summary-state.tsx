import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const EmptySummaryState = () => {
  return (
    <div className="text-center py-12">
      <div className="flex flex-col items-center gap-4">
        <FileText className="w-16 h-16 text-cyan-400" />
        <h2 className="text-xl font-semibold">No summaries yet</h2>
        <p className="max-w-md text-cyan-400">
          Upload your PDF to get started with AI-powered summries
        </p>
        <Button className="mt-4 bg-cyan-950">
          <Link href="/upload">Create your summary</Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptySummaryState;
