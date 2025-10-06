# Content Replacement Mapping - Rees's Pool Care LLC
**Reference Document for Systematic Updates**

---

## Rees's Business Information (Source of Truth)

### Identity
- **Company Name**: Rees's Pool Care LLC
- **Phone**: (352) 529-7596
- **Email**: Reesspoolcarellc@gmail.com
- **Location**: Williston, FL, United States
- **Service Area**: Williston, FL and surrounding areas
- **Facebook**: https://www.facebook.com/p/Reess-Pool-Care-LLC-61565921753800/

### Services Offered
1. **Pool & spa cleaning** - Monthly service starting at $150
2. **Pool-deck cleaning**
3. **Minor repairs**
4. **Opening services**
5. **Green to cleans** (algae removal) - Starting at $1,000
6. **General maintenance**: Chemical testing, pH checks, skimming, brushing, vacuuming, filter cleaning
7. **Pump cleaning and filter maintenance**

### Pricing
- Monthly service plans: Starting at $150
- Green-to-clean recovery: Starting at $1,000
- Free on-site estimates

### Brand Identity
- Small, family-owned company
- Community-focused
- Local expertise in Williston area
- Professional and reliable
- Hands-on, personalized service
- Aqua blue and turquoise color scheme (matches existing design)

### Current Status
- **Reviews**: Not yet rated (0 reviews)
- **Hours**: Open now (no detailed schedule)
- **Social**: Facebook only (no Instagram/other platforms yet)

---

## File-by-File Replacement Guide

### 1. index.html

**Line 7** - Meta Description
```html
<!-- CURRENT -->
<meta name="description" content="Professional pool cleaning and maintenance service in South Venice to Lakewood Ranch. A Plus Pool Cleaning Inc - Reclaim your weekends with crystal-clear water." />

<!-- REPLACE WITH -->
<meta name="description" content="Professional pool cleaning and maintenance service in Williston, FL. Rees's Pool Care LLC - Family-owned pool service with monthly plans starting at $150." />
```

**Line 8** - OG Title
```html
<!-- CURRENT -->
<meta property="og:title" content="A Plus Pool Cleaning Inc - Professional Pool Service" />

<!-- REPLACE WITH -->
<meta property="og:title" content="Rees's Pool Care LLC - Professional Pool Service" />
```

**Line 9** - OG Description
```html
<!-- CURRENT -->
<meta property="og:description" content="Tired of cloudy water and wasted Saturdays? Our professional pool care keeps your backyard oasis sparkling. Serving South Venice to Lakewood Ranch." />

<!-- REPLACE WITH -->
<meta property="og:description" content="Small, family-owned pool company serving Williston, FL. Professional pool and spa cleaning, pool-deck cleaning, and green-to-clean services. Monthly plans starting at $150." />
```

**Line 10** - Page Title
```html
<!-- CURRENT -->
<title>A Plus Pool Cleaning Inc - Professional Pool Service in Florida</title>

<!-- REPLACE WITH -->
<title>Rees's Pool Care LLC - Pool Service in Williston, FL</title>
```

---

### 2. Navigation.jsx

**Line 33** - Logo Alt Text
```jsx
<!-- CURRENT -->
<img src="/logo.png" alt="A Plus Pools" className="h-14 w-14" />

<!-- REPLACE WITH -->
<img src="/logo.png" alt="Rees's Pool Care LLC" className="h-14 w-14" />
```

---

### 3. ServiceShowcase.jsx

**Line 195** - Logo Watermark Alt Text
```jsx
<!-- CURRENT -->
alt="A Plus Pool Cleaning Inc Logo"

<!-- REPLACE WITH -->
alt="Rees's Pool Care LLC Logo"
```

**Service Content Updates (Lines 22-65)**

