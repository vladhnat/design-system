# Button Group Component Specification

## Overview
The ButtonGroup component arranges multiple buttons horizontally with consistent spacing and alignment options.

## Design Tokens

### Spacing
- Gap between buttons: `gap-4` (16px - Space/400)

### Alignment Options
- `start`: Left-aligned buttons
- `center`: Center-aligned buttons
- `end`: Right-aligned buttons
- `justify`: Space-between alignment

## Props & Variants

### Props
```typescript
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: "start" | "center" | "end" | "justify"
}
```

### Default Values
- `align`: "start"

## Usage Examples

### Center Alignment
```tsx
<ButtonGroup align="center">
  <Button variant="subtle">Cancel</Button>
  <Button variant="default">Submit</Button>
</ButtonGroup>
```

### Justify Alignment
```tsx
<ButtonGroup align="justify">
  <Button variant="default">Save</Button>
</ButtonGroup>
```

### Multiple Buttons
```tsx
<ButtonGroup align="start">
  <Button variant="outline">Back</Button>
  <Button variant="default">Next</Button>
  <Button variant="default">Finish</Button>
</ButtonGroup>
```

## Accessibility

- Buttons within the group maintain individual accessibility
- Focus order should follow visual order
- Group should not interfere with individual button focus states

## Testing Requirements

- [ ] All alignment options work correctly
- [ ] Spacing is consistent between buttons
- [ ] Works with different button variants
- [ ] Works with different button sizes
- [ ] Responsive behavior on mobile

