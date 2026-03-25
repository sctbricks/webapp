export type Product = {
  name: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
  galleryImages?: string[];
  priceRange?: {
    low: number;
    high: number;
    unit: string;
  };
  technicalSpecs?: Array<{
    label: string;
    value: string;
  }>;
  standards?: string[];
  deliveryInfo?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogTagline?: string;
  ogAccent?: string;
};

export const manufacturedProducts: Product[] = [
  {
    name: "Flyash Bricks",
    slug: "flyash-bricks",
    image: "/images/flyash_bricks_1773246878607.png",
    description: "Eco-friendly bricks made from industrial byproducts. High strength and smooth finishing.",
    features: ["High compressive strength", "Uniform shape", "Eco-friendly", "Reduced plastering cost"],
    priceRange: { low: 4500, high: 5500, unit: "per 1000 bricks" },
    technicalSpecs: [
      { label: "Dimensions", value: "230mm x 110mm x 75mm" },
      { label: "Compressive Strength", value: "75-100 kg/cm²" },
      { label: "Water Absorption", value: "6-12%" },
      { label: "Weight", value: "2.6-2.8 kg per brick" },
      { label: "CO2 Reduction", value: "Up to 60% vs traditional red bricks" }
    ],
    standards: ["IS 12894:2002", "IS 3495 (Part 1 & 2)"],
    deliveryInfo: "Free delivery within 5km. Rs.500-Rs.1,500 for 5-50km routes including Perundurai.",
    ogTitle: "Premium Flyash Bricks | High Strength Eco Bricks",
    ogDescription: "Buy premium flyash bricks for durable and eco-friendly construction. Bulk supply available in Erode and Perundurai.",
    ogTagline: "High Strength • Eco Friendly",
    ogAccent: "#B45309"
  },
  {
    name: "Interlock Bricks",
    slug: "interlock-bricks",
    image: "/images/interlock-bricks-erode-high-strength.jpg",
    description: "High-strength interlock bricks for durable, eco-friendly flooring, pathways, and outdoor paving.",
    features: ["Heavy load bearing", "Easy to install", "Reusable", "Aesthetic finish"],
    priceRange: { low: 28, high: 48, unit: "per block" },
    technicalSpecs: [
      { label: "Thickness Options", value: "60mm, 80mm, 100mm" },
      { label: "Compressive Strength", value: "30-50 N/mm²" },
      { label: "Water Absorption", value: "Below 6%" },
      { label: "Usage", value: "Driveways, pathways, parking, landscape paving" }
    ],
    standards: ["IS 15658:2021"],
    deliveryInfo: "Delivery available across Erode and Perundurai with load-based transport planning.",
    ogTitle: "Interlock Paver Blocks | Durable Stylish Finish",
    ogDescription: "Choose premium interlock paver blocks for durable pathways and modern outdoor finishes. Bulk supply across Erode and Perundurai.",
    ogTagline: "Durable • Stylish Finish",
    ogAccent: "#1D4ED8"
  },
  {
    name: "Solid Bricks (4\", 6\", 8\")",
    slug: "solid-bricks",
    image: "/images/solid-bricks-erode-premium-stack.jpg",
    galleryImages: [
      "/images/solid-bricks-erode-premium-stack.jpg",
      "/images/solid-bricks-erode-pallet-stock.jpg"
    ],
    description: "High-strength solid bricks (4\", 6\", 8\") for durable structural walls, compound walls, and long-lasting construction in Erode.",
    features: ["Maximum durability", "Termite proof", "Low maintenance", "Multiple sizes"],
    priceRange: { low: 38, high: 78, unit: "per brick/block (size-based)" },
    technicalSpecs: [
      { label: "Available Sizes", value: "4 inch, 6 inch, 8 inch" },
      { label: "Compressive Strength", value: "50-90 kg/cm²" },
      { label: "Applications", value: "Load-bearing walls, compound walls, partitions" }
    ],
    standards: ["IS 2185 (Part 1)"],
    deliveryInfo: "Same-day or next-day dispatch for Erode and Perundurai depending on stock."
  },
  {
    name: "Hollow Blocks (6\")",
    slug: "hollow-blocks",
    image: "/images/hollow_blocks_1773247002492.png",
    description: "Lightweight yet strong blocks with air cavities for better insulation and faster construction.",
    features: ["Faster construction", "Excellent insulation", "Cost-effective", "Reduced weight"],
    priceRange: { low: 42, high: 65, unit: "per block" },
    technicalSpecs: [
      { label: "Standard Size", value: "400mm x 200mm x 150mm (6 inch class)" },
      { label: "Compressive Strength", value: "35-70 kg/cm²" },
      { label: "Benefits", value: "Lower dead load, faster walling, thermal comfort" }
    ],
    standards: ["IS 2185 (Part 1)"],
    deliveryInfo: "Bulk loads scheduled for Erode and Perundurai sites."
  }
];

