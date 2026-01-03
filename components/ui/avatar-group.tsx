"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "100" | "200" | "300" | "400"
  max?: number
  size?: "sm" | "default" | "large"
}

const spacingMap = {
  "100": "-ml-1", // 4px overlap (Space/100)
  "200": "-ml-2", // 8px overlap (Space/200)
  "300": "-ml-3", // 12px overlap (Space/300)
  "400": "-ml-4", // 16px overlap (Space/400)
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, spacing = "100", max, size = "large", children, ...props }, ref) => {
    const avatars = React.Children.toArray(children)
    const visibleAvatars = max ? avatars.slice(0, max) : avatars
    const remainingCount = max && avatars.length > max ? avatars.length - max : 0

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {React.Children.map(visibleAvatars, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              className: cn(
                index > 0 && spacingMap[spacing],
                child.props.className
              ),
              size: child.props.size || size,
            })
          }
          return child
        })}
        {remainingCount > 0 && (
          <div
            className={cn(
              "flex items-center justify-center rounded-lg bg-[#f5f5f5] text-sm font-normal leading-[1.4] text-[#303030] font-[Inter]",
              spacingMap[spacing],
              size === "sm" && "h-8 w-8",
              size === "default" && "h-10 w-10",
              size === "large" && "h-10 w-10"
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { AvatarGroup }

