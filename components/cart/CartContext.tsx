"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { cartCreate, cartLinesAdd, getCart } from "@/lib/shopify"

type Money = {
  amount: string
  currencyCode: string
}

export type CartLine = {
  id: string
  quantity: number
  title: string
  imageUrl: string | null
  price: Money
  lineTotal: Money
}

export type Cart = {
  id: string
  checkoutUrl: string
  subtotal: Money
  total: Money
  lines: CartLine[]
}

type CartContextType = {
  cart: Cart | null
  itemCount: number
  isLoading: boolean
  addToCart: (variantId: string, quantity?: number) => Promise<void>
}

const CartContext = createContext<CartContextType | null>(null)

function parseCart(cart: {
  id: string
  checkoutUrl: string
  cost: {
    subtotalAmount: Money
    totalAmount: Money
  }
  lines: {
    edges: {
      node: {
        id: string
        quantity: number
        cost: { totalAmount: Money }
        merchandise: {
          title: string
          price: Money
          image?: { url: string } | null
          product?: { title: string }
        }
      }
    }[]
  }
}): Cart {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    subtotal: cart.cost.subtotalAmount,
    total: cart.cost.totalAmount,
    lines: cart.lines.edges.map(({ node }) => ({
      id: node.id,
      quantity: node.quantity,
      title: node.merchandise.product?.title ?? node.merchandise.title,
      imageUrl: node.merchandise.image?.url ?? null,
      price: node.merchandise.price,
      lineTotal: node.cost.totalAmount,
    })),
  }
}

function getItemCount(cart: Cart | null) {
  return cart?.lines.reduce((sum, line) => sum + line.quantity, 0) ?? 0
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCartId = localStorage.getItem("cartId")
    if (!savedCartId) return

    getCart(savedCartId).then((data) => {
      if (data) setCart(parseCart(data))
    })
  }, [])

  async function addToCart(variantId: string, quantity = 1) {
    setIsLoading(true)
    try {
      const savedCartId = localStorage.getItem("cartId")
      const updatedCart = savedCartId
        ? await cartLinesAdd(savedCartId, variantId, quantity)
        : await cartCreate(variantId, quantity)

      if (!updatedCart) return

      localStorage.setItem("cartId", updatedCart.id)
      setCart(parseCart(updatedCart))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        itemCount: getItemCount(cart),
        isLoading,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
