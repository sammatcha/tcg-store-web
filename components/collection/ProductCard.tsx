import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}: {product: any}){
    return(
        <Link href={`/products/${product.handle}`}>
            <div className="flex flex-col cursor-pointer group transform ">
           <div className="relative w-full h-48 md:h-64 bg-white border-gray-200 border rounded-lg overflow-hidden mb-3 transition-shadow duration-300 group-hover:shadow-md">
                <Image
                    src={product.images.edges[0]?.node.url}
                    alt="one piece product"
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
           </div>
           <div>
            <p className="font-bold mb-1 ">{product.title}</p>
            <p className="text-gray-600"> {formatPrice( product.priceRange.minVariantPrice.amount)}</p>
           </div>

        </div>
        </Link>
        
    )
}