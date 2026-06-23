import { getCollectionByHandle } from "@/lib/shopify";
import ProductGrid from "../../../components/collection/PrductGrid";


export default async function CollectionPage({params}: {params:{handle:string}}) {
    const {handle} = await params
    const collection = await getCollectionByHandle(handle)
   
    return(
        <div>
            <ProductGrid collection={collection}/>
        </div>
    )
}