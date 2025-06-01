import { ExternalLink, FileText } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import DownloadSummaryButton from "./download-summary-button";

const SourceInfo = ({
  fileName,
  originalFileUrl,
  title,
  summaryText,
  createdAt,
}: {
  fileName: string;
  originalFileUrl: string;
  title: string;
  summaryText: string;
  createdAt: string;
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
      <div className="flex items-center justify-center gap-x-2">
        <FileText className="h-4 w-4 text-cyan-400" />
        <p>Source: {fileName}</p>
      </div>

      <div className="flex gap-x-2">
        <div className="h-8 px-3 text-white bg-cyan-700 rounded-xl flex items-center">
          <a
            href={originalFileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-1"
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            View Original
          </a>
        </div>
        <DownloadSummaryButton
          title={title}
          summaryText={summaryText}
          fileName={fileName}
          createdAt={createdAt}
        />
      </div>
    </div>
  );
};

export default SourceInfo;
