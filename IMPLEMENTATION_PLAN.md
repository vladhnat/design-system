# Implementation Plan for Figma Components

## Analysis Summary

Based on the Figma design context, I've identified the following component categories:

### 1. **AI Chatbot System** (Node 33625:2762)
A complete chatbot interface with multiple sub-components:
- **AI Sidebar**: Navigation sidebar with search, chat list, and user info
- **AI Conversation**: Chat interface displaying user messages and AI responses
- **AI Chat Code Block**: Syntax-highlighted code display component
- **AI Chat User Message**: User message bubble
- **AI Chat Chat Response**: AI response with icon and text

### 2. **Card Grid Layouts** (Multiple nodes)
Grid systems for displaying cards in various configurations:
- **Card Grid Content List** (33625:2903): Vertical list of horizontal cards
- **Card Grid Icon** (33625:2964): Grid of cards with icons
- **Card Grid Image** (33625:3063): Grid of cards with images (3-column)
- **Card Grid Pricing** (33625:3125): Grid of pricing cards
- **Card Grid Reviews** (33625:3342): Grid of review cards (3-column)
- **Card Grid Testimonials** (33625:3502, 3612): Grid of testimonial cards (3-column)

### 3. **Layout Components**
Page-level layout components:
- **Footer** (33625:3672): Site footer
- **Header** (33625:3740): Main site header
- **Header Auth** (33625:3771): Header with authentication elements
- **Hero** variants:
  - Hero Basic (33625:3812): Title and subtitle only
  - Hero Actions (33625:3788): With action buttons
  - Hero Form (33625:3825): With form
  - Hero Image (33625:3904): With background image
  - Hero Newsletter (33625:3935): With newsletter form
- **Panel** variants:
  - Panel Image (33625:4618): Full-width image panel
  - Panel Image Content (33625:4634): Image + content side-by-side
  - Panel Image Content Reverse (33625:4662): Content + image (reversed)
  - Panel Image Double (33625:4677): Two images side-by-side
- **Page Accordion** (33625:3970): Accordion page layout
- **Page Product Results** (33625:4250): Product listing page with filters

### 4. **Supporting Components**
Smaller components needed for the layouts:
- **Tag**: Removable tag component
- **TagToggleGroup**: Group of toggleable tags (for filters)
- **TagToggle**: Individual toggleable tag
- **CheckboxGroup**: Group of checkboxes
- **Navigation/NavigationPill**: Navigation pills/tabs
- **TextContentHeading**: Heading with subheading
- **TextContentTitle**: Hero title with subtitle
- **Section**: Section wrapper with padding
- **Flex/FlexItem**: Layout flex components

## Implementation Strategy

### Phase 1: Core Layout Components
1. **Section** - Wrapper component with padding variants
2. **Flex/FlexItem** - Layout flex system
3. **TextContentHeading** - Heading with subheading
4. **TextContentTitle** - Hero title component

### Phase 2: Navigation & Header/Footer
1. **Header** - Main site header
2. **HeaderAuth** - Header with auth elements
3. **Footer** - Site footer
4. **Navigation/NavigationPill** - Navigation pills

### Phase 3: Hero Components
1. **Hero** - Base hero component with variants:
   - `subtle`: Light background
   - `image`: Background image
   - Content: title, subtitle, actions, form

### Phase 4: Panel Components
1. **Panel** - Flexible panel layout with variants:
   - `auto`: Auto-sizing
   - `half`: 50/50 split
   - `full`: Full width
   - Supports image + content layouts

### Phase 5: Supporting Components
1. **Tag** - Removable tag component
2. **TagToggleGroup** - Group of toggleable tags
3. **TagToggle** - Individual toggleable tag
4. **CheckboxGroup** - Group of checkboxes

### Phase 6: AI Chatbot System
1. **AiSidebar** - Chat sidebar with search and list
2. **AiConversation** - Chat conversation display
3. **AiChatCodeBlock** - Code block with syntax highlighting
4. **AiChatUserMessage** - User message bubble
5. **AiChatChatResponse** - AI response bubble

### Phase 7: Grid Layout Components
1. **CardGrid** - Base grid component (reusable)
2. Grid variants as composition examples (not separate components)

## Component Dependencies

### Existing Components to Use:
- ✅ Card (with horizontal/stroke variants)
- ✅ ReviewCard
- ✅ ProductInfoCard
- ✅ PricingCard
- ✅ TestimonialCard
- ✅ Button
- ✅ ButtonGroup
- ✅ InputField
- ✅ TextareaField
- ✅ CheckboxField
- ✅ FormBox
- ✅ Form
- ✅ Search
- ✅ Avatar
- ✅ AiChatBox

### New Components Needed:
1. Section
2. Flex/FlexItem
3. TextContentHeading
4. TextContentTitle
5. Header
6. HeaderAuth
7. Footer
8. Navigation/NavigationPill
9. Hero
10. Panel
11. Tag
12. TagToggleGroup
13. TagToggle
14. CheckboxGroup
15. AiSidebar
16. AiConversation
17. AiChatCodeBlock
18. AiChatUserMessage
19. AiChatChatResponse

## Design Token Requirements

### Typography:
- **Title Hero**: Bold, large size, line-height 1.2, letter-spacing -3
- **Subheading**: Regular, medium size, line-height 1.2
- **Body Code**: Roboto Mono, 16px, line-height 1.3

### Spacing:
- Section padding: `1200` (48px) and `1600` (64px)
- Gap between elements: `600` (24px), `1200` (48px)

### Layout:
- Grid types: `third` (3-column), `quarter` (4-column), `half` (2-column)
- Flex directions: `column`, `row`
- Alignment: `center`, `stretch`, `space-between`

## Implementation Order

1. **Start with Layout Foundation** (Section, Flex, TextContentHeading)
2. **Build Header/Footer** (Header, HeaderAuth, Footer)
3. **Create Hero Components** (Hero with all variants)
4. **Implement Panel System** (Panel with variants)
5. **Add Supporting Components** (Tag, TagToggle, CheckboxGroup)
6. **Build AI Chatbot System** (Sidebar, Conversation, Code Block)
7. **Create Grid Examples** (Use existing cards in grid layouts)

## Notes

- Most "Card Grid" components are actually **layout compositions** using existing Card components
- Focus on creating reusable layout components (Section, Flex, Panel, Hero)
- Grid layouts should be examples/compositions, not separate components
- AI Chatbot is a complex system that should be built incrementally
- All components must follow design tokens from `specs/design-tokens.md`

