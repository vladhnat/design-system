# Button Component Specification

## Overview
The Button component is a versatile interactive element used for triggering actions throughout the application. It supports multiple variants, sizes, and states.

## Design Tokens

### Colors
- **Default Variant**:
  - Background: `#2c2c2c` (Background/Brand/Default)
  - Text: `#f5f5f5` (Text/Brand/On Brand)
  - Border: `#2c2c2c` (Border/Brand/Default)
  - Hover: `#2c2c2c` at 90% opacity

- **Destructive Variant**:
  - Background: `#ec221f` (Background/Danger/Default)
  - Text: `#fee9e7` (Text/Danger/On Danger)
  - Border: `#c00f0c` (Border/Danger/Secondary)
  - Hover: `#ec221f` at 90% opacity

- **Subtle Variant**:
  - Background: `#f5f5f5` (Background/Default/Secondary)
  - Text: `#303030` (Text/Neutral/Default)
  - Border: Transparent
  - Hover: `#f5f5f5` at 90% opacity

### Typography
- Font Family: Inter
- Font Size: 16px (Body/Size Medium)
- Font Weight: 400 (Regular)
- Line Height: 1.4

### Spacing
- Default: `px-3 py-2` (12px horizontal, 8px vertical)
- Small: `px-2` (8px horizontal)
- Large: `px-4` (16px horizontal)

### Border Radius
- Default: `rounded-lg` (8px - Radius/200)
- Icon: `rounded-full` (circular)

### Sizes
- Small: `h-9` (36px)
- Default: `h-10` (40px)
- Large: `h-11` (44px)
- Icon: `h-8 w-8` (32px - Scale 06)

## Props & Variants

### Variants
- `default`: Primary button with dark background
- `destructive`: Danger/error actions with red background
- `outline`: Outlined button with transparent background
- `secondary`: Secondary actions
- `subtle`: Subtle actions with light background
- `ghost`: Minimal button with hover effect
- `link`: Link-styled button

### Sizes
- `sm`: Small button (36px height)
- `default`: Default button (40px height)
- `lg`: Large button (44px height)
- `icon`: Icon-only button (32px × 32px, circular)

### Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "subtle" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "icon"
  asChild?: boolean
}
```

## Usage Examples

### Basic Usage
```tsx
<Button>Click me</Button>
<Button variant="destructive">Delete</Button>
<Button variant="subtle">Cancel</Button>
```

### Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### With Icons
```tsx
<Button>
  <Icon className="h-4 w-4" />
  Button Text
</Button>
```

## Accessibility

- Must be keyboard accessible (Enter and Space keys)
- Must have proper focus states with visible ring
- Disabled state must be clearly indicated
- Should use semantic HTML (`<button>` element)
- ARIA labels required for icon-only buttons

## Testing Requirements

- [ ] All variants render correctly
- [ ] All sizes render correctly
- [ ] Hover states work
- [ ] Focus states are visible
- [ ] Disabled state prevents interaction
- [ ] Click handlers fire correctly
- [ ] Keyboard navigation works
- [ ] Icon-only buttons have proper ARIA labels

