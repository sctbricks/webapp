import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>© {new Date().getFullYear()} SCT Bricks. Quality Builders Choose SCT.</p>
          <div className="flex items-center gap-5 text-white/70">
            <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
            <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Areas We Serve</Link>
            <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
