import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
    name: string;
    image: string;
    description: string;
    features: string[];
}

export default function ProductCard({ name, image, description, features }: ProductCardProps) {
    const whatsappMessage = `Hello, I am interested in ${name}. Please share price and delivery details.`;

    return (
        <div className="flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 product-card-hover group">
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                    {name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 md:line-clamp-none">
                    {description}
                </p>

                <div className="mb-6 space-y-2 flex-grow">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start text-xs text-gray-500">
                            <span className="text-brand-primary mr-2 font-bold">•</span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                    <WhatsAppButton
                        message={whatsappMessage}
                        label="Get Price"
                        className="w-full"
                        variant="accent"
                    />
                </div>
            </div>
        </div>
    );
}