**Service 1: Weekly Maintenance → Monthly Maintenance**
```jsx
// CURRENT
{
  name: 'Weekly Maintenance',
  tagline: 'The foundation of a perfect pool',
  features: [
    'Complete water testing & chemical balancing',
    'Skim surface & remove debris',
    'Vacuum pool floor & walls',
    'Brush tiles & walls',
    'Clean skimmer baskets & pump baskets',
    'Inspect equipment & report issues',
  ],
  image: '/weekly-maintenance-testing.png',
  imageAlt: 'Professional pool technician testing water chemistry with color-coded test kit by crystal-clear pool',
}

// REPLACE WITH
{
  name: 'Monthly Maintenance',
  tagline: 'Reliable service starting at $150',
  features: [
    'Complete water testing & chemical balancing',
    'Skim surface & remove debris',
    'Vacuum pool floor & walls',
    'Brush tiles & walls',
    'Clean filters & skimmer baskets',
    'Add chemicals as needed',
  ],
  image: '/monthly-maintenance.png',
  imageAlt: 'Pool maintenance professional testing water chemistry and cleaning pool',
}
```

**Service 2: Premium Care → Pool Deck Cleaning**
```jsx
// CURRENT
{
  name: 'Premium Care',
  tagline: 'Everything you need, nothing you don\'t',
  features: [
    'All Weekly Maintenance services',
    'Filter cleaning & backwashing',
    'Tile line deep cleaning',
    'Equipment performance optimization',
    'Seasonal prep & winterization',
    'Priority emergency service',
  ],
  image: '/premium-care-filter.png',
  imageAlt: 'Pool filter being professionally cleaned and pressure washed with crystal-clear pool in background',
}

// REPLACE WITH
{
  name: 'Pool Deck Cleaning',
  tagline: 'Complete exterior pool care',
  features: [
    'Professional deck pressure washing',
    'Remove dirt, algae, and stains',
    'Clean pool surroundings',
    'Enhance pool area appearance',
    'Safe for all deck surfaces',
    'Improve safety and aesthetics',
  ],
  image: '/pool-deck-cleaning.png',
  imageAlt: 'Clean pool deck with sparkling surface after professional pressure washing',
}
```

**Service 3: Storm Recovery → Green to Clean**
```jsx
// CURRENT
{
  name: 'Storm Recovery',
  tagline: 'Get your pool back fast',
  features: [
    'Heavy debris removal',
    'Water clarity restoration',
    'Chemical shock treatment',
    'Equipment inspection & restart',
    'Pressure wash surfaces',
    'Full system check',
  ],
  image: '/storm-recovery-before-after.png',
  imageAlt: 'Before and after pool transformation - from murky storm-damaged water to crystal-clear blue pool',
}

// REPLACE WITH
{
  name: 'Green to Clean',
  tagline: 'Pool recovery starting at $1,000',
  features: [
    'Complete algae removal',
    'Heavy debris clearing',
    'Chemical shock treatment',
    'Water clarity restoration',
    'Filter deep cleaning',
    'Transform green pool to crystal clear',
  ],
  image: '/green-to-clean.png',
  imageAlt: 'Before and after pool transformation - from green algae-filled water to crystal-clear blue pool',
}
```

---

### 4. Contact.jsx

**Line 79** - Logo Alt Text
```jsx
<!-- CURRENT -->
<img src="/logo.png" alt="A Plus Pool Cleaning" className="h-24 w-auto" />

<!-- REPLACE WITH -->
<img src="/logo.png" alt="Rees's Pool Care LLC" className="h-24 w-auto" />
```

**Line 23** - Form Success Message
```jsx
// CURRENT
alert('Thank you! We will contact you shortly to schedule your free estimate.')

// REPLACE WITH
alert('Thank you! We will contact you shortly to schedule your free on-site estimate.')
```

**Lines 191-192** - Phone Number Display
```jsx
<!-- CURRENT -->
<a href="tel:+19415550123" className="text-xl font-semibold hover:text-white/80 transition-colors">
  (941) 555-POOL
</a>

<!-- REPLACE WITH -->
<a href="tel:+13525297596" className="text-xl font-semibold hover:text-white/80 transition-colors">
  (352) 529-7596
</a>
```

