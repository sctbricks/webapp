import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cost Per Sq Ft Construction: Practical Estimation Guide",
  description:
    "Learn how to estimate cost per sq ft construction with brick quantity, material rates, labour, transport, and wastage for realistic project planning.",
  alternates: {
    canonical: "/guides/cost-per-sq-ft-construction",
  },
  keywords: [
    "cost per sq ft construction",
    "construction cost per square foot",
    "brick cost per sq ft",
    "house construction cost estimator",
    "construction material estimation india",
  ],
};

export default function CostPerSqFtConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Cost Per Sq Ft Construction: Practical Estimation Guide</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Cost per sq ft is useful for quick budgeting, but accurate project planning needs a proper material breakdown. Brick quantity and wall design are major cost drivers.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">What to Include in Cost Per Sq Ft</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Brick quantity and unit rates</li>
          <li>Cement and sand for mortar</li>
          <li>Labour and contractor charges</li>
          <li>Transport and unloading</li>
          <li>Wastage and contingency margin</li>
        </ul>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Start with accurate brick quantity first:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-cost-estimation-india" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Brick Cost Estimation Guide</Link>
          <Link href="/guides/bricks-required-for-house-construction" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">House Brick Estimation Guide</Link>
          <Link href="/guides/brick-price-in-tamil-nadu" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Brick Price in Tamil Nadu</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
