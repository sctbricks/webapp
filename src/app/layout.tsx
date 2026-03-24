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
    default: "SCT Bricks - Bricks Manufacturer and Supplier in Erode",
    template: "%s | SCT Bricks",
  },
  description: "SCT Bricks is a leading bricks manufacturer and construction materials supplier in Erode, Tamil Nadu. We supply Fly Ash Bricks, Interlock Bricks, Solid Bricks, Hollow Blocks, M-Sand, P-Sand, Jalli, Chips, and Cement.",
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
    title: "SCT Bricks - Bricks Manufacturer and Supplier in Erode",
    description: "Trusted supplier of Fly Ash Bricks, Interlock Bricks, Solid Bricks, Hollow Blocks, M-Sand, P-Sand, Jalli, Chips, and Cement in Erode.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCT Bricks - Bricks Manufacturer in Erode",
    description: "Premium Fly Ash Bricks, Interlock Bricks, Solid Bricks, Hollow Blocks, M-Sand, P-Sand, and more in Erode.",
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
