import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SCT Bricks services including manufacturing, bulk supply, and delivery of premium bricks and construction materials in Erode.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://sctbricks.com/services" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          We provide complete construction material support for builders, contractors, and property owners in and around Erode.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Brick Manufacturing</h2>
            <p className="text-gray-600">Fly Ash Bricks, Interlock Bricks, Solid Bricks, and Hollow Blocks manufactured with quality-controlled processes.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Bulk Material Supply</h2>
            <p className="text-gray-600">M-Sand, P-Sand, Jalli, Chips, and Cement supplied in bulk for ongoing and large-scale construction projects.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">On-Time Delivery</h2>
            <p className="text-gray-600">Reliable dispatch and transport support to help keep your project timelines on track.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Project Support</h2>
            <p className="text-gray-600">Material recommendations and quantity guidance based on project scope and application needs.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white">Get a Quote</Link>
          <Link href="/#products" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">Browse Products</Link>
        </div>
      </section>
    </main>
  );
}
