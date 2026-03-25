import type { Metadata } from "next";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

const serviceAreas = [
  {
    name: "Erode",
    delivery: "Complete delivery support for all products and construction materials.",
    focus: ["Flyash Bricks", "Interlock Bricks", "M-Sand", "P-Sand", "Cement", "Jalli & Aggregates"],
  },
  {
    name: "Perundurai",
    delivery: "Complete delivery support for all products and construction materials.",
    focus: ["Flyash Bricks", "Solid Bricks", "Hollow Blocks", "M-Sand", "Cement"],
  },
  {
    name: "Bhavani",
    delivery: "Complete delivery support for all products and construction materials.",
    focus: ["Interlock Bricks", "Flyash Bricks", "P-Sand", "Jalli", "Cement"],
  },
  {
    name: "Modakuruchu",
    delivery: "Complete delivery support for all products and construction materials.",
    focus: ["Flyash Bricks", "M-Sand", "P-Sand", "Chips", "Cements (All Brands)"],
  },
  {
    name: "Chennimalai",
    delivery: "Complete delivery support for all products and construction materials.",
    focus: ["Flyash Bricks", "Interlock Bricks", "M-Sand", "Aggregates", "Cement"],
  },
];

const localFaqs = [
  {
    q: "Do you deliver construction materials outside Erode city limits?",
    a: "Yes. We supply and deliver all products to Perundurai, Bhavani, Modakuruchu, Chennimalai, and nearby locations.",
  },
  {
    q: "Can I place mixed bulk orders for bricks, sand, and cement?",
    a: "Yes. We support mixed material orders for project convenience and planned site delivery.",
  },
  {
    q: "How do I confirm delivery timelines for my location?",
    a: "Share your site location and quantity by WhatsApp or phone. Our team will confirm the earliest dispatch and delivery slot.",
  },
];

export const metadata: Metadata = {
  title: "Areas We Serve in and around Erode",
  description:
    "SCT Bricks supplies and delivers all products across Erode, Perundurai, Bhavani, Modakuruchu, and Chennimalai.",
  alternates: {
    canonical: "/areas-we-serve",
  },
};

export default function AreasWeServePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: "https://sctbricks.com/areas-we-serve" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Materials Supply",
    provider: {
      "@type": "Organization",
      name: "SCT Bricks",
      url: "https://sctbricks.com",
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
  };

  const areaListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SCT Bricks Service Areas",
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.name,
      url: "https://sctbricks.com/areas-we-serve",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-6">Areas We Serve</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          SCT Bricks supplies and delivers all products including Flyash Bricks, Interlock Bricks, M-Sand, P-Sand, cement, jalli, and aggregates across all listed service areas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {serviceAreas.map((area) => (
            <article key={area.name} className="p-6 rounded-2xl border border-gray-200">
              <h2 className="text-2xl font-bold text-brand-secondary mb-3">{area.name}</h2>
              <p className="text-gray-600 mb-4">{area.delivery}</p>
              <p className="text-sm font-semibold text-brand-secondary mb-2">Popular supplies</p>
              <p className="text-gray-600 text-sm">{area.focus.join(" • ")}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 p-6 md:p-8 mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-4">Need supply in your area?</h2>
          <p className="text-gray-600 mb-6">
            Share your project location, material list, and quantity. Our team will confirm pricing and delivery availability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white">
              Contact Sales Team
            </Link>
            <Link href="/#products" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">
              Browse Products
            </Link>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-brand-secondary mb-6">Local Delivery FAQs</h2>
          <div className="space-y-4">
            {localFaqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-gray-100 shadow-sm text-brand-secondary [&_summary::-webkit-details-marker]:hidden overflow-hidden">
                <summary className="cursor-pointer p-5 font-bold text-base flex items-center justify-between gap-4 select-none hover:text-brand-primary transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 transition-transform group-open:-rotate-180 text-brand-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </section>
      <SiteFooter />
    </main>
  );
}
