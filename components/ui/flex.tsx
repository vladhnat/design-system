"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    gap: {
      "200": "gap-2", // 8px
      "300": "gap-3", // 12px
      "400": "gap-4", // 16px
      "600": "gap-6", // 24px
      "800": "gap-8", // 32px
      "1200": "gap-12", // 48px
    },
    alignPrimary: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      "space-around": "justify-around",
      stretch: "justify-stretch",
    },
    alignSecondary: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    type: {
      auto: "",
      third: "grid grid-cols-1 md:grid-cols-3",
      quarter: "grid grid-cols-1 md:grid-cols-4",
      half: "grid grid-cols-1 md:grid-cols-2",
    },
    container: {
      true: "container mx-auto px-4",
      false: "",
    },
  },
  defaultVariants: {
    direction: "row",
    wrap: false,
    gap: "400",
    alignPrimary: "start",
    alignSecondary: "start",
    type: "auto",
    container: false,
  },
})

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction,
      wrap,
      gap,
      alignPrimary,
      alignSecondary,
      type,
      container,
      ...props
    },
    ref
  ) => {
    // If type is grid-based, use grid classes instead of flex
    const isGrid = type && type !== "auto"

    return (
      <div
        ref={ref}
        className={cn(
          isGrid
            ? flexVariants({
                type,
                gap,
                alignPrimary,
                alignSecondary,
                container,
                className,
              })
            : flexVariants({
                direction,
                wrap,
                gap,
                alignPrimary,
                alignSecondary,
                container,
                className,
              })
        )}
        {...props}
      />
    )
  }
)
Flex.displayName = "Flex"

const flexItemVariants = cva("", {
  variants: {
    size: {
      full: "w-full",
      major: "flex-1",
      minor: "w-full md:w-1/4",
      half: "w-full md:w-1/2",
    },
  },
  defaultVariants: {
    size: "full",
  },
})

export interface FlexItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexItemVariants> {}

const FlexItem = React.forwardRef<HTMLDivElement, FlexItemProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(flexItemVariants({ size, className }))}
        {...props}
      />
    )
  }
)
FlexItem.displayName = "FlexItem"

export { Flex, FlexItem, flexVariants, flexItemVariants }

