export default function Head() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SCT Bricks",
    url: "https://sctbricks.com",
    logo: "https://sctbricks.com/images/PHOTO-2025-11-28-17-35-34-removebg-preview.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 6380 213 603",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 84285 60078",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SCT Bricks",
    image: "https://sctbricks.com/images/PHOTO-2025-11-28-17-35-34-removebg-preview.png",
    url: "https://sctbricks.com",
    telephone: ["+91 6380 213 603", "+91 84285 60078"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shrii Chinnamman Trader, Perundurai Rd, opp. to Nandha Medical College",
      addressLocality: "Erode",
      addressRegion: "Tamil Nadu",
      postalCode: "638052",
      addressCountry: "IN",
    },
    areaServed: ["Erode", "Coimbatore", "Tamil Nadu"],
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-20:00",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 6380 213 603",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91 84285 60078",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
