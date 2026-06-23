import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Games(){
    return(
        <section className=" w-full pt-6 pb-10 md:pt-10 md:pb-16" id="games">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6  ">
                    {/* One Piece */}
                    <div className="rounded-xl border border-gray-200 p-5 md:p-6 font-bold shadow-md hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-28 md:h-35 mb-4 overflow-hidden">
                            <Image 
                            src="/image/OPlogo.png"
                            alt="one piece logo"
                            fill
                            loading="eager"
                            className="object-contain object-left md:scale-150 origin-left"
                        />
                        </div>
                        
                        <Link href="/collections/One-Piece">
                            <button className="inline-flex text-white rounded-lg px-4 py-2 bg-one-piece border font-semibold
                                    hover:bg-amber-300 cursor-pointer">
                                View OP
                                <span className="text-white"><ArrowRight/></span>
                            </button>
                        </Link>
                            
                    </div>
                    {/* Pokemon */}
                    <div className="rounded-xl border border-transparent p-5 md:p-6 font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-28 md:h-35 mb-4 overflow-hdden">
                             <Image 
                                src="/image/pokemon.png"
                                alt="pokemon logo"
                                fill
                                loading="eager"
                                className="object-contain object-left md:scale-125 origin-left md:ml-20"
                            
                            />
                        </div>

                            <Link href="/collections/Pokemon">
                                <button className="inline-flex text-white rounded-lg px-4 py-2 bg-pokemon border font-semibold 
                                        hover:bg-red-300 cursor-pointer">
                                    View Pokemon &#10132;
                                    {/* <span className="text-whit"><ArrowRight/></span> */}
                                </button>
                            </Link>
                       
                    </div>
                
                </div>
            </div>
        </section>
    )
}