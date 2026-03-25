import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brick Price in Tamil Nadu (2026 Guide)",
  description:
    "Check brick price trends in Tamil Nadu, factors affecting rates, and how to estimate final project cost with transport and wastage.",
  alternates: {
    canonical: "/guides/brick-price-in-tamil-nadu",
  },
  keywords: [
    "brick price in tamil nadu",
    "fly ash brick price per piece",
    "brick rate tamil nadu",
    "brick cost tamil nadu",
    "buy bricks tamil nadu",
  ],
};

export default function BrickPriceInTamilNaduPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Brick Price in Tamil Nadu (2026 Guide)</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Brick prices in Tamil Nadu vary by location, brick type, transport distance, and order volume. Checking only per-piece price is not enough for accurate planning.
        </p>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Calculate quantity and estimated budget instantly:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Typical Price Factors</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Brick type: fly ash, red, solid, interlock</li>
          <li>Order quantity and bulk discounts</li>
          <li>Delivery distance and unloading charges</li>
          <li>Seasonal demand and local supply conditions</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">How to Estimate Final Brick Cost</h2>
        <p className="text-gray-700 leading-relaxed mb-2">Final Cost = Brick Quantity x Unit Rate + Transport + Wastage + Site Handling</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          For accurate budgeting, always calculate quantity first and then apply current local rates.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-cost-estimation-india" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Cost Estimation Guide</Link>
          <Link href="/guides/fly-ash-brick-calculator" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Fly Ash Calculator Guide</Link>
          <Link href="/guides/brick-suppliers-in-erode" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Brick Suppliers in Erode</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
