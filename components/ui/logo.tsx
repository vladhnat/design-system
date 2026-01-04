import * as React from "react"
import { cn } from "@/lib/utils"

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("text-[#1e1e1e]", className)}
        {...props}
      >
        {/* Stylized 'B' with three interconnected rounded loops */}
        {/* Top loop - larger rounded rectangle */}
        <path
          d="M 10 2 L 20 2 C 24 2, 26 4, 26 6 C 26 8, 24 10, 20 10 L 10 10 C 6 10, 4 8, 4 6 C 4 4, 6 2, 10 2 Z"
          fill="currentColor"
        />
        {/* Bottom-left loop - smaller rounded shape */}
        <path
          d="M 6 14 L 14 14 C 18 14, 20 16, 20 18 C 20 20, 18 22, 14 22 L 6 22 C 4 22, 2 20, 2 18 C 2 16, 4 14, 6 14 Z"
          fill="currentColor"
        />
        {/* Bottom-right loop - smaller rounded shape */}
        <path
          d="M 18 14 L 26 14 C 30 14, 32 16, 32 18 C 32 20, 30 22, 26 22 L 18 22 C 16 22, 14 20, 14 18 C 14 16, 16 14, 18 14 Z"
          fill="currentColor"
        />
        {/* Middle connecting element */}
        <path
          d="M 10 10 L 10 14 C 10 12, 12 10, 14 10 L 18 10 C 20 10, 22 12, 22 14 L 22 10 Z"
          fill="currentColor"
        />
      </svg>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }

