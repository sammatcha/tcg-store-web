import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/cart/AddToCartButton";

interface Props {
    product: any;
}
export default function ProductInfo({product} : Props){
    const variantId = product.variants.edges[0]?.node.id
    return(
        <div className="w-full min-w-0 md:sticky md:top-32 md:py-4">
            <p className="text-xl md:text-3xl font-bold text-gray-900 mb-3 wrap-break-word">
                {product.title}
            </p>
            <p className="text-lg md:text-2xl font-semibold text-gray-900 mb-6">
                {formatPrice(product.priceRange.minVariantPrice.amount)}
            </p>
            <hr className="border-gray-200 mb-4" />

            <div>
                <p className="font-bold mb-4">Description</p>
                <p className="leading-relaxed text-base md:text-lg text-gray-600 mb-4 wrap-break-word">
                    {product.description}
                </p>
            </div>
            <div className="mt-6">
                <hr className="border-gray-200 mb-4 md:mb-6" />
                {variantId && <AddToCartButton variantId={variantId} />}
            </div>
        </div>
    )
}