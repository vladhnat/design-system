"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calendarButtonVariants = cva(
  "flex items-center justify-center p-4 rounded-lg size-10 text-base font-normal leading-[1.4] text-center font-[Inter] transition-colors cursor-pointer",
  {
    variants: {
      state: {
        Default: "text-[hsl(var(--text-default))]",
        Hover: "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-default))]",
        Active: "bg-[hsl(var(--bg-brand))] text-[hsl(var(--text-on-brand))]",
        Disabled: "text-[hsl(var(--text-tertiary))]",
        Range: "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-brand))]",
        "Range Disabled": "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-tertiary))]",
        Hidden: "opacity-0 pointer-events-none",
      },
    },
    defaultVariants: {
      state: "Default",
    },
  }
)

export interface CalendarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof calendarButtonVariants> {
  number?: string | number
}

const CalendarButton = React.forwardRef<HTMLButtonElement, CalendarButtonProps>(
  ({ className, state = "Default", number, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(calendarButtonVariants({ state, className }))}
        {...props}
      >
        {children || number}
      </button>
    )
  }
)
CalendarButton.displayName = "CalendarButton"

export { CalendarButton, calendarButtonVariants }

