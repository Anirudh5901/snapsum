import { cn } from "@/lib/utils";
import React from "react";

const ProgressBar = ({
  sections,
  currentSection,
}: {
  sections: Array<{ title: string; points: string[] }>;
  currentSection: number;
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-xs pt-4 pb-2 border-b border-cyan-50/10 ">
      <div className="px-4 flex gap-1.5 mx-auto">
        {sections.map((_, index) => (
          <div
            className="h-1.5 flex-1 rounded-full bg-cyan-500/10 overflow-hidden"
            key={index}
          >
            <div
              className={cn(
                "h-full bg-linear-to-r from-gray-500 to-cyan-600 transition-all duration-500",
                index === currentSection
                  ? "w-full"
                  : currentSection > index
                  ? "w-ful opacity-10"
                  : "w-0"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
