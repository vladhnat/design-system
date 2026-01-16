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
              className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer"
            >
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          id={inputId}
          className={cn(
            "h-10 rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))] px-3 py-2 text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] placeholder:text-[hsl(var(--text-tertiary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--bg-brand))] focus-visible:ring-offset-2",
            error && "border-[hsl(var(--border-danger))]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter]">
            {error}
          </p>
        )}
      </div>
    )
  }
)
InputField.displayName = "InputField"

export { InputField }

