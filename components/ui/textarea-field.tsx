"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export interface TextareaFieldProps
  extends React.ComponentProps<typeof Textarea> {
  label?: string
  error?: string
}

const TextareaField = React.forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ className, label, error, id, ...props }, ref) => {
  const textareaId = id || React.useId()

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label
          htmlFor={textareaId}
          className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]"
        >
          {label}
        </Label>
      )}
      <Textarea
        ref={ref}
        id={textareaId}
        className={cn(
          "min-h-[80px] rounded-lg border border-[#d9d9d9] bg-[#ffffff] px-3 py-2 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] placeholder:text-[#b3b3b3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2c2c] focus-visible:ring-offset-2 resize-y",
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
})
TextareaField.displayName = "TextareaField"

export { TextareaField }

