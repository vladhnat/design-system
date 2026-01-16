# Design Tokens Specification

## Overview
This document defines all design tokens used across the design system. These tokens ensure consistency and make it easy to update the visual design system-wide.

## Colors

The design system supports both light and dark modes, automatically adapting to the user's system preference via `prefers-color-scheme`. All colors are defined as CSS variables that change based on the theme.

### Text Colors

**Light Mode:**
- `Text/Default/Default`: `#1e1e1e` - Primary text color
- `Text/Default/Secondary`: `#757575` - Secondary text color
- `Text/Default/Tertiary`: `#b3b3b3` - Tertiary text (placeholders)
- `Text/Neutral/Default`: `#303030` - Neutral text
- `Text/Brand/Default`: `#2c2c2c` - Brand text
- `Text/Brand/On Brand`: `#f5f5f5` - Text on brand background
- `Text/Danger/On Danger`: `#fee9e7` - Text on danger background
- `Text/Disabled/Default`: `#b3b3b3` - Disabled text

**Dark Mode:**
- `Text/Default/Default`: `#f5f5f5` - Primary text color (inverted)
- `Text/Default/Secondary`: `#b3b3b3` - Secondary text color (lighter)
- `Text/Default/Tertiary`: `#757575` - Tertiary text (lighter)
- `Text/Brand/Default`: `#f5f5f5` - Brand text (inverted)
- `Text/Brand/On Brand`: `#1e1e1e` - Text on brand background (inverted)
- `Text/Danger/On Danger`: `#fee9e7` - Text on danger background (same)
- `Text/Disabled/Default`: `#757575` - Disabled text (lighter)

**CSS Variable:** `--text-default`, `--text-secondary`, `--text-tertiary`, `--text-brand`, `--text-on-brand`, `--text-on-danger`, `--text-disabled`

### Background Colors

**Light Mode:**
- `Background/Default/Default`: `#ffffff` - White background
- `Background/Default/Secondary`: `#f5f5f5` - Light gray background
- `Background/Brand/Default`: `#2c2c2c` - Brand background (dark gray)
- `Background/Danger/Default`: `#ec221f` - Danger background (red)
- `Background/Disabled/Default`: `#d9d9d9` - Disabled background
- `Background/Muted/Default`: `#E3E3E3` - Muted/neutral background

**Dark Mode:**
- `Background/Default/Default`: `#1e1e1e` - Dark background (inverted)
- `Background/Default/Secondary`: `#2c2c2c` - Secondary dark background
- `Background/Brand/Default`: `#f5f5f5` - Brand background (inverted)
- `Background/Danger/Default`: `#ec221f` - Danger background (same)
- `Background/Disabled/Default`: `#404040` - Disabled background (darker)
- `Background/Muted/Default`: `#2c2c2c` - Muted/neutral background (darker)

**CSS Variable:** `--bg-default`, `--bg-secondary`, `--bg-brand`, `--bg-danger`, `--bg-disabled`, `--bg-muted`

### Border Colors

**Light Mode:**
- `Border/Default/Default`: `#d9d9d9` - Default border
- `Border/Brand/Default`: `#2c2c2c` - Brand border
- `Border/Danger/Secondary`: `#c00f0c` - Danger border
- `Border/Disabled/default`: `#b3b3b3` - Disabled border

**Dark Mode:**
- `Border/Default/Default`: `#404040` - Default border (lighter)
- `Border/Brand/Default`: `#b3b3b3` - Brand border (lighter)
- `Border/Danger/Secondary`: `#ff4444` - Danger border (brighter)
- `Border/Disabled/default`: `#757575` - Disabled border (lighter)

**CSS Variable:** `--border-default`, `--border-brand`, `--border-danger`, `--border-disabled`

### Icon Colors

**Light Mode:**
- `Icon/Default/Default`: `#1e1e1e` - Default icon color
- `Icon/Disabled/On Disabled`: `#b3b3b3` - Disabled icon color

**Dark Mode:**
- `Icon/Default/Default`: `#f5f5f5` - Default icon color (inverted)
- `Icon/Disabled/On Disabled`: `#757575` - Disabled icon color (lighter)

**CSS Variable:** `--icon-default`, `--icon-disabled`

## Typography

### Font Family
- Primary: `Inter` (Body/Font Family)
- Fallback: `sans-serif`

### Font Sizes
- `Body/Size Small`: `14px`
- `Body/Size Medium`: `16px`
- `Size/Text Xs`: `12px`

