"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"

export interface SliderFieldProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue"> {
  label?: string
  description?: string
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  showOutput?: boolean
  error?: string
}

const SliderField = React.forwardRef<HTMLDivElement, SliderFieldProps>(
  (
    {
      className,
      label,
      description,
      value,
      defaultValue,
      onValueChange,
      min = 0,
      max = 100,
      step = 1,
      showOutput = false,
      error,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = React.useState<number[]>(
      value || defaultValue || [50]
    )

    React.useEffect(() => {
      if (value !== undefined) {
        setCurrentValue(value)
      }
    }, [value])

    const handleValueChange = (newValue: number[]) => {
      setCurrentValue(newValue)
      onValueChange?.(newValue)
    }

    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        {...props}
      >
        <div className="flex items-center justify-between">
          {label && (
            <Label className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer">
              {label}
            </Label>
          )}
          {showOutput && (
            <span className="text-sm font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
              {currentValue[0]}
            </span>
          )}
        </div>
        {description && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]">
            {description}
          </p>
        )}
        <Slider
          value={currentValue}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          min={min}
          max={max}
          step={step}
        />
        {error && (
          <p className="text-sm font-normal leading-[1.4] text-[hsl(var(--bg-danger))] font-[Inter]">
            {error}
          </p>
        )}
      </div>
    )
  }
)
SliderField.displayName = "SliderField"

export { SliderField }

