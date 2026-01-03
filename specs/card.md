# Card Component Specification

## Overview
The Card component is a container for displaying content in a structured format. It consists of Header, Title, Description, Content, and Footer sections.

## Design Tokens

### Container
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Text Color: `#1e1e1e` (Text/Default/Default)
- Shadow: `shadow-sm`

### CardHeader
- Padding: `24px` (p-6)
- Layout: Flex column
- Gap: `6px` (space-y-1.5)

### CardTitle
- Font Family: Inter
- Font Size: 24px (text-2xl)
- Font Weight: 600 (Semi Bold)
- Line Height: 1 (leading-none)
- Color: `#1e1e1e`
- Tracking: Tight

### CardDescription
- Font Family: Inter
- Font Size: 14px (text-sm)
- Font Weight: 400 (Regular)
- Line Height: 1.4
- Color: `#757575` (Text/Default/Secondary)

### CardContent
- Padding: `24px` (p-6)
- Padding Top: `0` (pt-0)

### CardFooter
- Padding: `24px` (p-6)
- Padding Top: `0` (pt-0)
- Layout: Flex items-center

## Props & Variants

### Props
All components extend standard HTML div props:
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
```

## Usage Examples

### Basic Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Card Without Footer
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### Card Without Description
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

## Accessibility

- Should use semantic HTML structure
- Title should use appropriate heading level
- Content should be properly structured
- Interactive elements should be keyboard accessible

## Testing Requirements

- [ ] All sections render correctly
- [ ] Spacing is correct
- [ ] Typography matches spec
- [ ] Works with different content lengths
- [ ] Works without optional sections
- [ ] Responsive behavior works

