"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textContentTitleVariants = cva("flex flex-col gap-2", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    },
  },
  defaultVariants: {
    align: "left",
  },
})

export interface TextContentTitleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textContentTitleVariants> {
  title: string
  subtitle?: string
}

const TextContentTitle = React.forwardRef<
  HTMLDivElement,
  TextContentTitleProps
>(({ className, title, subtitle, align, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(textContentTitleVariants({ align, className }))}
      {...props}
    >
      <h1 className="text-5xl font-bold leading-[1.2] tracking-[-0.03em] text-[#1e1e1e] font-[Inter]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl font-normal leading-[1.2] text-[#757575] font-[Inter]">
          {subtitle}
        </p>
      )}
    </div>
  )
})
TextContentTitle.displayName = "TextContentTitle"

export { TextContentTitle, textContentTitleVariants }

