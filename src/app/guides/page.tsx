import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Construction Blogs & Guides",
  description:
    "Read SCT Bricks guides on brick calculation, brick cost estimation, fly ash vs red bricks, and practical construction planning tips.",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "Brick Calculator: How to Calculate Bricks Required for Construction (India Guide)",
    href: "/guides/brick-calculator-india-guide",
  },
  {
    title: "How Many Bricks Do I Need for a 10x10 Wall? (Accurate Calculation Guide)",
    href: "/guides/how-many-bricks-for-10x10-wall",
  },
  {
    title: "Brick Cost Calculator: Estimate Your Construction Budget Accurately",
    href: "/guides/brick-cost-estimation-india",
  },
  {
    title: "Fly Ash Brick Calculator: Accurate Estimation for Modern Construction",
    href: "/guides/fly-ash-brick-calculator",
  },
  {
    title: "How Many Bricks Per Square Foot? (Accurate Answer + Calculator)",
    href: "/guides/bricks-per-square-foot",
  },
  {
    title: "How Many Bricks Are Required for House Construction? (Complete Guide)",
    href: "/guides/bricks-required-for-house-construction",
  },
  {
    title: "Brick Price in Tamil Nadu (2026 Guide)",
    href: "/guides/brick-price-in-tamil-nadu",
  },
  {
    title: "Brick Suppliers in Erode: How to Choose the Right One",
    href: "/guides/brick-suppliers-in-erode",
  },
  {
    title: "Cost Per Sq Ft Construction: Practical Estimation Guide",
    href: "/guides/cost-per-sq-ft-construction",
  },
  {
    title: "Flyash Bricks vs Red Bricks Comparison (2026)",
    href: "/guides/flyash-bricks-vs-red-bricks",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <section className="max-w-6xl mx-auto px-6 py-14 md:py-16">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-4">Blogs & Guides</h1>
        <p className="text-lg text-gray-700 mb-10">
          Practical brick calculation and construction cost guides for builders and homeowners.
        </p>

        <div className="grid gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 text-brand-secondary font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors"
            >
              {guide.title}
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
