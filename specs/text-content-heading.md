# TextContentHeading Component Specification

## Overview
The TextContentHeading component displays a heading with an optional subheading, with alignment options.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `8px` (gap-2)

### Heading
- Font Family: Inter
- Font Size: `24px` (text-2xl)
- Font Weight: `600` (Semi Bold)
- Line Height: `1.2`
- Letter Spacing: `-0.02em`
- Color: `#1e1e1e` (Text/Default/Default)

### Subheading
- Font Family: Inter
- Font Size: `16px` (Body/Size Medium)
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
interface TextContentHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  subheading?: string
  align?: "left" | "center" | "right"
}
```

### Default Values
- `align`: "left"

## Usage Examples

### Basic Usage
```tsx
<TextContentHeading heading="Section Title" />
```

### With Subheading
```tsx
<TextContentHeading 
  heading="Section Title" 
  subheading="Section description" 
/>
```

### Centered
```tsx
<TextContentHeading 
  heading="Centered Title" 
  subheading="Centered description"
  align="center"
/>
```

## Accessibility

- Uses semantic `<h2>` for heading
- Subheading uses `<p>` element
- Proper heading hierarchy

## Testing Requirements

- [ ] Heading displays correctly
- [ ] Subheading displays when provided
- [ ] All alignment options work
- [ ] Typography matches spec
- [ ] Works without subheading

