import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))] px-3 py-2 text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] ring-offset-background placeholder:text-[hsl(var(--text-tertiary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--bg-brand))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
