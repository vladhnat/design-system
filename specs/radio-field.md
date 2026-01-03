# RadioField Component Specification

## Overview
The RadioField component provides a radio group with label and optional description.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

### Radio Options
- Layout: Flex column (from RadioGroup)
- Gap: `8px` (gap-2)
- Each option: Flex row, items-center, gap-2

### Error Message
- Typography: `text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]`

## Props & Variants

### Props
```typescript
interface RadioFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  options: Array<{ value: string; label: string }>
  error?: string
}
```

## Usage Examples

### Basic Radio Field
```tsx
<RadioField
  label="Select Option"
  options={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ]}
  value="option1"
  onValueChange={(value) => console.log(value)}
/>
```

### With Description
```tsx
<RadioField
  label="Payment Method"
  description="Choose your preferred payment method"
  options={[...]}
/>
```

### With Error
```tsx
<RadioField
  label="Required Field"
  options={[...]}
  error="Please select an option"
/>
```

## Accessibility

- Uses RadioGroup which is accessible
- Labels are properly associated
- Error is announced
- Keyboard navigation works

## Testing Requirements

- [ ] Options render correctly
- [ ] Selection works
- [ ] Value change handler works
- [ ] Label and description display
- [ ] Error displays correctly
- [ ] Keyboard navigation works

