# Sanity CMS Refactoring Plan

## Overview
This document outlines the refactoring needed to make the RelocateMe GCC website fully compatible with Sanity CMS for dynamic content management.

---

## Current Status

### ✅ Already Refactored (Accept Props)
- `components/ui/navbar.tsx` - Full prop support with menu items, logo, CTA
- `components/sections/contact-form.tsx` - Accepts title, description, image props
- `components/sections/section-header.tsx` - Accepts title, paragraphs, button props
- `components/sections/blue-banner.tsx` - Accepts description, features array
- `components/sections/service-grid.tsx` - Accepts services array
- `components/sections/why-choose-section.tsx` - Accepts items array, subtitle, footer text
- `components/ui/timeline.tsx` - Accepts data array with title/content
- `lib/country-data.ts` - Centralized data structure for country pages

---

## 🔴 Phase 1: Homepage Components (High Priority)

### 1. Services Section (`/components/sections/services-section.tsx`)

**Current State:** Hardcoded array of 3 services (Corporate, Immigration, Relocation)

**Required Interface:**
```typescript
export interface Service {
  id: string;
  subtitle: string;
  title: string;
  buttonText: string;
  image: string;
  href: string;
}

export interface ServicesSectionProps {
  services: Service[];
}
```

**Changes Needed:**
- Remove hardcoded `services` array from component
- Accept `services` prop
- Map over `services` prop in JSX
- Update homepage to pass services data

**Sanity Schema:**
```javascript
{
  name: 'servicesSection',
  type: 'object',
  fields: [
    {
      name: 'services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'subtitle', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'buttonText', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'href', type: 'string' }
          ]
        }
      ]
    }
  ]
}
```

---

### 2. Local Expertise Section (`/components/sections/local-expertise-section.tsx`)

**Current State:** All content hardcoded (title, paragraphs, image)

**Required Interface:**
```typescript
export interface LocalExpertiseSectionProps {
  title: string;
  highlightedText: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}
```

**Changes Needed:**
- Extract all hardcoded text to props
- Make layout flexible with `imagePosition` prop (for reusability)
- Update grid order based on `imagePosition`
- Update homepage to pass content data

**Sanity Schema:**
```javascript
{
  name: 'splitContentSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'highlightedText', type: 'string' },
    { name: 'paragraphs', type: 'array', of: [{ type: 'text' }] },
    { name: 'image', type: 'image' },
    { name: 'imagePosition', type: 'string', options: { list: ['left', 'right'] } }
  ]
}
```

---

### 3. Delivering Excellence Section (`/components/sections/delivering-excellence-section.tsx`)

**Current State:** All content hardcoded, similar to Local Expertise Section

**Required Interface:**
```typescript
export interface DeliveringExcellenceSectionProps {
  title: string;
  highlightedTexts: string[]; // Array to support multiple highlighted phrases
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
}
```

**Changes Needed:**
- Extract all hardcoded text to props
- Support multiple highlighted text segments (currently has 2)
- Make background color configurable
- Can potentially merge with LocalExpertiseSection as a generic "SplitContentSection"

**Note:** Consider creating a single reusable `SplitContentSection` component that can handle both use cases.

---

### 4. Hero Geometric (`/components/ui/shape-landing-hero.tsx`)

**Current State:** Partially accepts props but has hardcoded content and buttons

**Required Interface:**
```typescript
export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroGeometricProps {
  title: string;
  subtitle?: string;
  ctaButtons?: CTAButton[];
  videoSrc?: string;
  backgroundImage?: string;
  backgroundType?: 'video' | 'image' | 'gradient';
}
```

**Changes Needed:**
- Remove hardcoded title text
- Make CTA buttons configurable via props
- Support both video and image backgrounds
- Make shapes/animations optional via props
- Update homepage to pass hero data

**Sanity Schema:**
```javascript
{
  name: 'hero',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'subtitle', type: 'text' },
    {
      name: 'ctaButtons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'href', type: 'string' },
            { name: 'variant', type: 'string' }
          ]
        }
      ]
    },
    { name: 'backgroundVideo', type: 'file' },
    { name: 'backgroundImage', type: 'image' }
  ]
}
```

---

### 5. Stagger Testimonials (`/components/ui/stagger-testimonials.tsx`)

**Current State:** Testimonials array hardcoded inside component (34 testimonials)

**Required Interface:**
```typescript
export interface Testimonial {
  id: string;
  testimonial: string;
  by: string;
  imgSrc?: string;
  isLogo?: boolean;
  isSvg?: boolean;
}

export interface StaggerTestimonialsProps {
  title?: string;
  highlightedText?: string;
  testimonials: Testimonial[];
}
```

**Changes Needed:**
- Remove hardcoded `testimonials` array from component
- Accept `testimonials` prop
- Make section title configurable
- Update homepage to pass testimonials data
- Keep carousel logic intact

