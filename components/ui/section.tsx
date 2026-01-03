"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    padding: {
      "600": "py-6", // 24px
      "800": "py-8", // 32px
      "1200": "py-12", // 48px
      "1600": "py-16", // 64px
    },
  },
  defaultVariants: {
    padding: "1200",
  },
})

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, padding, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, className }))}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }

