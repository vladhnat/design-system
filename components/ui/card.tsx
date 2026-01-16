import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-lg bg-[hsl(var(--bg-default))] text-[hsl(var(--text-default))]",
  {
    variants: {
      variant: {
        default: "border border-[hsl(var(--border-default))] shadow-sm",
        stroke: "border border-[hsl(var(--border-default))]",
      },
      direction: {
        vertical: "flex flex-col",
        horizontal: "flex flex-row",
      },
    },
    defaultVariants: {
      variant: "default",
      direction: "vertical",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asset?: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, direction, asset, children, ...props }, ref) => {
    const cardContent = (
      <>
        {asset && (
          <div className={cn(
            direction === "horizontal" ? "flex-shrink-0" : "w-full",
            direction === "horizontal" ? "w-40 h-40" : "aspect-square",
            "relative rounded-lg overflow-hidden bg-[hsl(var(--bg-muted))]"
          )}>
            {asset}
          </div>
        )}
        {children}
      </>
    )

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, direction, className }))}
        {...props}
      >
        {cardContent}
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-[hsl(var(--text-default))] font-[Inter]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
