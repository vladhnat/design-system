"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface TextLinkProps
  extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}

const TextLink = React.forwardRef<
  React.ElementRef<typeof Link>,
  TextLinkProps
>(({ className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn(
        "text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] underline hover:text-[hsl(var(--text-brand))] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
})
TextLink.displayName = "TextLink"

export { TextLink }

