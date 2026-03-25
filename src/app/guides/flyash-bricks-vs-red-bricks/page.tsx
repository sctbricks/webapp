import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Flyash Bricks vs Red Bricks Comparison (2026)",
  description:
    "Detailed Flyash Bricks vs Red Bricks comparison with price, strength, water absorption, weight, and cost savings for Erode and Perundurai construction projects.",
  alternates: {
    canonical: "/guides/flyash-bricks-vs-red-bricks",
  },
};

const comparisonRows = [
  { feature: "Compressive Strength", flyash: "75-100 kg/cm²", red: "30-35 kg/cm²" },
  { feature: "Water Absorption", flyash: "6-12%", red: "15-20%" },
  { feature: "Weight", flyash: "2.6-2.8 kg", red: "3.0-3.5 kg" },
  { feature: "Price / 1000", flyash: "Rs.4,500-Rs.5,500", red: "Rs.6,000-Rs.7,500" },
  { feature: "Plastering Cost Impact", flyash: "Rs.8-Rs.12 per sq ft savings", red: "Higher due to uneven surface" },
  { feature: "CO2 Impact", flyash: "Up to 60% lower", red: "Higher kiln emissions" },
  { feature: "Topsoil Usage", flyash: "No topsoil excavation", red: "Uses agricultural topsoil" },
];

export default function FlyashVsRedGuidePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is better in Erode: Flyash bricks or red bricks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Flyash bricks are generally better for cost, strength, and consistency. They typically provide 75-100 kg/cm² compressive strength and reduce plastering cost due to uniform dimensions.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I save with Flyash bricks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For many projects, total savings are around 15-20% compared to red bricks when material, plastering, and labor effects are considered.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/guides" className="inline-flex mb-6 px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700 hover:border-brand-primary hover:text-brand-primary transition-colors">
          Back to Blogs
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-5">
          Flyash Bricks vs Red Bricks: Complete Comparison
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This guide compares Flyash bricks and traditional red bricks with citable numbers used by builders in Erode and Perundurai.
        </p>

        <div className="overflow-hidden rounded-2xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead className="bg-brand-light/40">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-brand-secondary">Feature</th>
                <th className="text-left px-4 py-3 font-bold text-brand-secondary">Flyash Bricks</th>
                <th className="text-left px-4 py-3 font-bold text-brand-secondary">Red Bricks</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-brand-secondary">{row.feature}</td>
                  <td className="px-4 py-3 text-gray-700">{row.flyash}</td>
                  <td className="px-4 py-3 text-gray-700">{row.red}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-brand-secondary mb-3">Quick Cost Example</h2>
          <p className="text-gray-700 leading-relaxed">
            For 1,500 sq ft construction, Flyash bricks can reduce total walling and finishing costs by approximately 15-20% compared to red bricks, mainly from lower material price and plastering savings.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/products/flyash-bricks" className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white">
            View Flyash Bricks
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">
            Get Project Pricing
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
