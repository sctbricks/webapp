export type Product = {
  name: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
  galleryImages?: string[];
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
    ogTitle: "Premium Flyash Bricks | High Strength Eco Bricks",
    ogDescription: "Buy premium flyash bricks for durable and eco-friendly construction. Bulk supply available in Erode and Coimbatore.",
    ogTagline: "High Strength • Eco Friendly",
    ogAccent: "#B45309"
  },
  {
    name: "Interlock Bricks",
    slug: "interlock-bricks",
    image: "/images/interlock-bricks-erode-high-strength.jpg",
    description: "High-strength interlock bricks for durable, eco-friendly flooring, pathways, and outdoor paving.",
    features: ["Heavy load bearing", "Easy to install", "Reusable", "Aesthetic finish"],
    ogTitle: "Interlock Paver Blocks | Durable Stylish Finish",
    ogDescription: "Choose premium interlock paver blocks for durable pathways and modern outdoor finishes. Bulk supply across Erode and Coimbatore.",
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
    features: ["Maximum durability", "Termite proof", "Low maintenance", "Multiple sizes"]
  },
  {
    name: "Hollow Blocks (6\")",
    slug: "hollow-blocks",
    image: "/images/hollow_blocks_1773247002492.png",
    description: "Lightweight yet strong blocks with air cavities for better insulation and faster construction.",
    features: ["Faster construction", "Excellent insulation", "Cost-effective", "Reduced weight"]
  }
];

export const dealerProducts: Product[] = [
  {
    name: "M-Sand",
    slug: "m-sand",
    image: "/images/msand_pile_1773246182968.png",
    description: "Manufactured sand specifically for concrete to achieve highest compressive strength.",
    features: ["High strength", "Silt free", "Economical", "Well graded"],
    ogTitle: "Premium M-Sand | Perfect for Concrete Strength",
    ogDescription: "Premium M-sand for concrete with high compressive strength and low silt content. Trusted bulk supplier in Erode and Coimbatore.",
    ogTagline: "Perfect for Concrete",
    ogAccent: "#0F766E"
  },
  {
    name: "P-Sand",
    slug: "p-sand",
    image: "/images/p-sand-erode-triple-wash-plaster-sand.jpg",
    description: "Premium plastering sand designed for smooth internal and external wall finishes.",
    features: ["Fine texture", "Smooth finishes", "No screening needed", "Reduced cracks"]
  },
  {
    name: "1/2 Jalli",
    slug: "jalli-half",
    image: "/images/jalli_half_1773246240267.png",
    description: "1/2 inch blue metal crushed stone for high-grade concrete mixes.",
    features: ["Cubical shape", "Strong bond", "Clean", "Dust free"]
  },
  {
    name: "3/4 Jalli",
    slug: "jalli-three-quarter",
    image: "/images/jalli_three_quarter_1773246304635.png",
    description: "3/4 inch blue metal crushed stone for standard structural concrete.",
    features: ["Perfect sizing", "High load-bearing", "Clean", "Consistent quality"]
  },
  {
    name: "Dust",
    slug: "dust",
    image: "/images/dust_pile_1773246342930.png",
    description: "Quarry dust for filling, leveling, and foundation works.",
    features: ["Excellent compaction", "Cost-effective", "Fine particles", "Versatile"]
  },
  {
    name: "Chips",
    slug: "chips",
    image: "/images/chips-erode-construction-aggregates.jpg",
    description: "Stone chips tailored for various specialized construction requirements.",
    features: ["Uniform size", "Decorative", "Durable", "Clean material"]
  },
  {
    name: "Cements (All Brands)",
    slug: "cements",
    image: "/images/cement_bags_1773246425368.png",
    description: "We provide all top leading brands of cement for all your construction needs.",
    features: ["Top brands", "Fresh stock", "Best prices", "Bulk availability"]
  },
  {
    name: "Red Stone",
    slug: "red-stone",
    image: "/images/red-clay.png",
    description: "Natural high-quality red stones perfect for traditional aesthetic building.",
    features: ["Natural color", "High strength", "Weather resistant", "Classic look"]
  }
];

export const allProducts = [...manufacturedProducts, ...dealerProducts];
