# A Plus Pool Cleaning Inc - Website

A modern, responsive website for A Plus Pool Cleaning Inc, a family-owned pool service company serving South Venice to Lakewood Ranch, Florida.

## 🚀 Features

- **Modern React Architecture**: Built with Vite + React for optimal performance
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Fully responsive on all devices
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Form Handling**: Contact form for free estimates
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🎨 Design Features

- Split-screen hero section inspired by Lane Pool Co
- Interactive service showcase with tabs
- Animated testimonial cards
- FAQ accordion
- Service area map visualization
- Mobile-responsive navigation
- Smooth scroll animations on scroll

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Intersection Observer** - Scroll animations

## 🛠️ Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Fixed navigation bar
│   │   ├── Hero.jsx          # Hero section with split layout
│   │   ├── Benefits.jsx      # Value proposition grid
│   │   ├── ServiceShowcase.jsx # Interactive service cards
│   │   ├── Testimonials.jsx  # Customer testimonials
│   │   ├── OurStory.jsx      # About section
│   │   ├── ServiceArea.jsx   # Service area map
│   │   ├── FAQ.jsx           # Accordion FAQ
│   │   ├── Contact.jsx       # Contact form
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎯 Key Sections

### Hero Section
- Split-screen layout with text on left, image on right
- Main CTA: "Get Your Free Quote Today"
- Emotional headline focusing on weekend freedom

### Benefits Section
- 5 key benefits with icons
- Grid layout responsive to all screen sizes
- Hover animations on cards

### Service Showcase
- 3 service tiers: Weekly Maintenance, Premium Care, Storm Recovery
- Interactive selection with features list
- Visual preview area

### Testimonials
- Customer reviews with ratings
- Location badges
- Licensed & Insured trust indicators

### Our Story
- Kim and Drew's business background
- 10 years experience highlight
- Family-owned business emphasis

### Service Area
- Coverage map from South Venice to Lakewood Ranch
- List of serviced cities
- Coverage radius indicator

### FAQ
- 8 common questions with accordion
- Smooth expand/collapse animations
- Additional CTA at bottom

### Contact Form
- Name, phone, email, address fields
- Additional details textarea
- Contact info cards
- Urgency banner

## 🎨 Color Scheme

- **Primary (Turquoise)**: #00a5a5
- **Secondary (Orange)**: #f97316
- **Background**: White, Gray-50
- **Text**: Gray-900, Gray-700

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Contact Information
Edit placeholder contact details in:
- `src/components/Navigation.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

### Replace Images
Replace placeholder divs with actual images in:
- `src/components/Hero.jsx` - Family pool photo
- `src/components/ServiceShowcase.jsx` - Service photos
- `src/components/OurStory.jsx` - Kim and Drew photo
- `src/components/ServiceArea.jsx` - Map image
- `src/components/Contact.jsx` - Handshake photo

### Form Submission
Update the `handleSubmit` function in `src/components/Contact.jsx` to integrate with your backend or email service (e.g., FormSpree, Netlify Forms, etc.)

### Update Service Areas
Edit the `cities` array in `src/components/ServiceArea.jsx` to add or remove service cities.

## 🚀 Deployment

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder
```

### Traditional Hosting
```bash
npm run build
# Upload contents of 'dist' folder to web server
```

## 📝 Content Management

All content is currently hardcoded in components. For easier content management, consider:
- Moving text content to a separate JSON file
- Implementing a headless CMS (Contentful, Sanity, etc.)
- Using environment variables for contact details

## 🔒 Production Checklist

- [ ] Replace all placeholder images with real photos
- [ ] Update contact information (phone, email, address)
- [ ] Configure form submission endpoint
- [ ] Add Google Analytics tracking code
- [ ] Test all links and CTAs
- [ ] Add real Google reviews
- [ ] Set up 404 page
- [ ] Configure custom domain
- [ ] Add favicon and social media images
- [ ] Test on all devices and browsers
- [ ] Set up SSL certificate

## 📄 License

Copyright © 2025 A Plus Pool Cleaning Inc. All rights reserved.

## 👥 Credits

- Design inspired by Lane Pool Co
- Built by [Your Name]
- Images: [To be added]

## 🤝 Support

For questions or support, contact:
- Email: info@apluspoolcleaning.com
- Phone: (941) 555-POOL

---

**Built with ❤️ for A Plus Pool Cleaning Inc**

