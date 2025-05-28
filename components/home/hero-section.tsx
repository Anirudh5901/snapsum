import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" relative mx-auto flex flex-col z-0 items-center justify-center ">
      <div className="flex flex-col gap-y-7 justify-center items-center text-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl text-cyan-400 ">
        <div className="flex">
          <div className="p-[4px] relative overflow-hidden rounded-full bg-linear-to-r from-cyan-500 bg-cyan-600 to-cyan-800 animate-gradient-x ">
            <Badge className="relative px-6 py-2 text-base bg-black font-medium rounded-full group-hover:bg-cyan-600 transition-colors duration-200">
              <Sparkles className="h-10 w-10 mr-2 text-cyan-200 animate-pulse" />
              <p className="text-white text-base">Powered By AI</p>
            </Badge>
          </div>
        </div>

        <h1 className="font-bol py-6 text-center text-white">
          Transform your PDFs into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 px-2 text-black">concise</span>
            <span
              className="absolute inset-0 bg-amber-200/50 -rotate-2 rounded-lg transform w-2/5-skew-y-1"
              aria-hidden="true"
            ></span>{" "}
          </span>
          summaries
        </h1>
        <h2>Get a beautiful summary of the document in a snap</h2>
        <Button
          variant={`link`}
          className="text-white mt-6 text-base sm:text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 hover:no-underline font-bold shadow-lg"
        >
          <Link href="/#pricing" className="flex gap-2 items-center">
            <span>Try SnapSumm</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
