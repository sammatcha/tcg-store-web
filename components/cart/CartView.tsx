"use client"

import Link from "next/link"
import { useCart } from "./CartContext"
import CartLineItem from "./CartLineItem"
import CartSummary from "./CartSummary"



export default function CartView() {
  const { cart } = useCart()

  if (!cart || cart.lines.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is empty.</p>
        <Link href="/" className="text-blue-600 font-semibold">
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
          <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-4 border-b pb-3 font-semibold text-gray-700 text-center">
            <span >Item</span>
            <span>Price</span>
            <span>Qty</span>
            <span>Total</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] md:hidden gap-x-2 border-b pb-3 font-semibold text-gray-700">
              <span>Item</span>
              <span className="text-right">Total</span>
          </div>

          <div className="flex flex-col">
            {cart.lines.map((line) => (
              <CartLineItem key={line.id} line={line} />
            ))}
          </div>
        

        <CartSummary cart={cart} />
      </div>
  
  )
}
