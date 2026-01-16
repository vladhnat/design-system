"use client"

import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export interface SearchProps extends React.ComponentProps<typeof Input> {
  placeholder?: string
}

const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className, placeholder = "Value", ...props }, ref) => {
    return (
      <div className="relative">
        <Input
          ref={ref}
          type="search"
          placeholder={placeholder}
          className={cn("pr-10", className)}
          {...props}
        />
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--icon-default))] pointer-events-none" />
      </div>
    )
  }
)
Search.displayName = "Search"

export { Search }

