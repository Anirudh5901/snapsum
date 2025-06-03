import { Sparkles } from "lucide-react";
import SummaryViewer from "../summaries/summary-viewer";

const DemoSection = () => {
  const DEMO_SUMMARY = `#Next.js - The Future of React Development 🚀
. 🌟 Next.js revolutionizes React development with powerful features and incredible developer experience
. 💫 Perfect balance of performance and ease of use

#Document Details 📑
. 📄 Type: Technical Framework Documentation
. 👥 For: Web Developers and React Enthusiasts

#Key Highlights ⭐
. 🔥 Built-in server-side rendering and static site generation
. ⚡ Lightning-fast performance with automatic optimization
. 🎯 Intuitive file-based routing system
. 🛠️ Seamless integration of server and client components

#Why it Matters 🎯
. 🌐 Modern web applications demand superior performance and developer productivity, making Next.js the go-to solution for scalable React applications

#Main Points 📍
. 🚀 Simplified routing with app directory structure
. 💪 Enhanced performance through automatic code splitting
. 🎨 Built-in optimization for images and fonts
. 🔄 Hybrid rendering capabilities

#Pro Tips 💡
. 🎓 Start with the app directory for new projects
. 💻 Leverage server components for better performance
. 🔍 Use built-in data fetching methods
. 📱 Implement responsive images with next/image

#Key Terms 📚
. 🔄 SSR: Server-Side Rendering for improved performance
. 📦 Static Site Generation: Pre-render pages at build time
. 🎯 API Routes: Backend functionality within Next.js

#Bottom Line ⚡
. 🏆 Next.js is the ultimate framework for building modern, scalable React applications with exceptional developer experience`;
  return (
    <section className="relative">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        {/* Gradient */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl backdrop-blur-xs border border-cyan-200/20 mb-4 animate-pulse">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="text-center mb-16">
            <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6 ">
              Watch how SnapSumm transforms{" "}
              <span className="text-cyan-400">this Next.js course PDF</span>{" "}
              into an easy-to-read summary!!
            </h3>
          </div>
          <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
            {/* Summary Viewer */}
            <SummaryViewer summary={DEMO_SUMMARY} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
