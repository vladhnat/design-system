"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CalendarYearFieldProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value?: string | number
  onValueChange?: (value: string) => void
}

const CalendarYearField = React.forwardRef<
  HTMLDivElement,
  CalendarYearFieldProps
>(({ className, value = "2025", onValueChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 100 }, (_, i) => currentYear - 50 + i)

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 items-start", className)}
      {...props}
    >
      <div className="relative w-full">
        <div
          className="bg-[#ffffff] border border-[#d9d9d9] flex gap-2 items-center p-1.5 rounded-lg w-full cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="flex-1 text-base font-normal leading-none text-[#1e1e1e] font-[Inter]">
            {value}
          </p>
          <ChevronDown className="shrink-0 size-4 text-[#1e1e1e]" />
        </div>
        {isOpen && (
          <div className="absolute bg-[#ffffff] border border-[#d9d9d9] flex flex-col gap-2 items-center p-2 rounded-lg shadow-lg z-50 top-9 left-0 min-w-full max-h-60 overflow-y-auto">
            {years.map((year) => (
              <button
                key={year}
                className="w-full text-left text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] hover:bg-[#f5f5f5] px-2 py-1 rounded"
                onClick={() => {
                  onValueChange?.(String(year))
                  setIsOpen(false)
                }}
              >
                {year}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
})
CalendarYearField.displayName = "CalendarYearField"

export { CalendarYearField }

