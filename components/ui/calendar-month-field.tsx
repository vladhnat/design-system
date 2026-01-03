"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const monthAbbreviations = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export interface CalendarMonthFieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  onValueChange?: (value: string) => void
  hasLabel?: boolean
  label?: string
  open?: boolean
}

const CalendarMonthField = React.forwardRef<
  HTMLDivElement,
  CalendarMonthFieldProps
>(
  (
    {
      className,
      value = "September",
      onValueChange,
      hasLabel = false,
      label = "Label",
      open = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(open)
    const monthIndex = months.findIndex((m) => m === value)
    const displayValue = monthIndex >= 0 ? monthAbbreviations[monthIndex] : value

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2 items-start", className)}
        {...props}
      >
        {hasLabel && (
          <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] w-full">
            {label}
          </p>
        )}
        <div className="relative w-full">
          <div
            className="bg-[#ffffff] border border-[#d9d9d9] flex gap-2 items-center p-1.5 rounded-lg w-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="flex-1 text-base font-normal leading-none text-[#1e1e1e] font-[Inter]">
              {displayValue}
            </p>
            <ChevronDown className="shrink-0 size-4 text-[#1e1e1e]" />
          </div>
          {isOpen && (
            <div className="absolute bg-[#ffffff] border border-[#d9d9d9] flex flex-col gap-2 items-center p-2 rounded-lg shadow-lg z-50 top-9 left-0 min-w-full">
              {months.map((month) => (
                <button
                  key={month}
                  className="w-full text-left text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] hover:bg-[#f5f5f5] px-2 py-1 rounded"
                  onClick={() => {
                    onValueChange?.(month)
                    setIsOpen(false)
                  }}
                >
                  {month}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
)
CalendarMonthField.displayName = "CalendarMonthField"

export { CalendarMonthField }

