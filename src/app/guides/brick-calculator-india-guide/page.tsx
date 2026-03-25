import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brick Calculator: How to Calculate Bricks Required for Construction (India Guide)",
  description:
    "Learn how to calculate bricks required for house construction in India with formula, examples, cost estimation, and mistakes to avoid. Use SCT Brick Calculator for instant results.",
  alternates: {
    canonical: "/guides/brick-calculator-india-guide",
  },
  keywords: [
    "brick calculator",
    "bricks required calculator",
    "brick quantity calculator",
    "wall brick calculator",
    "brick cost calculator",
    "fly ash brick calculator",
    "how many bricks per square foot",
    "bricks required for 10x10 wall",
    "brick calculation formula",
    "construction brick estimation india",
    "bricks required for house construction",
  ],
};

export default function BrickCalculatorIndiaGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://sctbricks.com/guides/flyash-bricks-vs-red-bricks" },
      { "@type": "ListItem", position: 3, name: "Brick Calculator India Guide", item: "https://sctbricks.com/guides/brick-calculator-india-guide" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Brick Calculator: How to Calculate Bricks Required for Construction (India Guide)",
    description:
      "Complete India guide to calculate brick quantity with formula, examples, and cost estimation.",
    author: {
      "@type": "Organization",
      name: "SCT Bricks",
    },
    publisher: {
      "@type": "Organization",
      name: "SCT Bricks",
    },
    mainEntityOfPage: "https://sctbricks.com/guides/brick-calculator-india-guide",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bricks for 100 sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a typical wall, 100 sq ft may need around 700 to 800 bricks, but actual count depends on wall thickness, brick size, and mortar.",
        },
      },
      {
        "@type": "Question",
        name: "What is brick calculation formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common formula is Number of Bricks = Wall Volume / Brick Volume, then add wastage percentage.",
        },
      },
      {
        "@type": "Question",
        name: "How to calculate bricks in feet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Measure wall length and height in feet, apply thickness, choose brick type, and include mortar and wastage. Online calculators provide faster and more practical estimates.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">
          Brick Calculator: How to Calculate Bricks Required for Construction (India Guide)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Planning construction without knowing the exact number of bricks required can lead to material shortage or unnecessary cost. A brick calculator helps you estimate brick quantity quickly for house, compound wall, and commercial construction projects.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Calculate instantly here:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why Brick Calculation is Important</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Incorrect estimation is a common construction mistake. Overestimation increases cost and wastage. Underestimation causes delays and repeated transport charges. A proper bricks required calculator helps with budget planning and smooth execution.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Brick Calculation Formula</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Number of Bricks = Wall Volume / Brick Volume</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          In real projects, you must consider mortar thickness, brick size variation, and 5-10% wastage. That is why manual methods can be less accurate than a brick quantity calculator.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Need exact results with your wall size?</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">How Many Bricks Per Square Foot</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          A general rule is 7 to 8 bricks per sq ft for standard sizes, but this changes with wall thickness and construction type. Instead of guessing, use the wall brick calculator to avoid quantity mismatch.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3">Example Calculation</h3>
        <p className="text-gray-700 leading-relaxed mb-2">Wall size: 10 ft x 10 ft</p>
        <p className="text-gray-700 leading-relaxed mb-2">Area: 100 sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-6">Approximate bricks required: 700 to 800 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash Brick vs Red Brick Calculation</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fly ash bricks are more uniform and usually need less mortar. Red bricks may vary in size and increase mortar usage. This directly changes final brick count and total cost estimation.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Compare fly ash and interlock quantities instantly:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Brick Cost Estimation</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Total Cost = Number of Bricks x Price per Brick</p>
        <p className="text-gray-700 leading-relaxed mb-2">Example: 1000 bricks x Rs.6 = Rs.6000</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Actual project cost also includes transport, labour, and wastage. Use a brick cost calculator for practical construction estimation.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Ignoring mortar thickness</li>
          <li>Using rough estimates</li>
          <li>Not including wastage</li>
          <li>Assuming wrong brick size</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Best Way to Calculate Bricks</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Manual methods are slower and error-prone. Online calculation is faster and more reliable for house planning and ordering. Use the SCT tool and then download your estimate PDF with contact details for quick follow-up pricing.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-10">
          <p className="font-semibold text-brand-secondary mb-3">Start your calculation now:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">FAQs</h2>
        <div className="space-y-4">
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks for 100 sq ft?</summary>
            <p className="mt-3 text-gray-700">Usually around 700 to 800 bricks, but exact count depends on thickness, mortar, and brick type.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">What is brick calculation formula?</summary>
            <p className="mt-3 text-gray-700">Number of Bricks = Wall Volume / Brick Volume, plus wastage adjustment.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How to calculate bricks in feet?</summary>
            <p className="mt-3 text-gray-700">Use wall length and height in feet, select thickness and brick type, and include wastage for realistic planning.</p>
          </details>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mt-12 mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/how-many-bricks-for-10x10-wall" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            10x10 Wall Brick Guide
          </Link>
          <Link href="/guides/brick-cost-estimation-india" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Cost Estimation Guide
          </Link>
          <Link href="/guides/flyash-bricks-vs-red-bricks" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Fly Ash vs Red Brick Guide
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
