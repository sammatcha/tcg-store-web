import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-2xl bg-[#111111] px-6 py-12 md:px-10 md:py-20 lg:py-24">
          <p className="text-sm tracking-[0.2em] uppercase text-[#F3EFE6]/70 mb-4">
            One Piece · Pokémon
          </p>
          <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] mb-5 text-[#F3EFE6]">
            Singles.
          </h1>
          <p className="text-base md:text-lg text-[#F3EFE6]/75 max-w-sm mb-8 leading-relaxed">
            A shop for the cards on the table — browse the binder and pick up
            what you need.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/collections/all"
              className="inline-flex items-center justify-center rounded-lg bg-[#F3EFE6] px-6 py-3 text-sm font-semibold text-[#111111]"
            >
              Shop all
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-lg border border-[#F3EFE6]/40 px-6 py-3 text-sm font-semibold text-[#F3EFE6]"
            >
              View events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
