"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  name: string
  username: string
  src?: string
  fallback?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ className, heading, name, username, src, fallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 p-6 rounded-lg border border-[#d9d9d9] bg-[#ffffff]",
          className
        )}
        {...props}
      >
        <h3 className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]">
          {heading}
        </h3>
        <div className="flex items-center gap-3">
          <Avatar size="large">
            {src && <AvatarImage src={src} alt={name} />}
            {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
          </Avatar>
          <div className="flex flex-col">
            <div className="text-base font-semibold leading-[1.4] text-[#303030] font-[Inter]">
              {name}
            </div>
            <div className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
              {username}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }

