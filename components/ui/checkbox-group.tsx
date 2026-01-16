"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckboxField } from "@/components/ui/checkbox-field"
import { Flex } from "@/components/ui/flex"

export interface CheckboxGroupItem {
  value: string
  label: string
  description?: string
}

export interface CheckboxGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: CheckboxGroupItem[]
  selectedValues?: string[]
  onSelectionChange?: (selectedValues: string[]) => void
  error?: string
}

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      items,
      selectedValues = [],
      onSelectionChange,
      error,
      ...props
    },
    ref
  ) => {
    const handleChange = (value: string, checked: boolean) => {
      const newSelection = checked
        ? [...selectedValues, value]
        : selectedValues.filter((selectedValue) => selectedValue !== value)
      onSelectionChange?.(newSelection)
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", className)}
        {...props}
      >
        <Flex direction="column" gap="400">
          {items.map((item) => (
            <CheckboxField
              key={item.value}
              label={item.label}
              description={item.description}
              checked={selectedValues.includes(item.value)}
              onCheckedChange={(checked) => {
                if (typeof checked === "boolean") {
                  handleChange(item.value, checked)
                }
              }}
            />
          ))}
        </Flex>
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter]">
            {error}
          </p>
        )}
      </div>
    )
  }
)
CheckboxGroup.displayName = "CheckboxGroup"

export { CheckboxGroup }

