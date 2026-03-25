import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brick Cost Calculator: Estimate Your Construction Budget Accurately",
  description:
    "Use this brick cost calculator guide to estimate construction budget with quantity, price per brick, transport, labour, and wastage factors.",
  alternates: {
    canonical: "/guides/brick-cost-estimation-india",
  },
  keywords: [
    "brick cost calculator",
    "brick price calculation",
    "cost of bricks for construction",
    "bricks cost per square foot",
    "construction cost estimation bricks",
  ],
};

export default function BrickCostEstimationIndiaPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">
          Brick Cost Calculator: Estimate Your Construction Budget Accurately
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Before starting any construction project, one of the biggest concerns is cost. Bricks form a major part of your total expense, and even a small miscalculation can increase your budget significantly.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Estimate your brick cost now:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why Brick Cost Estimation is Important</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Many people focus only on quantity and ignore total project cost. Accurate estimation helps avoid budget overruns, shortages, and construction delays while enabling better material decisions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Basic Brick Cost Formula</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Total Brick Cost = Number of Bricks x Price per Brick</p>
        <p className="text-gray-700 leading-relaxed mb-2">Bricks required = 1000</p>
        <p className="text-gray-700 leading-relaxed mb-2">Price per brick = Rs.6</p>
        <p className="text-gray-700 leading-relaxed mb-6">Total cost = Rs.6000</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Real Cost Includes More Than Bricks</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Transportation charges</li>
          <li>Labour cost</li>
          <li>Cement and sand for mortar</li>
          <li>Wastage buffer (5-10%)</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Example: Brick Cost for 100 sq ft Wall</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Bricks required: around 750</p>
        <p className="text-gray-700 leading-relaxed mb-2">Price per brick: Rs.6</p>
        <p className="text-gray-700 leading-relaxed mb-2">Brick cost: Rs.4500</p>
        <p className="text-gray-700 leading-relaxed mb-2">Add transport: Rs.500-Rs.1000</p>
        <p className="text-gray-700 leading-relaxed mb-6">Final cost estimate: around Rs.6000-Rs.8000 (varies by site)</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash Bricks vs Red Bricks Cost</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fly ash bricks can offer better finish and lower mortar consumption, often reducing long-term cost. Red bricks may seem lower in initial price but can increase mortar and wastage in practice.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">How to Reduce Brick Cost</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Use accurate estimation</li>
          <li>Choose the right brick type</li>
          <li>Buy in bulk</li>
          <li>Reduce wastage</li>
          <li>Compare suppliers</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why Use a Brick Cost Calculator?</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Manual calculation is usually incomplete. A brick cost calculator combines quantity and pricing quickly for better decisions and faster planning.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-10">
          <p className="font-semibold text-brand-secondary mb-3">Try it here:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Calculating only brick price</li>
          <li>Ignoring transport and labour</li>
          <li>Not adding wastage</li>
          <li>Using rough estimates</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          A brick cost calculator is essential for accurate construction budgeting. Estimate before you build to avoid hidden expenses and keep execution smooth.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-10">
          <p className="font-semibold text-brand-secondary mb-3">Get your exact estimate now:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-calculator-india-guide" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            Main Brick Calculator Guide
          </Link>
          <Link href="/guides/how-many-bricks-for-10x10-wall" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">
            10x10 Wall Brick Guide
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
