"use client"

import * as React from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stars: number
  title: string
  body: string
  date: string
  name: string
  src?: string
  fallback?: string
}

const ReviewCard = React.forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ className, stars, title, body, date, name, src, fallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 p-6 rounded-lg border border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))]",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < stars ? "fill-[hsl(var(--bg-brand))] text-[hsl(var(--bg-brand))]" : "fill-none text-[hsl(var(--border-default))]"
              )}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {title}
          </h3>
          <p className="text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
            {body}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Avatar size="large">
            {src && <AvatarImage src={src} alt={name} />}
            {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
          </Avatar>
          <div className="flex flex-col">
            <div className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter]">
              {name}
            </div>
            <div className="text-base font-normal leading-[1.4] text-[hsl(var(--text-secondary))] font-[Inter]">
              {date}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
ReviewCard.displayName = "ReviewCard"

export { ReviewCard }

