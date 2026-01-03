# Section Component Specification

## Overview
The Section component is a wrapper that provides consistent vertical padding for page sections.

## Design Tokens

### Container
- Width: `100%` (w-full)
- Padding Variants:
  - `600`: `24px` vertical (py-6)
  - `800`: `32px` vertical (py-8)
  - `1200`: `48px` vertical (py-12) - Default
  - `1600`: `64px` vertical (py-16)

## Props & Variants

### Props
```typescript
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "600" | "800" | "1200" | "1600"
}
```

### Default Values
- `padding`: "1200"

## Usage Examples

### Basic Usage
```tsx
<Section>
  <h2>Section Content</h2>
</Section>
```

### With Custom Padding
```tsx
<Section padding="1600">
  <h2>Large Section</h2>
</Section>
```

### With Custom Classes
```tsx
<Section padding="1200" className="bg-[#f5f5f5]">
  <h2>Section with Background</h2>
</Section>
```

## Accessibility

- Uses semantic `<section>` element
- Should contain meaningful content
- Can be used with ARIA landmarks

## Testing Requirements

- [ ] All padding variants render correctly
- [ ] Custom className merges properly
- [ ] Works with all HTML attributes
- [ ] Responsive behavior works

