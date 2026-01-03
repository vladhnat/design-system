"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"
import Link from "next/link"

export interface HeaderAuthProps extends React.ComponentProps<typeof Header> {
  logo?: React.ReactNode
  navItems?: Array<{ label: string; href: string }>
  onLogin?: () => void
  onSignUp?: () => void
  user?: {
    name?: string
    email?: string
    avatar?: string
  }
  onLogout?: () => void
}

const HeaderAuth = React.forwardRef<HTMLElement, HeaderAuthProps>(
  (
    {
      className,
      logo,
      navItems,
      onLogin,
      onSignUp,
      user,
      onLogout,
      ...props
    },
    ref
  ) => {
    const actions = user ? (
      <div className="flex items-center gap-2">
        <span className="text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
          {user.name || user.email}
        </span>
        {onLogout && (
          <Button variant="subtle" size="sm" onClick={onLogout}>
            Logout
          </Button>
        )}
      </div>
    ) : (
      <div className="flex items-center gap-2">
        {onLogin && (
          <Button variant="subtle" size="sm" onClick={onLogin}>
            Login
          </Button>
        )}
        {onSignUp && (
          <Button size="sm" onClick={onSignUp}>
            Sign Up
          </Button>
        )}
      </div>
    )

    return (
      <Header
        ref={ref}
        logo={logo}
        navItems={navItems}
        actions={actions}
        className={className}
        {...props}
      />
    )
  }
)
HeaderAuth.displayName = "HeaderAuth"

export { HeaderAuth }

