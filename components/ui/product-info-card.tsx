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
          "flex flex-col gap-4 p-6 rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))]",
          className
        )}
        {...props}
      >
        <div className="w-full aspect-square rounded-lg overflow-hidden bg-[hsl(var(--bg-muted))]">
          {asset}
        </div>
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-[hsl(var(--bg-brand))] text-[hsl(var(--bg-brand))]" />
          <span className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {rating}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {heading}
          </h3>
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {description}
          </p>
        </div>
        <div className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
          {price}
        </div>
      </div>
    )
  }
)
ProductInfoCard.displayName = "ProductInfoCard"

export { ProductInfoCard }

