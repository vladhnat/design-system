# Select Component Specification

## Overview
The Select component provides a dropdown menu for selecting a single option from a list. Built on Radix UI Select primitive.

## Design Tokens

### SelectTrigger
- Height: `40px` (h-10)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Padding: `12px` horizontal (px-3), `8px` vertical (py-2)
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4
  - Text Color: `#1e1e1e` (Text/Default/Default)
  - Placeholder Color: `#b3b3b3` (Text/Default/Tertiary)

### Icon
- Size: `16px × 16px` (h-4 w-4)
- Color: `#1e1e1e` (Icon/Default/Default)

### SelectContent
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Text Color: `#1e1e1e` (Text/Default/Default)
- Shadow: `shadow-md`
- Padding: `4px` (p-1)

### SelectItem
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4
  - Text Color: `#1e1e1e` (Text/Default/Default)
- Padding: `6px` vertical (py-1.5), `32px` left (pl-8), `8px` right (pr-2)
- Focus Background: `#f5f5f5` (Background/Default/Secondary)
- Focus Text: `#1e1e1e`

### Focus State
- Ring: `2px` solid `#2c2c2c` (Border/Brand/Default)
- Ring Offset: `2px`

## Props & Variants

### Select (Root)
```typescript
interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
  disabled?: boolean
}
```

### SelectTrigger
```typescript
interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {}
```

### SelectContent
```typescript
interface SelectContentProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  position?: "popper" | "item-aligned"
}
```

### SelectItem
```typescript
interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  value: string
}
```

## Usage Examples

### Basic Usage
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Controlled
```tsx
const [value, setValue] = useState('')

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
  </SelectContent>
</Select>
```

### With Groups
```tsx
<Select>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Group 1</SelectLabel>
      <SelectItem value="1">Item 1</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Group 2</SelectLabel>
      <SelectItem value="2">Item 2</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

## Accessibility

- Uses Radix UI Select which is fully accessible
- Keyboard navigation supported
- Screen reader announcements
- Focus management included
- ARIA attributes handled automatically

## Testing Requirements

- [ ] Select opens and closes correctly
- [ ] Items are selectable
- [ ] Controlled mode works
- [ ] Uncontrolled mode works
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Disabled state works
- [ ] Groups and separators work
- [ ] Portal positioning works