### Font Weights
- `Body/Font Weight Regular`: `400`
- `Body/Font Weight Strong`: `600` (Semi Bold)

### Line Heights
- `Body Base`: `1.4` (1.399999976158142)
- `Leading/Leading Tight`: `20px`

### Typography Styles
- **Body Base**: 16px, 400 weight, 1.4 line height, Inter
- **Body Strong**: 16px, 600 weight, 1.4 line height, Inter
- **Body Small**: 14px, 400 weight, 1.4 line height, Inter
- **Text Extra Small**: 12px, 400 weight, 20px line height, Geist

## Spacing

### Space Scale
- `Space/100`: `4px`
- `Space/150`: `6px`
- `Space/200`: `8px`
- `Space/300`: `12px`
- `Space/400`: `16px`
- `Space/600`: `24px`

### Usage Guidelines
- `Space/100`: Minimal spacing (icon button padding)
- `Space/200`: Small spacing (gaps between small elements)
- `Space/300`: Medium spacing (gaps between form fields and labels)
- `Space/400`: Large spacing (padding, gaps between major elements)
- `Space/600`: Extra large spacing (gaps between sections)

## Border Radius

- `Radius/200`: `8px` - Default rounded corners
- `Radius/400`: `16px` - Large rounded corners
- `Radius/Full`: `9999px` - Fully circular (for avatars, icon buttons)

## Sizes

### Icon Sizes
- `Icon/Large`: `40px` (Scale 06)
- Standard Icon: `20px × 20px` (h-5 w-5)
- Small Icon: `16px × 16px` (h-4 w-4)

### Component Heights
- Small: `36px` (h-9)
- Default: `40px` (h-10)
- Large: `44px` (h-11)

### Avatar Sizes
- Small: `32px × 32px` (h-8 w-8)
- Default: `40px × 40px` (h-10 w-10)
- Large: `40px × 40px` (h-10 w-10)

## Borders

- `Stroke/Border`: `1px` - Standard border width

## Shadows

- Standard shadow for dropdowns and popovers
- Defined in component-specific specs

## Usage in Code

### CSS Variables and Tailwind Classes

The design system uses CSS variables that automatically adapt to light/dark mode. Use Tailwind utility classes that map to these variables:

```tsx
// Text Colors (automatically adapt to dark mode)
className="text-text-default" // or text-foreground (legacy)
className="text-text-secondary"
className="text-text-tertiary"
className="text-text-brand"
className="text-text-on-brand"
className="text-text-on-danger"
className="text-text-disabled"

// Background Colors (automatically adapt to dark mode)
className="bg-bg-default" // or bg-background (legacy)
className="bg-bg-secondary"
className="bg-bg-brand"
className="bg-bg-danger"
className="bg-bg-muted"
className="bg-bg-disabled"

// Border Colors (automatically adapt to dark mode)
className="border-border-default" // or border-border (legacy)
className="border-border-brand"
className="border-border-danger"
className="border-border-disabled"

// Icon Colors (automatically adapt to dark mode)
className="text-icon-default"
className="text-icon-disabled"

// Legacy shadcn/ui classes (still supported)
className="bg-primary text-primary-foreground"
className="bg-secondary text-secondary-foreground"
className="bg-destructive text-destructive-foreground"
className="bg-muted text-muted-foreground"
```

### Direct Hex Color Usage (Deprecated)

**⚠️ Do not use hardcoded hex colors in new code.** They don't adapt to dark mode:

```tsx
// ❌ Don't use - doesn't adapt to dark mode
className="bg-[#2c2c2c] text-[#f5f5f5]"
className="border-[#d9d9d9]"

// ✅ Use instead - adapts to dark mode
className="bg-bg-brand text-text-on-brand"
className="border-border-default"
```

### Spacing
```tsx
className="p-4" // Space/400
className="gap-3" // Space/300
className="gap-2" // Space/200
```

### Border Radius
```tsx
className="rounded-lg" // Radius/200 (8px)
className="rounded-2xl" // Radius/400 (16px)
className="rounded-full" // Radius/Full
```

### Typography
```tsx
className="text-base font-normal font-[Inter]" // Body Base
className="text-base font-semibold font-[Inter]" // Body Strong
```

## Token Updates

When updating design tokens:
1. Update this specification file
2. Update all component implementations
3. Update component spec files if tokens change
4. Test all components for visual consistency

