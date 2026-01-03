# SliderField Component Specification

## Overview
The SliderField component provides a slider input with label, description, and optional output display.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Header
- Layout: Flex row, items-center, justify-between

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Output
- Typography: `text-sm font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-sm font-normal leading-[1.4] text-[#757575] font-[Inter]`

### Error Message
- Typography: `text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]`

## Props & Variants

### Props
```typescript
interface SliderFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  value?: number[]
  defaultValue?: number[]
  onValueChange?: (value: number[]) => void
  min?: number
  max?: number
  step?: number
  showOutput?: boolean
  error?: string
}
```

### Default Values
- `min`: 0
- `max`: 100
- `step`: 1
- `showOutput`: false

## Usage Examples

### Basic Slider
```tsx
<SliderField
  label="Volume"
  value={[50]}
  onValueChange={(value) => console.log(value)}
/>
```

### With Output
```tsx
<SliderField
  label="Price Range"
  showOutput={true}
  min={0}
  max={1000}
  value={[500]}
/>
```

### With Description
```tsx
<SliderField
  label="Range"
  description="Select a value between 0 and 100"
  showOutput={true}
/>
```

## Accessibility

- Uses Slider which is accessible
- Label is properly associated
- Output is announced
- Keyboard navigation works

## Testing Requirements

- [ ] Slider works correctly
- [ ] Value change handler works
- [ ] Output displays when enabled
- [ ] Min/max/step work correctly
- [ ] Label and description display
- [ ] Error displays correctly
- [ ] Keyboard navigation works

