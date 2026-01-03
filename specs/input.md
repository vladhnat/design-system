# Input Component Specification

## Overview
The Input component is a text input field used for collecting user text input. It supports various input types and states.

## Design Tokens

### Container
- Height: `40px` (h-10)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Padding: `12px` horizontal (px-3), `8px` vertical (py-2)

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
interface InputProps extends React.ComponentProps<"input"> {
  // All standard HTML input props
  type?: string
  placeholder?: string
  disabled?: boolean
  value?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
```

## Usage Examples

### Basic Usage
```tsx
<Input placeholder="Enter text" />
```

### With Type
```tsx
<Input type="email" placeholder="Enter email" />
<Input type="password" placeholder="Enter password" />
```

### Controlled Input
```tsx
const [value, setValue] = useState('')
<Input value={value} onChange={(e) => setValue(e.target.value)} />
```

### Disabled
```tsx
<Input disabled placeholder="Disabled input" />
```

## Accessibility

- Must be keyboard accessible
- Must have proper focus states
- Should be associated with labels using `htmlFor` and `id`
- Placeholder should not be the only label
- Disabled state must be announced to screen readers

## Testing Requirements

- [ ] Input accepts text
- [ ] Placeholder displays correctly
- [ ] Focus state is visible
- [ ] Disabled state works
- [ ] Different input types work
- [ ] Controlled and uncontrolled modes work
- [ ] Keyboard navigation works

