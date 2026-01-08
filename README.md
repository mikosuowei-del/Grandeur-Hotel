# The Grandeur Hotel Website

A luxury hotel website featuring sophisticated design, elegant presentation, and comprehensive hospitality services information.

## Overview

The Grandeur Hotel is a five-star luxury hospitality brand website showcasing premium accommodations, world-class dining, and elite services. Built with elegance and sophistication at every level.

## Features

### Design Elements
- **Luxury Aesthetic**: Sophisticated design with dark charcoal, gold accents, and serif typography
- **Premium Typography**: Playfair Display font for elegant headings, Segoe UI for body text
- **Full Responsiveness**: Seamless experience across desktop, tablet, and mobile devices
- **Sophisticated Animations**: Elegant transitions and smooth page interactions
- **Modern Functionality**: Responsive images, forms, and interactive elements

### Core Pages
1. **Home (index.html)** - Hero section with value proposition, room showcase, dining highlights, amenities overview, statistics
2. **Rooms & Suites (rooms.html)** - Detailed room categories with pricing, features, amenities breakdown
3. **Contact (contact.html)** - Reservation form, contact information, regional offices, service hours

### Placeholder Pages (for expansion)
- dining.html
- amenities.html
- events.html
- gallery.html
- about.html

## File Structure

```
luxury-hotel/
├── css/
│   └── styles.css           # Main stylesheet (luxury theme)
├── js/
│   └── menu.js              # Mobile menu functionality
├── images/                  # Directory for hero images, room photos
├── index.html               # Homepage
├── rooms.html               # Rooms & Suites listing
├── contact.html             # Contact & Reservations
└── README.md                # This file
```

## Technical Stack

- **HTML5**: Semantic markup for luxury brand presentation
- **CSS3**: Advanced styling with luxury design system
- **JavaScript**: Vanilla JS for enhanced interactivity
- **Responsive Design**: Premium mobile experience

## Design System

### Color Palette
- **Primary**: #1a1a1a (Sophisticated charcoal)
- **Secondary**: #2d2d2d (Dark gray accents)
- **Gold**: #d4af37 (Luxury accent - buttons, highlights)
- **Rose Gold**: #b76e79 (Premium secondary accent)
- **Light Background**: #faf8f6 (Warm off-white)
- **Text**: #2c2c2c (Deep charcoal)

### Typography
- **Headings**: Playfair Display (serif) - elegant and sophisticated
- **Body**: Segoe UI sans-serif - modern and readable
- **Font Sizes**: h1: 3rem, h2: 2.5rem, h3: 1.8rem
- **Line Height**: 1.8 for comfortable reading

### Spacing & Layout
- **Container**: Max 1200px with generous padding
- **Section Padding**: 100px (desktop), 50px (tablet)
- **Card Spacing**: 35px gap for premium feel
- **Border Treatments**: Top borders in gold on cards

## Key Features

### Navigation
- Elegant fixed header with hotel name
- UPPERCASE navigation for sophistication
- Gold CTA button for "Rooms & Suites"
- Mobile hamburger menu at 900px breakpoint

### Components
- **Hero Section**: Dramatic background with gradient overlay
- **Room Cards**: Premium layout with pricing and features
- **Luxury Cards**: Gold-topped cards with hover elevation
- **Contact Form**: Multi-column layout for reservations
- **Amenities Grid**: Icon-based amenities showcase
- **Statistics Section**: Key metrics in elegant layout

### Room Categories
- Deluxe Rooms ($280+)
- Junior Suites ($380+)
- Executive Suites ($450+)
- Grand Suites ($650+)
- Presidential Suite ($1,200+)
- Royal Penthouse ($2,500+)

### Dining Showcase
- Le Nouveau Monde (3 Michelin stars)
- Umami Sushi Bar (2 Michelin stars)
- Trattoria Italiana
- Grand Lobby Lounge
- The Steakhouse
- Rooftop Bar

## Customization Guide

### Adding Room Images
1. Place images in images/ folder
2. Update HTML to reference image paths
3. Use high-quality photography for luxury appeal

### Updating Pricing
Edit room rates in rooms.html:
```html
<strong style="color: var(--gold); font-size: 1.3rem;">From $XXX/night</strong>
```

### Modifying Color Scheme
CSS variables in `:root`:
```css
:root {
  --accent: #1a1a1a;
  --gold: #d4af37;
  --rose-gold: #b76e79;
}
```

### Adding Dining Details
Expand dining.html with complete menus, chef bios, and reservation system.

## Premium Features

### Booking System
- Multi-step reservation form
- Date picker for check-in/check-out
- Room type selection
- Special request field
- Quote submission capability

### Service Information
- 24/7 front desk availability
- Detailed department contacts
- Amenities breakdown
- Room features comparison
- Package offers

### Accessibility
- High contrast colors for readability
- Proper heading hierarchy
- Form labels and validation
- Keyboard navigation support

## Performance Optimization

- Minimal external dependencies
- System fonts for fast loading
- Efficient CSS Grid layouts
- Optimized color scheme
- Clean, maintainable code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari and Chrome

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## Future Enhancements

- Online booking system integration
- Real guest reviews section
- Virtual room tours (360°)
- Spa and wellness booking
- Restaurant reservation system
- Membership/loyalty program
- Photo gallery
- Blog/magazine section
- Special offers carousel

## Industry Best Practices

- Luxury hospitality standards
- Premium user experience
- Professional imagery requirements
- Seamless booking flow
- Guest service excellence
- Premium brand positioning

## Content Requirements

For optimal presentation, provide:
- High-resolution room photographs
- Professional interior design images
- Celebrity chef photography
- Amenity showcase images
- Event venue photography
- Location/city skyline images

## Maintenance

Regular updates recommended for:
- Seasonal rate adjustments
- Special promotions
- Room availability updates
- Event scheduling
- News and announcements

## Contact & Support

For inquiries or modifications, contact the hotel management or web development team.
