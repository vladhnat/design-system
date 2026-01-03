"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export interface SelectFieldProps
  extends React.ComponentProps<typeof Select> {
  label?: string
  placeholder?: string
  error?: string
  className?: string
  id?: string
  children: React.ReactNode
}

const SelectField = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  SelectFieldProps
>(({ className, label, placeholder, error, id, children, ...props }, ref) => {
  const selectId = id || React.useId()
  const { value, onValueChange, ...selectProps } = props

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          htmlFor={selectId}
          className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]"
        >
          {label}
        </Label>
      )}
      <Select value={value} onValueChange={onValueChange} {...selectProps}>
        <SelectTrigger
          ref={ref}
          id={selectId}
          className={cn(
            "h-10 rounded-lg border border-[#d9d9d9] bg-[#ffffff] px-3 py-2 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] focus:ring-2 focus:ring-[#2c2c2c] focus:ring-offset-2",
            error && "border-[#ec221f]",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
      {error && (
        <p className="text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]">
          {error}
        </p>
      )}
    </div>
  )
})
SelectField.displayName = "SelectField"

export { SelectField }

