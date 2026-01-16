"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export interface SwitchFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  error?: string
}

const SwitchField = React.forwardRef<HTMLDivElement, SwitchFieldProps>(
  (
    {
      className,
      label,
      description,
      checked,
      defaultChecked,
      onCheckedChange,
      disabled,
      error,
      ...props
    },
    ref
  ) => {
    const switchId = React.useId()

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        <div className="flex items-center gap-2">
          <Switch
            id={switchId}
            checked={checked}
            defaultChecked={defaultChecked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
          />
          {label && (
            <Label
              htmlFor={switchId}
              className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer"
            >
              {label}
            </Label>
          )}
        </div>
        {description && (
          <p className="text-base font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter] pl-10">
            {description}
          </p>
        )}
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter] pl-10">
            {error}
          </p>
        )}
      </div>
    )
  }
)
SwitchField.displayName = "SwitchField"

export { SwitchField }

