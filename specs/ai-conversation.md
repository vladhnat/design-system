# AiConversation Component Specification

## Overview
The AiConversation component displays a conversation thread with user messages and AI responses, including code blocks.

## Design Tokens

### Container
- Layout: Flex column
- Gap: `24px` (gap-6)
- Width: `100%` (w-full)

### User Message Container
- Layout: Flex column, items-end
- Width: `100%` (w-full)

### AI Response Container
- Layout: Flex column, gap-6, items-start
- Width: `100%` (w-full)

## Props & Variants

### Props
```typescript
interface ConversationMessage {
  type: "user" | "assistant"
  content: string
  code?: string
  icon?: React.ReactNode
}

interface AiConversationProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: ConversationMessage[]
}
```

## Usage Examples

### Basic Conversation
```tsx
<AiConversation
  messages={[
    {
      type: "user",
      content: "Hello, how can I help?",
    },
    {
      type: "assistant",
      content: "I can help you with that!",
      icon: <Bot className="h-5 w-5" />,
    },
  ]}
/>
```

### With Code Block
```tsx
<AiConversation
  messages={[
    {
      type: "user",
      content: "Show me some code",
    },
    {
      type: "assistant",
      content: "Here's the code:",
      code: "const example = 'code';",
      icon: <Code className="h-5 w-5" />,
    },
  ]}
/>
```

## Accessibility

- Messages are properly structured
- Code blocks are accessible
- Icons have proper labels

## Testing Requirements

- [ ] User messages display correctly
- [ ] AI responses display correctly
- [ ] Code blocks display correctly
- [ ] Icons display correctly
- [ ] Multiple messages work
- [ ] Responsive behavior works

