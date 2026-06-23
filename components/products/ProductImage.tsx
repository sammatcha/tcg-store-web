import Image from "next/image";

interface Props {
    product: any;
}

export default function ProductImage({product}: Props){
    return(
        <div className="relative w-full aspect-square overflow-hidden border border-gray-200 rounded-xl bg-white">
            <Image
                src={product.images.edges[0]?.node.url}
                alt={product.title}
                loading="eager"
                fill
                className="object-contain p-4 md:p-6"
            />
        </div>
    )
}