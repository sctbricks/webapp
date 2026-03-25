import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How Many Bricks Are Required for House Construction? (Complete Guide)",
  description:
    "Estimate bricks required for house construction with practical ranges for 1000, 1500, and 2000 sq ft houses, plus formula, cost, and planning tips.",
  alternates: {
    canonical: "/guides/bricks-required-for-house-construction",
  },
  keywords: [
    "bricks required for house construction",
    "bricks for 1000 sq ft house",
    "how many bricks for house",
    "brick estimation for house",
    "construction brick calculation house",
  ],
};

export default function BricksRequiredForHouseConstructionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bricks for a 1000 sq ft house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common estimate is around 7000 to 8000 bricks, depending on wall thickness, plan, and brick type.",
        },
      },
      {
        "@type": "Question",
        name: "How many bricks for 1500 sq ft house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A practical estimate is around 10,000 to 12,000 bricks with normal assumptions.",
        },
      },
      {
        "@type": "Question",
        name: "Are fly ash bricks better for house construction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fly ash bricks are often preferred for uniform size, lower mortar usage, and better finish in modern construction.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">
          How Many Bricks Are Required for House Construction? (Complete Guide)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Brick estimation is one of the first and most important steps in house planning. Wrong estimation can lead to budget overruns, delays, and material wastage.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Get exact brick estimation for your house:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Average Bricks Required for House Construction</h2>
        <p className="text-gray-700 leading-relaxed mb-2">1000 sq ft house: around 7000 to 8000 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-2">1500 sq ft house: around 10,000 to 12,000 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-6">2000 sq ft house: around 14,000 to 16,000 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">What Affects Brick Requirement?</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-8">
          <li>Wall thickness (single wall vs double wall)</li>
          <li>Brick size and dimensions</li>
          <li>Floor plan complexity and room count</li>
          <li>Construction type (residential, duplex, commercial)</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Brick Calculation Formula for House</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Number of Bricks = Total Wall Volume / Brick Volume</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Practical site estimation must also include mortar thickness and 5-10% wastage.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3">Example Calculation (1000 sq ft House)</h3>
        <p className="text-gray-700 leading-relaxed mb-2">Built-up area: 1000 sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-2">Base estimate: around 7500 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-6">With wastage: around 8000 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash Bricks vs Red Bricks for House</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fly ash bricks are generally more uniform and need less mortar, often reducing total brick count and finishing effort. Red bricks may require more mortar in many cases.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Total Cost of Bricks for House</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Example: 8000 bricks x Rs.6 = Rs.48,000</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Final cost also includes transport, labour, cement, and sand.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Best Way to Calculate Bricks for House</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Manual estimation can be risky. A calculator gives more accurate quantity, better budgeting, and smoother material planning.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Calculate your exact requirement now:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Using average values blindly</li>
          <li>Ignoring wastage percentage</li>
          <li>Not factoring wall thickness</li>
          <li>Wrong measurements and assumptions</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">FAQ</h2>
        <div className="space-y-4 mb-10">
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks for a 1000 sq ft house?</summary>
            <p className="mt-3 text-gray-700">Usually around 7000 to 8000 bricks, depending on plan and material assumptions.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks for 1500 sq ft house?</summary>
            <p className="mt-3 text-gray-700">A common estimate is around 10,000 to 12,000 bricks.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">Are fly ash bricks better for house construction?</summary>
            <p className="mt-3 text-gray-700">In many projects, yes, due to better uniformity, finish, and efficient mortar usage.</p>
          </details>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-calculator-india-guide" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Main Brick Calculator Guide
          </Link>
          <Link href="/guides/bricks-per-square-foot" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Bricks Per Sq Ft Guide
          </Link>
          <Link href="/guides/brick-cost-estimation-india" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Cost Estimation Guide
          </Link>
          <Link href="/guides/fly-ash-brick-calculator" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Fly Ash Calculator Guide
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
