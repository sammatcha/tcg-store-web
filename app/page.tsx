import NewArrivals from "@/components/home/Arrivals";
import EventsStrip from "@/components/home/EventsStrip";
import Games from "@/components/home/Games";
import Hero from "@/components/home/Hero";
import { getCollectionByHandle } from "@/lib/shopify";

async function getListedProducts() {
  try {
    const collection = await getCollectionByHandle("all");
    const edges = collection?.products?.edges ?? [];
    return edges
      .map((edge: { node: { images?: { edges?: { node?: { url?: string } }[] } } }) => edge.node)
      .filter((product: { images?: { edges?: { node?: { url?: string } }[] } }) =>
        Boolean(product.images?.edges?.[0]?.node?.url)
      )
      .slice(0, 8);
  } catch {
    return [];
  }
}

export default async function Home() {
  const products = await getListedProducts();

  return (
    <div className="w-full pt-4 md:pt-6">
      <Hero />
      <Games />
      <NewArrivals products={products} />
      <EventsStrip />
    </div>
  );
}
