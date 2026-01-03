# AiChatCodeBlock Component Specification

## Overview
The AiChatCodeBlock component displays syntax-highlighted code with optional line numbers.

## Design Tokens

### Container
- Layout: Flex row, items-start
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `16px` (Radius/400)
- Overflow: Hidden
- Width: `100%` (w-full)

### Line Numbers Column
- Background: `#ffffff` (Background/Default/Default)
- Border: `1px solid #d9d9d9` (Border/Default/Default) on right
- Padding: `8px` horizontal (px-2), `16px` vertical (py-4)
- Width: `48px` (w-12)
- Shrink: 0

### Line Numbers Text
- Font Family: Monospace
- Font Size: `16px` (text-base)
- Font Weight: `400` (Regular)
- Line Height: `1.3`
- Color: `#b3b3b3` (Text/Default/Tertiary)
- Text Align: Right

### Code Column
- Background: `#f5f5f5` (Background/Default/Secondary)
- Border: `1px solid #d9d9d9` (Border/Default/Default) on right
- Padding: `8px` horizontal (px-2), `16px` vertical (py-4)
- Flex: 1
- Overflow: Auto (overflow-x-auto)

### Code Text
- Font Family: Monospace
- Font Size: `16px` (text-base)
- Font Weight: `400` (Regular)
- Line Height: `1.3`
- Color: `#abb2bf` (code-gray)

## Props & Variants

### Props
```typescript
interface AiChatCodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  lineNumbers?: boolean
}
```

### Default Values
- `lineNumbers`: true

## Usage Examples

### Basic Code Block
```tsx
<AiChatCodeBlock code="const example = 'code';" />
```

### Without Line Numbers
```tsx
<AiChatCodeBlock
  code="const example = 'code';"
  lineNumbers={false}
/>
```

### Multi-line Code
```tsx
<AiChatCodeBlock
  code={`function example() {
  return 'code';
}`}
/>
```

## Accessibility

- Code is readable
- Line numbers help navigation
- Proper semantic structure

## Testing Requirements

- [ ] Code displays correctly
- [ ] Line numbers display correctly
- [ ] Multi-line code works
- [ ] Horizontal scroll works for long lines
- [ ] Works without line numbers
- [ ] Responsive behavior works

