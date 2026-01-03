# Footer Component Specification

## Overview
The Footer component provides a site footer with logo, navigation columns, copyright, and social links.

## Design Tokens

### Container
- Width: `100%` (w-full)
- Border: `1px solid #d9d9d9` (Border/Default/Default) on top
- Background: `#ffffff` (Background/Default/Default)

### Inner Container
- Max Width: Container width
- Padding: `16px` horizontal (px-4), `48px` vertical (py-12)

### Grid Layout
- Columns: `1` on mobile, `4` on desktop (grid-cols-1 md:grid-cols-4)
- Gap: `32px` (gap-8)
- Margin Bottom: `32px` (mb-8)

### Column Title
- Typography: `text-base font-semibold leading-[1.4] text-[#1e1e1e] font-[Inter]`
- Margin Bottom: `16px` (gap-4)

### Column Links
- Typography: `text-base font-normal leading-[1.4] text-[#757575] font-[Inter]`
- Hover: `text-[#1e1e1e]`
- Gap: `8px` (gap-2)

### Bottom Section
- Border: `1px solid #d9d9d9` on top
- Padding Top: `32px` (pt-8)
- Layout: Flex row (desktop), column (mobile)
- Alignment: Space-between, items-center

## Props & Variants

### Props
```typescript
interface FooterColumn {
  title: string
  links: Array<{ label: string; href: string }>
}

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode | string
  columns?: FooterColumn[]
  copyright?: string
  socialLinks?: Array<{ label: string; href: string; icon?: React.ReactNode }>
}
```

## Usage Examples

### Basic Footer
```tsx
<Footer copyright="© 2025 My Company" />
```

### With Columns
```tsx
<Footer
  logo="My Site"
  columns={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ]}
  copyright="© 2025 My Company"
/>
```

### With Social Links
```tsx
<Footer
  socialLinks={[
    { label: "Twitter", href: "https://twitter.com" },
    { label: "GitHub", href: "https://github.com" },
  ]}
/>
```

## Accessibility

- Uses semantic `<footer>` element
- Links are keyboard accessible
- Social links have aria-labels
- Proper navigation structure

## Testing Requirements

- [ ] Logo displays correctly
- [ ] Columns render correctly
- [ ] Links work correctly
- [ ] Copyright displays
- [ ] Social links work
- [ ] Responsive behavior works
- [ ] Hover states work

