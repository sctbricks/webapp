import { allProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Metadata } from "next";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);
  if (!product) return {};
  const productUrl = `https://sctbricks.com/products/${product.slug}`;
  const seoTitle = `${product.name} in Erode | High-Strength Construction Materials | SCT Bricks`;
  const seoDescription =
    product.ogDescription ??
    `${product.description} Available in Erode and Perundurai with bulk supply and delivery support from SCT Bricks.`;
  const imageAlt = `${product.name} supplied by SCT Bricks in Erode`;
  const ogImageUrl = `${productUrl}/opengraph-image`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      product.name,
      `${product.name} in Erode`,
      "SCT Bricks",
      "Bricks manufacturer in Erode",
      "Bricks supplier in Erode",
      "Tamil Nadu construction materials",
    ],
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: productUrl,
      // Next.js Metadata typing does not currently accept "product" for openGraph.type.
      // Keep product semantics via Product schema JSON-LD rendered on the page.
      type: "website",
      images: [{ url: ogImageUrl, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [ogImageUrl],
    },
  };
}


export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hello SCT Bricks, I'm interested in ${product.name}. Please share more details and pricing.`;
  const productUrl = `https://sctbricks.com/products/${product.slug}`;
  const productImages = product.galleryImages?.length ? product.galleryImages : [product.image];
  const relatedProducts = allProducts
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const priceText = product.priceRange
    ? `Rs.${product.priceRange.low.toLocaleString("en-IN")}-Rs.${product.priceRange.high.toLocaleString("en-IN")} ${product.priceRange.unit}`
    : "Price on request";
  const technicalSpecs =
    product.technicalSpecs ??
    [
      { label: "Material Quality", value: "Consistent supply-grade quality" },
      { label: "Area Served", value: "Erode and Perundurai" },
    ];
  const standards = product.standards ?? ["Quality checked before dispatch"];
  const deliveryInfo =
    product.deliveryInfo ??
    "Delivery support available in Erode and Perundurai based on order volume and route.";
  const calculatorTips =
    product.slug === "flyash-bricks" || product.slug.includes("brick") || product.slug.includes("blocks")
      ? [
          "Brick estimate formula: Wall area (sq ft) / 0.75 = approximate bricks needed (single layer).",
          "Add 5% wastage for handling and breakage.",
          "Example: 1000 sq ft / 0.75 = 1333 bricks; with 5% wastage ≈ 1400 bricks.",
        ]
      : [
          "Sand/aggregate estimate: 1 cubic meter ≈ 1.75 tons.",
          "For 100 sq ft floor at 4 inch thickness: volume ≈ 0.31 m³.",
          "Material required: 0.31 x 1.75 ≈ 0.54 tons.",
        ];
  const productFaqs = [
    {
      q: `What is the price of ${product.name} in Erode and Perundurai?`,
      a: `${product.name} is typically supplied at ${priceText}. Final pricing depends on quantity, loading pattern, and delivery distance.`,
    },
    {
      q: `Is ${product.name} suitable for residential and commercial projects?`,
      a: `Yes. ${product.name} is supplied for both residential and commercial construction. We support bulk quantities and planned dispatch for ongoing projects.`,
    },
    {
      q: `Do you provide delivery support for ${product.name}?`,
      a: `${deliveryInfo}`,
    },
  ];
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: productImages.map((img) => `https://sctbricks.com${img}`),
    brand: {
      "@type": "Brand",
      name: "SCT Bricks",
    },
    category: "Construction Material",
    url: productUrl,
    offers: {
      "@type": product.priceRange ? "AggregateOffer" : "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      areaServed: ["Erode", "Perundurai"],
      lowPrice: product.priceRange ? String(product.priceRange.low) : undefined,
      highPrice: product.priceRange ? String(product.priceRange.high) : undefined,
      offerCount: product.priceRange ? "1" : undefined,
      seller: {
        "@type": "Organization",
        name: "SCT Bricks",
      },
    },
    additionalProperty: technicalSpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sctbricks.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://sctbricks.com/#products" },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteNavbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="py-12 md:py-16 max-w-7xl mx-auto px-6">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/" className="hover:text-brand-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/#products" className="hover:text-brand-primary">Products</Link></li>
            <li>/</li>
            <li className="text-brand-secondary font-medium">{product.name}</li>
          </ol>
        </nav>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src={product.image}
                alt={`${product.name} supplied by SCT Bricks in Erode`}
                fill
                className="object-cover"
                priority
              />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {productImages.slice(1).map((img) => (
                  <div key={img} className="relative h-40 rounded-2xl overflow-hidden border border-gray-100">
                    <Image
                      src={img}
                      alt={`${product.name} product stock at SCT Bricks, Erode`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 rounded-full">
                Premium Material
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-brand-secondary leading-tight mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-primary">
                Available in Erode and Perundurai
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-secondary">Key Features</h3>
              <div className="grid gap-3">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-brand-light/50 rounded-2xl border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold">✓</div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-gray-200 bg-brand-light/30">
              <h3 className="text-xl font-bold text-brand-secondary mb-2">Price Range</h3>
              <p className="text-lg font-semibold text-brand-primary">{priceText}</p>
              <p className="text-sm text-gray-600 mt-2">{deliveryInfo}</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-secondary">Technical Specifications</h3>
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {technicalSpecs.map((spec) => (
                      <tr key={spec.label} className="odd:bg-white even:bg-gray-50">
                        <th className="text-left px-4 py-3 font-semibold text-brand-secondary w-1/2">{spec.label}</th>
                        <td className="px-4 py-3 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-secondary">Standards & Compliance</h3>
              <ul className="grid gap-2">
                {standards.map((standard) => (
                  <li key={standard} className="p-3 rounded-xl border border-gray-200 text-gray-700 bg-white">
                    {standard}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-brand-secondary">Quantity & Cost Tips</h3>
              <ul className="grid gap-2">
                {calculatorTips.map((tip) => (
                  <li key={tip} className="p-3 rounded-xl border border-gray-200 text-gray-700 bg-white">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
              <WhatsAppButton
                message={whatsappMessage}
                label="Enquire Now on WhatsApp"
                className="w-full py-5 text-lg shadow-xl shadow-brand-primary/20"
                variant="primary"
              />
              <p className="text-center text-sm text-gray-400">
                Contact us for bulk orders and delivery estimates.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">Related Products</h3>
              <div className="flex flex-wrap gap-3">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/products/${item.slug}`}
                    className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:text-brand-primary hover:border-brand-primary"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/guides/flyash-bricks-vs-red-bricks"
                className="inline-block mt-4 text-sm font-semibold text-brand-primary hover:underline"
              >
                Read: Flyash Bricks vs Red Bricks comparison guide
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">FAQs</h3>
              <div className="space-y-3">
                {productFaqs.map((faq, idx) => (
                  <details key={idx} className="rounded-xl border border-gray-200 bg-white">
                    <summary className="cursor-pointer px-4 py-3 font-semibold text-brand-secondary">
                      {faq.q}
                    </summary>
                    <p className="px-4 pb-4 text-gray-700">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
