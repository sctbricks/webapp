import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "SCT Bricks – Eco-Friendly Construction Materials Supplier",
  description: "SCT Bricks supplies high-quality fly ash bricks, premium green pavers, concrete blocks, and paver blocks. Reliable, eco-friendly materials for builders & contractors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
