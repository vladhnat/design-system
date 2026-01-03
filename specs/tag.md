# Tag Component Specification

## Overview
The Tag component displays small labels or tags, with optional remove functionality.

## Design Tokens

### Container
- Layout: Inline flex, items-center
- Gap: `4px` (gap-1)
- Border Radius: `rounded-full` (9999px)
- Padding: `10px` horizontal (px-2.5), `2px` vertical (py-0.5)

### Typography
- Font Family: Inter
- Font Size: `12px` (text-xs)
- Font Weight: `600` (Semi Bold)
- Line Height: `1` (leading-none)

### Variants

#### Default
- Background: `#2c2c2c` (Background/Brand/Default)
- Text: `#f5f5f5` (Text/Brand/On Brand)

#### Secondary
- Background: `#f5f5f5` (Background/Default/Secondary)
- Text: `#303030` (Text/Neutral/Default)

#### Destructive
- Background: `#ec221f` (Background/Danger/Default)
- Text: `#fee9e7` (Text/Danger/On Danger)

#### Outline
- Background: Transparent
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Text: `#1e1e1e` (Text/Default/Default)

### Remove Button
- Size: `16px × 16px` (h-4 w-4)
- Icon: X icon from lucide-react
- Hover: Transparent background

## Props & Variants

### Props
```typescript
interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
  scheme?: "neutral" | "brand"
  onRemove?: () => void
  removable?: boolean
}
```

### Default Values
- `variant`: "default"
- `scheme`: "neutral"

## Usage Examples

### Basic Tag
```tsx
<Tag>New</Tag>
```

### Removable Tag
```tsx
<Tag onRemove={() => console.log("removed")}>
  Removable
</Tag>
```

### Variants
```tsx
<Tag variant="secondary">Secondary</Tag>
<Tag variant="destructive">Error</Tag>
<Tag variant="outline">Outline</Tag>
```

## Accessibility

- Remove button has aria-label
- Keyboard accessible
- Focus states visible

## Testing Requirements

- [ ] All variants render correctly
- [ ] Remove functionality works
- [ ] Hover states work
- [ ] Keyboard navigation works
- [ ] Text is readable on all backgrounds

