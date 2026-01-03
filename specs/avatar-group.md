# Avatar Group Component Specification

## Overview
The AvatarGroup component displays multiple avatars in a row with overlapping effect and optional max count indicator.

## Design Tokens

### Spacing
- `100`: 4px overlap (Space/100) - `-ml-1`
- `200`: 8px overlap (Space/200) - `-ml-2`
- `300`: 12px overlap (Space/300) - `-ml-3`
- `400`: 16px overlap (Space/400) - `-ml-4`

### Max Indicator
- Background: `#f5f5f5` (Background/Default/Secondary)
- Text Color: `#303030` (Text/Neutral/Default)
- Border Radius: `rounded-lg` (8px - Radius/200)
- Typography:
  - Font Family: Inter
  - Font Size: 14px (Body/Size Small)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4

### Avatar Size
- Default: `large` (40px)
- Matches size prop passed to individual avatars

## Props & Variants

### Props
```typescript
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "100" | "200" | "300" | "400"
  max?: number
  size?: "sm" | "default" | "large"
}
```

### Default Values
- `spacing`: "100"
- `size`: "large"

### Behavior
- When `max` is provided, only that many avatars are shown
- Remaining count is displayed as "+N" indicator
- Indicator matches the size of avatars

## Usage Examples

### Basic Usage
```tsx
<AvatarGroup spacing="100">
  <Avatar size="large"><AvatarImage src="/1.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/2.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/3.jpg" /></Avatar>
</AvatarGroup>
```

### With Max Count
```tsx
<AvatarGroup spacing="100" max={3}>
  <Avatar size="large"><AvatarImage src="/1.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/2.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/3.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/4.jpg" /></Avatar>
  <Avatar size="large"><AvatarImage src="/5.jpg" /></Avatar>
</AvatarGroup>
// Shows 3 avatars + "+2" indicator
```

### Different Spacing
```tsx
<AvatarGroup spacing="300">
  {/* More overlap between avatars */}
</AvatarGroup>
```

## Accessibility

- Each avatar maintains its own accessibility
- Max indicator should have descriptive text if interactive
- Screen readers should announce total count when max is used

## Testing Requirements

- [ ] Avatars overlap correctly based on spacing
- [ ] Max count limits visible avatars
- [ ] "+N" indicator shows correct count
- [ ] Indicator matches avatar size
- [ ] Works with different spacing values
- [ ] Works with different avatar sizes
- [ ] Handles edge cases (0 avatars, max > total, etc.)

