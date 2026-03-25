"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton, { getWhatsAppUrl } from "@/components/WhatsAppButton";

type BrickType = "flyash" | "interlock" | "solid";
type Thickness = "4" | "6" | "9";

const PRODUCT_CONFIG: Record<
  BrickType,
  {
    label: string;
    minRate: number;
    maxRate: number;
    unit: string;
    factors: Record<Thickness, number>;
    benefits: string[];
    thicknessRates?: Partial<Record<Thickness, number>>;
  }
> = {
  flyash: {
    label: "Flyash Bricks",
    minRate: 7.25,
    maxRate: 7.25,
    unit: "per brick",
    factors: { "4": 5.3, "6": 6.2, "9": 7.0 },
    benefits: [
      "High compressive strength",
      "Uniform shape",
      "Eco-friendly",
      "Reduced plastering cost",
    ],
  },
  interlock: {
    label: "Interlock Bricks",
    minRate: 42,
    maxRate: 42,
    unit: "per block",
    factors: { "4": 2.7, "6": 3.2, "9": 3.8 },
    benefits: [
      "Heavy load bearing",
      "Easy to install",
      "Reusable",
      "Aesthetic finish",
    ],
  },
  solid: {
    label: "Solid Bricks",
    minRate: 32,
    maxRate: 42,
    unit: "per brick",
    factors: { "4": 5.8, "6": 6.9, "9": 7.8 },
    thicknessRates: { "4": 32, "6": 42 },
    benefits: [
      "Maximum durability",
      "Termite proof",
      "Low maintenance",
      "Multiple sizes",
    ],
  },
};

function formatINR(n: number): string {
  return `Rs.${Math.round(n).toLocaleString("en-IN")}`;
}

