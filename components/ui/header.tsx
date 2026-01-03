"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  navItems?: Array<{ label: string; href: string }>
  actions?: React.ReactNode
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, logo, navItems, actions, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "w-full border-b border-[#d9d9d9] bg-[#ffffff]",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {logo && (
              <div className="flex items-center">
                {typeof logo === "string" ? (
                  <Link href="/" className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    {logo}
                  </Link>
                ) : (
                  logo
                )}
              </div>
            )}
            {navItems && navItems.length > 0 && (
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] hover:text-[#2c2c2c] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}
            {actions && <div className="flex items-center gap-2">{actions}</div>}
          </div>
        </div>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }

