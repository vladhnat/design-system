import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div"
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]",
          className
        )}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text }

