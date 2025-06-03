import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const UpgradeRequired = () => {
  return (
    <div className="relative min-h-[50vh]">
      <div className="container px-8 py-16">
        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-cyan-400">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Premium Feature
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight bg-clip-text ">
            Subscription Required
          </h1>
          <p className="text-lg leading-8 text-white border-2 border-cyan-200 backdrop-blur-xs rounded-lg p-6 border-dashed max-w-xl">
            You need to upgrade to the Basic Plan or the Pro plan to access this
            feature
          </p>
          <Button
            asChild
            className="bg-linear-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white"
          >
            <Link href="/#pricing" className="flex gap-2 items-center">
              View Pricing Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeRequired;
