# Anchal Enterprise Property Advisory Website - Design Guidelines

## Design Approach
**Style Direction:** Clean, modern minimalist SaaS aesthetic inspired by premium real estate platforms like Zillow and Redfin, with soft sophistication suitable for a trusted property advisory firm.

## Core Design Elements

### Typography
- **Primary Font:** Poppins or Inter (Google Fonts)
- **Hierarchy:**
  - Hero Headlines: 3xl to 5xl, font-semibold to font-bold
  - Section Headers: 2xl to 3xl, font-semibold
  - Property Titles: xl to 2xl, font-medium
  - Body Text: base to lg, font-normal
  - Pricing: lg to xl, font-semibold
  - Labels/Meta: sm to base, font-medium

### Layout System
**Spacing Units:** Use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card Spacing: p-6 to p-8
- Element Gaps: gap-4, gap-6, gap-8
- Container: max-w-7xl with px-4 to px-8

**Grid System:**
- Property Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Payment Plan: Single column on mobile, 2-column on desktop

### Visual Treatment
- **Backgrounds:** Soft white (#FAFAFA), light pastels, subtle gradients
- **Accents:** Soft gold (#D4AF37) and muted blue (#4A90E2) for highlights
- **Shadows:** Subtle drop shadows (shadow-sm, shadow-md) on cards
- **Borders:** Rounded corners (rounded-lg, rounded-xl) throughout
- **Cards:** White background with soft shadow, hover state with slight elevation increase

## Component Library

### Navigation
- Clean horizontal navigation bar with logo left, menu items right
- Sticky header with subtle shadow on scroll
- Mobile: Hamburger menu with smooth slide-in drawer
- CTA button in header: "Contact Us" or "Book Site Visit" with gold accent

### Hero Section
**Layout:** Full-width hero with property image background (use provided images)
- Overlay with semi-transparent gradient for text legibility
- Centered content with company name, tagline, and primary CTA
- **Tagline:** "Your Trusted Partner in Premium Residential Properties"
- **CTA:** "Explore Our Properties" button with blurred background treatment
- Height: 70vh to 85vh for impact

### Property Showcase Section
**Organization:** Tabbed interface or card grid showcasing 5 projects
- Each property card displays:
  - Property image from provided assets
  - Project name (Lucky Homes, Calista Heights, Radhika Group, Maharishi Enclave, Vihaan Group)
  - BHK configurations with sq ft and pricing in organized table/list format
  - "View Details" CTA button
- Expandable sections for detailed pricing, floor charges, and additional costs
- Clean pricing tables with alternating row backgrounds for readability

### Payment Plan Display
**Structure:** Dedicated section for Lucky Homes and Calista Heights
- Milestone-based breakdown in clean table format
- Booking amount highlighted prominently
- Payment stages with percentages and amounts
- Note about 18% p.a. interest on delayed payments in smaller, muted text

### Project Highlights
**Layout:** Icon grid showcasing amenities
- 4-column grid on desktop, 2-column on tablet, 1-column on mobile
- Each feature with:
  - Icon (use Heroicons via CDN)
  - Feature name (Common Roof, Modular Kitchen, Gated Society, False Ceiling, Club, Gym, Smart Locks, RCC Structures, Solar Lighting, 24x7 Security)
- Subtle hover state with gold accent

### Contact Section
**Design:** Two-column layout (desktop), stacked on mobile
- Left: Contact form with fields:
  - Name (text input)
  - Email (email input)
  - Phone (tel input)
  - Message (textarea)
  - Submit button with gold accent
- Right: Direct contact information card:
  - Phone: 9667753506
  - Email: Aanchalrealestate3506@gmail.com
  - WhatsApp link
  - Social media icons
- Form inputs with rounded borders, subtle focus states

### Additional Enhancements
- **Testimonial Carousel:** Rotating customer reviews with profile images, names, and ratings
- **Mortgage Calculator:** Interactive calculator placeholder with input fields for loan amount, interest rate, tenure
- **Location Maps:** Embedded map sections for each project showing surrounding areas

### Footer
**Style:** Light grey background (bg-gray-100)
- Centered layout with:
  - Contact information repeat
  - Quick links to main sections
  - Social media icons
  - Copyright: "© 2025 Anchal Enterprise"
- Padding: py-12

## Animations & Interactions
- Smooth scroll behavior for anchor navigation
- Subtle fade-in animations for sections on scroll (intersection observer)
- Card hover: slight scale (scale-105) and shadow increase
- Button hover: brightness adjustment, no transform
- Tab switching: smooth content fade transitions
- Form validation: subtle shake animation on error

## Images
**Hero Section:** Use one of the provided property images as full-width background with overlay
**Property Cards:** Display corresponding property images for each project from provided assets
**Testimonials:** Placeholder circular images for customer photos
**About/Trust Section:** Optional image showcasing team or office environment

## Accessibility
- Semantic HTML structure with proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support for tabs and forms
- Sufficient contrast ratios for all text
- Focus indicators on all interactive elements
- Alt text for all images