# HeaderAuth Component Specification

## Overview
The HeaderAuth component extends the Header component with authentication-specific functionality, showing login/signup buttons or user info.

## Design Tokens

Inherits all design tokens from Header component.

### Actions
- Layout: Flex row, items-center
- Gap: `8px` (gap-2)

### User Info
- Typography: `text-base font-normal leading-[1.4] text-[#1e1e1e] font-[Inter]`

## Props & Variants

### Props
```typescript
interface HeaderAuthProps extends React.ComponentProps<typeof Header> {
  logo?: React.ReactNode | string
  navItems?: Array<{ label: string; href: string }>
  onLogin?: () => void
  onSignUp?: () => void
  user?: {
    name?: string
    email?: string
    avatar?: string
  }
  onLogout?: () => void
}
```

## Usage Examples

### Unauthenticated
```tsx
<HeaderAuth
  logo="My Site"
  onLogin={() => console.log("login")}
  onSignUp={() => console.log("signup")}
/>
```

### Authenticated
```tsx
<HeaderAuth
  logo="My Site"
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg",
  }}
  onLogout={() => console.log("logout")}
/>
```

## Accessibility

- Inherits accessibility from Header
- Buttons are keyboard accessible
- User info is properly announced

## Testing Requirements

- [ ] Login/signup buttons display when unauthenticated
- [ ] User info displays when authenticated
- [ ] Logout button works
- [ ] All Header functionality works
- [ ] Responsive behavior works

