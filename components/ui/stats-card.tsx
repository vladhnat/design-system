"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stat: string | number
  description: string
  icon?: React.ReactNode
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  ({ className, stat, description, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 p-6 rounded-lg border border-[#d9d9d9] bg-[#ffffff]",
          className
        )}
        {...props}
      >
        {icon && <div className="flex items-center">{icon}</div>}
        <div className="text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]">
          {stat}
        </div>
        <p className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
          {description}
        </p>
      </div>
    )
  }
)
StatsCard.displayName = "StatsCard"

export { StatsCard }

