# Alert Component Specification

## Overview
The Alert component displays important messages to users, such as warnings, errors, or informational content. It includes an icon, optional title, and description.

## Design Tokens

### Container
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff` (Background/Default/Default)
- Padding: `16px` (Space/400)
- Position: Relative

### Icon
- Position: Absolute
- Left: `16px` (left-4)
- Top: `16px` (top-4)
- Color: `#1e1e1e` (Icon/Default/Default)
- Content offset: `28px` left padding when icon present

### Variants

#### Default
- Background: `#ffffff`
- Text: `#1e1e1e` (Text/Default/Default)
- Border: `#d9d9d9`

#### Destructive
- Background: `#fee9e7` (Background/Danger/Default)
- Text: `#ec221f` (Text/Danger/On Danger)
- Border: `#ec221f` (Border/Danger/Default)
- Icon: `#ec221f`

### Typography

#### AlertTitle
- Font Family: Inter
- Font Size: 16px (Body/Size Medium)
- Font Weight: 600 (Semi Bold)
- Line Height: 1.4
- Color: `#1e1e1e`
- Margin Bottom: `4px` (mb-1)

#### AlertDescription
- Font Family: Inter
- Font Size: 16px (Body/Size Medium)
- Font Weight: 400 (Regular)
- Line Height: 1.4
- Color: `#1e1e1e`

## Props & Variants

### Alert Props
```typescript
interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}
```

### AlertTitle Props
```typescript
interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
```

### AlertDescription Props
```typescript
interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
```

## Usage Examples

### Basic Alert
```tsx
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    This is an informational alert.
  </AlertDescription>
</Alert>
```

### Destructive Alert
```tsx
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong.
  </AlertDescription>
</Alert>
```

### Without Title
```tsx
<Alert>
  <Info className="h-4 w-4" />
  <AlertDescription>
    This is a simple alert message.
  </AlertDescription>
</Alert>
```

## Accessibility

- Uses `role="alert"` for screen reader announcements
- Icon should have proper alt text or be decorative
- Title should be semantically meaningful
- Color should not be the only indicator

## Testing Requirements

- [ ] All variants render correctly
- [ ] Icon positioning works
- [ ] Title and description display correctly
- [ ] Works without title
- [ ] Works without icon
- [ ] Screen reader announces correctly
- [ ] Color contrast meets WCAG standards

