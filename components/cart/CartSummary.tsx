"use client"

import { formatPrice } from "@/lib/utils"
import type { Cart } from "./CartContext"

interface Props {
  cart: Cart
}

export default function CartSummary({ cart }: Props) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white h-fit max-w-full md:max-w-sm ml-auto mt-6 md:mt-10">
      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Subtotal</span>
        <span>{formatPrice(cart.subtotal.amount, cart.subtotal.currencyCode)}</span>
      </div>
      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Shipping</span>
        <span className="text-sm text-gray-500">Calculated at checkout</span>
      </div>
      <hr className="border-gray-200 my-4" />
      <div className="flex justify-between mb-6 font-bold text-lg">
        <span>Total</span>
        <span>{formatPrice(cart.total.amount, cart.total.currencyCode)}</span>
      </div>
      <a
        href={cart.checkoutUrl}
        className="block text-center rounded-lg px-6 py-3 bg-black text-white font-semibold"
      >
        Checkout
      </a>
    </div>
  )
}
