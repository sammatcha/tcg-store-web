"use client"

import { useState } from "react"
import { useCart } from "./CartContext"

interface Props {
  variantId: string
}

export default function AddToCartButton({ variantId }: Props) {
  const { addToCart, isLoading } = useCart()
  const [added, setAdded] = useState(false)

  async function handleClick() {
    await addToCart(variantId)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="rounded-lg border px-4 py-2 md:px-6 md:py-3 md:text-lg md:w-full bg-black text-white font-semibold cursor-pointer disabled:opacity-50"
    >
      {isLoading ? "Adding..." : added ? "Added!" : "Add to Cart"}
    </button>
  )
}
