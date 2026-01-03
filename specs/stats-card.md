# Stats Card Component Specification

## Overview
The StatsCard component displays a statistic with an optional icon, stat number, and description.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)
- Padding: `24px` (p-6)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)

### Icon (Optional)
- Layout: Flex items-center
- Size: Custom (typically 24px)

### Stat
- Typography: `text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

## Props & Variants

### Props
```typescript
interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stat: string | number
  description: string
  icon?: React.ReactNode
}
```

## Usage Examples

### Basic Stats Card
```tsx
<StatsCard
  stat="100"
  description="Total users"
/>
```

### With Icon
```tsx
<StatsCard
  stat="1,234"
  description="Active sessions"
  icon={<Users className="h-6 w-6" />}
/>
```

## Accessibility

- Uses semantic HTML
- Stat should be clearly announced
- Icon should have alt text or be decorative

## Testing Requirements

- [ ] Stat displays correctly
- [ ] Description displays correctly
- [ ] Icon displays when provided
- [ ] Works with numbers and strings
- [ ] Responsive behavior works

