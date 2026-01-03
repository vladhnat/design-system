# SwitchField Component Specification

## Overview
The SwitchField component provides a switch toggle with label and optional description.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Switch Row
- Layout: Flex row, items-center
- Gap: `8px` (gap-2)

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`
- Cursor: Pointer

### Description
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`
- Padding Left: `40px` (pl-10) to align with label

### Error Message
- Typography: `text-sm font-normal leading-[1.4] text-[#ec221f] font-[Inter]`
- Padding Left: `40px` (pl-10) to align with label

## Props & Variants

### Props
```typescript
interface SwitchFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  description?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  error?: string
}
```

## Usage Examples

### Basic Switch Field
```tsx
<SwitchField
  label="Enable notifications"
  checked={enabled}
  onCheckedChange={(checked) => setEnabled(checked)}
/>
```

### With Description
```tsx
<SwitchField
  label="Dark Mode"
  description="Switch to dark theme"
  defaultChecked={false}
/>
```

### With Error
```tsx
<SwitchField
  label="Required Setting"
  error="This setting is required"
/>
```

## Accessibility

- Uses Switch which is accessible
- Label is properly associated
- Error is announced
- Keyboard navigation works

## Testing Requirements

- [ ] Switch toggles correctly
- [ ] Checked change handler works
- [ ] Label and description display
- [ ] Error displays correctly
- [ ] Disabled state works
- [ ] Keyboard navigation works

