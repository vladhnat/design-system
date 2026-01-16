"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export interface RadioFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options: Array<{ value: string; label: string }>
  error?: string
}

const RadioField = React.forwardRef<HTMLDivElement, RadioFieldProps>(
  (
    {
      className,
      label,
      description,
      value,
      defaultValue,
      onValueChange,
      options,
      error,
      ...props
    },
    ref
  ) => {
    const fieldId = React.useId()

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {label && (
          <Label className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {label}
          </Label>
        )}
        {description && (
          <p className="text-base font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]">
            {description}
          </p>
        )}
        <RadioGroup
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
        >
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={`${fieldId}-${option.value}`} />
              <Label
                htmlFor={`${fieldId}-${option.value}`}
                className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter]">
            {error}
          </p>
        )}
      </div>
    )
  }
)
RadioField.displayName = "RadioField"

export { RadioField }

