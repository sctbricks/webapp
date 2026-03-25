"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WhatsAppButton, { getWhatsAppUrl } from "@/components/WhatsAppButton";

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 w-full z-50 border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
          <Image src="/images/PHOTO-2025-11-28-17-35-34-removebg-preview.png" alt="SCT Bricks Logo" width={44} height={44} className="w-11 h-11 rounded-full object-cover shadow-sm" />
          <div className="flex flex-col mt-1">
            <span className="text-lg leading-none font-black text-brand-primary tracking-tighter">SCT</span>
            <span className="text-xs leading-none font-light text-brand-secondary tracking-widest mt-0.5">BRICKS</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium hover:text-brand-primary transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium hover:text-brand-primary transition-colors">Services</Link>
          <Link href="/guides" className="text-sm font-medium hover:text-brand-primary transition-colors">Blogs</Link>
          <Link href="/brick-calculator-india" className="text-sm font-medium hover:text-brand-primary transition-colors">Brick Calculator</Link>
          <Link href="/areas-we-serve" className="text-sm font-medium hover:text-brand-primary transition-colors">Areas We Serve</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-brand-primary transition-colors">Contact</Link>
          <WhatsAppButton
            message="Hello SCT Bricks, I would like to enquire about your products and delivery."
            label="Contact Now"
            className="py-2 px-5 text-sm"
          />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <a href={getWhatsAppUrl("Hello SCT Bricks, I need product and delivery details.")} target="_blank" rel="noopener noreferrer" className="text-brand-accent">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white p-2 text-brand-secondary"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
          <button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/30 transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
          <aside
            className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col transition-transform duration-300 ease-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-brand-secondary">Menu</span>
              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="grid gap-3 text-sm font-medium text-slate-800">
              <Link href="/about" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">About</Link>
              <Link href="/services" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">Services</Link>
              <Link href="/guides" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">Blogs</Link>
              <Link href="/brick-calculator-india" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">Brick Calculator</Link>
              <Link href="/areas-we-serve" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">Areas We Serve</Link>
              <Link href="/contact" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">Contact</Link>
            </div>

            <div className="mt-auto pt-6">
              <WhatsAppButton
                message="Hello SCT Bricks, I would like to enquire about your products and delivery."
                label="Contact Now"
                className="w-full justify-center"
              />
            </div>
          </aside>
        </div>
    </nav>
  );
}
