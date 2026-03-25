import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Construction & Material Services in Erode",
  description:
    "Explore SCT Bricks construction and material services: brick manufacturing, bulk M-Sand and cement supply, stage-wise project support, and on-time delivery in Erode.",
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
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 space-y-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 rounded-full">
              End-to-End Support
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-brand-secondary mb-5 leading-tight">
              Construction & Material Services
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We support residential and commercial construction with consistent material quality, planned supply, and delivery coordination across Erode and nearby areas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 rounded-full font-semibold bg-brand-primary text-white">Get a Quote</Link>
              <Link href="/brick-calculator-india" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">Brick Calculator</Link>
              <Link href="/#products" className="px-6 py-3 rounded-full font-semibold border border-brand-primary text-brand-primary">Browse Products</Link>
              <Link href="/areas-we-serve" className="px-6 py-3 rounded-full font-semibold border border-gray-300 text-gray-700">Areas We Serve</Link>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <Image
              src="/images/production_yard_1773248410390.png"
              alt="SCT Bricks production and loading yard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Brick Manufacturing</h2>
            <p className="text-gray-600">Flyash Bricks, Interlock Bricks, Solid Bricks, and Hollow Blocks manufactured with quality-focused processes.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Bulk Material Supply</h2>
            <p className="text-gray-600">M-Sand, P-Sand, Jalli, Chips, and Cement supplied for ongoing, large-scale, and repeat construction requirements.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">Construction Support</h2>
            <p className="text-gray-600">Stage-wise material planning, quantity guidance, and dispatch scheduling to keep your site work running smoothly.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-200 bg-white">
            <h2 className="text-2xl font-bold text-brand-secondary mb-3">On-Time Delivery</h2>
            <p className="text-gray-600">Reliable transport and coordinated drop-offs aligned with project milestones and site readiness.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-gray-200 p-6 md:p-8 bg-brand-light/30">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand-secondary">Materials for Every Construction Stage</h2>
            <p className="text-gray-700 leading-relaxed">
              From foundation to finishing, we provide dependable material support for contractors, builders, and individual house owners.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
              <li className="px-3 py-2 rounded-xl bg-white border border-gray-200">Foundation Aggregates</li>
              <li className="px-3 py-2 rounded-xl bg-white border border-gray-200">Structural Bricks & Blocks</li>
              <li className="px-3 py-2 rounded-xl bg-white border border-gray-200">Concrete Sand & M-Sand</li>
              <li className="px-3 py-2 rounded-xl bg-white border border-gray-200">Plaster Sand & Cement</li>
            </ul>
          </div>
          <div className="relative h-[280px] md:h-[340px] rounded-2xl overflow-hidden border border-gray-100">
            <Image
              src="/images/interlock-bricks-erode-high-strength.jpg"
              alt="Interlock brick construction application"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
