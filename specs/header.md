# Header Component Specification

## Overview
The Header component provides a site header with logo, navigation items, and action buttons.

## Design Tokens

### Container
- Width: `100%` (w-full)
- Border: `1px solid #d9d9d9` (Border/Default/Default) on bottom
- Background: `#ffffff` (Background/Default/Default)
- Height: `64px` (h-16)

### Inner Container
- Max Width: Container width
- Padding: `16px` horizontal (px-4)
- Layout: Flex row, items-center, justify-between
- Gap: `16px` (gap-4)

### Logo
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Navigation Items
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`
- Hover: `text-[#2c2c2c]`
- Gap: `24px` (gap-6)
- Hidden on mobile (md:flex)

## Props & Variants

### Props
```typescript
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode | string
  navItems?: Array<{ label: string; href: string }>
  actions?: React.ReactNode
}
```

## Usage Examples

### Basic Header
```tsx
<Header logo="My Site" />
```

### With Navigation
```tsx
<Header
  logo="My Site"
  navItems={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]}
/>
```

### With Actions
```tsx
<Header
  logo="My Site"
  actions={
    <>
      <Button>Login</Button>
      <Button>Sign Up</Button>
    </>
  }
/>
```

## Accessibility

- Uses semantic `<header>` element
- Navigation uses `<nav>` element
- Links are keyboard accessible
- Proper ARIA labels for actions

## Testing Requirements

- [ ] Logo displays correctly
- [ ] Navigation items render and link correctly
- [ ] Actions render correctly
- [ ] Responsive behavior works (nav hidden on mobile)
- [ ] Hover states work
- [ ] Keyboard navigation works

