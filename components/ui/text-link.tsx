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
        "text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] underline hover:text-[#2c2c2c]",
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

