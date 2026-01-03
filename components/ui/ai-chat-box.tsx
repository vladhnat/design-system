"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Image, Code, Mic, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const aiChatBoxVariants = cva(
  "flex flex-col gap-6 p-4 rounded-2xl border border-[#d9d9d9] bg-[#ffffff]",
  {
    variants: {
      state: {
        Default: "",
        Active: "border-[#2c2c2c]",
      },
    },
    defaultVariants: {
      state: "Default",
    },
  }
)

export interface AiChatBoxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    VariantProps<typeof aiChatBoxVariants> {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onImageClick?: () => void
  onCodeClick?: () => void
  onMicClick?: () => void
  onSendClick?: () => void
  disabled?: boolean
}

const AiChatBox = React.forwardRef<HTMLDivElement, AiChatBoxProps>(
  (
    {
      className,
      state = "Default",
      placeholder = "What would you like to know?",
      value,
      onChange,
      onImageClick,
      onCodeClick,
      onMicClick,
      onSendClick,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)

    return (
      <div
        ref={ref}
        className={cn(aiChatBoxVariants({ state, className }))}
        {...props}
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full resize-none border-0 bg-transparent text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] placeholder:text-[#b3b3b3] focus-visible:outline-none",
            "min-h-[22px]"
          )}
          rows={1}
        />
        <div className="flex items-start justify-between w-full">
          <div className="flex gap-2 items-center">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onImageClick}
              disabled={disabled}
              className="h-8 w-8 rounded-full p-2 hover:bg-transparent"
            >
              <Image className="h-5 w-5 text-[#1e1e1e]" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onCodeClick}
              disabled={disabled}
              className="h-8 w-8 rounded-full p-2 hover:bg-transparent"
            >
              <Code className="h-5 w-5 text-[#1e1e1e]" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onMicClick}
              disabled={disabled}
              className="h-8 w-8 rounded-full p-2 hover:bg-transparent"
            >
              <Mic className="h-5 w-5 text-[#1e1e1e]" />
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={onSendClick}
            disabled={disabled || !value?.trim()}
            className={cn(
              "h-8 w-8 rounded-full p-2",
              disabled || !value?.trim()
                ? "bg-[#d9d9d9] border border-[#b3b3b3]"
                : "bg-[#2c2c2c] hover:bg-[#2c2c2c]/90"
            )}
          >
            <ArrowUp
              className={cn(
                "h-5 w-5",
                disabled || !value?.trim()
                  ? "text-[#b3b3b3]"
                  : "text-[#f5f5f5]"
              )}
            />
          </Button>
        </div>
      </div>
    )
  }
)
AiChatBox.displayName = "AiChatBox"

export { AiChatBox, aiChatBoxVariants }

