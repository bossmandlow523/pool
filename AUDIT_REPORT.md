# Website Audit Report - A Plus Pools to Rees's Pool Care LLC
**Date**: October 6, 2025

## Executive Summary
Complete audit of A Plus Pool Cleaning Inc website identifying all content requiring replacement for Rees's Pool Care LLC rebrand.

---

## 1. Business Identity References Found

### Company Name Instances
- **index.html** (Line 7, 8, 10): Meta descriptions and title tag
- **Navigation.jsx** (Line 33): Logo alt text
- **ServiceShowcase.jsx** (Line 195): Logo watermark alt text
- **Contact.jsx** (Line 79): Logo alt text
- **Footer.jsx** (Line 39, 149): Logo alt text and copyright
- **Benefits.jsx** (Line 260, 291): "A+" branding in headings

### Contact Information Found

#### Phone Numbers
- **Contact.jsx** (Line 191, 192): (941) 555-POOL
- **Footer.jsx** (Line 106, 114): (941) 555-POOL
- **Hero.jsx**: No phone number (CTA buttons only)
- **OurStory.jsx** (Line 93): tel:+19415550123

**TO REPLACE WITH**: (352) 529-7596

#### Email Addresses
- **Contact.jsx** (Line 208, 209): info@apluspoolcleaning.com
- **Footer.jsx** (Line 119, 128): info@apluspoolcleaning.com

**TO REPLACE WITH**: Reesspoolcarellc@gmail.com

#### Service Area
- **Contact.jsx** (Line 225): "South Venice to Lakewood Ranch"
- **Footer.jsx** (Line 140): "South Venice to Lakewood Ranch, FL"
- **index.html** (Line 7, 9): "South Venice to Lakewood Ranch"
- **OurStory.jsx** (Line 79): "South Venice to Lakewood Ranch"

**TO REPLACE WITH**: "Williston, FL and surrounding areas"

---

## 2. Service Content Analysis

### Current Services (A Plus)
1. **Weekly Maintenance** - Complete service package
2. **Premium Care** - Enhanced service with filter cleaning
3. **Storm Recovery** - Emergency cleanup service

### Rees's Services (from rees_overview)
1. **Pool & spa cleaning** - Monthly starting at $150
2. **Pool-deck cleaning**
3. **Minor repairs**
4. **Opening services**
5. **Green to cleans** - Starting at $1,000

### Service Description Updates Needed
- **ServiceShowcase.jsx**:
  - Rename "Weekly Maintenance" → adapt to monthly service ($150/month)
  - Rename "Premium Care" → combine with base service or remove
  - Rename "Storm Recovery" → adapt or keep generic
  - Update feature lists to match Rees's offerings
  - Keep technical terms (chemical balancing, pH testing, etc.)

---

## 3. Image Assets Inventory

### Images Currently Used
1. `/logo.png` - Company logo (multiple locations)
2. `/hero-pool.png` - Hero section background (Hero.jsx)
3. `/weekly-maintenance-testing.png` - Service carousel (ServiceShowcase.jsx:34)
4. `/premium-care-filter.png` - Service carousel (ServiceShowcase.jsx:48)
5. `/storm-recovery-before-after.png` - Service carousel (ServiceShowcase.jsx:62)
6. `/Generated Image October 02, 2025 - 3_11PM.png` - Benefits grid (Benefits.jsx:255)
7. `/Generated Image October 02, 2025 - 3_11PM (1).png` - Benefits grid (Benefits.jsx:322)
8. `/Generated Image October 01, 2025 - 3_27PM.png` - About section (OurStory.jsx:31)

### Images Needed from Rees's
- Logo image
- Hero background (pool service photo)
- 3 service photos (maintenance, cleaning, green-to-clean before/after)
- 2 benefits section photos (crystal clear pool, equipment/service)
- Team photo (owner/Rees working on pool)

---

## 4. Content Sections Requiring Updates

