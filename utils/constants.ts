import { isDev } from "./helpers";

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
      "No Markdown Export",
    ],
    description: "Best for occasional use",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_3cIeVf3tdgem3YkaVa0gw00"
      : "",
    priceId: isDev ? "price_1RVRqgP9xmuBmJ1OvV59PrUR" : "",
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 Priority support",
      "Markdown Export",
    ],
    description: "Best for professionals and teams",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_3cIbJ3d3N1js0M87IY0gw01"
      : "",
    priceId: isDev ? "price_1RVRpmP9xmuBmJ1O6v0f9reQ" : "",
  },
];
