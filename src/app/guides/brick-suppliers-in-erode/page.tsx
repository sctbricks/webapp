import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Brick Suppliers in Erode: How to Choose the Right One",
  description:
    "Find the best brick suppliers in Erode with a practical checklist for pricing, quality, delivery, and bulk construction orders.",
  alternates: {
    canonical: "/guides/brick-suppliers-in-erode",
  },
  keywords: [
    "brick suppliers in erode",
    "best brick supplier tamil nadu",
    "fly ash bricks near me",
    "brick manufacturers in erode",
    "buy fly ash bricks near me",
  ],
};

export default function BrickSuppliersInErodePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Brick Suppliers in Erode: How to Choose the Right One</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Choosing the right supplier impacts construction quality, schedule, and budget. In Erode, compare suppliers by quality consistency, delivery reliability, and total landed cost.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-3">Supplier Selection Checklist</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
          <li>Uniform brick size and compressive strength</li>
          <li>Stable pricing for repeat/bulk orders</li>
          <li>Clear delivery timelines and transport support</li>
          <li>Product range: fly ash, interlock, solid bricks</li>
          <li>Fast response and site support</li>
        </ul>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 mb-8">
          <p className="font-semibold text-brand-secondary mb-3">Get quantity estimate before contacting suppliers:</p>
          <Link href="/brick-calculator-india" className="inline-flex px-6 py-3 rounded-full bg-brand-primary text-white font-semibold">
            Get Exact Brick Count
          </Link>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guides/brick-price-in-tamil-nadu" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Brick Price in Tamil Nadu</Link>
          <Link href="/guides/cost-per-sq-ft-construction" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Cost Per Sq Ft Construction</Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold">Contact SCT Bricks</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
