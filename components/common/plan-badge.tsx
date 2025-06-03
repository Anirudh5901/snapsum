import { getPriceIdForActiveUser } from "@/lib/user";
import { pricingPlans } from "@/utils/constants";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";

const PlanBadge = async () => {
  const user = await currentUser();
  if (!user?.id) return null;

  const email = user?.emailAddresses?.[0]?.emailAddress;

  let priceId: string | null = null;
  if (email) {
    priceId = await getPriceIdForActiveUser(email);
  }

  let planName = "Buy a plan";
  const plan = pricingPlans.find((plan) => plan.priceId === priceId);

  if (plan) {
    planName = plan.name;
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "text-white ml-2 bg-linear-to-r from-amber-100 to-amber-200 border-amber-300 hidden lg:flex flex-row items-center",
        !priceId && "from-cyan-100 to-cyan-200 border-cyan-300 text-black"
      )}
    >
      <Crown
        className={cn(
          "w-3 h-3 mr-1 text-amber-600",
          !priceId && "text-red-600"
        )}
      />
      {planName}
    </Badge>
  );
};

export default PlanBadge;
