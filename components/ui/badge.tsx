import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-[#2c2c2c] focus:ring-offset-2 font-[Inter]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#2c2c2c] text-[#f5f5f5] hover:bg-[#2c2c2c]/80",
        secondary:
          "border-transparent bg-[#f5f5f5] text-[#303030] hover:bg-[#f5f5f5]/80",
        destructive:
          "border-transparent bg-[#ec221f] text-[#fee9e7] hover:bg-[#ec221f]/80",
        outline: "text-[#1e1e1e] border-[#d9d9d9]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
