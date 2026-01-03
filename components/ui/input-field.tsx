"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface InputFieldProps
  extends React.ComponentProps<typeof Input> {
  label?: string
  error?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || React.useId()

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Label
            htmlFor={inputId}
            className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]"
          >
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 rounded-lg border border-[#d9d9d9] bg-[#ffffff] px-3 py-2 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] placeholder:text-[#b3b3b3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2c2c] focus-visible:ring-offset-2",
            error && "border-[#ec221f]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]">
            {error}
          </p>
        )}
      </div>
    )
  }
)
InputField.displayName = "InputField"

export { InputField }

