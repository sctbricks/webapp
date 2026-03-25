import type { Metadata } from "next";
import EstimateCalculatorPage from "@/components/EstimateCalculatorPage";

const PRIMARY_KEYWORDS = [
  "brick calculator",
  "brick calculation tool",
  "bricks required calculator",
  "brick quantity calculator",
  "number of bricks required",
  "wall brick calculator",
];

const LONG_TAIL_KEYWORDS = [
  "how many bricks needed for 100 sq ft wall",
  "bricks required for 10x10 room",
  "brick calculation for house construction",
  "how to calculate bricks for wall in feet",
  "brick estimation calculator india",
  "bricks required per square foot",
];

const NICHE_KEYWORDS = [
  "fly ash brick calculator",
  "interlock brick calculator",
  "eco brick quantity calculator",
  "brick cost calculator india",
  "construction material calculator bricks",
  "bricks estimation with cement and sand",
];

const BUYER_INTENT_KEYWORDS = [
  "buy fly ash bricks near me",
  "brick suppliers in erode",
  "brick price per piece tamil nadu",
  "best bricks for house construction",
  "brick cost calculator with price",
];

export const metadata: Metadata = {
  title: "Brick Calculator (India) - Calculate Bricks for Your House + Cost | SCT Bricks",
  description:
    "Use SCT Bricks Brick Calculator to estimate wall bricks, fly ash bricks, interlock bricks, and project cost in India. Get quantity instantly and download a detailed estimate report.",
  keywords: [
    ...PRIMARY_KEYWORDS,
    ...LONG_TAIL_KEYWORDS,
    ...NICHE_KEYWORDS,
    ...BUYER_INTENT_KEYWORDS,
  ],
  alternates: {
    canonical: "/estimate-calculator",
  },
  openGraph: {
    title: "Brick Calculator (India) - Calculate Bricks for Your House + Cost",
    description:
      "Estimate bricks required for wall construction in feet, check approximate cost, and get a downloadable report for your project.",
    url: "/estimate-calculator",
    type: "website",
    siteName: "SCT Bricks",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "SCT Bricks Brick Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brick Calculator (India) - Calculate Bricks for Your House + Cost",
    description:
      "Calculate brick quantity, wall estimation, and approximate pricing with SCT Bricks.",
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  return <EstimateCalculatorPage />;
}