export const dealerProducts: Product[] = [
  {
    name: "M-Sand",
    slug: "m-sand",
    image: "/images/msand_pile_1773246182968.png",
    description: "Manufactured sand specifically for concrete to achieve highest compressive strength.",
    features: ["High strength", "Silt free", "Economical", "Well graded"],
    priceRange: { low: 950, high: 1400, unit: "per ton" },
    technicalSpecs: [
      { label: "Recommended Use", value: "Concrete mixes and RCC work" },
      { label: "Silt Content", value: "Typically below 5%" },
      { label: "Bulk Density", value: "1.75-1.85 t/m³" }
    ],
    standards: ["IS 383:2016"],
    deliveryInfo: "Free delivery within 5km. Distance-based pricing for Erode and Perundurai routes.",
    ogTitle: "Premium M-Sand | Perfect for Concrete Strength",
    ogDescription: "Premium M-sand for concrete with high compressive strength and low silt content. Trusted bulk supplier in Erode and Perundurai.",
    ogTagline: "Perfect for Concrete",
    ogAccent: "#0F766E"
  },
  {
    name: "P-Sand",
    slug: "p-sand",
    image: "/images/p-sand-erode-triple-wash-plaster-sand.jpg",
    description: "Premium plastering sand designed for smooth internal and external wall finishes.",
    features: ["Fine texture", "Smooth finishes", "No screening needed", "Reduced cracks"],
    priceRange: { low: 900, high: 1300, unit: "per ton" },
    technicalSpecs: [
      { label: "Recommended Use", value: "Plastering and finishing work" },
      { label: "Grain Size", value: "Fine, plaster-grade sand" },
      { label: "Wash Quality", value: "Triple-wash grade options available" }
    ],
    standards: ["IS 1542:1992"],
    deliveryInfo: "Regular supply support to Erode and Perundurai with planned dispatch."
  },
  {
    name: "1/2 Jalli",
    slug: "jalli-half",
    image: "/images/jalli_half_1773246240267.png",
    description: "1/2 inch blue metal crushed stone for high-grade concrete mixes.",
    features: ["Cubical shape", "Strong bond", "Clean", "Dust free"],
    priceRange: { low: 780, high: 1200, unit: "per ton" },
    technicalSpecs: [
      { label: "Nominal Size", value: "12mm (1/2 inch)" },
      { label: "Best Use", value: "RCC and high-grade concrete" }
    ],
    standards: ["IS 383:2016"]
  },
  {
    name: "3/4 Jalli",
    slug: "jalli-three-quarter",
    image: "/images/jalli_three_quarter_1773246304635.png",
    description: "3/4 inch blue metal crushed stone for standard structural concrete.",
    features: ["Perfect sizing", "High load-bearing", "Clean", "Consistent quality"],
    priceRange: { low: 760, high: 1150, unit: "per ton" },
    technicalSpecs: [
      { label: "Nominal Size", value: "20mm (3/4 inch)" },
      { label: "Best Use", value: "Footings, columns, slabs and concrete works" }
    ],
    standards: ["IS 383:2016"]
  },
  {
    name: "Dust",
    slug: "dust",
    image: "/images/dust_pile_1773246342930.png",
    description: "Quarry dust for filling, leveling, and foundation works.",
    features: ["Excellent compaction", "Cost-effective", "Fine particles", "Versatile"],
    priceRange: { low: 550, high: 900, unit: "per ton" }
  },
  {
    name: "Chips",
    slug: "chips",
    image: "/images/chips-erode-construction-aggregates.jpg",
    description: "Stone chips tailored for various specialized construction requirements.",
    features: ["Uniform size", "Decorative", "Durable", "Clean material"],
    priceRange: { low: 850, high: 1300, unit: "per ton" }
  },
  {
    name: "Cements (All Brands)",
    slug: "cements",
    image: "/images/cement_bags_1773246425368.png",
    description: "We provide all top leading brands of cement for all your construction needs.",
    features: ["Top brands", "Fresh stock", "Best prices", "Bulk availability"],
    priceRange: { low: 360, high: 460, unit: "per 50kg bag" },
    technicalSpecs: [
      { label: "Available Grades", value: "OPC 43, OPC 53, PPC, PSC" },
      { label: "Brands", value: "Multiple leading brands based on stock" }
    ],
    standards: ["IS 269", "IS 8112", "IS 12269"]
  },
  {
    name: "Red Stone",
    slug: "red-stone",
    image: "/images/red-clay.png",
    description: "Natural high-quality red stones perfect for traditional aesthetic building.",
    features: ["Natural color", "High strength", "Weather resistant", "Classic look"],
    priceRange: { low: 30, high: 65, unit: "per piece" }
  }
];

export const allProducts = [...manufacturedProducts, ...dealerProducts];
