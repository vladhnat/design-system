# DateInputField Component Specification

## Overview
The DateInputField component provides three separate input fields for day, month, and year date entry.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

### Inputs Container
- Layout: Flex row
- Gap: `8px` (gap-2)
- Each input: `flex-1`

### Input Fields
- Height: `40px` (h-10)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Error Border: `1px solid #ec221f` (Border/Danger/Default)
- Placeholder Color: `#b3b3b3` (Text/Default/Tertiary)

### States
- `Default`: Normal state
- `Error`: Red border
- `Disabled`: Opacity 50%, cursor not-allowed

## Props & Variants

### Props
```typescript
interface DateInputFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  day?: string
  month?: string
  year?: string
  onDayChange?: (value: string) => void
  onMonthChange?: (value: string) => void
  onYearChange?: (value: string) => void
  state?: "Default" | "Error" | "Disabled"
  valueType?: "Default" | "Placeholder"
}
```

### Default Values
- `day`: "DD"
- `month`: "MM"
- `year`: "YYYY"
- `state`: "Default"
- `valueType`: "Default"

## Usage Examples

### Basic Date Input
```tsx
<DateInputField
  label="Date of Birth"
  day="15"
  month="01"
  year="1990"
  onDayChange={(value) => console.log(value)}
  onMonthChange={(value) => console.log(value)}
  onYearChange={(value) => console.log(value)}
/>
```

### With Placeholder
```tsx
<DateInputField
  label="Date"
  valueType="Placeholder"
/>
```

### With Error
```tsx
<DateInputField
  label="Date"
  state="Error"
  day="32"
  month="13"
  year="2025"
/>
```

## Accessibility

- Label is properly associated
- Inputs are keyboard accessible
- Error state is announced
- Disabled state is announced

## Testing Requirements

- [ ] All three inputs work
- [ ] Change handlers work
- [ ] Placeholder mode works
- [ ] Error state works
- [ ] Disabled state works
- [ ] Label and description display

