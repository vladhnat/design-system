# Calendar Component Specification

## Overview
The Calendar component provides a full-featured date picker with month/year navigation, date selection, and visual states for selected dates, ranges, and disabled dates.

## Design Tokens

### Container
- Background: `#ffffff` (Background/Default/Default)
- Border: `1px solid #d9d9d9` (Border/Default/Default)
- Border Radius: `16px` (Radius/400)
- Padding: `16px` (Space/400)
- Gap: `16px` (Space/400) between header and grid

### Header Navigation
- Icon Button Size: `32px × 32px` (Scale 06)
- Icon Size: `20px × 20px`
- Icon Color: `#1e1e1e` (Icon/Default/Default)
- Gap: `16px` (Space/400) between elements

### Month/Year Selectors
- Background: `#ffffff`
- Border: `1px solid #d9d9d9`
- Border Radius: `8px` (Radius/200)
- Padding: `6px` (Space/150)
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Color: `#1e1e1e` (Text/Default/Default)

### Day Headers
- Typography:
  - Font Family: Geist (Fonts/Font Sans)
  - Font Size: 12px (Size/Text Xs)
  - Font Weight: 400 (Weight/Font Normal)
  - Line Height: 20px (Leading/Leading Tight)
  - Color: `#757575` (Text/Default/Secondary)

### Calendar Buttons
- Size: `40px × 40px`
- Padding: `16px` (Space/400)
- Border Radius: `8px` (Radius/200)
- Typography:
  - Font Family: Inter
  - Font Size: 16px (Body/Size Medium)
  - Font Weight: 400 (Regular)
  - Line Height: 1.4

### Button States
- **Default**: Transparent background, text `#1e1e1e`
- **Active/Selected**: Background `#2c2c2c`, text `#f5f5f5`
- **Range**: Background `#f5f5f5`, text `#2c2c2c`
- **Disabled** (other month): Text `#b3b3b3` (Text/Disabled/Default)
- **Hidden**: Opacity 0, pointer-events-none

### Grid
- Gap: `1px` between cells
- 7 columns (days of week)
- 6 rows (weeks)

## Props & Variants

### Props
```typescript
interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  month?: number // 0-11
  year?: number
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
}
```

### Behavior
- Automatically calculates days in month
- Handles month/year navigation
- Shows previous/next month dates as disabled
- Supports date selection
- Tracks selected date

## Usage Examples

### Basic Usage
```tsx
<Calendar />
```

### Controlled Date
```tsx
const [selectedDate, setSelectedDate] = useState<Date>()

<Calendar
  selectedDate={selectedDate}
  onDateSelect={setSelectedDate}
/>
```

### Initial Month/Year
```tsx
<Calendar
  month={8} // September
  year={2025}
/>
```

## Sub-components

### CalendarButton
Individual day button with state variants:
- `Default`, `Hover`, `Active`, `Disabled`, `Range`, `Range Disabled`, `Hidden`

### CalendarMonthField
Month selector dropdown with all 12 months

### CalendarYearField
Year selector dropdown with range of years

### CalendarSelectGroup
Combines month and year selectors

## Accessibility

- Keyboard navigation for all interactive elements
- ARIA labels for navigation buttons
- Proper date announcements for screen readers
- Focus management
- Tab order follows visual order

## Testing Requirements

- [ ] Calendar renders current month by default
- [ ] Navigation arrows work correctly
- [ ] Month/year selectors work
- [ ] Date selection works
- [ ] Selected date is highlighted
- [ ] Other month dates are disabled
- [ ] Grid layout is correct (7×6)
- [ ] Day headers are correct
- [ ] Keyboard navigation works
- [ ] Edge cases (leap years, month boundaries)

