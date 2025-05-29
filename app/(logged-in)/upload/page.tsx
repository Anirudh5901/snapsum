import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";

const page = () => {
  return (
    <section className="min-h-screen">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12 flex flex-col items-center justify-center gap-y-4">
        <UploadHeader />
        <UploadForm />
      </div>
    </section>
  );
};

export default page;
