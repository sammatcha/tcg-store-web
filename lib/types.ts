export type Product = {
    id: string
    handle: string;
    title: string;
    priceRange: {
        minVariantPrice : {
            amount: string
            currencyCode: string
        }
    }
    images: {
        edges: {
            node: {
                url: string
                altText: string | null
            }
        }[]
    }
}