**Lines 208-209** - Email Address
```jsx
<!-- CURRENT -->
<a href="mailto:info@apluspoolcleaning.com" className="text-xl font-semibold hover:text-white/80 transition-colors break-all">
  info@apluspoolcleaning.com
</a>

<!-- REPLACE WITH -->
<a href="mailto:Reesspoolcarellc@gmail.com" className="text-xl font-semibold hover:text-white/80 transition-colors break-all">
  Reesspoolcarellc@gmail.com
</a>
```

**Lines 224-225** - Service Area
```jsx
<!-- CURRENT -->
<div className="text-xl font-semibold">
  South Venice to Lakewood Ranch
</div>

<!-- REPLACE WITH -->
<div className="text-xl font-semibold">
  Williston, FL & Surrounding Areas
</div>
```

---

### 5. Footer.jsx

**Line 39** - Logo Alt Text
```jsx
<!-- CURRENT -->
<img src="/logo.png" alt="A Plus Pool Cleaning" className="h-20 w-auto mb-4" />

<!-- REPLACE WITH -->
<img src="/logo.png" alt="Rees's Pool Care LLC" className="h-20 w-auto mb-4" />
```

**Line 42** - Company Description
```jsx
<!-- CURRENT -->
<p className="text-white/90 mb-6 max-w-md leading-relaxed">
  Family-owned pool service company providing professional, reliable pool maintenance throughout Southwest Florida for over 10 years.
</p>

<!-- REPLACE WITH -->
<p className="text-white/90 mb-6 max-w-md leading-relaxed">
  Small, family-owned pool company serving our community in Williston, FL. Professional pool and spa cleaning, pool-deck cleaning, minor repairs, and green-to-clean services.
</p>
```

**Lines 106, 114** - Phone Number
```jsx
<!-- CURRENT -->
<a href="tel:+19415550123" className="...">
  ...
  <div className="font-semibold text-white">(941) 555-POOL</div>
</a>

<!-- REPLACE WITH -->
<a href="tel:+13525297596" className="...">
  ...
  <div className="font-semibold text-white">(352) 529-7596</div>
</a>
```

**Lines 119, 128** - Email Address
```jsx
<!-- CURRENT -->
<a href="mailto:info@apluspoolcleaning.com" className="...">
  ...
  <div className="font-semibold text-white break-all">info@apluspoolcleaning.com</div>
</a>

<!-- REPLACE WITH -->
<a href="mailto:Reesspoolcarellc@gmail.com" className="...">
  ...
  <div className="font-semibold text-white break-all">Reesspoolcarellc@gmail.com</div>
</a>
```

**Line 140** - Service Area
```jsx
<!-- CURRENT -->
<div className="font-semibold text-white">South Venice to Lakewood Ranch, FL</div>

<!-- REPLACE WITH -->
<div className="font-semibold text-white">Williston, FL & Surrounding Areas</div>
```

**Line 149** - Copyright
```jsx
<!-- CURRENT -->
<p>© {currentYear} A Plus Pool Cleaning Inc. All rights reserved.</p>

<!-- REPLACE WITH -->
<p>© {currentYear} Rees's Pool Care LLC. All rights reserved.</p>
```

---

### 6. OurStory.jsx

**Line 32** - Image Alt Text
```jsx
<!-- CURRENT -->
alt="Kim and Drew with happy customer beside sparkling pool"

<!-- REPLACE WITH -->
alt="Rees's Pool Care LLC owner providing professional pool service"
```

