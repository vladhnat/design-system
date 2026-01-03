"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface AvatarBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "default" | "large"
}

const AvatarBlock = React.forwardRef<HTMLDivElement, AvatarBlockProps>(
  ({ className, title, description, src, alt, fallback, size = "large", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-3", className)}
        {...props}
      >
        <Avatar size={size}>
          {src && <AvatarImage src={src} alt={alt} />}
          {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
        </Avatar>
        <div className="flex flex-col">
          <div className="text-base font-semibold leading-[1.4] text-[#303030] font-[Inter]">
            {title}
          </div>
          {description && (
            <div className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
              {description}
            </div>
          )}
        </div>
      </div>
    )
  }
)
AvatarBlock.displayName = "AvatarBlock"

export { AvatarBlock }

