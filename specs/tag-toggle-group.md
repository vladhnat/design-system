# TagToggleGroup Component Specification

## Overview
The TagToggleGroup component provides a group of toggleable tags, typically used for filters.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Label
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Tag Container
- Layout: Flex wrap
- Gap: `16px` (gap-4)

## Props & Variants

### Props
```typescript
interface TagToggleItem {
  id: string
  label: string
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
}

interface TagToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  items: TagToggleItem[]
  selectedIds?: string[]
  onSelectionChange?: (selectedIds: string[]) => void
  multiple?: boolean
}
```

### Default Values
- `selectedIds`: []
- `multiple`: false

## Usage Examples

### Single Selection
```tsx
<TagToggleGroup
  label="Sort by"
  items={[
    { id: "new", label: "New" },
    { id: "price-asc", label: "Price ascending" },
    { id: "price-desc", label: "Price descending" },
  ]}
  selectedIds={["new"]}
  onSelectionChange={(ids) => console.log(ids)}
/>
```

### Multiple Selection
```tsx
<TagToggleGroup
  items={[...]}
  multiple={true}
  selectedIds={["filter1", "filter2"]}
  onSelectionChange={(ids) => console.log(ids)}
/>
```

## Accessibility

- Label is properly associated
- Tags are keyboard accessible
- Selection state is announced
- Multiple selection is indicated

## Testing Requirements

- [ ] Single selection works
- [ ] Multiple selection works
- [ ] Selection change handler works
- [ ] Label displays correctly
- [ ] Icons display correctly
- [ ] Keyboard navigation works

