# Search Component Specification

## Overview
The Search component is an input field with a search icon, used for search functionality.

## Design Tokens

### Container
- Position: Relative

### Input
- Height: `40px` (h-10)
- Padding Right: `40px` (pr-10) for icon space
- Inherits all Input component styles

### Search Icon
- Position: Absolute, right-3, top-1/2
- Size: `16px × 16px` (h-4 w-4)
- Color: `#1e1e1e` (Icon/Default/Default)
- Pointer Events: None
- Transform: `-translate-y-1/2` (centered vertically)

## Props & Variants

### Props
```typescript
interface SearchProps extends React.ComponentProps<typeof Input> {
  placeholder?: string
}
```

### Default Values
- `placeholder`: "Value"

## Usage Examples

### Basic Search
```tsx
<Search placeholder="Search..." />
```

### With Value
```tsx
<Search
  placeholder="Search products"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
```

## Accessibility

- Inherits accessibility from Input
- Search icon is decorative
- Placeholder provides context

## Testing Requirements

- [ ] Input works correctly
- [ ] Search icon displays
- [ ] Placeholder displays
- [ ] Change handler works
- [ ] Keyboard navigation works

