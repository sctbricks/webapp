import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sctbricks.com'),
  title: {
    default: "SCT Bricks | Premium Flyash & Interlock Bricks Manufacturer in Erode, Tamil Nadu",
    template: "%s | SCT Bricks",
  },
  description: "Leading manufacturer and supplier of premium Flyash Bricks, Interlock Bricks, M-Sand, P-Sand, Cement, Jalli and aggregates in Erode. Durable, eco-friendly construction materials.",
  keywords: ["SCT Bricks", "Bricks Manufacturer Erode", "Bricks Supplier Erode", "Fly Ash Bricks", "Interlock Bricks", "Solid Bricks", "Hollow Blocks", "M-Sand", "P-Sand", "Jalli", "Chips", "Construction Materials Tamil Nadu", "Cement Supplier Erode"],
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
    title: "SCT Bricks | Premium Flyash & Interlock Bricks Manufacturer in Erode, Tamil Nadu",
    description: "Leading manufacturer and supplier of premium Flyash Bricks, Interlock Bricks, M-Sand, P-Sand, Cement, Jalli and aggregates in Erode.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCT Bricks | Flyash & Interlock Bricks in Erode",
    description: "Premium Flyash Bricks, Interlock Bricks, M-Sand, P-Sand, Cement and aggregates supplier in Erode, Tamil Nadu.",
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
