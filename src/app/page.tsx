"use client";

import Image from "next/image";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton, { getWhatsAppUrl } from "@/components/WhatsAppButton";

const products = [
  {
    name: "Fly Ash Bricks",
    image: "/images/fly-ash.png",
    description: "Eco-friendly bricks made from industrial byproducts. High strength and smooth finishing.",
    features: ["High compressive strength", "Uniform shape", "Eco-friendly", "Reduced plastering cost"]
  },
  {
    name: "Premium Green Garden Pavers",
    image: "/images/green-pavers.png",
    description: "Highly durable interlocking green pavers, perfect for modern gardens and walkways.",
    features: ["Stunning green aesthetic", "Crack resistant", "Eco-friendly materials", "Non-slip surface"]
  },
  {
    name: "Hollow Concrete Blocks",
    image: "/images/hollow-concrete.png",
    description: "Lightweight yet strong blocks with air cavities for better insulation and faster construction.",
    features: ["Faster construction", "Excellent insulation", "Cost-effective", "Reduced weight"]
  },
  {
    name: "Cement Blocks",
    image: "/images/cement-blocks.png",
    description: "Solid, heavy-duty cement blocks designed for structural walls and boundary construction.",
    features: ["Maximum durability", "Termite proof", "Low maintenance", "Standard dimensions"]
  },
  {
    name: "Paver Blocks",
    image: "/images/paver-blocks.png",
    description: "Interlocking blocks for high-durability flooring in driveways, walkways, and parking lots.",
    features: ["Anti-skid surface", "Multiple designs", "Heavy load bearing", "Easy to replace"]
  }
];

