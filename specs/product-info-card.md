# Product Info Card Component Specification

## Overview
The ProductInfoCard component displays product information with image, rating, heading, description, and price.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `16px` (gap-4)
- Padding: `24px` (p-6)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)

### Image Container
- Width: `100%` (w-full)
- Aspect Ratio: `1:1` (aspect-square)
- Border Radius: `8px` (rounded-lg)
- Background: `#E3E3E3` (Image Placeholder)
- Overflow: Hidden

### Rating
- Layout: Flex row, items-center
- Gap: `4px` (gap-1)
- Star: `16px × 16px` (h-4 w-4), `fill-[#2c2c2c] text-[#2c2c2c]`
- Text: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Heading
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Description
- Typography: `text-sm font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Price
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`

## Props & Variants

### Props
```typescript
interface ProductInfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  asset: React.ReactNode
  rating: number
  heading: string
  price: string
  description: string
}
```

## Usage Examples

### Basic Product Card
```tsx
<ProductInfoCard
  asset={<img src="/product.jpg" alt="Product" />}
  rating={4.5}
  heading="Product Name"
  price="$99.99"
  description="Product description text"
/>
```

## Accessibility

- Image should have alt text
- Rating should be announced
- Price should be clear
- Content is readable

## Testing Requirements

- [ ] Image displays correctly
- [ ] Rating displays correctly
- [ ] All text displays correctly
- [ ] Price displays correctly
- [ ] Responsive behavior works

