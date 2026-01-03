"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AiChatChatResponseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  message: string
  icon?: React.ReactNode
}

const AiChatChatResponse = React.forwardRef<
  HTMLDivElement,
  AiChatChatResponseProps
>(({ className, message, icon, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-2 items-start rounded-lg w-full max-w-[560px]",
        className
      )}
      {...props}
    >
      {icon && <div className="h-5 w-5 shrink-0 mt-0.5">{icon}</div>}
      <p className="flex-1 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
        {message}
      </p>
    </div>
  )
})
AiChatChatResponse.displayName = "AiChatChatResponse"

export { AiChatChatResponse }

