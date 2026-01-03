"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface AiChatCodeBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  lineNumbers?: boolean
}

const AiChatCodeBlock = React.forwardRef<
  HTMLDivElement,
  AiChatCodeBlockProps
>(({ className, code, language, lineNumbers = true, ...props }, ref) => {
  const lines = code.split("\n")
  const lineCount = lines.length

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-start border border-[#d9d9d9] rounded-2xl overflow-hidden w-full",
        className
      )}
      {...props}
    >
      {lineNumbers && (
        <div className="bg-[#ffffff] border-r border-[#d9d9d9] px-2 py-4 w-12 shrink-0">
          <div className="font-mono text-base font-normal leading-[1.3] text-[#b3b3b3] text-right">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-[#f5f5f5] border-r border-[#d9d9d9] px-2 py-4 flex-1 overflow-x-auto">
        <pre className="font-mono text-base font-normal leading-[1.3] text-[#abb2bf] m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
})
AiChatCodeBlock.displayName = "AiChatCodeBlock"

export { AiChatCodeBlock }

