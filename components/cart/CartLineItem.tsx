import { formatPrice } from "@/lib/utils"
import Image from "next/image"
import { CartLine, useCart } from "./CartContext"



interface Props {
  line: CartLine
}

export default function CartLineItem({ line }: Props) {
  const {removeFromCart} = useCart()
  return (
    <div className="grid grid-cols-[1fr_auto] md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-x-2 md:gap-x-4 border-b py-4 md:py-6  ">
      <div className="flex gap-4 items-start min-w-0 pr-4 ">
        {line.imageUrl ? (
          <div className="relative size-16 md:size-20 shrink-0 ">
            <Image
              src={line.imageUrl}
              alt={line.title}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <div className="size-16 md:size-20 shrink-0 bg-gray-100 rounded" />
        )}

        <div className="min-w-0 flex-1">
          <div className="font-semibold">{line.title}</div>
          <div className="md:hidden flex flex-col gap-1 text-sm text-gray-600 mt-1">
            <span>{formatPrice(line.price.amount, line.price.currencyCode)}</span>
          </div>
        </div>
      </div>

      <span className="hidden md:block text-center">
        {formatPrice(line.price.amount, line.price.currencyCode)}
      </span>

      <span className="hidden md:block text-center">{line.quantity}</span>
      
      <div className="flex flex-col gap-2">
         <span className="font-semibold text-center">
        {formatPrice(line.lineTotal.amount, line.lineTotal.currencyCode)}
      </span>
      <button
          onClick={() => removeFromCart(line.id)}
          className="cursor-pointer text-sm md:text-base text-gray-500 hover:text-gray-700 underline underline-offset-2"
        >
          Remove
        </button>
      </div>
     
    </div>
  )
}
