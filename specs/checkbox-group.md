# CheckboxGroup Component Specification

## Overview
The CheckboxGroup component provides a group of checkboxes with selection management.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `16px` (gap-4)

### Error Message
- Typography: `text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]`

## Props & Variants

### Props
```typescript
interface CheckboxGroupItem {
  value: string
  label: string
  description?: string
}

interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CheckboxGroupItem[]
  selectedValues?: string[]
  onSelectionChange?: (selectedValues: string[]) => void
  error?: string
}
```

### Default Values
- `selectedValues`: []

## Usage Examples

### Basic Checkbox Group
```tsx
<CheckboxGroup
  items={[
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
  ]}
  selectedValues={["option1"]}
  onSelectionChange={(values) => console.log(values)}
/>
```

### With Descriptions
```tsx
<CheckboxGroup
  items={[
    {
      value: "option1",
      label: "Option 1",
      description: "Description for option 1",
    },
  ]}
/>
```

### With Error
```tsx
<CheckboxGroup
  items={[...]}
  error="Please select at least one option"
/>
```

## Accessibility

- Uses CheckboxField which is accessible
- Error is properly announced
- Selection state is clear

## Testing Requirements

- [ ] Selection works correctly
- [ ] Multiple selections work
- [ ] Descriptions display correctly
- [ ] Error displays correctly
- [ ] Selection change handler works

