import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold leading-none transition-colors focus:outline-none focus:ring-2 focus:ring-[hsl(var(--bg-brand))] focus:ring-offset-2 font-[Inter]",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[hsl(var(--bg-brand))] text-[hsl(var(--text-on-brand))] hover:bg-[hsl(var(--bg-brand))]/80",
        secondary:
          "border-transparent bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-default))] hover:bg-[hsl(var(--bg-secondary))]/80",
        destructive:
          "border-transparent bg-[hsl(var(--bg-danger))] text-[hsl(var(--text-on-danger))] hover:bg-[hsl(var(--bg-danger))]/80",
        outline: "text-[hsl(var(--text-default))] border-[hsl(var(--border-default))]",
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
