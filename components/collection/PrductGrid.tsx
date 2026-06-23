import ProductCard from "./ProductCard";

interface Props {
    collection: any;
}
export default function ProductGrid({collection} : Props){
    const products = collection.products.edges
    return(
        <section className="w-full py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 ">
                    {products.map(({node}: any) => (
                    <ProductCard key={node.id} product={node} />
                    ))}
                </div>
    
            </div>
        </section>
    )
      
}