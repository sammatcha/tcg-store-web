import Image from "next/image";
import Link from "next/link";

const tileClass =
  "group flex min-h-[15rem] flex-col rounded-2xl px-4 pt-4 pb-8 md:min-h-[22rem] md:p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md";

export default function Games() {
  return (
    <section className="w-full pt-8 pb-6 md:pt-20 md:pb-8" id="games">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-sm tracking-[0.18em] uppercase text-neutral-500 mb-6">
          Shop by game
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <Link
            href="/collections/One-Piece"
            className={`${tileClass} bg-[#EDE4C8] border border-[#D4C4A0]`}
          >
            <div className="relative w-full flex-1 overflow-hidden">
              <Image
                src="/image/op-logo.webp"
                alt="One Piece Card Game"
                fill
                className="object-contain md:p-8"
              />
            </div>
            <span className="mt-4 mb-1 md:mb-0 self-center inline-flex rounded-lg bg-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-900 group-hover:bg-white">
              Shop One Piece
            </span>
          </Link>

          <Link
            href="/collections/Pokemon"
            className={`${tileClass} bg-[#C05A5A] border border-[#9A3E3E]`}
          >
            <div className="relative w-full flex-1 overflow-hidden">
              <Image
                src="/image/pokemon.webp"
                alt="Pokémon Trading Card Game"
                fill
                className="object-contain p-4 md:p-6"
              />
            </div>
            <span className="mt-4 mb-1 md:mb-0 self-center inline-flex rounded-lg bg-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-900 group-hover:bg-white">
              Shop Pokémon
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
