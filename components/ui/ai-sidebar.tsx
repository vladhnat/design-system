"use client"

import * as React from "react"
import { Menu, PlusCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Search } from "@/components/ui/search"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export interface ChatItem {
  id: string
  title: string
  active?: boolean
}

export interface AiSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  searchPlaceholder?: string
  chats?: ChatItem[]
  onNewChat?: () => void
  user?: {
    name?: string
    email?: string
    avatar?: string
    fallback?: string
  }
}

const AiSidebar = React.forwardRef<HTMLDivElement, AiSidebarProps>(
  (
    {
      className,
      title = "Flippy chats",
      searchPlaceholder = "Search",
      chats = [],
      onNewChat,
      user,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-4 h-full p-4 bg-[#f5f5f5] border-r border-[#d9d9d9] w-[320px] shrink-0",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex gap-4 items-center w-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full p-0 hover:bg-transparent"
          >
            <Menu className="h-6 w-6 text-[#1e1e1e]" />
          </Button>
          <h2 className="flex-1 text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]">
            {title}
          </h2>
          {onNewChat && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNewChat}
              className="h-6 w-6 rounded-full p-0 hover:bg-transparent"
            >
              <PlusCircle className="h-6 w-6 text-[#1e1e1e]" />
            </Button>
          )}
        </div>

        {/* Search */}
        <Search placeholder={searchPlaceholder} />

        {/* Chat List */}
        <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <p className="text-sm font-semibold leading-[1.4] text-[#757575] font-[Inter]">
            Chats
          </p>
          <div className="flex flex-col gap-0">
            {chats.map((chat) => (
              <button
                key={chat.id}
                className={cn(
                  "flex gap-4 items-center px-1.5 py-1 rounded-lg text-left transition-colors",
                  chat.active
                    ? "bg-[#ffffff]"
                    : "hover:bg-[#ffffff]/50"
                )}
              >
                <span className="flex-1 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
                  {chat.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* User Info */}
        {user && (
          <div className="flex gap-4 items-center">
            <Avatar size="sm">
              {user.avatar && <AvatarImage src={user.avatar} alt={user.name || user.email} />}
              {user.fallback && <AvatarFallback>{user.fallback}</AvatarFallback>}
            </Avatar>
            <span className="flex-1 text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]">
              {user.email || user.name}
            </span>
          </div>
        )}
      </div>
    )
  }
)
AiSidebar.displayName = "AiSidebar"

export { AiSidebar }

