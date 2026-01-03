# Review Card Component Specification

## Overview
The ReviewCard component displays a product or service review with star rating, title, body text, reviewer info, and date.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `16px` (gap-4)
- Padding: `24px` (p-6)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)

### Star Rating
- Size: `16px × 16px` (h-4 w-4)
- Filled: `fill-[#2c2c2c] text-[#2c2c2c]`
- Unfilled: `fill-none text-[#d9d9d9]`
- Gap: `4px` (gap-1)

### Title
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Body
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

### Reviewer Info
- Layout: Flex row, items-center
- Gap: `12px` (gap-3)
- Avatar: Large size (40px)
- Name: `text-base font-semibold leading-[1.4] text-[#303030] font-[Inter]`
- Date: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

## Props & Variants

### Props
```typescript
interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stars: number
  title: string
  body: string
  date: string
  name: string
  src?: string
  fallback?: string
}
```

## Usage Examples

### Basic Review
```tsx
<ReviewCard
  stars={5}
  title="Great Product"
  body="This product exceeded my expectations. Highly recommended!"
  date="January 15, 2025"
  name="John Doe"
  src="/avatar.jpg"
  fallback="JD"
/>
```

## Accessibility

- Uses semantic HTML
- Star rating should have aria-label
- Avatar has alt text
- Content is readable

## Testing Requirements

- [ ] Star rating displays correctly
- [ ] All text displays correctly
- [ ] Avatar displays correctly
- [ ] Works with different star ratings
- [ ] Responsive behavior works

