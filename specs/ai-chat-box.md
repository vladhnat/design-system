# AI Chat Box Component Specification

## Overview
The AI Chat Box is an input component designed for chat interfaces, featuring a textarea for user input, icon buttons for attachments, and a send button.

## Design Tokens

### Container
- Background: `#ffffff` (Background/Default/Default)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `16px` (Radius/400)
- Padding: `16px` (Space/400)
- Gap between textarea and controls: `24px` (Space/600)

### Textarea
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4
  - Color: `#1e1e1e` (Text/Default/Default)
- Placeholder Color: `#b3b3b3` (Text/Default/Tertiary)
- Min Height: `22px`
- Border: None (transparent)
- Background: Transparent

### Icon Buttons
- Size: `32px × 32px` (Scale 06)
- Padding: `8px` (Space/200)
- Border Radius: `rounded-full`
- Icon Size: `20px × 20px` (h-5 w-5)
- Icon Color: `#1e1e1e` (Icon/Default/Default)
- Gap between icons: `8px` (Space/200)

### Send Button
- Size: `32px × 32px` (Scale 06)
- Border Radius: `rounded-full`
- **Disabled State**:
  - Background: `#d9d9d9` (Background/Disabled/Default)
  - Border: `1px solid #b3b3b3` (Border/Disabled/default)
  - Icon Color: `#b3b3b3` (Icon/Disabled/On Disabled)
- **Active State**:
  - Background: `#2c2c2c` (Background/Brand/Default)
  - Icon Color: `#f5f5f5` (Text/Brand/On Brand)
  - Hover: `#2c2c2c` at 90% opacity

### State Variants
- `Default`: Standard border
- `Active`: Darker border `#2c2c2c`

## Props & Variants

### Props
```typescript
interface AiChatBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  state?: "Default" | "Active"
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onImageClick?: () => void
  onCodeClick?: () => void
  onMicClick?: () => void
  onSendClick?: () => void
  disabled?: boolean
}
```

### Default Values
- `state`: "Default"
- `placeholder`: "What would you like to know?"
- `disabled`: false

### Behavior
- Send button is automatically disabled when textarea is empty
- Send button is disabled when `disabled` prop is true

## Usage Examples

### Basic Usage
```tsx
<AiChatBox
  placeholder="Type your message..."
  onSendClick={() => console.log('Send')}
/>
```

### Controlled Input
```tsx
const [value, setValue] = useState('')

<AiChatBox
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onSendClick={() => handleSend(value)}
/>
```

### With All Handlers
```tsx
<AiChatBox
  onImageClick={() => handleImageUpload()}
  onCodeClick={() => handleCodeInsert()}
  onMicClick={() => handleVoiceInput()}
  onSendClick={() => handleSend()}
/>
```

### Active State
```tsx
<AiChatBox state="Active" />
```

## Accessibility

- Textarea must be keyboard accessible
- Icon buttons need proper ARIA labels
- Send button should indicate disabled state to screen readers
- Focus management for keyboard navigation

## Testing Requirements

- [ ] Textarea accepts input
- [ ] Placeholder displays correctly
- [ ] Send button disabled when empty
- [ ] Send button enabled when text entered
- [ ] Icon buttons are clickable
- [ ] All handlers fire correctly
- [ ] Disabled state works
- [ ] Active state shows correct border
- [ ] Keyboard navigation works
- [ ] Auto-resize works for textarea

