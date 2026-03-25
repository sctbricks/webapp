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
    canonical: "/brick-calculator-india",
  },
  openGraph: {
    title: "Brick Calculator (India) - Calculate Bricks for Your House + Cost",
    description:
      "Estimate bricks required for wall construction in feet, check approximate cost, and get a downloadable report for your project.",
    url: "/brick-calculator-india",
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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Brick Calculator", item: "https://sctbricks.com/brick-calculator-india" },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Brick Calculator (India)",
    url: "https://sctbricks.com/brick-calculator-india",
    description:
      "Calculate number of bricks required, wall quantity in feet, and approximate brick cost for Indian construction projects.",
    inLanguage: "en-IN",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to calculate bricks required for wall construction",
    description: "Step-by-step process to estimate bricks and wall cost in feet.",
    step: [
      {
        "@type": "HowToStep",
        name: "Enter wall dimensions",
        text: "Provide wall length and height in feet.",
      },
      {
        "@type": "HowToStep",
        name: "Choose thickness and brick type",
        text: "Select 4, 6, or 9 inch wall thickness and pick Fly Ash, Interlock, or Solid Bricks.",
      },
      {
        "@type": "HowToStep",
        name: "Review quantity and cost range",
        text: "Get approximate total bricks and cost for planning your construction budget.",
      },
      {
        "@type": "HowToStep",
        name: "Download report",
        text: "Submit your phone number and download the detailed estimate PDF.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bricks are needed for a 100 sq ft wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on wall thickness and brick type. Use the SCT Brick Calculator to get an exact estimate with wastage factor.",
        },
      },
      {
        "@type": "Question",
        name: "How many bricks are required for a 10x10 room?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The total depends on wall height, openings, and thickness. Enter your room wall dimensions in feet to get instant quantity.",
        },
      },
      {
        "@type": "Question",
        name: "Can I calculate fly ash and interlock bricks separately?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The calculator provides separate quantity and estimated cost ranges for Fly Ash, Interlock, and Solid Bricks.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <EstimateCalculatorPage />
    </>
  );
}
