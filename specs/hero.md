# Hero Component Specification

## Overview
The Hero component is a large banner section used for page headers, with multiple variants and content options.

## Design Tokens

### Container
- Width: `100%` (w-full)
- Min Height: `400px` (min-h-[400px])
- Padding: `16px` horizontal (px-4), `64px` vertical (py-16)
- Layout: Flex column, items-center, justify-center

### Variants

#### Subtle (Default)
- Background: `#f5f5f5` (Background/Default/Secondary)

#### Image
- Background: Cover image
- Overlay: `rgba(0, 0, 0, 0.4)` (bg-black/40)
- Text: White (`text-white`)

#### Default
- Background: `#ffffff` (Background/Default/Default)

### Content Container
- Max Width: `1024px` (max-w-4xl)
- Width: `100%` (w-full)
- Layout: Flex column, items-center
- Gap: `24px` (gap-6)
- Position: Relative, z-10 (above image overlay)

## Props & Variants

### Hero Props
```typescript
interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "subtle" | "image" | "default"
  title?: string
  subtitle?: string
  src?: string
  alt?: string
  children?: React.ReactNode
}
```

### HeroActions Props
```typescript
interface HeroActionsProps extends Omit<HeroProps, "children"> {
  primaryAction?: { label: string; onClick?: () => void }
  secondaryAction?: { label: string; onClick?: () => void }
}
```

### HeroForm Props
```typescript
interface HeroFormProps extends Omit<HeroProps, "children"> {
  formFields?: Array<{
    type: "input" | "textarea"
    label: string
    placeholder?: string
    name: string
  }>
  submitLabel?: string
  onSubmit?: (data: Record<string, string>) => void
}
```

### HeroNewsletter Props
```typescript
interface HeroNewsletterProps extends Omit<HeroProps, "children"> {
  emailPlaceholder?: string
  submitLabel?: string
  onSubmit?: (email: string) => void
}
```

## Usage Examples

### Basic Hero
```tsx
<Hero variant="subtle" title="Welcome" subtitle="Get started today" />
```

### Hero with Actions
```tsx
<HeroActions
  variant="subtle"
  title="Welcome"
  subtitle="Get started today"
  primaryAction={{ label: "Get Started", onClick: () => {} }}
  secondaryAction={{ label: "Learn More", onClick: () => {} }}
/>
```

### Hero with Form
```tsx
<HeroForm
  variant="subtle"
  title="Contact Us"
  subtitle="Get in touch"
  formFields={[
    { type: "input", label: "Name", name: "name" },
    { type: "input", label: "Email", name: "email" },
    { type: "textarea", label: "Message", name: "message" },
  ]}
  onSubmit={(data) => console.log(data)}
/>
```

### Hero with Image
```tsx
<Hero
  variant="image"
  title="Welcome"
  subtitle="Get started today"
  src="/hero-image.jpg"
  alt="Hero image"
/>
```

### Hero Newsletter
```tsx
<HeroNewsletter
  variant="subtle"
  title="Subscribe"
  subtitle="Get updates"
  onSubmit={(email) => console.log(email)}
/>
```

## Accessibility

- Uses semantic HTML
- Image has alt text
- Form inputs are properly labeled
- Buttons are keyboard accessible
- Proper heading hierarchy

## Testing Requirements

- [ ] All variants render correctly
- [ ] Image variant displays image and overlay
- [ ] Title and subtitle display correctly
- [ ] HeroActions buttons work
- [ ] HeroForm submits correctly
- [ ] HeroNewsletter submits correctly
- [ ] Responsive behavior works
- [ ] Text contrast is sufficient (especially on image variant)

