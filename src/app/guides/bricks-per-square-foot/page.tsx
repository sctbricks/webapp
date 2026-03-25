import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How Many Bricks Per Square Foot? (Accurate Answer + Calculator)",
  description:
    "Find how many bricks are required per square foot in India, with practical ranges, fly ash vs red brick comparison, and instant calculator access.",
  alternates: {
    canonical: "/guides/bricks-per-square-foot",
  },
  keywords: [
    "bricks per square foot",
    "how many bricks per sq ft",
    "bricks required per sq ft india",
    "brick estimation per square foot",
    "number of bricks per sq ft wall",
  ],
};

export default function BricksPerSquareFootPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many bricks per square foot in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A common estimate is around 7 to 8 bricks per sq ft for standard brick size and typical mortar.",
        },
      },
      {
        "@type": "Question",
        name: "How many bricks for 100 sq ft wall?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical estimate is around 700 to 800 bricks, depending on wall thickness, brick size, and mortar.",
        },
      },
      {
        "@type": "Question",
        name: "Are fly ash bricks fewer per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Fly ash bricks are usually more uniform and often require fewer bricks per sq ft than red bricks.",
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
          How Many Bricks Per Square Foot? (Accurate Answer + Calculator)
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If you are planning construction, one of the most common questions is how many bricks are needed per square foot. The average is useful, but exact quantity depends on multiple site factors.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Get exact results instantly:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Quick Answer</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Around <strong>7 to 8 bricks per square foot</strong> for standard brick size and normal mortar thickness. This is only a rough estimate, not an exact site calculation.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why the Number Varies</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-8">
          <li>Brick size differences</li>
          <li>Mortar thickness changes</li>
          <li>Wall thickness (single or double wall)</li>
          <li>Brick type (fly ash vs red bricks)</li>
        </ol>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Bricks Required for Common Areas</h2>
        <p className="text-gray-700 leading-relaxed mb-2">100 sq ft wall: around 700 to 800 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-2">200 sq ft wall: around 1400 to 1600 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-6">1000 sq ft construction: around 7000 to 8000 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash vs Red Brick (Per Sq Ft)</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Fly ash bricks: around 6.5 to 7.5 bricks per sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-6">Red bricks: around 7 to 8 bricks per sq ft</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why You Should Not Rely Only on Estimates</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Rough estimates miss real wall and mortar variables</li>
          <li>Small errors can cause major cost differences</li>
          <li>Can lead to shortage or unnecessary wastage</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Best Way to Calculate Bricks Accurately</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Use a brick calculator with actual measurements and selected brick type to get practical quantity and cost planning for your project.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Try it here:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Assuming fixed bricks per sq ft for every project</li>
          <li>Ignoring brick size and mortar differences</li>
          <li>Skipping wastage allowance</li>
          <li>Using old assumptions without recalculation</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">FAQ</h2>
        <div className="space-y-4 mb-10">
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks per square foot in India?</summary>
            <p className="mt-3 text-gray-700">Usually around 7 to 8 bricks per sq ft for standard conditions.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">How many bricks for 100 sq ft wall?</summary>
            <p className="mt-3 text-gray-700">Around 700 to 800 bricks, depending on thickness and brick type.</p>
          </details>
          <details className="rounded-2xl border border-gray-200 p-5">
            <summary className="cursor-pointer font-bold text-brand-secondary">Are fly ash bricks fewer per sq ft?</summary>
            <p className="mt-3 text-gray-700">Yes, often fewer due to uniform size and mortar behavior.</p>
          </details>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-calculator-india-guide" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Main Brick Calculator Guide
          </Link>
          <Link href="/guides/how-many-bricks-for-10x10-wall" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            10x10 Wall Brick Guide
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
