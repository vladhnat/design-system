"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormBoxProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const FormBox = React.forwardRef<HTMLFormElement, FormBoxProps>(
  ({ className, onSubmit, children, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit?.(e)
    }

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn("flex flex-col gap-6", className)}
        {...props}
      >
        {children}
      </form>
    )
  }
)
FormBox.displayName = "FormBox"

export { FormBox }

