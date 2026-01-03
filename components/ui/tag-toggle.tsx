"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface TagToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  selected?: boolean
  onToggle?: (id: string, selected: boolean) => void
}

const TagToggle = React.forwardRef<HTMLButtonElement, TagToggleProps>(
  (
    {
      className,
      id,
      iconStart,
      iconEnd,
      selected = false,
      onToggle,
      children,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      onToggle?.(id, !selected)
    }

    return (
      <Button
        ref={ref}
        type="button"
        variant={selected ? "default" : "outline"}
        size="sm"
        onClick={handleClick}
        className={cn("gap-2", className)}
        {...props}
      >
        {iconStart && <span className="h-4 w-4">{iconStart}</span>}
        {children}
        {iconEnd && <span className="h-4 w-4">{iconEnd}</span>}
      </Button>
    )
  }
)
TagToggle.displayName = "TagToggle"

export { TagToggle }

