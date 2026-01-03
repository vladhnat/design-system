"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export interface ProductInfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  asset: React.ReactNode
  rating: number
  heading: string
  price: string
  description: string
}

const ProductInfoCard = React.forwardRef<HTMLDivElement, ProductInfoCardProps>(
  ({ className, asset, rating, heading, price, description, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 p-6 rounded-lg border border-[#d9d9d9] bg-[#ffffff]",
          className
        )}
        {...props}
      >
        <div className="w-full aspect-square rounded-lg overflow-hidden bg-[#E3E3E3]">
          {asset}
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-[#2c2c2c] text-[#2c2c2c]" />
          <span className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {rating}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {heading}
          </h3>
          <p className="text-sm font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {description}
          </p>
        </div>
        <div className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
          {price}
        </div>
      </div>
    )
  }
)
ProductInfoCard.displayName = "ProductInfoCard"

export { ProductInfoCard }

