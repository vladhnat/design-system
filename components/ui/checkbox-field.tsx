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
            "mt-0.5 h-4 w-4 rounded border-[#1e1e1e] data-[state=checked]:bg-[#2c2c2c] data-[state=checked]:text-[#f5f5f5]",
            error && "border-[#ec221f]",
            className
          )}
          {...props}
        />
        <div className="flex flex-col gap-1">
          {label && (
            <Label
              htmlFor={checkboxId}
              className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] cursor-pointer"
            >
              {label}
            </Label>
          )}
          {description && (
            <p className="text-sm font-normal leading-[1.4] text-[#757575] font-[Inter]">
              {description}
            </p>
          )}
        </div>
      </div>
      {error && (
        <p className="text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter] ml-6">
          {error}
        </p>
      )}
    </div>
  )
})
CheckboxField.displayName = "CheckboxField"

export { CheckboxField }

