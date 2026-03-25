import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How Many Bricks Do I Need for a 10x10 Wall? (Accurate Calculation Guide)",
  description:
    "Find how many bricks are required for a 10x10 wall with formula, cost estimation, fly ash vs red brick comparison, and common mistakes to avoid.",
  alternates: {
    canonical: "/guides/how-many-bricks-for-10x10-wall",
  },
  keywords: [
    "bricks required for 10x10 wall",
    "how many bricks for 100 sq ft",
    "brick calculation for wall",
    "bricks per square foot",
    "brick estimate for small house",
  ],
};

export default function HowManyBricksFor10x10WallPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bricks are needed for a 10x10 wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For a 10x10 wall (100 sq ft), the rough requirement is around 700 to 800 bricks depending on thickness, mortar, and brick type.",
        },
      },
      {
        "@type": "Question",
        name: "How many bricks for 100 sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common estimate is 700 to 800 bricks, but exact count changes with wall thickness, brick dimensions, and wastage.",
        },
      },
      {
        "@type": "Question",
        name: "What is the brick calculation formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common formula is Number of Bricks = Wall Volume / Brick Volume, with mortar and wastage added for real site estimation.",
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
          How Many Bricks Do I Need for a 10x10 Wall? (Accurate Calculation Guide)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          One of the most common construction questions is how many bricks are needed for a wall. If you are planning a 10x10 wall, accurate quantity estimation is important to avoid shortage and extra spending.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Calculate your requirement here:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Standard Brick Requirement for 10x10 Wall</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Wall size: 10 ft x 10 ft</p>
        <p className="text-gray-700 leading-relaxed mb-2">Total area: 100 sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-6">Approximate bricks required: 700 to 800 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why This Estimate Can Be Wrong</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Exact brick quantity depends on brick size, wall thickness, mortar thickness, and brick type (fly ash or red brick). Even small changes can significantly affect final count and cost.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Accurate Brick Calculation Formula</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Number of Bricks = Wall Volume / Brick Volume</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          In real construction, mortar and 5-10% wastage must be added. That is why manual estimation alone can be risky for site planning.
        </p>

        <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3">Example Calculation (Detailed)</h3>
        <p className="text-gray-700 leading-relaxed mb-2">For a 100 sq ft wall with standard size and normal mortar:</p>
        <p className="text-gray-700 leading-relaxed mb-2">Base bricks: around 750</p>
        <p className="text-gray-700 leading-relaxed mb-6">Add wastage (5%): around 790. Final requirement: approximately 750-800 bricks.</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash Brick vs Red Brick Count</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fly ash bricks are typically more uniform and require less mortar, while red bricks may vary in shape and need slightly more mortar. This affects both quantity and total budget.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Brick Cost for 10x10 Wall</h2>
        <p className="text-gray-700 leading-relaxed mb-2">If brick price is Rs.6, then 800 bricks cost around Rs.4800.</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Actual project cost should include labour, transport, cement, and sand for full planning.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Best way to calculate without guesswork:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Assuming fixed bricks per sq ft for every wall</li>
          <li>Ignoring wastage percentage</li>
          <li>Not considering brick type differences</li>
          <li>Using wrong wall measurements</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          For a 10x10 wall, a rough requirement is 700 to 800 bricks. Exact results depend on site variables, so use a calculator before ordering materials.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-10">
          <p className="font-semibold text-brand-secondary mb-3">Start calculating now:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          <Link href="/guides/brick-calculator-india-guide" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Main Brick Calculator Guide
          </Link>
          <Link href="/guides/brick-cost-estimation-india" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Cost Estimation Guide
          </Link>
          <Link href="/guides/flyash-bricks-vs-red-bricks" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Fly Ash vs Red Brick Guide
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">FAQs</h2>
        <div className="space-y-4">
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks for 100 sq ft?</summary>
            <p className="mt-3 text-gray-700">Usually around 700 to 800 bricks depending on brick size, thickness, mortar, and wastage.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">What is brick calculation formula?</summary>
            <p className="mt-3 text-gray-700">A practical formula is wall volume divided by brick volume with mortar and wastage adjustment.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How to calculate bricks in feet?</summary>
            <p className="mt-3 text-gray-700">Measure wall length and height in feet, choose thickness, and use a calculator for accurate quantity.</p>
          </details>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
