# Flex Component Specification

## Overview
The Flex component provides a flexible layout system with support for flexbox and grid layouts, alignment options, and spacing.

## Design Tokens

### Container
- Display: `flex` (default) or `grid` (when type is specified)
- Gap Variants:
  - `200`: `8px` (gap-2)
  - `300`: `12px` (gap-3)
  - `400`: `16px` (gap-4) - Default
  - `600`: `24px` (gap-6)
  - `800`: `32px` (gap-8)
  - `1200`: `48px` (gap-12)

### Grid Types
- `auto`: No grid (uses flexbox)
- `third`: 3-column grid (grid-cols-1 md:grid-cols-3)
- `quarter`: 4-column grid (grid-cols-1 md:grid-cols-4)
- `half`: 2-column grid (grid-cols-1 md:grid-cols-2)

## Props & Variants

### Flex Props
```typescript
interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column"
  wrap?: boolean
  gap?: "200" | "300" | "400" | "600" | "800" | "1200"
  alignPrimary?: "start" | "center" | "end" | "space-between" | "space-around" | "stretch"
  alignSecondary?: "start" | "center" | "end" | "stretch"
  type?: "auto" | "third" | "quarter" | "half"
  container?: boolean
}
```

### FlexItem Props
```typescript
interface FlexItemProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "full" | "major" | "minor" | "half"
}
```

### Default Values
- `direction`: "row"
- `wrap`: false
- `gap`: "400"
- `alignPrimary`: "start"
- `alignSecondary`: "start"
- `type`: "auto"
- `container`: false
- `size`: "full"

## Usage Examples

### Basic Flex Row
```tsx
<Flex>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Flex Column
```tsx
<Flex direction="column" gap="600">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Grid Layout
```tsx
<Flex type="third" gap="1200">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Flex>
```

### With Container
```tsx
<Flex container gap="1200">
  <div>Content</div>
</Flex>
```

### FlexItem Sizes
```tsx
<Flex>
  <FlexItem size="minor">Sidebar</FlexItem>
  <FlexItem size="major">Main Content</FlexItem>
</Flex>
```

## Accessibility

- Uses semantic HTML
- Maintains logical reading order
- Works with screen readers

## Testing Requirements

- [ ] All direction variants work
- [ ] Wrap functionality works
- [ ] All gap sizes render correctly
- [ ] Alignment options work
- [ ] Grid types render correctly
- [ ] Container variant works
- [ ] FlexItem sizes work correctly
- [ ] Responsive behavior works

