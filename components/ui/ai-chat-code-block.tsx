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
        "flex items-start border border-[hsl(var(--border-default))] rounded-2xl overflow-hidden w-full",
        className
      )}
      {...props}
    >
      {lineNumbers && (
        <div className="bg-[hsl(var(--bg-default))] border-r border-[hsl(var(--border-default))] px-2 py-4 w-12 shrink-0">
          <div className="font-mono text-base font-normal leading-[1.3] text-[hsl(var(--text-tertiary))] text-right">
            {Array.from({ length: lineCount }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-[hsl(var(--bg-secondary))] border-r border-[hsl(var(--border-default))] px-2 py-4 flex-1 overflow-x-auto">
        <pre className="font-mono text-base font-normal leading-[1.3] text-[#abb2bf] m-0">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
})
AiChatCodeBlock.displayName = "AiChatCodeBlock"

export { AiChatCodeBlock }

