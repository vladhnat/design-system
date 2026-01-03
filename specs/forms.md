# Form Components Specification

## Overview
Form components provide a complete form system with field components, containers, and layout variants for building various form types.

## Components

### FormBox
Container component for form elements with vertical layout.

### Form
Form component with single-line variant for inline forms.

### InputField
Input field with integrated label and error handling.

### TextareaField
Textarea field with integrated label and error handling.

### CheckboxField
Checkbox with label and optional description.

### SelectField
Select dropdown with integrated label and error handling.

### TextLink
Link component for form-related links (e.g., "Forgot password?").

---

## FormBox

### Design Tokens
- Layout: Flex column
- Gap: `24px` (Space/600) between form elements

### Props
```typescript
interface FormBoxProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}
```

### Usage
```tsx
<FormBox onSubmit={handleSubmit}>
  <InputField label="Email" />
  <ButtonGroup align="justify">
    <Button>Submit</Button>
  </ButtonGroup>
</FormBox>
```

---

## Form (Single-line)

### Design Tokens
- Layout: Flex row when `singleLine={true}`
- Border: `1px solid #d9d9d9`
- Border Radius: `8px` (Radius/200)
- Background: `#ffffff`
- No gap between input and button (seamless)

### Props
```typescript
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  singleLine?: boolean
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}
```

### Usage
```tsx
<Form singleLine onSubmit={handleSubmit}>
  <Input defaultValue="you@example.com" />
  <Button>Submit</Button>
</Form>
```

---

## InputField

### Design Tokens
- Label:
  - Font Family: Inter
  - Font Size: 16px
  - Font Weight: 600 (Semi Bold)
  - Line Height: 1.4
  - Color: `#1e1e1e`
- Input:
  - Height: `40px` (h-10)
  - Border: `1px solid #d9d9d9`
  - Border Radius: `8px` (Radius/200)
  - Padding: `12px` horizontal, `8px` vertical
  - Typography: 16px, 400 weight, Inter
  - Placeholder Color: `#b3b3b3`
- Error:
  - Border Color: `#ec221f` (when error present)
  - Error Text: 14px, `#ec221f`

### Props
```typescript
interface InputFieldProps extends React.ComponentProps<typeof Input> {
  label?: string
  error?: string
}
```

### Usage
```tsx
<InputField
  label="Email"
  placeholder="Enter your email"
  error="Email is required"
/>
```

---

## TextareaField

### Design Tokens
- Same label styling as InputField
- Textarea:
  - Min Height: `80px`
  - Resizable: Vertical only
  - Same border, padding, typography as InputField

### Props
```typescript
interface TextareaFieldProps extends React.ComponentProps<typeof Textarea> {
  label?: string
  error?: string
}
```

### Usage
```tsx
<TextareaField
  label="Message"
  placeholder="Type your message"
  error="Message is required"
/>
```

---

## CheckboxField

### Design Tokens
- Checkbox:
  - Size: `16px × 16px` (h-4 w-4)
  - Border: `#1e1e1e`
  - Checked Background: `#2c2c2c`
  - Checked Text: `#f5f5f5`
- Label:
  - Font Family: Inter
  - Font Size: 16px
  - Font Weight: 400
  - Line Height: 1.4
  - Color: `#1e1e1e`
- Description:
  - Font Size: 14px
  - Color: `#757575`
- Gap: `8px` (Space/200) between checkbox and label

### Props
```typescript
interface CheckboxFieldProps extends React.ComponentProps<typeof Checkbox> {
  label?: string
  description?: string
  error?: string
}
```

### Usage
```tsx
<CheckboxField
  label="I accept the terms"
  description="Read our T&Cs"
  defaultChecked
/>
```

---

## SelectField

### Design Tokens
- Same label styling as InputField
- Select Trigger:
  - Height: `40px`
  - Same border, padding, typography as InputField
- Error styling same as InputField

### Props
```typescript
interface SelectFieldProps extends React.ComponentProps<typeof Select> {
  label?: string
  placeholder?: string
  error?: string
  children: React.ReactNode
}
```

### Usage
```tsx
<SelectField label="Location" placeholder="Select location">
  <SelectItem value="us">United States</SelectItem>
  <SelectItem value="uk">United Kingdom</SelectItem>
</SelectField>
```

---

## TextLink

### Design Tokens
- Typography:
  - Font Family: Inter
  - Font Size: 16px
  - Font Weight: 400
  - Line Height: 1.4
  - Color: `#1e1e1e`
- Text Decoration: Underline
- Hover Color: `#2c2c2c`

### Props
```typescript
interface TextLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode
}
```

### Usage
```tsx
<TextLink href="/forgot-password">
  Forgot password?
</TextLink>
```

---

## Form Examples

### Contact Form
```tsx
<FormBox onSubmit={handleSubmit}>
  <InputField label="Name" />
  <InputField label="Email" />
  <TextareaField label="Message" />
  <ButtonGroup align="justify">
    <Button>Submit</Button>
  </ButtonGroup>
</FormBox>
```

### Login Form
```tsx
<FormBox onSubmit={handleSubmit}>
  <InputField label="Email" />
  <InputField label="Password" type="password" />
  <ButtonGroup align="justify">
    <Button>Sign In</Button>
  </ButtonGroup>
  <TextLink href="/forgot">Forgot password?</TextLink>
</FormBox>
```

### Shipping Form
```tsx
<FormBox onSubmit={handleSubmit}>
  <InputField label="Full Name" />
  <SelectField label="Location">
    <SelectItem value="us">US</SelectItem>
  </SelectField>
  <TextareaField label="Delivery note" />
  <CheckboxField label="I accept" description="T&Cs" />
  <ButtonGroup align="justify">
    <Button>Save</Button>
  </ButtonGroup>
</FormBox>
```

## Accessibility

- All fields must have proper labels
- Error messages must be associated with fields
- Keyboard navigation must work
- Focus states must be visible
- Form validation should be announced

## Testing Requirements

- [ ] All field types render correctly
- [ ] Labels are properly associated
- [ ] Error states display correctly
- [ ] Form submission works
- [ ] Validation works
- [ ] Keyboard navigation works
- [ ] Focus management works
- [ ] Single-line form layout works

