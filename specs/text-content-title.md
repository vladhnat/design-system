# TextContentTitle Component Specification

## Overview
The TextContentTitle component displays a large hero title with an optional subtitle, with alignment options.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Title
- Font Family: Inter
- Font Size: `48px` (text-5xl)
- Font Weight: `700` (Bold)
- Line Height: `1.2`
- Letter Spacing: `-0.03em`
- Color: `#1e1e1e` (Text/Default/Default)

### Subtitle
- Font Family: Inter
- Font Size: `20px` (text-xl)
- Font Weight: `400` (Regular)
- Line Height: `1.2`
- Color: `#757575` (Text/Default/Secondary)

### Alignment
- `left`: Items and text aligned left (default)
- `center`: Items and text centered
- `right`: Items and text aligned right

## Props & Variants

### Props
```typescript
interface TextContentTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
}
```

### Default Values
- `align`: "left"

## Usage Examples

### Basic Usage
```tsx
<TextContentTitle title="Hero Title" />
```

### With Subtitle
```tsx
<TextContentTitle 
  title="Hero Title" 
  subtitle="Hero subtitle description" 
/>
```

### Centered
```tsx
<TextContentTitle 
  title="Centered Hero" 
  subtitle="Centered subtitle"
  align="center"
/>
```

## Accessibility

- Uses semantic `<h1>` for title
- Subtitle uses `<p>` element
- Proper heading hierarchy

## Testing Requirements

- [ ] Title displays correctly
- [ ] Subtitle displays when provided
- [ ] All alignment options work
- [ ] Typography matches spec
- [ ] Works without subtitle

