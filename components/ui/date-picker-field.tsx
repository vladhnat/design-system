"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const datePickerFieldVariants = cva("flex flex-col gap-2", {
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

export interface DatePickerFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof datePickerFieldVariants> {
  label?: string
  description?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  valueType?: "Default" | "Placeholder"
}

const DatePickerField = React.forwardRef<HTMLDivElement, DatePickerFieldProps>(
  (
    {
      className,
      label,
      description,
      value,
      placeholder = "Value",
      state = "Default",
      valueType = "Default",
      onChange,
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
        className={cn(datePickerFieldVariants({ state, className }))}
        {...props}
      >
        {label && (
          <Label className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer">
            {label}
          </Label>
        )}
        {description && (
          <p className="text-base font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]">
            {description}
          </p>
        )}
        <div className="relative">
          <Input
            value={isPlaceholder ? "" : value}
            placeholder={isPlaceholder ? placeholder : undefined}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isDisabled}
            className={cn(
              "pr-10",
              hasError && "border-[hsl(var(--border-danger))]",
              isPlaceholder && "text-[hsl(var(--text-tertiary))]"
            )}
          />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--icon-default))] pointer-events-none" />
        </div>
      </div>
    )
  }
)
DatePickerField.displayName = "DatePickerField"

export { DatePickerField, datePickerFieldVariants }

