import { allProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Metadata } from "next";

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

  return {
    title: `${product.name} - SCT Bricks`,
    description: product.description,
    openGraph: {
      title: `${product.name} - SCT Bricks`,
      description: product.description,
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - SCT Bricks`,
      description: product.description,
      images: [product.image],
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

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar with Back Link */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/PHOTO-2025-11-28-17-35-34-removebg-preview.png" alt="SCT Bricks Logo" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <span className="text-lg leading-none font-black text-brand-primary tracking-tighter">SCT</span>
              <span className="text-xs leading-none font-light text-brand-secondary tracking-widest">BRICKS</span>
            </div>
          </Link>
          <Link href="/#products" className="text-sm font-medium hover:text-brand-primary transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Products
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
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
          </div>
        </div>
      </div>

      {/* Footer (Simplified) */}
      <footer className="bg-brand-dark text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} SCT Bricks. Quality Builders Choose SCT.</p>
        </div>
      </footer>
    </main>
  );
}