### Hero Section (Hero.jsx)
- **Current**: "Reclaim Your Weekends" - generic, can KEEP
- **Current**: "10+ Years of Service" badge - CHANGE or REMOVE (Rees's age TBD)
- **Current CTAs**: "Get Your Free Quote Today" - KEEP (matches Rees's offer)

### About Section (OurStory.jsx)
- **Lines 72-84**: Complete story rewrite needed
- **Current**: "Kim and Drew" - family-owned team of 2
- **Replace**: Rees's story (family-owned, small local company, community-focused)
- **Badge**: "10+ Years Experience" - UPDATE or REMOVE
- **Location**: Change "South Venice to Lakewood Ranch" → "Williston, FL"

### Testimonials (Testimonials.jsx)
- **Lines 4-26**: 3 testimonials with A Plus-specific content
- **Names**: Sarah H. (Venice, FL), David M. (Sarasota, FL), Jennifer L. (Lakewood Ranch, FL)
- **Content**: References to "Kim and Drew"
- **Options**:
  - Replace with placeholder "Reviews coming soon"
  - Hide section temporarily
  - Use generic pool service testimonials

### Benefits Section (Benefits.jsx)
- **"A+" branding** (Lines 260, 291): Visual elements with "A+" logo boxes
- **Content**: Generic benefits (licensed/insured, reliable, family-owned) - KEEP structure
- **Update**: Change "A+" visual elements to "Rees's" or remove grade styling

---

## 5. SEO & Metadata Updates Required

### index.html Updates
- **Line 7**: Meta description - remove "A Plus Pool Cleaning Inc" and area
- **Line 8**: og:title - change company name
- **Line 9**: og:description - change company name and service area
- **Line 10**: `<title>` - change to "Rees's Pool Care LLC - Professional Pool Service in Williston, FL"

### Alt Text Updates
- All logo alt attributes (8 instances)
- Service images alt text (generic, likely OK)
- About section image alt text (Line 32 OurStory.jsx - remove "Kim and Drew")

---

## 6. Form & CTA Analysis

### Contact Form (Contact.jsx)
- **Line 23**: Alert message - "Thank you! We will contact you shortly..."
- **Line 79**: Logo and form header
- **Lines 191-193, 208-210**: Phone and email in contact cards
- **No backend email configured** - needs Reesspoolcarellc@gmail.com

### Call-to-Action Buttons
- "Get Your Free Quote Today" - KEEP (matches Rees's offer)
- "Get Free Quote" (Navigation) - KEEP
- "Call Us Today" (OurStory) - KEEP text, UPDATE phone number
- "Get Your Free Estimate" (Contact form) - KEEP (matches Rees's messaging)

---

## 7. Footer Content Updates

### Footer.jsx Updates Needed
- **Line 39**: Logo alt text
- **Line 42**: Company description - update to Rees's description
- **Line 106, 114**: Phone number links and display
- **Line 119, 128**: Email links and display
- **Line 140**: Service area text
- **Line 149**: Copyright notice - "© 2025 Rees's Pool Care LLC. All rights reserved."

---

## 8. Technical Elements (PRESERVE)

### DO NOT MODIFY
✓ All CSS/Tailwind classes and styling
✓ Framer Motion animations
✓ React component structure
✓ Navigation menu functionality
✓ Form validation logic
✓ Responsive breakpoints
✓ Parallax effects (Benefits.jsx)
✓ Intersection Observer hooks
✓ Grid layouts

---

## 9. Pricing Information Updates

### Current Pricing (Implied)
- No specific pricing displayed on site (quote-based)

### Rees's Pricing (from rees_overview)
- **Monthly service**: Starting at $150
- **Green-to-clean**: Starting at $1,000
- **Free on-site estimates**

### Updates Needed
- Consider adding pricing to Services section
- Maintain "Free estimate" CTAs
- Update any pricing references to match Rees's rates

---

## 10. Files Summary - Direct Changes Required

### High Priority (Business Identity)
1. `index.html` - Meta tags, title, descriptions
2. `Contact.jsx` - Phone, email, logo alt
3. `Footer.jsx` - Phone, email, service area, copyright, logo alt
4. `Navigation.jsx` - Logo alt text
5. `ServiceShowcase.jsx` - Logo watermark alt text
6. `OurStory.jsx` - Complete story rewrite, phone number

### Medium Priority (Content Adaptation)
7. `ServiceShowcase.jsx` - Service names and descriptions
8. `Benefits.jsx` - "A+" branding elements
9. `Testimonials.jsx` - Replace or hide testimonials
10. `Hero.jsx` - Years badge update

### Low Priority (Optional)
11. Image assets - All 8 images to replace

---

## 11. Content Replacement Checklist

### Find & Replace Operations
- [x] "A Plus Pool Cleaning Inc" → "Rees's Pool Care LLC" (global)
- [x] "A Plus Pools" → "Rees's Pool Care LLC" (global)
- [x] "A+" → "Rees's" (in branding contexts)
- [x] "(941) 555-POOL" → "(352) 529-7596" (all instances)
- [x] "(941) 555-0123" → "(352) 529-7596" (all instances)
- [x] "+19415550123" → "+13525297596" (tel: links)
- [x] "info@apluspoolcleaning.com" → "Reesspoolcarellc@gmail.com" (all instances)
- [x] "South Venice to Lakewood Ranch" → "Williston, FL and surrounding areas"
- [x] "Kim and Drew" → Remove or replace with Rees's owner name

---

## NEXT STEPS (Phase 2)
1. Create content replacement mapping document with exact line-by-line changes
2. Begin systematic updates starting with business identity
3. Collect Rees's images for replacement
4. Draft new About section story
5. Decide testimonials strategy

---

**Audit Complete** ✓
Total files requiring updates: 10
Total instances of business name: 15+
Total contact info instances: 12
