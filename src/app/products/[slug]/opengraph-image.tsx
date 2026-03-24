import { ImageResponse } from "next/og";
import { allProducts } from "@/data/products";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};
export const alt = "SCT Bricks product preview";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #111827 0%, #1F2937 100%)",
            color: "white",
            fontSize: 64,
            fontWeight: 700,
          }}
        >
          SCT Bricks
        </div>
      ),
      size
    );
  }

  const accent = product.ogAccent ?? "#F97316";
  const title = product.ogTitle ?? `${product.name} | SCT Bricks`;
  const tagline = product.ogTagline ?? "Premium Construction Material";
  const productImage = product.image.startsWith("http")
    ? product.image
    : `https://sctbricks.com${product.image}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          overflow: "hidden",
          background: "#111827",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={productImage}
          alt={product.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.20) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            top: 58,
            bottom: 58,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 999,
              background: accent,
              color: "white",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            SCT BRICKS
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "82%",
            }}
          >
            <div
              style={{
                fontSize: 66,
                lineHeight: 1.08,
                fontWeight: 800,
                letterSpacing: -1,
                textShadow: "0 4px 20px rgba(0,0,0,0.45)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: 22,
                fontSize: 34,
                lineHeight: 1.2,
                fontWeight: 600,
                color: accent,
              }}
            >
              {tagline}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
