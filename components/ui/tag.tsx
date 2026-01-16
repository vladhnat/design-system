"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const tagVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold leading-none font-[Inter] transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[hsl(var(--bg-brand))] text-[hsl(var(--text-on-brand))]",
        secondary: "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-default))]",
        destructive: "bg-[hsl(var(--bg-danger))] text-[hsl(var(--text-on-danger))]",
        outline: "border border-[hsl(var(--border-default))] bg-transparent text-[hsl(var(--text-default))]",
      },
      scheme: {
        neutral: "",
        brand: "",
      },
    },
    defaultVariants: {
      variant: "default",
      scheme: "neutral",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void
  removable?: boolean
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, scheme, onRemove, removable, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(tagVariants({ variant, scheme, className }))}
        {...props}
      >
        <span>{children}</span>
        {(removable || onRemove) && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-4 w-4 rounded-full p-0 hover:bg-transparent"
            onClick={onRemove}
            aria-label="Remove tag"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>
    )
  }
)
Tag.displayName = "Tag"

export { Tag, tagVariants }

