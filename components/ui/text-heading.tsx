import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const TextHeading = React.forwardRef<HTMLHeadingElement, TextHeadingProps>(
  ({ className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[hsl(var(--text-default))] font-[Inter]",
          className
        )}
        {...props}
      />
    )
  }
)
TextHeading.displayName = "TextHeading"

export { TextHeading }

