# Textarea Component Specification

## Overview
The Textarea component is a multi-line text input field used for longer text input.

## Design Tokens

### Container
- Min Height: `80px`
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Padding: `12px` horizontal (px-3), `8px` vertical (py-2)
- Resize: Vertical only (`resize-y`)

### Typography
- Font Family: Inter
- Font Size: 16px (Body/Size Medium)
- Font Weight: 400 (Regular)
- Line Height: 1.4
- Text Color: `#1e1e1e` (Text/Default/Default)
- Placeholder Color: `#b3b3b3` (Text/Default/Tertiary)

### Focus State
- Ring: `2px` solid `#2c2c2c` (Border/Brand/Default)
- Ring Offset: `2px`

### Disabled State
- Opacity: 50%
- Cursor: not-allowed

## Props & Variants

### Props
```typescript
interface TextareaProps extends React.ComponentProps<"textarea"> {
  // All standard HTML textarea props
  placeholder?: string
  disabled?: boolean
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  rows?: number
}
```

## Usage Examples

### Basic Usage
```tsx
<Textarea placeholder="Enter message" />
```

### With Rows
```tsx
<Textarea rows={5} placeholder="Enter message" />
```

### Controlled Input
```tsx
const [value, setValue] = useState('')
<Textarea value={value} onChange={(e) => setValue(e.target.value)} />
```

### Disabled
```tsx
<Textarea disabled placeholder="Disabled textarea" />
```

## Accessibility

- Must be keyboard accessible
- Must have proper focus states
- Should be associated with labels using `htmlFor` and `id`
- Placeholder should not be the only label
- Disabled state must be announced to screen readers

## Testing Requirements

- [ ] Textarea accepts text
- [ ] Placeholder displays correctly
- [ ] Focus state is visible
- [ ] Disabled state works
- [ ] Resize works (vertical only)
- [ ] Controlled and uncontrolled modes work
- [ ] Keyboard navigation works

