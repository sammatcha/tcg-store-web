"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "./CartContext"

export default function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="text-gray-700 hover:text-gray-900 size-7" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  )
}
