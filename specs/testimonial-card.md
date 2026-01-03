# Testimonial Card Component Specification

## Overview
The TestimonialCard component displays a testimonial quote with reviewer information.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `16px` (gap-4)
- Padding: `24px` (p-6)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)

### Heading (Quote)
- Typography: `text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]`

### Reviewer Info
- Layout: Flex row, items-center
- Gap: `12px` (gap-3)
- Avatar: Large size (40px)
- Name: `text-base font-semibold leading-[1.4] text-[#303030] font-[Inter]`
- Username: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

## Props & Variants

### Props
```typescript
interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  name: string
  username: string
  src?: string
  fallback?: string
}
```

## Usage Examples

### Basic Testimonial
```tsx
<TestimonialCard
  heading='"This product changed my life!"'
  name="Jane Smith"
  username="@janesmith"
  src="/avatar.jpg"
  fallback="JS"
/>
```

## Accessibility

- Uses semantic HTML
- Quote should be properly marked up
- Avatar has alt text
- Content is readable

## Testing Requirements

- [ ] Quote displays correctly
- [ ] Reviewer info displays correctly
- [ ] Avatar displays correctly
- [ ] Responsive behavior works

