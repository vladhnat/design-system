# Pricing Card Component Specification

## Overview
The PricingCard component displays pricing information with heading, price, feature list, and action button.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `24px` (gap-6)
- Padding: `24px` (p-6) or `32px` (p-8) for large size
- Border: `1px solid #d9d9d9` (Border/Default/Default) when variant="stroke"
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)

### Heading
- Typography: `text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]`

### SKU
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`

### Price
- Layout: Flex row, items-baseline
- Gap: `4px` (gap-1)
- Currency: `text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1e1e1e] font-[Inter]`
- Price: Same as currency
- Label: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`
- Interval: Same as label

### List Slot
- Custom ReactNode for feature list

### Button
- Full width
- Uses ButtonGroup with justify alignment

## Props & Variants

### Props
```typescript
interface PricingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  action: string
  actionVariant?: "primary" | "neutral"
  onAction?: () => void
  listSlot: React.ReactNode
  interval?: string
  sku?: string
  price: string
  priceCurrency?: string
  priceLabel?: string
  size?: "default" | "large"
  variant?: "default" | "stroke"
}
```

### Default Values
- `actionVariant`: "primary"
- `priceCurrency`: "$"
- `size`: "default"
- `variant`: "default"

## Usage Examples

### Basic Pricing Card
```tsx
<PricingCard
  heading="Pro Plan"
  price="50"
  priceCurrency="$"
  priceLabel="/ mo"
  interval="month"
  sku="pro_monthly"
  action="Get Started"
  onAction={() => {}}
  listSlot={
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  }
/>
```

### Large with Stroke
```tsx
<PricingCard
  heading="Enterprise"
  price="200"
  size="large"
  variant="stroke"
  action="Contact Sales"
  listSlot={<FeatureList />}
/>
```

## Accessibility

- Uses semantic HTML
- Button is keyboard accessible
- Price is clearly announced
- List is properly structured

## Testing Requirements

- [ ] All props work correctly
- [ ] Price formatting works
- [ ] Button action works
- [ ] List slot renders correctly
- [ ] Size variants work
- [ ] Variant styles work
- [ ] Responsive behavior works

