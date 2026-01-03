# Avatar Component Specification

## Overview
The Avatar component displays user profile pictures or initials in a circular format. Supports multiple sizes and integrates with AvatarImage and AvatarFallback components.

## Design Tokens

### Sizes
- `sm`: 32px × 32px (h-8 w-8)
- `default`: 40px × 40px (h-10 w-10)
- `large`: 40px × 40px (h-10 w-10) - matches Icon/Large token

### Border Radius
- Always `rounded-full` (9999px - Radius/Full)

### Typography (Fallback)
- Font Family: Inter
- Font Size: Matches avatar size proportionally
- Font Weight: 400 (Regular)

## Props & Variants

### Props
```typescript
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  size?: "sm" | "default" | "large"
}
```

### Default Values
- `size`: "default"

### Sub-components
- `AvatarImage`: Displays the image source
- `AvatarFallback`: Displays when image fails to load or is not provided

## Usage Examples

### Basic Usage
```tsx
<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With Size Variants
```tsx
<Avatar size="sm">
  <AvatarFallback>SM</AvatarFallback>
</Avatar>
<Avatar size="default">
  <AvatarFallback>DF</AvatarFallback>
</Avatar>
<Avatar size="large">
  <AvatarFallback>LG</AvatarFallback>
</Avatar>
```

### Fallback Only
```tsx
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

## Accessibility

- Must have proper `alt` text for AvatarImage
- Fallback text should be meaningful (initials, not random letters)
- Should be focusable if interactive
- ARIA labels may be needed for complex use cases

## Testing Requirements

- [ ] All sizes render correctly
- [ ] Image loads when src is provided
- [ ] Fallback displays when image fails
- [ ] Fallback displays when no src provided
- [ ] Circular shape is maintained
- [ ] Proper aspect ratio maintained

