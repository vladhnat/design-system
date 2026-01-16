"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export interface CheckboxFieldProps
  extends React.ComponentProps<typeof Checkbox> {
  label?: string
  description?: string
  error?: string
}

const CheckboxField = React.forwardRef<
  React.ElementRef<typeof Checkbox>,
  CheckboxFieldProps
>(({ className, label, description, error, id, ...props }, ref) => {
  const checkboxId = id || React.useId()

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-start gap-2">
        <Checkbox
          ref={ref}
          id={checkboxId}
          className={cn(
            "mt-0.5 h-4 w-4 rounded border-[hsl(var(--text-default))] data-[state=checked]:bg-[hsl(var(--bg-brand))] data-[state=checked]:text-[hsl(var(--text-on-brand))]",
            error && "border-[hsl(var(--border-danger))]",
            className
          )}
          {...props}
        />
        <div className="flex flex-col gap-1">
          {label && (
            <Label
              htmlFor={checkboxId}
              className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer"
            >
              {label}
            </Label>
          )}
          {description && (
            <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]">
              {description}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter] ml-6">
          {error}
        </p>
      )}
    </div>
  )
})
CheckboxField.displayName = "CheckboxField"

export { CheckboxField }