export default function EstimateCalculatorPage() {
  const router = useRouter();
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState<Thickness>("9");
  const [brickType, setBrickType] = useState<BrickType>("flyash");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadLocation, setLeadLocation] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const calculation = useMemo(() => {
    const l = Number(length);
    const h = Number(height);
    if (!l || !h || l <= 0 || h <= 0) return null;

    const area = l * h;
    const config = PRODUCT_CONFIG[brickType];
    const factor = config.factors[thickness];
    const baseUnits = area * factor;
    const totalUnits = Math.ceil(baseUnits * 1.05);
    const selectedRate = config.thicknessRates?.[thickness];
    const lowRate = selectedRate ?? config.minRate;
    const highRate = selectedRate ?? config.maxRate;
    const baseLow = totalUnits * lowRate;
    const baseHigh = totalUnits * highRate;
    // Preview should be an approximate range, not an exact quotation.
    // We apply an estimation band to account for wastage variance, loading, and transport.
    const low = baseLow * 0.92;
    const high = baseHigh * 1.1;

    return {
      area,
      factor,
      totalUnits,
      low,
      high,
      config,
    };
  }, [length, height, brickType, thickness]);

  const handleDownload = async (e: FormEvent) => {
    e.preventDefault();
    if (!calculation || leadPhone.trim().length < 10 || isSubmittingLead) return;

    setIsSubmittingLead(true);

    try {
      const reportId = Date.now().toString().slice(-6);
      const filename = `sct${reportId}.pdf`;

      await fetch("/api/lead-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leadName,
          leadPhone,
          leadLocation,
          length,
          height,
          thickness,
          brickType: calculation.config.label,
          totalUnits: calculation.totalUnits,
          low: calculation.low,
          high: calculation.high,
        }),
      }).catch(() => null);

      const a = document.createElement("a");
      a.href = `/api/report-download?id=${reportId}`;
      a.download = filename;
      a.click();

      setShowLeadForm(false);
      setTimeout(() => router.push("/#products"), 700);
    } finally {
      setIsSubmittingLead(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dcfce7_0%,#f8fafc_40%,#ffffff_100%)]">
      <SiteNavbar />

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="pointer-events-none absolute -top-8 right-0 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 -left-6 h-44 w-44 rounded-full bg-lime-200/50 blur-3xl" />

        <div className="mb-10">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm backdrop-blur">
            SCT Bricks Smart Estimator
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-brand-secondary leading-tight">
            Brick Calculator
          </h1>
          <p className="text-slate-700 text-lg max-w-3xl mt-3">
            Enter wall dimensions in feet, pick thickness and brick type, then get an instant estimate. Download a detailed report after quick lead capture.
          </p>
          <a
            href="#calculator-tool"
            className="inline-flex mt-5 px-6 py-3 rounded-full font-semibold bg-brand-primary text-white hover:bg-green-900 transition-colors"
          >
            Get Exact Brick Count
          </a>
        </div>

        <div id="calculator-tool" className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="rounded-[28px] border border-emerald-100/80 bg-white/80 p-5 sm:p-6 md:p-8 shadow-[0_18px_45px_-28px_rgba(6,78,59,0.55)] backdrop-blur-xl">
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-brand-secondary">Step 1: Project Input</h2>
              <p className="text-sm text-slate-600 mt-1">Fill your site details for a fast and accurate material plan.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Length (ft)</span>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-slate-800 shadow-inner outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  placeholder="e.g. 40"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Height (ft)</span>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-slate-800 shadow-inner outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                  placeholder="e.g. 10"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Wall Thickness</span>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(e.target.value as Thickness)}
                  className="mt-2 w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="4">4 inch</option>
                  <option value="6">6 inch</option>
                  <option value="9">9 inch</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Brick Type</span>
                <select
                  value={brickType}
                  onChange={(e) => setBrickType(e.target.value as BrickType)}
                  className="mt-2 w-full rounded-xl border border-emerald-100 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="flyash">Flyash</option>
                  <option value="interlock">Interlock</option>
                  <option value="solid">Solid</option>
                </select>
              </label>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Selected Product Benefits</p>
              <ul className="mt-3 grid gap-2">
                {PRODUCT_CONFIG[brickType].benefits.map((benefit) => (
                  <li key={benefit} className="rounded-lg bg-white/90 px-3 py-2 text-sm text-slate-700 shadow-sm">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-emerald-200/70 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800 p-5 sm:p-6 md:p-8 text-white shadow-[0_28px_80px_-25px_rgba(6,78,59,0.75)] transform-gpu">
            <div className="absolute inset-x-8 -top-3 h-4 rounded-full bg-black/20 blur-md" />
            <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-white/10 blur-2xl" />
            <h2 className="text-2xl font-bold mb-5">Step 2: Instant Output</h2>
            {calculation ? (
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-white/80 text-sm">Approx wall area</p>
                  <p className="text-2xl font-extrabold mt-1">{calculation.area.toFixed(2)} sq.ft</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                  <p className="text-white/80 text-sm">Approx quantity needed</p>
                  <p className="text-2xl font-extrabold mt-1">{calculation.totalUnits}</p>
                </div>
                <div className="rounded-2xl border border-emerald-200/40 bg-white/95 p-4 text-slate-900">
                  <p className="text-sm text-slate-600">Approx cost range</p>
                  <p className="text-2xl font-black text-brand-primary mt-1">
                    {formatINR(calculation.low)} - {formatINR(calculation.high)}
                  </p>
                </div>
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="w-full mt-2 px-6 py-3 rounded-full font-semibold bg-white text-emerald-800 hover:bg-emerald-50 transition shadow-lg shadow-emerald-950/20"
                >
                  Download Detailed Estimate
                </button>
                <WhatsAppButton
                  message={`Hello SCT Bricks, I calculated approximately ${calculation.totalUnits} units for ${calculation.config.label}. Please share final pricing.`}
                  label="Get Final Pricing on WhatsApp"
                  className="w-full"
                  variant="outline"
                />
              </div>
            ) : (
              <p className="text-emerald-50/90">Enter dimensions to see instant estimate preview.</p>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
          <h2 className="text-2xl font-bold text-brand-secondary mb-3">How This Brick Calculator Works</h2>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <p className="font-semibold text-brand-secondary mb-1">1) Input</p>
              <p className="text-gray-700">Enter wall length, height, thickness, and brick type.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <p className="font-semibold text-brand-secondary mb-1">2) Output</p>
              <p className="text-gray-700">Get instant quantity and estimated cost range.</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 bg-gray-50">
              <p className="font-semibold text-brand-secondary mb-1">3) Convert</p>
              <p className="text-gray-700">Download detailed estimate PDF and request final pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {showLeadForm && calculation && (
        <div className="fixed inset-0 z-[70] bg-emerald-950/55 backdrop-blur-sm flex items-start sm:items-center justify-center px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-[0_35px_90px_-30px_rgba(0,0,0,0.6)] border border-emerald-100 max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-brand-secondary mb-2">Get Detailed Cost Report</h3>
            <p className="text-slate-600 text-sm mb-4">
              Submit details to download your estimate PDF and continue to products.
            </p>
            <form onSubmit={handleDownload} className="space-y-3">
              <input
                type="text"
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Name (optional)"
                className="w-full rounded-xl border border-emerald-100 px-4 py-3 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              <input
                type="tel"
                value={leadPhone}
                onChange={(e) => setLeadPhone(e.target.value)}
                placeholder="Mobile Number *"
                required
                className="w-full rounded-xl border border-emerald-100 px-4 py-3 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              <input
                type="text"
                value={leadLocation}
                onChange={(e) => setLeadLocation(e.target.value)}
                placeholder="Project Location (optional)"
                className="w-full rounded-xl border border-emerald-100 px-4 py-3 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              <button
                type="submit"
                disabled={isSubmittingLead}
                className="w-full px-6 py-3 rounded-full font-semibold bg-brand-primary text-white hover:bg-green-900 transition-colors shadow-lg shadow-emerald-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmittingLead ? "Generating Report..." : "Get Detailed Cost Report"}
              </button>
              <button
                type="button"
                onClick={() => setShowLeadForm(false)}
                className="w-full px-6 py-3 rounded-full font-semibold border border-slate-300 text-slate-700"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="rounded-2xl border border-emerald-100 bg-white/80 p-5 text-sm text-slate-600 shadow-sm backdrop-blur">
          Formula note: Quantity estimate uses area (length x height) and type/thickness factors with 5% wastage. Final site quotation may vary by openings, design, and transport route.
          <a
            href={getWhatsAppUrl("Hello SCT Bricks, I need help with exact construction quantity calculation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:inline sm:ml-2 mt-2 sm:mt-0 text-brand-primary font-semibold hover:underline"
          >
            Need expert calculation?
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-4">
            Brick Calculation Guide for House Construction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This brick calculation tool helps you estimate the number of bricks required for wall construction in feet. It works for fly ash brick calculator needs, interlock brick calculator planning, and brick cost calculator india use cases for residential and commercial sites.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Common searches like how many bricks needed for 100 sq ft wall, bricks required for 10x10 room, and bricks required per square foot depend on wall thickness, brick type, and wastage. Use this wall brick calculator to get a practical estimate before placing your material order.
          </p>
          <h3 className="text-xl font-bold text-brand-secondary mb-2">How to calculate bricks for wall in feet</h3>
          <ol className="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Enter wall length and height in feet.</li>
            <li>Select wall thickness (4 inch, 6 inch, or 9 inch).</li>
            <li>Choose brick type (Flyash, Interlock, or Solid).</li>
            <li>Review quantity and approximate cost range instantly.</li>
            <li>Download your detailed estimate and request exact pricing.</li>
          </ol>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Brick Calculator FAQs</h2>
        <div className="space-y-4">
          {[
            {
              q: "How many bricks are needed for a 100 sq ft wall?",
              a: "It varies by wall thickness and brick type. This bricks required calculator applies practical construction factors and wastage to give you a more realistic estimate.",
            },
            {
              q: "Can I use this for brick estimation calculator India requirements?",
              a: "Yes. The tool is built for India-focused wall dimension inputs in feet and gives an approximate budget range for project planning.",
            },
            {
              q: "Does this support fly ash and interlock brick quantity calculation?",
              a: "Yes. You can switch between Flyash, Interlock, and Solid options to compare quantity and cost quickly.",
            },
            {
              q: "Can I get final pricing after estimate?",
              a: "Yes. Use the Get Final Pricing on WhatsApp button after calculation and our team will share current rates and delivery details.",
            },
          ].map((item) => (
            <details key={item.q} className="rounded-2xl border border-gray-200 bg-white p-5">
              <summary className="cursor-pointer font-bold text-brand-secondary">{item.q}</summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-5">Complete Brick Calculation Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/guides/brick-calculator-india-guide" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-brand-primary transition-colors">
            <h3 className="font-bold text-brand-secondary mb-1">Brick Calculation Formula Guide</h3>
            <p className="text-sm text-gray-700">Understand formula, factors, and practical quantity planning.</p>
          </Link>
          <Link href="/guides/bricks-per-square-foot" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-brand-primary transition-colors">
            <h3 className="font-bold text-brand-secondary mb-1">Bricks Per Sq Ft Guide</h3>
            <p className="text-sm text-gray-700">Quick answers and exact ranges for common wall sizes.</p>
          </Link>
          <Link href="/guides/brick-cost-estimation-india" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-brand-primary transition-colors">
            <h3 className="font-bold text-brand-secondary mb-1">Brick Cost Estimation Guide</h3>
            <p className="text-sm text-gray-700">Estimate brick budget with transport, labour, and wastage.</p>
          </Link>
          <Link href="/guides/fly-ash-brick-calculator" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-brand-primary transition-colors">
            <h3 className="font-bold text-brand-secondary mb-1">Fly Ash Brick Calculator Guide</h3>
            <p className="text-sm text-gray-700">Compare fly ash quantity and cost against standard brick assumptions.</p>
          </Link>
          <Link href="/guides/bricks-required-for-house-construction" className="rounded-2xl border border-gray-200 p-5 bg-white hover:border-brand-primary transition-colors md:col-span-2">
            <h3 className="font-bold text-brand-secondary mb-1">House Construction Brick Estimate Guide</h3>
            <p className="text-sm text-gray-700">Estimate bricks required for 1000, 1500, and 2000 sq ft homes.</p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
