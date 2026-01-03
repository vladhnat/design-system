"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  action: string
  actionVariant?: "primary" | "neutral"
  onAction?: () => void
  listSlot: React.ReactNode
  interval?: string
  sku?: string
  price: string
  priceCurrency?: string
  priceLabel?: string
  size?: "default" | "large"
  variant?: "default" | "stroke"
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      heading,
      action,
      actionVariant = "primary",
      onAction,
      listSlot,
      interval,
      sku,
      price,
      priceCurrency = "$",
      priceLabel,
      size = "default",
      variant = "default",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-6 p-6 rounded-lg",
          variant === "stroke" ? "border border-[#d9d9d9] bg-[#ffffff]" : "bg-[#ffffff]",
          size === "large" && "p-8",
          className
        )}
        {...props}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]">
            {heading}
          </h3>
          {sku && (
            <p className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
              {sku}
            </p>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]">
            {priceCurrency}
            {price}
          </span>
          {priceLabel && (
            <span className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
              {priceLabel}
            </span>
          )}
          {interval && (
            <span className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
              / {interval}
            </span>
          )}
        </div>
        <div>{listSlot}</div>
        <ButtonGroup align="justify">
          <Button
            variant={actionVariant === "primary" ? "default" : "subtle"}
            onClick={onAction}
            className="w-full"
          >
            {action}
          </Button>
        </ButtonGroup>
      </div>
    )
  }
)
PricingCard.displayName = "PricingCard"

export { PricingCard }

