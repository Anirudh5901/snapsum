import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

const SummaryHeader = ({
  title,
  createdAt,
  readingTime,
}: {
  title: string;
  createdAt: Date;
  readingTime: number;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 mb-4 justify-between">
        <div className=" flex gap-x-4 items-center">
          <div className="p-0.5 relative overflow-hidden rounded-full bg-linear-to-r from-cyan-500 bg-cyan-600 to-cyan-800 animate-gradient-x ">
            <Badge className="relative px-3 py-1 sm:px-4 text-base bg-black font-medium rounded-full group-hover:bg-cyan-600 transition-colors duration-200">
              <Sparkles className="h-8 w-8 mr-2 text-cyan-200 animate-pulse" />
              <p className="text-white text-base hidden sm:hidden md:block lg:block">
                AI Summary
              </p>
            </Badge>
          </div>

          <div className="flex gap-x-1 items-center">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <p>
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="flex gap-x-1 items-center">
            <Clock className="h-4 w-4 text-cyan-400" />
            <p>{readingTime} min read</p>
          </div>
        </div>

        <div>
          <Link href={`/dashboard`}>
            <Button className="group flex items-center gap-1 sm:gap-2 rounded-full bg-cyan-950 px-2 sm:px-3">
              <ArrowLeft />
              <span className="text-xs sm:text-sm font-medium">
                Back to Dashboard
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <h1 className="text-2xl lg:text-4xl font-bold lg:tracking-tight text-white">
        {title}
      </h1>
    </div>
  );
};

export default SummaryHeader;
