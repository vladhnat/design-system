"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export interface FooterColumn {
  title: string
  links: Array<{ label: string; href: string }>
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  columns?: FooterColumn[]
  copyright?: string
  socialLinks?: Array<{ label: string; href: string; icon?: React.ReactNode }>
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, logo, columns, copyright, socialLinks, ...props }, ref) => {
    const totalColumns = (logo ? 1 : 0) + (columns?.length || 0)
    
    // Determine grid columns class based on total items
    const getGridCols = () => {
      if (totalColumns === 0) return "md:grid-cols-1"
      if (totalColumns === 1) return "md:grid-cols-1"
      if (totalColumns === 2) return "md:grid-cols-2"
      if (totalColumns === 3) return "md:grid-cols-3"
      return "md:grid-cols-4" // 4 or more
    }

    return (
      <footer
        ref={ref}
        className={cn(
          "w-full border-t border-[#d9d9d9] bg-[#ffffff] relative z-10 overflow-visible",
          className
        )}
        {...props}
      >
        <div className="w-full max-w-full px-4 py-12">
          {(logo || columns) && (
            <div className={cn("grid grid-cols-1 gap-8 mb-8", getGridCols())}>
              {logo && (
                <div className="flex flex-col gap-4">
                  {typeof logo === "string" ? (
                    <div className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
                      {logo}
                    </div>
                  ) : (
                    logo
                  )}
                  {socialLinks && socialLinks.length > 0 && (
                    <div className="flex items-center gap-4">
                      {socialLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[#757575] hover:text-[#1e1e1e] transition-colors"
                          aria-label={link.label}
                        >
                          {link.icon || link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
              {columns?.map((column, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h3 className="text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
                    {column.title}
                  </h3>
                  <nav className="flex flex-col gap-2">
                    {column.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter] hover:text-[#1e1e1e] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          )}
          {copyright && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#d9d9d9]">
              <p className="text-base font-normal leading-[1.4] text-[#757575] font-[Inter]">
                {copyright}
              </p>
            </div>
          )}
        </div>
      </footer>
    )
  }
)
Footer.displayName = "Footer"

export { Footer }

