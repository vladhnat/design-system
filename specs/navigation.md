# Navigation Component Specification

## Overview
The Navigation component provides a container for navigation items, with NavigationPill for individual navigation items.

## Design Tokens

### Navigation Container
- Layout: Flex
- Direction: `row` (default) or `column`
- Gap: `8px` (gap-2) or `16px` (gap-4)

### NavigationPill
- Layout: Inline flex, items-center, justify-center
- Padding: `16px` horizontal (px-4), `8px` vertical (py-2)
- Border Radius: `8px` (rounded-lg)
- Typography:
  - Font Family: Inter
  - Font Size: `16px` (Body/Size Medium)
  - Font Weight: `400` (Regular)
  - Line Height: `1.4`

### States

#### Selected
- Background: `#2c2c2c` (Background/Brand/Default)
- Text: `#f5f5f5` (Text/Brand/On Brand)

#### Unselected
- Background: Transparent
- Text: `#1e1e1e` (Text/Default/Default)
- Hover: `bg-[#f5f5f5]` (Background/Default/Secondary)

## Props & Variants

### Navigation Props
```typescript
interface NavigationProps extends React.HTMLAttributes<HTMLNavElement> {
  direction?: "row" | "column"
  gap?: "200" | "400"
  children: React.ReactNode
}
```

### NavigationPill Props
```typescript
interface NavigationPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
  onSelect?: () => void
}
```

### Default Values
- `direction`: "row"
- `gap`: "200"
- `isSelected`: false

## Usage Examples

### Basic Navigation
```tsx
<Navigation>
  <NavigationPill isSelected>Monthly</NavigationPill>
  <NavigationPill>Yearly</NavigationPill>
  <NavigationPill>Link</NavigationPill>
</Navigation>
```

### With Selection Handler
```tsx
const [selected, setSelected] = useState("monthly")

<Navigation>
  <NavigationPill
    isSelected={selected === "monthly"}
    onSelect={() => setSelected("monthly")}
  >
    Monthly
  </NavigationPill>
  <NavigationPill
    isSelected={selected === "yearly"}
    onSelect={() => setSelected("yearly")}
  >
    Yearly
  </NavigationPill>
</Navigation>
```

### Column Layout
```tsx
<Navigation direction="column" gap="400">
  <NavigationPill>Item 1</NavigationPill>
  <NavigationPill>Item 2</NavigationPill>
</Navigation>
```

## Accessibility

- Uses semantic `<nav>` element
- Buttons are keyboard accessible
- Selected state is clearly indicated
- ARIA attributes for selection state

## Testing Requirements

- [ ] Navigation container renders correctly
- [ ] NavigationPill states work
- [ ] Selection handler works
- [ ] Hover states work
- [ ] Keyboard navigation works
- [ ] Column layout works
- [ ] Multiple selections work (if needed)

