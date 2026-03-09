# DamnArt - Digital Marketing Website Specification

## 1. Project Overview

- **Project Name**: DamnArt Digital Marketing Website
- **Type**: Single-page React website (marketing landing page)
- **Core Functionality**: Showcase digital marketing services, client testimonials, contact form, and company information
- **Target Users**: Businesses seeking digital marketing services

## 2. UI/UX Specification

### Layout Structure

- **Header**: Fixed navbar with logo and navigation links
- **Hero Section**: Full-width banner with headline, tagline, and CTA buttons
- **Services Section**: Grid layout of service cards
- **Portfolio Section**: Download brochure CTA
- **Clients Section**: Logo carousel of client companies
- **Blog Section**: Featured blog posts grid
- **Contact Section**: Contact form with fields
- **FAQ Section**: Accordion-style questions
- **Testimonials Section**: Client reviews carousel
- **Footer**: Multi-column footer with contact info, quick links, social links

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: #1a1a2e (Dark Navy)
- **Secondary**: #16213e (Deep Blue)
- **Accent**: #e94560 (Coral Red)
- **Accent Secondary**: #0f3460 (Royal Blue)
- **Text Light**: #ffffff
- **Text Dark**: #1a1a2e
- **Background Light**: #f8f9fa
- **Background Dark**: #0f0f1a

#### Typography
- **Headings**: "Clash Display", sans-serif (from CDN)
- **Body**: "Satoshi", sans-serif (from CDN)
- **Hero Title**: 64px (desktop), 36px (mobile)
- **Section Titles**: 42px (desktop), 28px (mobile)
- **Body Text**: 16px
- **Small Text**: 14px

#### Spacing System
- Section padding: 100px vertical (desktop), 60px (mobile)
- Container max-width: 1200px
- Card gap: 30px
- Component padding: 24px

#### Visual Effects
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover lift effect on cards (translateY -8px)
- Gradient overlays on hero
- Box shadows: 0 10px 40px rgba(0,0,0,0.1)

### Components

1. **Navbar**: Logo, nav links, "Work With Us" CTA button
2. **Hero**: Background gradient, headline, tagline, service tags, CTA
3. **Service Card**: Icon, title, description, hover effect
4. **Client Logo**: Grayscale to color on hover
5. **Blog Card**: Image, title, excerpt, "Read More" link
6. **Contact Form**: Name, email, phone, service dropdown, captcha, submit
7. **FAQ Accordion**: Expandable question/answer pairs
8. **Testimonial Card**: Client name, company, quote
9. **Footer**: Columns for about, services, contact, social

## 3. Functionality Specification

### Core Features
- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- FAQ accordion (expand/collapse)
- Contact form with validation (visual only)
- Client logo carousel/grid
- Animated counters for stats (if applicable)

### User Interactions
- Navbar links scroll to respective sections
- Service cards have hover effects
- FAQ items toggle on click
- Form fields focus states
- Mobile menu toggle

### Data Handling
- Static content (no backend)
- Form submission is visual only (no actual submission)

## 4. Acceptance Criteria

- [ ] Page loads without errors
- [ ] All sections render correctly
- [ ] Navigation works (scroll to sections)
- [ ] Mobile menu functions properly
- [ ] FAQ accordion toggles
- [ ] Contact form fields are interactive
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations play smoothly
- [ ] All text content matches provided data
