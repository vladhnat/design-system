# TagToggle Component Specification

## Overview
The TagToggle component is an individual toggleable tag button, used within TagToggleGroup.

## Design Tokens

### Container
- Layout: Inline flex, items-center, justify-center
- Padding: `16px` horizontal (px-4), `8px` vertical (py-2)
- Border Radius: `8px` (rounded-lg)
- Gap: `8px` (gap-2)

### Typography
- Font Family: Inter
- Font Size: `16px` (Body/Size Medium)
- Font Weight: `400` (Regular)
- Line Height: `1.4`

### States

#### Selected
- Uses Button `default` variant: `bg-[#2c2c2c] text-[#f5f5f5]`

#### Unselected
- Uses Button `outline` variant: `border border-[#2c2c2c] bg-transparent`

### Icons
- Size: `16px × 16px` (h-4 w-4)

## Props & Variants

### Props
```typescript
interface TagToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  selected?: boolean
  onToggle?: (id: string, selected: boolean) => void
}
```

### Default Values
- `selected`: false

## Usage Examples

### Basic Tag Toggle
```tsx
<TagToggle
  id="new"
  selected={true}
  onToggle={(id, selected) => console.log(id, selected)}
>
  New
</TagToggle>
```

### With Icon
```tsx
<TagToggle
  id="new"
  iconStart={<Star className="h-4 w-4" />}
  selected={false}
>
  New
</TagToggle>
```

## Accessibility

- Uses button element
- Keyboard accessible
- Selection state is announced
- Icons have proper labels

## Testing Requirements

- [ ] Toggle works correctly
- [ ] Selected state displays correctly
- [ ] Icons display correctly
- [ ] Keyboard navigation works
- [ ] Click handler works

