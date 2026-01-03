# Avatar Block Component Specification

## Overview
The AvatarBlock component displays an avatar alongside a title and optional description, commonly used in user lists, comments, or profile displays.

## Design Tokens

### Typography
- **Title**:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 600 (Semi Bold - Body/Font Weight Strong)
  - Line Height: 1.4
  - Color: `#303030` (Text/Neutral/Default)

- **Description**:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4
  - Color: `#757575` (Text/Default/Secondary)

### Spacing
- Gap between avatar and text: `gap-3` (12px - Space/300)

### Avatar Size
- Default: `large` (40px)

## Props & Variants

### Props
```typescript
interface AvatarBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "default" | "large"
}
```

### Required Props
- `title`: The main text to display

### Optional Props
- `description`: Secondary text below the title
- `src`: Image source for the avatar
- `alt`: Alt text for the avatar image
- `fallback`: Fallback text for avatar (initials)
- `size`: Avatar size (defaults to "large")

## Usage Examples

### Basic Usage
```tsx
<AvatarBlock
  title="John Doe"
  description="Software Engineer"
  src="/user.jpg"
  fallback="JD"
/>
```

### Without Description
```tsx
<AvatarBlock
  title="Jane Smith"
  src="/user.jpg"
  fallback="JS"
/>
```

### With Different Size
```tsx
<AvatarBlock
  title="Title"
  description="Description"
  size="sm"
  fallback="AB"
/>
```

## Accessibility

- Avatar must have proper alt text
- Title should be semantically meaningful
- Description should provide additional context
- Should be keyboard navigable if interactive

## Testing Requirements

- [ ] Title displays correctly
- [ ] Description displays when provided
- [ ] Description is hidden when not provided
- [ ] Avatar renders with correct size
- [ ] Image loads when src provided
- [ ] Fallback displays correctly
- [ ] Spacing is correct between elements

