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
          className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer"
        >
          {label}
        </Label>
      )}
      <Textarea
        ref={ref}
        id={textareaId}
        className={cn(
          "min-h-[80px] rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))] px-3 py-2 text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] placeholder:text-[hsl(var(--text-tertiary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--bg-brand))] focus-visible:ring-offset-2 resize-y",
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
})
TextareaField.displayName = "TextareaField"

export { TextareaField }

