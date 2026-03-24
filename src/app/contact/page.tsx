import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SCT Bricks for Fly Ash Bricks, Interlock Bricks, Solid Bricks, Hollow Blocks, M-Sand, P-Sand, Jalli, Chips, and Cement in Erode.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://sctbricks.com/contact" },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Contact SCT Bricks</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Reach our sales team for pricing, bulk orders, and delivery schedules.
        </p>

        <div className="space-y-6 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-secondary mb-2">Phone</h2>
            <a href="tel:+916380213603" className="block text-lg text-gray-700 hover:text-brand-primary">+91 6380 213 603</a>
            <a href="tel:+918428560078" className="block text-lg text-gray-700 hover:text-brand-primary">+91 84285 60078</a>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-secondary mb-2">Address</h2>
            <p className="text-gray-700">Shrii Chinnamman Trader, Perundurai Rd, opp. to Nandha Medical College, Erode, Tamil Nadu 638052</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/sct-bricks-contact.vcf"
            download
            title="Save SCT Bricks contact card with both phone numbers"
            className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white"
          >
            Save Contact Card
          </a>
          <Link href="/services" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">View Services</Link>
        </div>
      </section>
    </main>
  );
}
