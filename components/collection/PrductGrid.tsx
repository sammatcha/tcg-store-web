import ProductCard from "./ProductCard";

interface Props {
    collection: any;
}
export default function ProductGrid({collection} : Props){
    const products = collection?.products?.edges ?? []
    return(
        <section className="w-full pt-8 pb-15 md:pt-12 md:pb-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {products.length === 0 ? (
                    <p className="text-neutral-600">No products in this collection yet.</p>
                ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
                    {products.map(({node}: any) => (
                    <ProductCard key={node.id} product={node} />
                    ))}
                </div>
                )}
    
            </div>
        </section>
    )
      
}