export default function Home() {
  const [quoteData, setQuoteData] = useState({
    product: "Fly Ash Bricks",
    quantity: "",
    location: ""
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I need quotation for ${quoteData.quantity} ${quoteData.product} delivery to ${quoteData.location}.`;
    window.open(getWhatsAppUrl(message), "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-black text-brand-primary tracking-tighter">SCT</span>
            <span className="text-2xl font-light text-brand-secondary">BRICKS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-brand-primary transition-colors">About</a>
            <a href="#products" className="text-sm font-medium hover:text-brand-primary transition-colors">Products</a>
            <a href="#why-us" className="text-sm font-medium hover:text-brand-primary transition-colors">Why Choose Us</a>
            <a href="#reviews" className="text-sm font-medium hover:text-brand-primary transition-colors">Reviews</a>
            <WhatsAppButton
              message="Hello SCT Bricks, I'm visiting your website and would like to enquire about your products."
              label="Contact Now"
              className="py-2 px-5 text-sm"
            />
          </div>
          {/* Mobile Contact Only icon */}
          <div className="md:hidden">
            <a href={getWhatsAppUrl("Hello SCT Bricks, I need some information.")} target="_blank" className="text-brand-accent">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Construction backdrop"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-primary uppercase bg-brand-primary/10 rounded-full">
              Leading Bricks Supplier in Erode
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-secondary leading-tight mb-8">
              Building the Future with <span className="text-brand-primary italic">SCT Bricks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Premium quality Fly Ash bricks, green garden pavers, and eco-friendly concrete blocks for sustainable construction. Durable, green, and delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                message="Hello, I would like to get a price list for your bricks."
                label="Get Price on WhatsApp"
                className="text-lg px-8 py-4 shadow-xl"
              />
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all text-lg">
                View Products
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/images/hero.png"
              alt="Premium Quality Bricks"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-brand-secondary">Quality Reliability & Growth</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                At SCT Bricks, we are committed to providing the foundation for your dreams. With years of experience in construction materials, we specialize in high-strength Fly Ash bricks that are not only durable but also eco-friendly.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                  <div className="text-4xl font-black text-brand-primary mb-2">10+</div>
                  <div className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
                  <div className="text-4xl font-black text-brand-primary mb-2">500+</div>
                  <div className="text-sm font-bold text-brand-secondary uppercase tracking-wider">Projects Supplied</div>
                </div>
              </div>
            </div>
            <div className="relative h-[550px] bg-brand-secondary rounded-3xl overflow-hidden group shadow-2xl">
              <Image
                src="/images/fly-ash.png"
                alt="Production"
                fill
                className="object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-12 text-white max-w-sm text-center bg-black/40 backdrop-blur-md rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 text-lg">To revolutionize construction with eco-friendly and high-strength building materials that stand the test of time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Product Catalog</h2>
            <div className="w-16 h-1.5 bg-brand-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">Explore our range of premium construction materials designed for strength, durability, and cost-efficiency.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-brand-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-primary opacity-10 skew-x-12 transform translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-10 leading-tight">Why Builders Trust <span className="text-brand-primary italic">SCT Bricks</span></h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "High Strength", desc: "Engineered to exceed industry standards for load-bearing capacity." },
                  { title: "Uniform Size", desc: "Perfect edges lead to 20% savings on plastering costs." },
                  { title: "Eco-Friendly", desc: "Sustainable production using industrial fly ash." },
                  { title: "Fast Delivery", desc: "Reliable logistics to keep your projects on schedule." }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Request a Quote</h3>
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Product Type</label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none transition-all"
                    value={quoteData.product}
                    onChange={(e) => setQuoteData({ ...quoteData, product: e.target.value })}
                  >
                    {products.map(p => <option key={p.name} value={p.name} className="bg-brand-secondary">{p.name}</option>)}
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g. 5000"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                      required
                      value={quoteData.quantity}
                      onChange={(e) => setQuoteData({ ...quoteData, quantity: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-widest">Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Erode"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                      required
                      value={quoteData.location}
                      onChange={(e) => setQuoteData({ ...quoteData, location: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-dark text-white font-black py-5 rounded-xl transition-all shadow-xl shadow-brand-primary/30 mt-4 active:scale-[0.98] uppercase tracking-widest"
                >
                  Get Price on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews Section */}
      <section id="reviews" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-brand-secondary mb-4">What Our Clients Say</h2>
              <div className="w-16 h-1.5 bg-brand-primary mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg">We take pride in our quality and service. Here's feedback from builders and homeowners who trust SCT Bricks.</p>
            </div>
            <a
              href="https://69b0326f06aae500083ea22f--linklaneapp.netlify.app/shrichinnamantraders/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all group"
            >
              Submit Your Review
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Proprietor, RK Constructions",
                content: "SCT Bricks provides the most consistent quality fly ash bricks in Erode. Their dimensions are perfect, which saved us a lot on mortar and plastering.",
                rating: 5
              },
              {
                name: "Anitha Selvam",
                role: "Homeowner",
                content: "Highly impressed with the strength of their blocks. The delivery was right on time for our house warming project. Highly recommended!",
                rating: 5
              },
              {
                name: "Suresh Mani",
                role: "Civil Engineer",
                content: "As an engineer, I focus on compressive strength. SCT Bricks exceeded our lab test requirements. Great eco-friendly alternative to red bricks.",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-brand-light border border-gray-100 flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-brand-accent mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic flex-grow">"{review.content}"</p>
                <div className="mt-auto">
                  <h4 className="font-bold text-brand-secondary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-24 bg-brand-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold text-brand-secondary mb-4 leading-tight">Ready to start your project?</h2>
              <p className="text-gray-600 mb-12 text-lg">Our team is ready to provide the best materials for your construction needs. Reach out for bulk orders or factory visits.</p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-xl mb-1">Factory Address</h4>
                    <p className="text-gray-600">SCT Bricks, Near Highway Junction, <br />Erode, Tamil Nadu - 638001</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-brand-primary shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary text-xl mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton
                  message="Hello, I would like to visit your factory. Please share the location."
                  label="Talk to Sales Team"
                  variant="primary"
                  className="px-10 py-5"
                />
              </div>
            </div>

            <div className="h-[500px] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-100 border-8 border-white group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.42312674258!2d77.6327339893902!3d11.332308960255375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f4699042b0d%3A0xe536d6ed1501865a!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-8">
                <span className="text-4xl font-black text-brand-primary tracking-tighter italic">SCT</span>
                <span className="text-4xl font-light text-white tracking-widest">BRICKS</span>
              </div>
              <p className="text-white/40 max-w-sm mb-8 text-lg mx-auto md:mx-0">
                Premium construction materials for lasting foundations. Building Tamil Nadu since 2015.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {['WhatsApp', 'Instagram', 'Facebook'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary transition-all duration-300">
                    <span className="sr-only">{s}</span>
                    <div className="w-5 h-5 bg-white/20 rounded-sm"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-16 mx-auto md:mx-0">
              <div>
                <h5 className="font-bold mb-6 uppercase tracking-[0.2em] text-xs text-white/30">Explore</h5>
                <ul className="space-y-4 text-white/50">
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-brand-primary transition-colors">Process</a></li>
                  <li><a href="#products" className="hover:text-brand-primary transition-colors">Bulk Orders</a></li>
                  <li><a href="#why-us" className="hover:text-brand-primary transition-colors">Sustainability</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-6 uppercase tracking-[0.2em] text-xs text-white/30">Support</h5>
                <ul className="space-y-4 text-white/50">
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Directions</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-brand-primary transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/20 gap-6">
            <p>© {new Date().getFullYear()} SCT Bricks. Designed for Excellence.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
