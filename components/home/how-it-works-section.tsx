import { BrainCircuit, FileOutput, FileText, MoveRight } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI processes and analyses your document instantly",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get your Summary",
    description: "Receive a clean concise summary of your document",
  },
];
const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-950 to-slate-900">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* gradient */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-4 text-cyan-400">
            How it works
          </h2>
          <h3 className="font-bold text-3xl max-w-2xl mx-auto">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div className="relative flex items-stretch" key={index}>
              <StepItem {...step} />
              {index < steps.length - 1 && (
                <div className="hidden md:block top-1/2 -right-4 transform -translate-y-1/2 z-10 absolute">
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                    className="text-cyan-400"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function StepItem({ icon, label, description }: Step) {
  return (
    <div className="relative p-6 rounded-2xl border border-cyan-800 hover:border-cyan-300 transition-colors group w-full">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center h-24 w-24 mx-auto rounded-2xl bg-linear-to-br from bg-cyan-400/10 to-transparent group-hover: from-cyan-400/20 transition-colors duration-200">
          {icon}
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <h4 className="text-center font-bold text-xl text-cyan-400">
            {label}
          </h4>
          <p className="text-center text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
