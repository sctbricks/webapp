import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sctbricks.com'),
  title: "SCT Bricks – Eco-Friendly Construction Materials Supplier",
  description: "SCT Bricks supplies high-quality fly ash bricks, premium green pavers, concrete blocks, paver blocks, m-sand, p-sand, jalli, and cement. Reliable, eco-friendly materials for builders & contractors in Erode, Tamil Nadu.",
  keywords: ["SCT Bricks", "Fly Ash Bricks", "Interlock Bricks", "Solid Bricks", "Hollow Blocks", "M-Sand", "P-Sand", "Jalli", "Construction Materials", "Cement", "Erode Bricks Supplier"],
  authors: [{ name: "SCT Bricks" }],
  creator: "SCT Bricks",
  publisher: "SCT Bricks",
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sctbricks.com",
    siteName: "SCT Bricks",
    title: "SCT Bricks – Eco-Friendly Construction Materials Supplier in Erode",
    description: "SCT Bricks supplies high-quality fly ash bricks, premium green pavers, concrete blocks, paver blocks, m-sand, p-sand, jalli, and cement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCT Bricks – Premium Construction Materials",
    description: "Reliable, eco-friendly construction materials including Flyash, M-Sand, P-Sand, Cement & more in Erode.",
  },
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
