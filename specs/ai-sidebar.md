# AiSidebar Component Specification

## Overview
The AiSidebar component provides a sidebar for AI chat interfaces with search, chat list, and user information.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `16px` (gap-4)
- Padding: `16px` (p-4)
- Background: `#f5f5f5` (Background/Default/Secondary)
- Border: `1px solid #d9d9d9` (Border/Default/Default) on right
- Width: `320px` (w-[320px])
- Height: `100%` (h-full)
- Shrink: 0

### Header
- Layout: Flex row, items-center
- Gap: `16px` (gap-4)
- Width: `100%` (w-full)

### Title
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`
- Flex: 1

### Icons
- Size: `24px × 24px` (h-6 w-6)
- Color: `#1e1e1e` (Icon/Default/Default)

### Search
- Full width
- Uses Search component

### Chat List
- Layout: Flex column
- Gap: `8px` (gap-2)
- Flex: 1
- Overflow: Auto (overflow-y-auto)

### Chat List Title
- Typography: `text-sm font-semibold leading-[1.4] text-[#757575] font-[Inter]`

### Chat Item
- Layout: Flex row, items-center
- Padding: `6px` horizontal (px-1.5), `4px` vertical (py-1)
- Border Radius: `8px` (rounded-lg)
- Active Background: `#ffffff`
- Hover: `bg-[#ffffff]/50`
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### User Info
- Layout: Flex row, items-center
- Gap: `16px` (gap-4)
- Avatar: Small size (24px)

## Props & Variants

### Props
```typescript
interface ChatItem {
  id: string
  title: string
  active?: boolean
}

interface AiSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
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
```

### Default Values
- `title`: "Flippy chats"
- `searchPlaceholder`: "Search"

## Usage Examples

### Basic Sidebar
```tsx
<AiSidebar
  chats={[
    { id: "1", title: "Chat 1", active: true },
    { id: "2", title: "Chat 2" },
  ]}
  user={{
    email: "user@example.com",
    avatar: "/avatar.jpg",
  }}
/>
```

## Accessibility

- Search is accessible
- Chat items are keyboard accessible
- User info is properly displayed

## Testing Requirements

- [ ] Header displays correctly
- [ ] Search works
- [ ] Chat list displays correctly
- [ ] Active chat is highlighted
- [ ] User info displays
- [ ] New chat button works
- [ ] Responsive behavior works

