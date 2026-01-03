"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textContentHeadingVariants = cva("flex flex-col gap-2", {
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

export interface TextContentHeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof textContentHeadingVariants> {
  heading: string
  subheading?: string
}

const TextContentHeading = React.forwardRef<
  HTMLDivElement,
  TextContentHeadingProps
>(({ className, heading, subheading, align, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(textContentHeadingVariants({ align, className }))}
      {...props}
    >
      <h2 className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]">
        {heading}
      </h2>
      {subheading && (
        <p className="text-base font-normal leading-[1.2] text-[#757575] font-[Inter]">
          {subheading}
        </p>
      )}
    </div>
  )
})
TextContentHeading.displayName = "TextContentHeading"

export { TextContentHeading, textContentHeadingVariants }

