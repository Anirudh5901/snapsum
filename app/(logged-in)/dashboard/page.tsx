import EmptySummaryState from "@/components/summaries/empty-summary-state";
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summaries";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashBoardPage = async () => {
  const user = await currentUser();
  const userId = user?.id;
  if (!user?.id) return redirect("/sign-in");
  const summaries = await getSummaries(userId);
  const uploadLimit = 5;
  return (
    <main className="min-h-screen">
      {/* Some gradient maybe */}
      <div className="container mx-auto flex flex-col gap-4">
        <div className="px-2 py-12 sm:py-24 ">
          <div className="flex gap-4 mb-8 justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Your summaries
              </h1>
              <p className="text-cyan-400">
                Transform your PDFs into concise actionable insights
              </p>
            </div>

            <Button className="bg-cyan-950">
              <Link href="/upload" className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                New Summary
              </Link>
            </Button>
          </div>
          <div className="mb-6">
            <div className="bg-cyan-800 border border-cyan-300 rounded-lg p-4 text-white">
              <p className="text-sm">
                You have reached the limit of {uploadLimit} uploads on the Basic
                plan.{" "}
                <Link
                  href="/#pricing"
                  className="text-cyan-300 underline inline-flex items-center"
                >
                  Click here to upgrade to Pro{" "}
                  <ArrowRight className="w-4 h-4 inline-block" />
                </Link>
                for unlimited uploads.
              </p>
            </div>
          </div>
          {summaries.length === 0 ? (
            <EmptySummaryState />
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
              {summaries.map((summary, index) => (
                <SummaryCard key={index} summary={summary} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DashBoardPage;
