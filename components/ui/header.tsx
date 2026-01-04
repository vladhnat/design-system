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
          "fixed top-0 left-0 right-0 z-50 w-full border-b border-[#d9d9d9] bg-[#ffffff]",
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
                        "text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter] transition-colors px-3 py-1.5 rounded-lg",
                        isActive
                          ? "bg-[#f5f5f5] text-[#1e1e1e]"
                          : "hover:text-[#2c2c2c]"
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

