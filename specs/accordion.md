# Accordion Component Specification

## Overview
The Accordion component provides collapsible content sections, allowing users to expand and collapse information. Each item is displayed as a card with a header and content area.

## Design Tokens

### Container
- Background: `#ffffff` (Background/Default/Default)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Padding: `16px` (Space/400)
- Margin Bottom: `8px` (Space/200) between items

### Trigger (Header)
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 600 (Semi Bold - Body/Font Weight Strong)
  - Line Height: 1.4
  - Color: `#1e1e1e` (Text/Default/Default)
- Padding: `16px` (Space/400)
- Icon Color: `#1e1e1e` (Icon/Default/Default)
- Icon rotates 180° when open

### Content
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4
  - Color: `#1e1e1e` (Text/Default/Default)
- Padding: `0 16px 16px 16px` (horizontal and bottom)

### Animation
- Uses CSS transitions for smooth expand/collapse
- Duration: 0.2s ease-out

## Props & Variants

### Accordion (Root)
```typescript
// Uses Radix UI Accordion.Root props
type?: "single" | "multiple"
collapsible?: boolean
defaultValue?: string | string[]
value?: string | string[]
onValueChange?: (value: string | string[]) => void
```

### AccordionItem
```typescript
interface AccordionItemProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  value: string
}
```

### AccordionTrigger
```typescript
interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  children: React.ReactNode
}
```

### AccordionContent
```typescript
interface AccordionContentProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  children: React.ReactNode
}
```

## Usage Examples

### Single Item
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Items
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Title 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Title 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

### Multiple Open
```tsx
<Accordion type="multiple">
  {/* Multiple items can be open simultaneously */}
</Accordion>
```

## Accessibility

- Uses Radix UI Accordion which is fully accessible
- Keyboard navigation: Enter/Space to toggle
- ARIA attributes handled automatically
- Focus management included
- Screen reader announcements

## Testing Requirements

- [ ] Items expand and collapse correctly
- [ ] Single mode allows only one open item
- [ ] Multiple mode allows multiple open items
- [ ] Collapsible prop works correctly
- [ ] Animations are smooth
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Icon rotates correctly
- [ ] Content is properly hidden when collapsed

