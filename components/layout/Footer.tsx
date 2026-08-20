import NewsletterForm from "../footer/NewsletterForm"
import Link from "next/link"

const footerLinkClass = "text-white/90 hover:text-white"

export default function Footer() {
  return (
    <footer className="w-full bg-slate-700 text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-bold uppercase text-sm tracking-wide mb-3">
              Sign Up For Updates
            </p>
            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold uppercase text-base tracking-wide mb-1">Shop</p>
              <Link href="/collections/One-Piece" className={footerLinkClass}>
                One Piece
              </Link>
              <Link href="/collections/Pokemon" className={footerLinkClass}>
                Pokemon
              </Link>
              <Link href="/collections/all" className={footerLinkClass}>
                Shop All
              </Link>
              <Link href="/events" className={footerLinkClass}>
                Events
              </Link>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold uppercase text-base tracking-wide mb-1">Info</p>
              <Link href="/shipping" className={footerLinkClass}>
                Shipping
              </Link>
              <Link href="/returns" className={footerLinkClass}>
                Returns
              </Link>
              <Link href="/faq" className={footerLinkClass}>
                FAQ
              </Link>
              <Link href="/policies" className={footerLinkClass}>
                Policies
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase text-sm tracking-wide mb-1">Contact</p>
            <a href="mailto:info@tcgstorefront.com" className={`${footerLinkClass} underline`}>
              info@tcgstorefront.com
            </a>
          </div>
        </div>

        <p className="text-sm text-white/70 mt-8">
          © {new Date().getFullYear()}
        </p>
        <h1 className="text-4xl tracking-wide overflow-hidden md:text-5xl lg:text-8xl md:tracking-wider">
          TCG Storefront
        </h1>
      </div>
    </footer>
  )
}
