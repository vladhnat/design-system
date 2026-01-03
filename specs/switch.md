# Switch Component Specification

## Overview
The Switch component is a toggle control that allows users to switch between two states (on/off).

## Design Tokens

### Container
- Height: `24px` (h-6)
- Width: `44px` (w-11)
- Border Radius: `rounded-full` (9999px)
- Border: `2px` solid transparent
- Transition: Colors

### States

#### Unchecked
- Background: `#d9d9d9` (Background/Disabled/Default)

#### Checked
- Background: `#2c2c2c` (Background/Brand/Default)

### Thumb
- Size: `20px × 20px` (h-5 w-5)
- Border Radius: `rounded-full` (9999px)
- Background: `#ffffff` (Background/Default/Default)
- Shadow: `shadow-lg`
- Transform:
  - Unchecked: `translate-x-0`
  - Checked: `translate-x-5` (20px)

### Focus State
- Ring: `2px` solid `#2c2c2c` (Border/Brand/Default)
- Ring Offset: `2px`

### Disabled State
- Opacity: 50%
- Cursor: not-allowed

## Props & Variants

### Props
```typescript
interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}
```

## Usage Examples

### Basic Usage
```tsx
<Switch />
<Switch defaultChecked />
```

### Controlled
```tsx
const [checked, setChecked] = useState(false)

<Switch checked={checked} onCheckedChange={setChecked} />
```

### With Label
```tsx
<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

### Disabled
```tsx
<Switch disabled />
<Switch disabled defaultChecked />
```

## Accessibility

- Uses Radix UI Switch which is fully accessible
- Must be associated with labels using `htmlFor` and `id`
- Keyboard accessible (Space to toggle)
- Screen reader announcements
- Focus states required

## Testing Requirements

- [ ] Switch toggles correctly
- [ ] Checked state displays correctly
- [ ] Unchecked state displays correctly
- [ ] Thumb animates correctly
- [ ] Controlled mode works
- [ ] Uncontrolled mode works
- [ ] Disabled state works
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Works with labels

