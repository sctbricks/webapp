import Link from "next/link";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";

export default function SiteFooter() {
  return (
    <>
      <footer className="bg-[#06130f] text-white pt-14 pb-8 mt-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            <div>
              <p className="text-xl font-black tracking-tight text-white">SCT Bricks</p>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">
                Premium fly ash bricks, interlock blocks, and construction materials for reliable building projects across Erode and Tamil Nadu.
              </p>
              <Link
                href="/brick-calculator-india"
                className="inline-flex mt-5 px-5 py-2.5 rounded-full bg-brand-primary text-white font-semibold text-sm hover:bg-green-900 transition-colors"
              >
                Get Free Brick Estimate
              </Link>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3">Quick Links</h3>
              <div className="grid gap-2 text-sm text-white/75">
                <Link href="/brick-calculator-india" className="hover:text-brand-primary transition-colors">Brick Calculator</Link>
                <Link href="/products/flyash-bricks" className="hover:text-brand-primary transition-colors">Fly Ash Bricks</Link>
                <Link href="/products/interlock-bricks" className="hover:text-brand-primary transition-colors">Interlock Bricks</Link>
                <Link href="/guides/brick-cost-estimation-india" className="hover:text-brand-primary transition-colors">Brick Cost Calculator</Link>
                <Link href="/services" className="hover:text-brand-primary transition-colors">Construction Materials</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3">Useful Resources</h3>
              <div className="grid gap-2 text-sm text-white/75">
                <Link href="/guides/brick-calculator-india-guide" className="hover:text-brand-primary transition-colors">Brick Calculator Guide</Link>
                <Link href="/guides/bricks-per-square-foot" className="hover:text-brand-primary transition-colors">Bricks Per Square Foot</Link>
                <Link href="/guides/brick-cost-estimation-india" className="hover:text-brand-primary transition-colors">Brick Cost Estimation</Link>
                <Link href="/guides/flyash-bricks-vs-red-bricks" className="hover:text-brand-primary transition-colors">Fly Ash vs Red Bricks</Link>
                <Link href="/guides/bricks-required-for-house-construction" className="hover:text-brand-primary transition-colors">House Construction Guide</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3">Locations</h3>
              <div className="grid gap-2 text-sm text-white/75">
                <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Bricks in Erode</Link>
                <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Perundurai</Link>
                <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Bhavani</Link>
                <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Modakuruchi</Link>
                <Link href="/areas-we-serve" className="hover:text-brand-primary transition-colors">Chennimalai</Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white mb-3">Contact & Trust</h3>
              <div className="grid gap-2 text-sm text-white/75">
                <a href="tel:+916380213603" className="hover:text-brand-primary transition-colors">+91 6380 213 603</a>
                <a href="tel:+918428560078" className="hover:text-brand-primary transition-colors">+91 84285 60078</a>
                <a
                  href={getWhatsAppUrl("Hello SCT Bricks, I need a free project estimate.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-primary transition-colors"
                >
                  WhatsApp Chat
                </a>
                <p className="text-white/60 mt-1">
                  Shrii Chinnamman Trader, Perundurai Rd, Erode, Tamil Nadu 638052
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10">
            <p className="text-sm text-white/65 leading-relaxed">
              Leading supplier of fly ash bricks in Erode, delivering high-quality bricks for residential and commercial construction across Erode, Perundurai, Bhavani, Modakuruchi, and Chennimalai. Use our brick calculator to estimate your project accurately.
            </p>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} SCT Bricks. Quality Builders Choose SCT.
              {" "}
              <a
                href="https://yespstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-brand-primary transition-colors"
              >
                Developed by YESP Studio
              </a>
            </p>
            <div className="flex items-center gap-5">
              <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
              <Link href="/guides" className="hover:text-brand-primary transition-colors">Blogs</Link>
              <Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={getWhatsAppUrl("Hello SCT Bricks, I need product details and project pricing.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-[80] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white font-semibold shadow-2xl hover:brightness-95 transition"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        WhatsApp
      </a>
    </>
  );
}
