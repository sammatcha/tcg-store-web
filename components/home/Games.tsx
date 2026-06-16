import { ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Games(){
    return(
        <section className=" w-full pt-8 pb-12 md:pt-10 md:pb-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* One Piece */}
                    <div className="rounded-xl border border-gray-200 p-5 md:p-6 font-bold shadow-sm">
                        <div className="relative h-28 md:h-35 mb-4">
                            <Image 
                            src="/image/OPlogo.png"
                            alt="one piece logo"
                            fill
                            loading="eager"
                            className="object-contain object-left scale-150 origin-left"
                        />
                        </div>
                        
                        <button className="inline-flex text-white rounded-lg px-4 py-2 bg-one-piece border font-semibold">
                            Shop OP
                             <span className="text-white"><ArrowRight/></span>
                        </button>
                    </div>
                    {/* Pokemon */}
                    <div className="rounded-xl border border-gray-200 p-5 md:p-6 font-bold shadow-sm">
                        <div className="relative h-28 md:h-35 mb-4">
                             <Image 
                                src="/image/pokemon.png"
                                alt="pokemon logo"
                                fill
                                loading="eager"
                                className="object-contain object-left scale-125 origin-left ml-20"
                            
                        />
                        </div>
                       
                            <button className="inline-flex text-white rounded-lg px-4 py-2 bg-pokemon border font-semibold">
                                Shop Pokemon &#10132;
                                {/* <span className="text-whit"><ArrowRight/></span> */}
                            </button>
             
                       
                    </div>
                
                </div>
            </div>
        </section>
    )
}