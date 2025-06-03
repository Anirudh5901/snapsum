import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ArrowRight, CheckIcon, CrossIcon, X } from "lucide-react";
import { pricingPlans } from "@/utils/constants";

type PriceType = {
  name: string;
  price: number;
  description: string;
  items: string[];
  id: string;
  paymentLink: string;
  priceId: string;
};

const PricingCard = ({
  name,
  price,
  description,
  items,
  id,
  paymentLink,
}: PriceType) => {
  return (
    <CardContainer className="relative w-full max-w-lg">
      <CardBody
        className={`bg-black relative group/card   w-auto sm:w-[30rem] h-auto rounded-xl p-6  hover:shadow-lg hover:shadow-cyan-800  transition-all duration-200 ${
          id === "pro" ? "border-2 border-cyan-600" : ""
        }`}
      >
        <div className="flex justify-between items-center gap-4">
          <div>
            <CardItem
              translateZ="30"
              className="text-lg lg:text-xl font-bold text-cyan-400 capitalize"
            >
              {name}
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-base mt-2 font-bold text-white"
            >
              {description}
            </CardItem>
          </div>
        </div>

        <div className="flex gap-2">
          <CardItem
            translateZ={30}
            className="text-5xl tracking-tight font-extrabold text-cyan-400"
          >
            ${price}
          </CardItem>
          <div className="flex flex-col justify-end mb-[4px]">
            <p className="text-xs uppercase font-semibold">USD</p>
            <p className="text-xs">/month</p>
          </div>
        </div>

        <CardItem
          translateZ="30"
          className="w-full mt-4 space-y-2.5 leading-relaxed text-base flex-1"
        >
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              {item === "No Markdown Export" ? (
                <X size={18} />
              ) : (
                <CheckIcon size={18} />
              )}

              <span>{item}</span>
            </li>
          ))}
        </CardItem>
        <CardItem className="space-y-2 flex justify-center w-full mt-6 p-3">
          <Link
            href={paymentLink}
            className="w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-cyan-900 to-cyan-600"
          >
            Buy Now <ArrowRight size={18} />
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const PricingSection = () => {
  return (
    <section
      className="bg-linear-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      id="pricing"
    >
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div className="flex items-center justify-center w-full pb-12">
          <h2 className="uppercase font-bold text-xl mb-8 text-cyan-400">
            Pricing
          </h2>
        </div>
        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
