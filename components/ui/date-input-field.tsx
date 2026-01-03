"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const dateInputFieldVariants = cva("flex flex-col gap-2", {
  variants: {
    state: {
      Default: "",
      Error: "",
      Disabled: "",
    },
  },
  defaultVariants: {
    state: "Default",
  },
})

export interface DateInputFieldProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dateInputFieldVariants> {
  label?: string
  description?: string
  day?: string
  month?: string
  year?: string
  onDayChange?: (value: string) => void
  onMonthChange?: (value: string) => void
  onYearChange?: (value: string) => void
  valueType?: "Default" | "Placeholder"
}

const DateInputField = React.forwardRef<HTMLDivElement, DateInputFieldProps>(
  (
    {
      className,
      label,
      description,
      day = "DD",
      month = "MM",
      year = "YYYY",
      state = "Default",
      valueType = "Default",
      onDayChange,
      onMonthChange,
      onYearChange,
      ...props
    },
    ref
  ) => {
    const isPlaceholder = valueType === "Placeholder"
    const isDisabled = state === "Disabled"
    const hasError = state === "Error"

    return (
      <div
        ref={ref}
        className={cn(dateInputFieldVariants({ state, className }))}
        {...props}
      >
        {label && (
          <Label className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {label}
          </Label>
        )}
        {description && (
          <p className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
            {description}
          </p>
        )}
        <div className="flex gap-2">
          <Input
            value={isPlaceholder ? "" : day}
            placeholder={isPlaceholder ? day : undefined}
            onChange={(e) => onDayChange?.(e.target.value)}
            disabled={isDisabled}
            className={cn(
              "flex-1",
              hasError && "border-[#ec221f]",
              isPlaceholder && "text-[#b3b3b3]"
            )}
          />
          <Input
            value={isPlaceholder ? "" : month}
            placeholder={isPlaceholder ? month : undefined}
            onChange={(e) => onMonthChange?.(e.target.value)}
            disabled={isDisabled}
            className={cn(
              "flex-1",
              hasError && "border-[#ec221f]",
              isPlaceholder && "text-[#b3b3b3]"
            )}
          />
          <Input
            value={isPlaceholder ? "" : year}
            placeholder={isPlaceholder ? year : undefined}
            onChange={(e) => onYearChange?.(e.target.value)}
            disabled={isDisabled}
            className={cn(
              "flex-1",
              hasError && "border-[#ec221f]",
              isPlaceholder && "text-[#b3b3b3]"
            )}
          />
        </div>
      </div>
    )
  }
)
DateInputField.displayName = "DateInputField"

export { DateInputField, dateInputFieldVariants }

