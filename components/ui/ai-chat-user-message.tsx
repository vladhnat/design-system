"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AiChatUserMessageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message: string
}

const AiChatUserMessage = React.forwardRef<
  HTMLDivElement,
  AiChatUserMessageProps
>(({ className, message, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-end w-full",
        className
      )}
      {...props}
    >
      <div className="bg-[hsl(var(--bg-secondary))] border border-[hsl(var(--border-default))] rounded-lg px-2 py-1.5 max-w-[480px]">
        <p className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
          {message}
        </p>
      </div>
    </div>
  )
})
AiChatUserMessage.displayName = "AiChatUserMessage"

export { AiChatUserMessage }

