import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import { hasReachedUploadLimit } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await currentUser();
  if (!user?.id) {
    redirect("/sign-in");
  }
  const userId = user.id;
  const { hasReachedLimit } = await hasReachedUploadLimit(userId);

  if (hasReachedLimit) {
    redirect("/dashboard");
  }
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
