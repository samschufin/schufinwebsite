# SchuFin Branding Style Kit

## Color Palette

### Primary Brand Color
- **SchuFin Blue**: `#29ABE2`
  - Used for: Main buttons, links, accents, tagline text
  - Hover state: `#1B8DBF` (slightly darker version)

### Supporting Colors
- **Pure Black**: `#000000` (background)
- **Charcoal Gray**: `#1F2937` (dark cards/sections)
- **Light Gray**: `#6B7280` (secondary text)
- **Off-White**: `#F9FAFB` (light mode backgrounds)
- **Bright White**: `#FFFFFF` (primary text in dark mode)

### Service Accent Colors
- **Coral Red**: `#FF5A5F` (Forecasting services)
- **Professional Blue**: `#3498DB` (Reporting services) 
- **Golden Yellow**: `#F1C40F` (Advisory services)
- **Forest Green**: `#4CAF50` (Bookkeeping services)
- **Rich Purple**: `#9C27B0` (Software services)
- **Warm Orange**: `#FF9800` (Process services)

## Typography System

### Primary Font Family
- **Montserrat** (Google Font)
- Weights used: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold), 800 (extra-bold)

### Typography Hierarchy
- **Headlines**: 700 weight, responsive sizes (2.5rem to 4.5rem)
- **Subheadlines**: 400 weight, slightly transparent (90% opacity)
- **Body Text**: 400-500 weight
- **Navigation**: 500-600 weight
- **Buttons**: 500-600 weight

### Special Typography Characteristics
- Headlines use tight letter spacing (-0.02em)
- Subheadlines use slightly loose letter spacing (0.01em)
- Line heights are generous (1.1 for headlines, 1.5 for body text)

## Visual Style Characteristics

### Design Philosophy
- **Modern & Professional**: Clean lines, plenty of white space
- **Financial Trust**: Dark backgrounds with bright accents suggest stability
- **Approachable**: Rounded corners, smooth animations
- **Tech-Forward**: Subtle gradients and blur effects

### Key Visual Elements
- **Rounded corners**: 8px-12px border radius on buttons and cards
- **Subtle shadows**: Used sparingly for depth
- **Smooth animations**: 0.6-0.8 second transitions
- **Backdrop blur effects**: Creates modern, layered look
- **Gradient backgrounds**: Subtle radial gradients from brand blue

## Brand Voice & Messaging

### Tagline
"Equipping Your Business with Financial Clarity"

### Key Message Themes
- Financial clarity and insight
- Data-driven decision making
- Small business focused
- Professional yet approachable
- Trust and expertise

## Layout Patterns

### Spacing System
- Uses consistent padding/margins (typically multiples of 4: 16px, 24px, 32px, 48px)
- Generous white space for breathing room
- Container max-width: 1280px (7xl)

### Component Patterns
- **Hero sections**: Large, centered with image + text split
- **Service cards**: Colorful headers with clean white/dark content areas
- **Navigation**: Fixed, translucent with backdrop blur
- **Buttons**: Two styles - filled (primary) and outlined (secondary)

## Usage Guidelines

### Primary Brand Color Usage
The SchuFin Blue (`#29ABE2`) should be used as the primary accent color across all materials. This creates brand recognition and maintains the professional, trustworthy appearance established by the website.

### Font Implementation
When Montserrat is not available, fallback to system sans-serif fonts. Maintain the weight hierarchy to preserve the visual structure of your brand communications.

### Color Combinations
- Primary: SchuFin Blue on white or dark backgrounds
- Secondary: Light gray text on dark backgrounds for readability
- Accent: Use service colors sparingly for variety in multi-section layouts

## Technical Specifications

### CSS Variables (for web use)
```css
:root {
  --schufin-blue: #29ABE2;
  --schufin-blue-hover: #1B8DBF;
  --pure-black: #000000;
  --charcoal-gray: #1F2937;
  --light-gray: #6B7280;
  --off-white: #F9FAFB;
  --bright-white: #FFFFFF;
}
```

### Font Import (for web use)
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
``` 