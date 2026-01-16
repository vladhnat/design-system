"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const navigationVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    gap: {
      "200": "gap-2", // 8px
      "400": "gap-4", // 16px
    },
  },
  defaultVariants: {
    direction: "row",
    gap: "200",
  },
})

export interface NavigationProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navigationVariants> {
  children: React.ReactNode
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, direction, gap, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(navigationVariants({ direction, gap, className }))}
        {...props}
      >
        {children}
      </nav>
    )
  }
)
Navigation.displayName = "Navigation"

const navigationPillVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 rounded-lg text-base font-normal leading-[1.4] font-[Inter] transition-colors cursor-pointer",
  {
    variants: {
      isSelected: {
        true: "bg-[hsl(var(--bg-brand))] text-[hsl(var(--text-on-brand))]",
        false: "bg-transparent text-[hsl(var(--text-default))] hover:bg-[hsl(var(--bg-secondary))]",
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  }
)

export interface NavigationPillProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navigationPillVariants> {
  isSelected?: boolean
  onSelect?: () => void
}

const NavigationPill = React.forwardRef<HTMLButtonElement, NavigationPillProps>(
  ({ className, isSelected, onSelect, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        className={cn(navigationPillVariants({ isSelected, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)
NavigationPill.displayName = "NavigationPill"

export { Navigation, NavigationPill, navigationVariants, navigationPillVariants }

