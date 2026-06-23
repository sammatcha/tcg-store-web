import { getProductByHandle } from "@/lib/shopify"
import ProductImage from "../../../components/products/ProductImage"
import ProductInfo from "../../../components/products/ProductInfo"


export default async function ProductPage({params}: {params: Promise<{handle:string}> }) {
    const {handle} = await params
    const product = await getProductByHandle(handle)

    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ProductImage product={product} />
            <ProductInfo product={product} />
        </div>
    )
}