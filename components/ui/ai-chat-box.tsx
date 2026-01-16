"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Image, Code, Mic, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const aiChatBoxVariants = cva(
  "flex flex-col gap-6 p-4 rounded-2xl border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))]",
  {
    variants: {
      state: {
        Default: "",
        Active: "border-[hsl(var(--border-brand))]",
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
            "w-full resize-none border-0 bg-transparent text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] placeholder:text-[hsl(var(--text-tertiary))] focus-visible:outline-none",
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
              <Image className="h-5 w-5 text-[hsl(var(--icon-default))]" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onCodeClick}
              disabled={disabled}
              className="h-8 w-8 rounded-full p-2 hover:bg-transparent"
            >
              <Code className="h-5 w-5 text-[hsl(var(--icon-default))]" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onMicClick}
              disabled={disabled}
              className="h-8 w-8 rounded-full p-2 hover:bg-transparent"
            >
              <Mic className="h-5 w-5 text-[hsl(var(--icon-default))]" />
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
                ? "bg-[hsl(var(--bg-disabled))] border border-[hsl(var(--border-disabled))]"
                : "bg-[hsl(var(--bg-brand))] hover:bg-[hsl(var(--bg-brand))]/90"
            )}
          >
            <ArrowUp
              className={cn(
                "h-5 w-5",
                disabled || !value?.trim()
                  ? "text-[hsl(var(--text-disabled))]"
                  : "text-[hsl(var(--text-on-brand))]"
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