**Lines 72-84** - Complete Story Rewrite
```jsx
<!-- CURRENT -->
<p>
  For over 10 years, we've been proud to serve our community as a family-owned pool service. As a small team—just myself and my nephew—we're personally invested in every pool we maintain and every customer we serve.
</p>
<p>
  Quality is at the heart of everything we do. Unlike the "dump and dash" approach of larger companies, we provide comprehensive weekly cleaning and chemical services with meticulous attention to detail. Our commitment to excellence comes at fair, honest prices.
</p>
<p>
  We proudly service the entire area from South Venice to Lakewood Ranch. As a licensed and insured business, you can trust us with complete confidence. Whether you have questions or would like a free estimate, we're just a call, text, or email away.
</p>
<p className="text-base font-semibold text-white">
  We'd be honored to become your trusted pool service partner. Let us show you what reliable, quality service looks like.
</p>
<p className="text-lg font-bold">- Kim and Drew</p>

<!-- REPLACE WITH -->
<p>
  Rees's Pool Care LLC is a small, local family-owned pool company dedicated to serving our community in Williston, FL. We take pride in providing personalized, hands-on service that treats your pool like it's our own.
</p>
<p>
  We offer comprehensive pool and spa cleaning, professional pool-deck cleaning, minor repairs, opening services, and expert green-to-clean transformations. Our monthly service plans start at just $150, and we provide free on-site estimates for all services.
</p>
<p>
  From chemical testing and pH balancing to skimming, brushing, vacuuming, and filter maintenance, we handle every detail with care and professionalism. Serving Williston and surrounding areas, we're committed to keeping your pool crystal clear year-round.
</p>
<p className="text-base font-semibold text-white">
  We'd be honored to become your trusted pool service partner. Call us today for your free on-site estimate!
</p>
```

**Line 93** - Phone Number in CTA
```jsx
<!-- CURRENT -->
<a href="tel:+19415550123" className="btn-primary bg-secondary-400 hover:bg-secondary-500">

<!-- REPLACE WITH -->
<a href="tel:+13525297596" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
```

**Lines 45-46** - Years Badge (OPTIONAL - Consider Removing)
```jsx
<!-- CURRENT -->
<div className="text-4xl font-bold">10+</div>
<div className="text-sm">Years Experience</div>

<!-- OPTIONS -->
<!-- Option A: Remove entire badge (lines 38-48) -->
<!-- Option B: Change to generic "Family Owned" badge -->
<!-- Option C: Leave as-is if accurate -->
```

---

### 7. Hero.jsx

**Lines 52-55** - Years Badge (OPTIONAL)
```jsx
<!-- CURRENT -->
<div className="text-center">
  <div className="text-3xl font-bold text-primary-600">10+</div>
  <div className="text-sm text-gray-600">Years of Service</div>
</div>

<!-- OPTIONS -->
<!-- Option A: Remove entire badge (lines 46-56) -->
<!-- Option B: Change to "Family Owned" -->
<div className="text-center">
  <div className="text-2xl font-bold text-primary-600">Family</div>
  <div className="text-sm text-gray-600">Owned & Operated</div>
</div>
<!-- Option C: Leave as-is if accurate -->
```

