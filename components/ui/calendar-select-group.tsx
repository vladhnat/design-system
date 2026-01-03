"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CalendarMonthField } from "@/components/ui/calendar-month-field"
import { CalendarYearField } from "@/components/ui/calendar-year-field"

export interface CalendarSelectGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  month?: string
  year?: string | number
  onMonthChange?: (month: string) => void
  onYearChange?: (year: string) => void
}

const CalendarSelectGroup = React.forwardRef<
  HTMLDivElement,
  CalendarSelectGroupProps
>(
  (
    {
      className,
      month = "September",
      year = "2025",
      onMonthChange,
      onYearChange,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("flex gap-2 items-start", className)}
        {...props}
      >
        <CalendarMonthField
          value={month}
          onValueChange={onMonthChange}
          className="flex-1"
        />
        <CalendarYearField
          value={year}
          onValueChange={onYearChange}
          className="flex-1"
        />
      </div>
    )
  }
)
CalendarSelectGroup.displayName = "CalendarSelectGroup"

export { CalendarSelectGroup }

