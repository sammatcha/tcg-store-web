import NewArrivals from "@/components/home/Arrivals";
import Games from "@/components/home/Games";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Games/>
      <NewArrivals/>
    </div>
  );
}
