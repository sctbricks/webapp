import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact SCT Bricks Erode",
  description:
    "Contact SCT Bricks in Erode for pricing and bulk orders of Flyash Bricks, Interlock Bricks, M-Sand, P-Sand, cement, jalli and aggregates.",
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
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Contact SCT Bricks</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Reach our sales team for pricing, bulk orders, and delivery schedules.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-secondary mb-2">Phone</h2>
              <a href="tel:+916380213603" className="block text-lg text-gray-700 hover:text-brand-primary">+91 6380 213 603</a>
              <a href="tel:+918428560078" className="block text-lg text-gray-700 hover:text-brand-primary">+91 84285 60078</a>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-secondary mb-2">Address</h2>
              <p className="text-gray-700">Shrii Chinnamman Trader, Perundurai Rd, opp. to Nandha Medical College, Erode, Tamil Nadu 638052</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-secondary mb-2">Location</h2>
              <p className="text-gray-700 mb-3">Near Nandha Medical College, Perundurai Road, Erode.</p>
              <a
                href="https://maps.app.goo.gl/ST9gPvyWGAcztkjq9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="h-[340px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.42312674258!2d77.6327339893902!3d11.332308960255375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4699042b0d%3A0xe536d6ed1501865a!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
      <SiteFooter />
    </main>
  );
}
