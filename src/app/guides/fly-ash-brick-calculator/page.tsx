import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Fly Ash Brick Calculator: Accurate Estimation for Modern Construction",
  description:
    "Use this fly ash brick calculator guide to estimate brick quantity, bricks per sq ft, and total cost more accurately for modern construction projects.",
  alternates: {
    canonical: "/guides/fly-ash-brick-calculator",
  },
  keywords: [
    "fly ash brick calculator",
    "fly ash bricks quantity calculation",
    "bricks per sq ft fly ash",
    "fly ash brick estimation",
    "eco friendly brick calculation",
  ],
};

export default function FlyAshBrickCalculatorPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">
          Fly Ash Brick Calculator: Accurate Estimation for Modern Construction
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Fly ash bricks are preferred in modern construction for strength, uniform size, and eco-friendly performance. Accurate quantity calculation is essential to reduce wastage and improve project efficiency.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Calculate your requirement instantly:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">What Are Fly Ash Bricks?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Fly ash bricks are produced using industrial byproducts such as coal ash, making them more sustainable than traditional red bricks.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>High compressive strength</li>
          <li>Uniform shape and size</li>
          <li>Less mortar required</li>
          <li>Eco-friendly construction</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Why Fly Ash Brick Calculation is Different</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Fly ash bricks have consistent dimensions and thinner mortar joints, so quantity per sq ft is usually lower than red bricks. This difference directly affects material planning and cost.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Standard Fly Ash Brick Requirement</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Fly ash bricks: around 6.5 to 7.5 bricks per sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-6">Red bricks: around 7 to 8 bricks per sq ft</p>

        <h3 className="text-xl md:text-2xl font-bold text-brand-secondary mb-3">Example Calculation</h3>
        <p className="text-gray-700 leading-relaxed mb-2">Wall area: 100 sq ft</p>
        <p className="text-gray-700 leading-relaxed mb-2">Fly ash requirement: approximately 650-750 bricks</p>
        <p className="text-gray-700 leading-relaxed mb-6">Red brick estimate: approximately 700-800 bricks</p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Fly Ash Brick Calculation Formula</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Number of Bricks = Wall Volume / Brick Volume</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Because fly ash bricks are uniform, this formula gives more reliable field estimates with fewer adjustments.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Cost Advantage of Fly Ash Bricks</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Even when unit price is slightly higher, fly ash bricks can reduce total project cost through lower mortar usage, lower labour effort, and better finishing quality.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Common Mistakes to Avoid</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Using red brick assumptions for fly ash projects</li>
          <li>Ignoring size uniformity advantage</li>
          <li>Not adjusting mortar thickness</li>
          <li>Estimating without tools</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Fly ash bricks are a smart, eco-friendly, and cost-effective choice for modern construction. For best results, always calculate quantity accurately before ordering.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-10">
          <p className="font-semibold text-brand-secondary mb-3">Start your calculation now:</p>
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
