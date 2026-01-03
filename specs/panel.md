# Panel Component Specification

## Overview
The Panel component provides flexible layout containers for displaying images and content in various configurations.

## Design Tokens

### Container
- Width: `100%` (w-full)

### Types
- `auto`: No specific layout (flexible)
- `half`: 2-column grid (grid-cols-1 md:grid-cols-2)
- `full`: Full width

### Gap Variants
- `600`: `24px` (gap-6)
- `800`: `32px` (gap-8)
- `1200`: `48px` (gap-12) - Default

### Image Aspect Ratios
- `fill`: Auto aspect ratio
- `4-3`: 4:3 aspect ratio
- `16-9`: 16:9 aspect ratio
- `1-1`: Square (1:1)

## Props & Variants

### Panel Props
```typescript
interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "auto" | "half" | "full"
  gap?: "600" | "800" | "1200"
  children: React.ReactNode
}
```

### PanelImage Props
```typescript
interface PanelImageProps extends Omit<PanelProps, "children"> {
  src: string
  alt: string
  aspectRatio?: "fill" | "4-3" | "16-9" | "1-1"
}
```

### PanelImageContent Props
```typescript
interface PanelImageContentProps extends Omit<PanelProps, "children"> {
  src: string
  alt: string
  heading?: string
  subheading?: string
  content?: React.ReactNode
  aspectRatio?: "4-3" | "16-9" | "1-1"
  reverse?: boolean
}
```

### PanelImageDouble Props
```typescript
interface PanelImageDoubleProps extends Omit<PanelProps, "children"> {
  src1: string
  alt1: string
  src2: string
  alt2: string
  aspectRatio?: "4-3" | "16-9" | "1-1"
}
```

## Usage Examples

### Panel Image (Full Width)
```tsx
<PanelImage
  src="/image.jpg"
  alt="Description"
  aspectRatio="16-9"
/>
```

### Panel Image Content
```tsx
<PanelImageContent
  src="/image.jpg"
  alt="Description"
  heading="Heading"
  subheading="Subheading"
  content={<p>Content text</p>}
  aspectRatio="4-3"
/>
```

### Panel Image Content Reverse
```tsx
<PanelImageContent
  src="/image.jpg"
  alt="Description"
  heading="Heading"
  content={<p>Content text</p>}
  reverse={true}
/>
```

### Panel Image Double
```tsx
<PanelImageDouble
  src1="/image1.jpg"
  alt1="Image 1"
  src2="/image2.jpg"
  alt2="Image 2"
  aspectRatio="4-3"
/>
```

## Accessibility

- Images must have alt text
- Proper semantic HTML structure
- Content is readable and accessible

## Testing Requirements

- [ ] All panel types render correctly
- [ ] All gap sizes work
- [ ] Image aspect ratios work
- [ ] Reverse layout works
- [ ] Responsive behavior works
- [ ] Images load correctly
- [ ] Content displays properly

