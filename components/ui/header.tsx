"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface HeaderNavItem {
  label: string
  href: string
  active?: boolean
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  navItems?: HeaderNavItem[]
  actions?: React.ReactNode
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, logo, navItems, actions, ...props }, ref) => {
    const pathname = usePathname()

    return (
      <header
        ref={ref}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full border-b border-[hsl(var(--border-default))] bg-[hsl(var(--bg-default))]",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {logo && (
              <div className="flex items-center">
                {typeof logo === "string" ? (
                  <Link href="/" className="text-base font-semibold leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] cursor-pointer">
                    {logo}
                  </Link>
                ) : (
                  <Link href="/" className="flex items-center">
                    {logo}
                  </Link>
                )}
              </div>
            )}
            {navItems && navItems.length > 0 && (
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => {
                  const isActive = item.active !== undefined 
                    ? item.active 
                    : pathname === item.href || pathname?.startsWith(item.href + '/')
                  
                  return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-base font-normal leading-[1.4] text-[hsl(var(--text-default))] font-[Inter] transition-colors px-3 py-1.5 rounded-lg cursor-pointer",
                      isActive
                        ? "bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-default))]"
                        : "hover:text-[hsl(var(--text-brand))]"
                    )}
                  >
                      {item.label}
                    </Link>
                  )
                })}
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

