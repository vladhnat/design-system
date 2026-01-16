"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const formVariants = cva("flex", {
  variants: {
    singleLine: {
      true: "items-center gap-0 rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))] overflow-hidden",
      false: "flex-col gap-6",
    },
  },
  defaultVariants: {
    singleLine: false,
  },
})

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, singleLine, onSubmit, children, ...props }, ref) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit?.(e)
    }

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cn(formVariants({ singleLine, className }))}
        {...props}
      >
        {singleLine
          ? React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                const childProps = child.props as { className?: string }
                return React.cloneElement(child as React.ReactElement<{ className?: string }>, {
                  className: cn(
                    index === 0 && "rounded-l-lg rounded-r-none border-r-0",
                    index === React.Children.count(children) - 1 &&
                      "rounded-r-lg rounded-l-none",
                    childProps.className
                  ),
                })
              }
              return child
            })
          : children}
      </form>
    )
  }
)
Form.displayName = "Form"

export { Form, formVariants }

