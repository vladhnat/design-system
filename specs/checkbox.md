# Checkbox Component Specification

## Overview
The Checkbox component is a binary input control that allows users to select one or more options from a set.

## Design Tokens

### Container
- Size: `16px × 16px` (h-4 w-4)
- Border: `1px solid #1e1e1e` (Border/Default/Default)
- Border Radius: `2px` (rounded-sm)
- Background: Transparent (unchecked)

### Checked State
- Background: `#2c2c2c` (Background/Brand/Default)
- Text/Icon Color: `#f5f5f5` (Text/Brand/On Brand)
- Border: `#2c2c2c`

### Icon
- Size: `16px × 16px` (h-4 w-4)
- Color: Inherits from checked state

### Focus State
- Ring: `2px` solid `#2c2c2c` (Border/Brand/Default)
- Ring Offset: `2px`

### Disabled State
- Opacity: 50%
- Cursor: not-allowed

## Props & Variants

### Props
```typescript
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}
```

## Usage Examples

### Basic Usage
```tsx
<Checkbox />
<Checkbox defaultChecked />
```

### Controlled
```tsx
const [checked, setChecked] = useState(false)

<Checkbox checked={checked} onCheckedChange={setChecked} />
```

### With Label
```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

### Disabled
```tsx
<Checkbox disabled />
<Checkbox disabled defaultChecked />
```

## Accessibility

- Uses Radix UI Checkbox which is fully accessible
- Must be associated with labels using `htmlFor` and `id`
- Keyboard accessible (Space to toggle)
- Screen reader announcements
- Focus states required

## Testing Requirements

- [ ] Checkbox toggles correctly
- [ ] Checked state displays correctly
- [ ] Unchecked state displays correctly
- [ ] Controlled mode works
- [ ] Uncontrolled mode works
- [ ] Disabled state works
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Works with labels

