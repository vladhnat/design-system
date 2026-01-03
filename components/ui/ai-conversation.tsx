"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AiChatUserMessage } from "@/components/ui/ai-chat-user-message"
import { AiChatChatResponse } from "@/components/ui/ai-chat-chat-response"
import { AiChatCodeBlock } from "@/components/ui/ai-chat-code-block"

export interface ConversationMessage {
  type: "user" | "assistant"
  content: string
  code?: string
  icon?: React.ReactNode
}

export interface AiConversationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  messages: ConversationMessage[]
}

const AiConversation = React.forwardRef<HTMLDivElement, AiConversationProps>(
  ({ className, messages, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-6 w-full",
          className
        )}
        {...props}
      >
        {messages.map((message, index) => {
          if (message.type === "user") {
            return (
              <div key={index} className="flex flex-col items-end w-full">
                <AiChatUserMessage message={message.content} />
              </div>
            )
          }

          return (
            <div key={index} className="flex flex-col gap-6 items-start w-full">
              <AiChatChatResponse
                message={message.content}
                icon={message.icon}
              />
              {message.code && (
                <AiChatCodeBlock code={message.code} />
              )}
            </div>
          )
        })}
      </div>
    )
  }
)
AiConversation.displayName = "AiConversation"

export { AiConversation }

