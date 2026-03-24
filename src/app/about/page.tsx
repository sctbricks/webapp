import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SCT Bricks, a trusted bricks manufacturer and supplier in Erode offering high-strength, eco-friendly construction materials.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://sctbricks.com/about" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">About SCT Bricks</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          SCT Bricks is a leading manufacturer and supplier of premium building materials in Erode, Tamil Nadu. We focus on high-strength and eco-friendly materials for residential, commercial, and infrastructure projects.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Our products include Fly Ash Bricks, Interlock Bricks, Solid Bricks, Hollow Blocks, M-Sand, P-Sand, Jalli, Chips, and Cement. Builders choose us for quality consistency, reliable supply, and practical on-site support.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/services" className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white">View Services</Link>
          <Link href="/contact" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">Contact Us</Link>
          <Link href="/" className="px-6 py-3 rounded-full font-semibold border border-gray-300 text-gray-700">Back to Home</Link>
        </div>
      </section>
    </main>
  );
}