**Sanity Schema:**
```javascript
{
  name: 'testimonialsSection',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'highlightedText', type: 'string' },
    {
      name: 'testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'testimonial', type: 'text' },
            { name: 'by', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'isLogo', type: 'boolean' }
          ]
        }
      ]
    }
  ]
}
```

---

## 🟡 Phase 2: Shared Layout Components

### 6. Footer (`/components/ui/footer.tsx`)

**Required Analysis:** Need to check current implementation

**Expected Props:**
```typescript
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterProps {
  sections: FooterSection[];
  socialLinks: SocialLink[];
  contactEmail?: string;
  contactPhone?: string;
  copyrightText?: string;
  logo?: string;
}
```

**Changes Needed:**
- Extract all hardcoded links and text
- Make footer sections configurable
- Support social media links
- Make contact information editable

---

## 🟢 Phase 3: Page Builder System

### Create Flexible Page Rendering

**Goal:** Create a system where pages can be built dynamically from Sanity schemas

**Implementation:**

1. **Create Section Mapper (`/lib/section-mapper.tsx`):**
```typescript
export const SectionMapper = {
  hero: HeroGeometric,
  splitContent: SplitContentSection,
  services: ServicesSection,
  testimonials: StaggerTestimonials,
  contactForm: ContactForm,
  whyChoose: WhyChooseSection,
  timeline: Timeline,
  blueBanner: BlueBanner,
  serviceGrid: ServiceGrid,
  // ... more sections
};

export function renderSection(section: any) {
  const Component = SectionMapper[section._type];
  if (!Component) return null;
  return <Component key={section._key} {...section} />;
}
```

2. **Create Page Template (`/app/[slug]/page.tsx`):**
```typescript
export default async function DynamicPage({ params }: { params: { slug: string } }) {
  const pageData = await getPageData(params.slug);

  return (
    <>
      <Navbar {...pageData.navbar} />
      {pageData.sections.map(renderSection)}
      <Footer {...pageData.footer} />
    </>
  );
}
```

3. **Sanity Page Schema:**
```javascript
{
  name: 'page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    {
      name: 'sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'splitContentSection' },
        { type: 'servicesSection' },
        { type: 'testimonialsSection' },
        { type: 'contactForm' },
        // ... more section types
      ]
    }
  ]
}
```

---

## 📋 Refactoring Checklist

### Phase 1: Homepage Components
- [ ] Refactor `ServicesSection` to accept props
- [ ] Refactor `LocalExpertiseSection` to accept props
- [ ] Refactor `DeliveringExcellenceSection` to accept props (or merge with LocalExpertiseSection)
- [ ] Refactor `HeroGeometric` to accept full props
- [ ] Refactor `StaggerTestimonials` to accept props
- [ ] Update homepage to use new prop-based components with default data

### Phase 2: Layout Components
- [ ] Analyze Footer component
- [ ] Refactor Footer to accept props
- [ ] Test Footer across all pages

### Phase 3: Sanity Integration
- [ ] Set up Sanity Studio schemas for all sections
- [ ] Create Sanity client utilities
- [ ] Create section mapper system
- [ ] Create dynamic page template
- [ ] Migrate homepage data to Sanity
- [ ] Test dynamic rendering

### Phase 4: Migration
- [ ] Migrate all existing pages to Sanity
- [ ] Set up preview mode
- [ ] Configure revalidation
- [ ] Update deployment pipeline

---

## 🎯 Success Criteria

After refactoring, the following should be possible:

1. **Content editors can:**
   - Edit all text content without touching code
   - Rearrange page sections via drag-and-drop
   - Upload and manage images
   - Create new pages with existing sections
   - Preview changes before publishing

2. **Developers can:**
   - Create new section types easily
   - Reuse components across pages
   - Maintain type safety with TypeScript
   - Version control content schemas

3. **Site maintains:**
   - Fast page load times
   - SEO optimization
   - Responsive design
   - Smooth animations
   - Accessibility standards

---

## 📝 Notes

- **Backward Compatibility:** During refactoring, provide default props so existing pages continue to work
- **Type Safety:** Ensure all Sanity data is properly typed with TypeScript interfaces
- **Performance:** Use Sanity's CDN and image optimization
- **Caching:** Implement ISR (Incremental Static Regeneration) for dynamic pages
- **Preview Mode:** Set up Sanity preview mode for content editors

---

## 🔗 Related Files

- `/lib/country-data.ts` - Example of centralized data structure (already done)
- `/components/ui/navbar.tsx` - Example of fully prop-based component (already done)
- `/components/sections/` - All section components to refactor
- `/app/page.tsx` - Homepage that will consume Sanity data

---

## 📚 Resources

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Integration](https://www.sanity.io/docs/nextjs)
- [Portable Text in React](https://www.sanity.io/docs/presenting-block-text)
- [Image Optimization with Sanity](https://www.sanity.io/docs/image-url)

---

**Last Updated:** 2025-10-28
**Status:** Planning Phase
**Next Step:** Begin Phase 1 - Refactor ServicesSection
