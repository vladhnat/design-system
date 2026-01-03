# Badge Component Specification

## Overview
The Badge component displays small status indicators, labels, or counts. It's typically used for tags, status indicators, or notification counts.

## Design Tokens

### Container
- Border Radius: `rounded-full` (9999px - Radius/Full)
- Padding: `10px` horizontal (px-2.5), `2px` vertical (py-0.5)
- Border: `1px` solid

### Typography
- Font Family: Inter
- Font Size: 12px (text-xs)
- Font Weight: 600 (Semi Bold)
- Line Height: 1 (leading-none)

### Variants

#### Default
- Background: `#2c2c2c` (Background/Brand/Default)
- Text: `#f5f5f5` (Text/Brand/On Brand)
- Border: Transparent
- Hover: `#2c2c2c` at 80% opacity

#### Secondary
- Background: `#f5f5f5` (Background/Default/Secondary)
- Text: `#303030` (Text/Neutral/Default)
- Border: Transparent
- Hover: `#f5f5f5` at 80% opacity

#### Destructive
- Background: `#ec221f` (Background/Danger/Default)
- Text: `#fee9e7` (Text/Danger/On Danger)
- Border: Transparent
- Hover: `#ec221f` at 80% opacity

#### Outline
- Background: Transparent
- Text: `#1e1e1e` (Text/Default/Default)
- Border: `#d9d9d9` (Border/Default/Default)

### Focus State
- Ring: `2px` solid `#2c2c2c`
- Ring Offset: `2px`

## Props & Variants

### Props
```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}
```

### Default Values
- `variant`: "default"

## Usage Examples

### Basic Usage
```tsx
<Badge>New</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

### With Content
```tsx
<Badge>12</Badge>
<Badge variant="secondary">Active</Badge>
```

## Accessibility

- Should have meaningful text content
- Focus states should be visible if interactive
- Color should not be the only indicator (use text as well)

## Testing Requirements

- [ ] All variants render correctly
- [ ] Hover states work
- [ ] Focus states are visible
- [ ] Text is readable on all backgrounds
- [ ] Works with different content lengths

