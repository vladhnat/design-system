"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { TagToggle } from "@/components/ui/tag-toggle"
import { Flex } from "@/components/ui/flex"

export interface TagToggleItem {
  id: string
  label: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
}

export interface TagToggleGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  items: TagToggleItem[]
  selectedIds?: string[]
  onSelectionChange?: (selectedIds: string[]) => void
  multiple?: boolean
}

const TagToggleGroup = React.forwardRef<HTMLDivElement, TagToggleGroupProps>(
  (
    {
      className,
      label,
      items,
      selectedIds = [],
      onSelectionChange,
      multiple = false,
      ...props
    },
    ref
  ) => {
    const handleToggle = (id: string, selected: boolean) => {
      if (multiple) {
        const newSelection = selected
          ? [...selectedIds, id]
          : selectedIds.filter((selectedId) => selectedId !== id)
        onSelectionChange?.(newSelection)
      } else {
        onSelectionChange?.(selected ? [id] : [])
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        {label && (
          <Label className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {label}
          </Label>
        )}
        <Flex wrap gap="400">
          {items.map((item) => (
            <TagToggle
              key={item.id}
              id={item.id}
              iconStart={item.iconStart}
              iconEnd={item.iconEnd}
              selected={selectedIds.includes(item.id)}
              onToggle={handleToggle}
            >
              {item.label}
            </TagToggle>
          ))}
        </Flex>
      </div>
    )
  }
)
TagToggleGroup.displayName = "TagToggleGroup"

export { TagToggleGroup }

