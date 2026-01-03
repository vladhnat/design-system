# DatePickerField Component Specification

## Overview
The DatePickerField component provides a single input field for date selection with a calendar icon.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

### Input Container
- Position: Relative
- Height: `40px` (h-10)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Error Border: `1px solid #ec221f` (Border/Danger/Default)
- Padding Right: `40px` (pr-10) for icon space

### Calendar Icon
- Position: Absolute, right-3, top-1/2
- Size: `16px × 16px` (h-4 w-4)
- Color: `#1e1e1e` (Icon/Default/Default)
- Pointer Events: None

### States
- `Default`: Normal state
- `Error`: Red border
- `Disabled`: Opacity 50%, cursor not-allowed

## Props & Variants

### Props
```typescript
interface DatePickerFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  value?: string
  placeholder?: string
  onChange?: (value: string) => void
  state?: "Default" | "Error" | "Disabled"
  valueType?: "Default" | "Placeholder"
}
```

### Default Values
- `placeholder`: "Value"
- `state`: "Default"
- `valueType`: "Default"

## Usage Examples

### Basic Date Picker
```tsx
<DatePickerField
  label="Select Date"
  value="2025-01-15"
  onChange={(value) => console.log(value)}
/>
```

### With Placeholder
```tsx
<DatePickerField
  label="Date"
  placeholder="Select a date"
  valueType="Placeholder"
/>
```

### With Error
```tsx
<DatePickerField
  label="Date"
  state="Error"
  value="invalid"
/>
```

## Accessibility

- Label is properly associated
- Input is keyboard accessible
- Calendar icon is decorative
- Error state is announced

## Testing Requirements

- [ ] Input works correctly
- [ ] Calendar icon displays
- [ ] Change handler works
- [ ] Placeholder mode works
- [ ] Error state works
- [ ] Disabled state works