**Hero text (Lines 79-96)** - Can remain unchanged (generic messaging works for Rees's)

---

### 8. Benefits.jsx

**Line 260** - "A+" Branding Element
```jsx
<!-- CURRENT -->
<h3 style={{ marginTop: '6rem', textAlign: 'center' }}>
  <span style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '900' }}>Experience</span> the
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4.5rem', height: '4.5rem', background: 'linear-gradient(135deg, #14b8a6, #0d9488)', color: 'white', fontWeight: '900', fontSize: '2rem', transform: 'rotate(-6deg)', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', margin: '0 0.75rem' }}>A+</span> Pool
  <span style={{ background: 'linear-gradient(to right, #ffa347, #ff8a1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '900' }}>Advantage</span>
</h3>

<!-- REPLACE WITH -->
<h3 style={{ marginTop: '6rem', textAlign: 'center' }}>
  <span style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '900' }}>Experience</span> Professional Pool
  <span style={{ background: 'linear-gradient(to right, #ffa347, #ff8a1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '900' }}>Care</span>
</h3>
```

**Line 291** - "A+" Branding Element
```jsx
<!-- CURRENT -->
<h3 style={{ overflow: 'visible', marginTop: '6rem' }}>
  <span style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: '#14b8a6', fontWeight: '900' }}>Why Choose</span>
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4.5rem', height: '4.5rem', background: 'linear-gradient(135deg, #14b8a6, #0d9488)', color: 'white', fontWeight: '900', fontSize: '2rem', transform: 'rotate(-6deg)', borderRadius: '0.75rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', margin: '0 0.5rem 0 0.25rem' }}>A+</span> Pool
  <span style={{ background: 'linear-gradient(to right, #ffa347, #ff8a1f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: '#ffa347', fontWeight: '900', fontStyle: 'italic' }}>Service</span><span style={{ color: '#ffa347', fontWeight: '900' }}>?</span>
</h3>

<!-- REPLACE WITH -->
<h3 style={{ overflow: 'visible', marginTop: '6rem' }}>
  <span style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: '#14b8a6', fontWeight: '900' }}>Why Choose</span>
  <span style={{ background: 'linear-gradient(to right, #14b8a6, #0d9488)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: '900' }}>Rees's Pool Care</span><span style={{ color: '#ffa347', fontWeight: '900' }}>?</span>
</h3>
```

**Benefit descriptions (Lines 266-315)** - Can remain unchanged (generic pool care benefits)

---

### 9. Testimonials.jsx

**OPTION A: Placeholder Approach**
```jsx
const testimonials = [
  {
    name: 'New Customer',
    location: 'Williston, FL',
    rating: 5,
    text: 'Be one of our first satisfied customers! We\'re dedicated to providing exceptional pool care service to our local community.',
    avatar: '⭐',
  },
]

// Update grid to single column
className="grid grid-cols-1 gap-8 max-w-2xl mx-auto"
```

**OPTION B: Hide Section Temporarily**
```jsx
// Comment out entire section or add display: none
// Can be reactivated when reviews come in
return null; // or <></>
```

**OPTION C: Generic Pool Service Testimonials**
```jsx
const testimonials = [
  {
    name: 'Local Homeowner',
    location: 'Williston Area',
    rating: 5,
    text: 'Great picture!!!', // Using actual Facebook comment
    avatar: '👍',
  },
]
```

---

## Image Replacement Checklist

### Required Images from Rees's
1. **Logo** (`/logo.png`) - Rees's Pool Care LLC logo
2. **Hero Background** (`/hero-pool.png`) - Pool service/clean pool photo
3. **Monthly Maintenance** (`/monthly-maintenance.png`) - Service photo
4. **Pool Deck Cleaning** (`/pool-deck-cleaning.png`) - Deck cleaning/before-after
5. **Green to Clean** (`/green-to-clean.png`) - Before/after algae removal
6. **Benefits Grid 1** (`/Generated Image October 02, 2025 - 3_11PM.png`) - Pool photo
7. **Benefits Grid 2** (`/Generated Image October 02, 2025 - 3_11PM (1).png`) - Pool photo
8. **About Section** (`/Generated Image October 01, 2025 - 3_27PM.png`) - Owner/team photo

### Image Requirements
- Match original dimensions
- Optimize for web (WebP format preferred)
- Compress for fast loading
- Maintain aspect ratios

---

## Social Media & Schema (Future)

### Facebook Integration
- Update any social feed widgets to: https://www.facebook.com/p/Reess-Pool-Care-LLC-61565921753800/
- Social media icons: Link to Rees's Facebook
- Instagram/other platforms: Mark "Coming Soon" or hide

### Schema Markup (if present)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rees's Pool Care LLC",
  "telephone": "+1-352-529-7596",
  "email": "Reesspoolcarellc@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Williston",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "areaServed": "Williston, FL and surrounding areas",
  "priceRange": "$$"
}
```

---

## Summary of Changes

### Total Replacements
- Company name: 10+ instances
- Phone numbers: 6 instances
- Email addresses: 4 instances
- Service area: 5 instances
- Logo alt text: 4 instances
- Service descriptions: 3 complete rewrites
- About section: Complete rewrite
- Testimonials: Strategy decision needed
- Images: 8 files

### Files Modified
1. index.html
2. Navigation.jsx
3. ServiceShowcase.jsx
4. Contact.jsx
5. Footer.jsx
6. OurStory.jsx
7. Hero.jsx (optional)
8. Benefits.jsx
9. Testimonials.jsx

---

**READY FOR IMPLEMENTATION** ✓
