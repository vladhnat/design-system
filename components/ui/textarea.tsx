import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-[#d9d9d9] bg-[#ffffff] px-3 py-2 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] ring-offset-background placeholder:text-[#b3b3b3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2c2c2c] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
