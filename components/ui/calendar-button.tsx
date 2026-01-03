"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calendarButtonVariants = cva(
  "flex items-center justify-center p-4 rounded-lg size-10 text-base font-normal leading-[1.4] text-center font-[Inter] transition-colors",
  {
    variants: {
      state: {
        Default: "text-[#1e1e1e]",
        Hover: "bg-[#f5f5f5] text-[#1e1e1e]",
        Active: "bg-[#2c2c2c] text-[#f5f5f5]",
        Disabled: "text-[#b3b3b3]",
        Range: "bg-[#f5f5f5] text-[#2c2c2c]",
        "Range Disabled": "bg-[#f5f5f5] text-[#b3b3b3]",
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

