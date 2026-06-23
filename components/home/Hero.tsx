import Link from "next/link";

export default function Hero(){
    return(
        <section className="w-full  ">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="bg-gray-100 py-16 md:py-24 lg:py-28 w-full rounded-xl px-5 md:px-6">
                     <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-xl mb-4 text-gray-900">
                    Your Stop to Shop
                    </h1>
            
                    <p className="leading-relaxed max-w-md mb-8 text-lg md:text-xl text-gray-500">
                     Sealed · Singles · Accessories · Events
                    </p>
                    <div className="flex gap-4 items-center">
                        <Link href="/collections/all">
                            <button className="bg-foreground rounded-lg px-6 py-3 text-white font-bold cursor-pointer">Shop All</button>
                        </Link>
                    </div>
                </div>
               
            </div>
        </section>
    )
}