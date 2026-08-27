import Link from "next/link";

export default function EventsStrip() {
  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-[#3F5340] px-6 py-6 md:px-8 md:py-7 text-[#F3EFE6]">
          <div>
            <p className="text-sm tracking-[0.18em] uppercase text-[#F3EFE6]/60 mb-1">
              Events
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Events coming soon!
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center justify-center rounded-lg bg-[#F3EFE6] px-5 py-2.5 text-sm font-semibold text-[#111111] self-start md:self-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
