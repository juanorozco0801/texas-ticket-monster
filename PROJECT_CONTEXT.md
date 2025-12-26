# Texas Ticket Monster - Project Context & Plan

## 🎯 Project Overview

**Texas Ticket Monster** is a modern, bilingual (EN/ES) web application for a Texas-based traffic ticket defense law firm. The platform allows users to upload their tickets, pay per ticket, and have lawyers handle their cases—all without court appearances.

### Competitive Intel (Based on The Ticket Clinic)
- **Key competitor**: theticketclinic.com
- **Their model**: Flat-fee pricing starting at $49, millions of cases resolved nationwide
- **Value props they emphasize**:
  - No court appearances required
  - Clear communication throughout process
  - Fast and affordable legal assistance
  - Favorable outcomes: dismissed charges, no points on record
- **Trust signals**: Volume stats, testimonials, multiple locations
- **Differentiators we can leverage**:
  - Texas-specific focus (local expertise)
  - Per-ticket transparent pricing
  - Modern UX with multi-ticket upload
  - Bilingual support (ES/EN) for Texas demographics

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Icons | lucide-react |
| Forms | react-hook-form |
| Validation | zod + @hookform/resolvers |
| State Management | zustand |
| i18n | next-intl (routes: /en, /es) |
| Data Fetching | @tanstack/react-query (optional, for mock delays) |
| Payments | stripe-js (UI/redirect simulation only) |
| Deployment | Vercel |

---

## 📁 File Structure

```
texas-ticket-monster/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx              # i18n provider + root layout
│   │   │   ├── page.tsx                # Home
│   │   │   ├── (marketing)/
│   │   │   │   ├── how-it-works/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── success-stories/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── faq/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── contact/
│   │   │   │       └── page.tsx
│   │   │   ├── (cases)/
│   │   │   │   ├── dui/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── traffic-tickets/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── other-offenses/
│   │   │   │       └── page.tsx
│   │   │   └── (flow)/
│   │   │       ├── upload/
│   │   │       │   └── page.tsx        # Multi-ticket form
│   │   │       ├── checkout/
│   │   │       │   └── page.tsx        # Summary + Pay button
│   │   │       └── payment/
│   │   │           ├── success/
│   │   │           │   └── page.tsx
│   │   │           └── cancel/
│   │   │               └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx                  # Root layout (fonts, meta)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                         # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── ServiceCards.tsx
│   │   │   ├── HowItWorksMini.tsx
│   │   │   ├── TrustBlock.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── cases/
│   │   │   ├── CaseHero.tsx
│   │   │   ├── BenefitsList.tsx
│   │   │   └── ViolationsList.tsx
│   │   ├── flow/
│   │   │   ├── TicketForm.tsx
│   │   │   ├── TicketList.tsx
│   │   │   ├── TicketCard.tsx
│   │   │   ├── PriceSummary.tsx
│   │   │   └── CheckoutSummary.tsx
│   │   ├── marketing/
│   │   │   ├── StepCard.tsx
│   │   │   ├── StoryCard.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── ContactForm.tsx
│   │   └── common/
│   │       ├── LanguageSwitcher.tsx
│   │       ├── CTAButton.tsx
│   │       └── SectionWrapper.tsx
│   ├── mocks/
│   │   ├── successStories.ts
│   │   ├── pricing.ts
│   │   ├── faqs.ts
│   │   ├── violations.ts
│   │   └── testimonials.ts
│   ├── store/
│   │   └── tickets.store.ts            # tickets + pricing + locale
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validations.ts              # zod schemas
│   ├── i18n/
│   │   ├── request.ts
│   │   └── routing.ts
│   └── messages/
│       ├── en.json
│       └── es.json
├── public/
│   ├── images/
│   └── icons/
├── PROJECT_CONTEXT.md                   # This file
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 📄 Page Content Specifications

### 1. Home (`/[locale]`)

#### Hero Section
- **Headline EN**: "Got a Texas Ticket? Let the Monster Fight It!"
- **Headline ES**: "¿Tienes una Multa en Texas? ¡Deja que el Monstruo la Pelee!"
- **Subheadline EN**: "Upload. Pay per ticket. We handle the rest — no court appearances needed."
- **Subheadline ES**: "Sube. Paga por ticket. Nosotros hacemos el resto — sin ir a la corte."
- **CTA Button**: "Upload Your Tickets" / "Sube Tus Multas" → `/upload`
- **Background**: Gradient from Sky Cyan (#ADE6ED) to white
- **Visual**: Monster mascot on right side, giving thumbs up

#### Service Cards (3)
1. **DUI Defense**
   - Icon: Shield or Car
   - Brief description
   - CTA: "Learn More" → `/dui`

2. **Traffic Tickets**
   - Icon: FileText or Receipt
   - Brief description
   - CTA: "Learn More" → `/traffic-tickets`

3. **Other Criminal Traffic Offenses**
   - Icon: Gavel or AlertTriangle
   - Brief description
   - CTA: "Learn More" → `/other-offenses`

#### How It Works Mini (3 Steps)
1. **Upload** - "Snap a photo or upload your ticket(s)"
2. **Pay** - "Transparent per-ticket pricing. No hidden fees."
3. **Relax** - "We fight it. You stay informed. No court for you."

#### Trust Block
- Stats: "10,000+ tickets handled" | "95% success rate" | "500+ 5-star reviews"
- Logos/badges (mock): BBB, Avvo, Google Reviews
- Mini testimonial slider (2-3 quotes)

#### Final CTA
- "Ready to fight your ticket?"
- Big button: "Upload Tickets Now"

---

### 2. Case Landing Pages (`/dui`, `/traffic-tickets`, `/other-offenses`)

#### DUI Page
- **Title**: "Texas DUI Defense"
- **Benefits**:
  - Protect your license
  - Minimize fines and penalties
  - Avoid jail time
  - Keep your record clean
- **Common Violations**:
  - First-time DUI/DWI
  - DUI with accident
  - Under 21 DUI
  - Commercial DUI
  - Repeat offenders
- **CTA**: "Upload Your DUI Ticket"

#### Traffic Tickets Page
- **Title**: "Texas Traffic Ticket Defense"
- **Benefits**:
  - Avoid points on your license
  - Keep insurance rates low
  - No court appearance needed
  - Fast resolution
- **Common Violations**:
  - Speeding (1-25+ over)
  - Running red light/stop sign
  - Failure to yield
  - Improper lane change
  - Expired registration/inspection
  - No insurance
- **CTA**: "Upload Your Traffic Ticket"

#### Other Offenses Page
- **Title**: "Criminal Traffic Offense Defense"
- **Benefits**:
  - Serious charges require serious defense
  - Experienced attorneys
  - Protect your future
- **Common Violations**:
  - Reckless driving
  - Hit and run
  - Driving with suspended license
  - Racing/exhibition of speed
  - Evading police
- **CTA**: "Upload Your Ticket"

---

### 3. How It Works (`/how-it-works`)

#### 4 Detailed Steps
1. **Upload Your Tickets**
   - Snap a photo or upload PDF
   - Add multiple tickets at once
   - We review within 24 hours

2. **Pay Per Ticket**
   - Transparent pricing (see pricing table)
   - Secure checkout
   - No hidden fees, no retainers

3. **We Review & Take Action**
   - Assigned attorney reviews your case
   - File necessary paperwork
   - Represent you in court (you don't appear)

4. **Resolution**
   - Get notified of outcome
   - Most cases: reduced/dismissed
   - Full transparency on next steps

---

### 4. Success Stories (`/success-stories`)

#### Features
- Grid of story cards (6-12 mock stories)
- Filter by category: DUI | Traffic | Other
- Each card shows:
  - Case type
  - Outcome (Dismissed, Reduced, etc.)
  - Brief quote
  - Location (city, TX)

---

### 5. FAQ (`/faq`)

#### Accordion Items (8-12)
1. How much does it cost?
2. Do I need to appear in court?
3. How long does the process take?
4. What if I live outside Texas?
5. Can you handle multiple tickets?
6. What's your success rate?
7. Do you offer payment plans?
8. What happens if I lose my case?
9. How do I know my case status?
10. Is my information secure?
11. What types of tickets can you handle?
12. Why choose Texas Ticket Monster?

---

### 6. Contact (`/contact`)

#### Contact Form Fields
- Name (required)
- Email (required)
- Phone (optional)
- Ticket Type (dropdown: DUI, Traffic, Other, Not Sure)
- Message (textarea)
- Submit button → mock success toast

#### Contact Info (Mock)
- **Phone**: 1-888-TX-TICKET
- **Email**: help@texasticketmonster.com
- **Hours**: Mon-Fri 8am-6pm CST, Sat 9am-2pm CST
- **Address**: 123 Main Street, Houston, TX 77001

---

## 💰 Pricing Structure (Mock)

```typescript
// src/mocks/pricing.ts
export const pricing = {
  trafficTicket: {
    base: 79,
    label: "Traffic Ticket",
    description: "Speeding, red lights, stop signs, etc."
  },
  dui: {
    base: 499,
    label: "DUI/DWI",
    description: "First-time or repeat offense"
  },
  criminalTraffic: {
    base: 299,
    label: "Criminal Traffic",
    description: "Reckless driving, suspended license, etc."
  },
  additionalTicket: {
    discount: 0.15, // 15% off each additional ticket
    label: "Multi-ticket discount"
  }
};
```

---

## 🗃️ State Management (Zustand)

```typescript
// src/store/tickets.store.ts
interface Ticket {
  id: string;
  type: 'traffic' | 'dui' | 'criminal';
  description: string;
  imageUrl?: string;
  createdAt: Date;
}

interface TicketStore {
  tickets: Ticket[];
  locale: 'en' | 'es';
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt'>) => void;
  removeTicket: (id: string) => void;
  clearTickets: () => void;
  setLocale: (locale: 'en' | 'es') => void;
  getTotalPrice: () => number;
}
```

---

## 🌐 i18n Structure

### Messages Structure
```json
// messages/en.json
{
  "common": {
    "uploadTickets": "Upload Tickets",
    "learnMore": "Learn More",
    "getStarted": "Get Started",
    "contactUs": "Contact Us"
  },
  "nav": {
    "home": "Home",
    "howItWorks": "How It Works",
    "dui": "DUI",
    "trafficTickets": "Traffic Tickets",
    "otherOffenses": "Other Offenses",
    "successStories": "Success Stories",
    "faq": "FAQ",
    "contact": "Contact"
  },
  "home": {
    "heroTitle": "Fight Your Texas Ticket",
    "heroSubtitle": "Upload. Pay Per Ticket. We Handle the Rest.",
    "heroDescription": "No court appearances. No hassle. Just results."
  },
  // ... more sections
}
```

---

## 🎨 Design Guidelines

### Brand Identity

**Logo**: Friendly orange monster mascot with blue horns giving thumbs-up
- Personality: Approachable, confident, helpful, fun
- Tone: "We're the monster that fights FOR you, not against you"
- Makes legal services feel less intimidating
- Perfect for Texas demographic - friendly, no-nonsense

### Brand Colors
```css
:root {
  /* Primary Palette */
  --monster-orange: #FF5B23;    /* Primary CTA, monster body, energy */
  --sky-cyan: #ADE6ED;          /* Backgrounds, cards, calm/trust */
  --electric-blue: #3A39FF;     /* Accents, links, monster horns */
  --sunny-yellow: #FAD062;      /* Highlights, badges, success states */
  --deep-navy: #1C174F;         /* Text, headers, serious content */
  
  /* Extended Palette */
  --white: #FFFFFF;
  --off-white: #F8FCFC;
  --light-gray: #E5E7EB;
  --dark-gray: #4B5563;
  
  /* Semantic Colors */
  --success: #22C55E;
  --warning: #FAD062;           /* Uses sunny-yellow */
  --error: #EF4444;
  --info: #3A39FF;              /* Uses electric-blue */
}
```

### Color Usage Guide
| Element | Color | Hex |
|---------|-------|-----|
| Primary buttons/CTAs | Monster Orange | #FF5B23 |
| Page backgrounds | Sky Cyan (light) | #ADE6ED |
| Section backgrounds | White/Off-white | #FFFFFF/#F8FCFC |
| Headlines & body text | Deep Navy | #1C174F |
| Links & interactive | Electric Blue | #3A39FF |
| Badges & highlights | Sunny Yellow | #FAD062 |
| Cards | White with cyan border | #FFFFFF + #ADE6ED |
| Footer | Deep Navy | #1C174F |
| Success messages | Green | #22C55E |

### Typography
```css
/* Headings - Bold, playful but professional */
--font-heading: 'Poppins', 'Nunito', sans-serif;
font-weight: 700-800;

/* Body - Clean, highly readable */
--font-body: 'Inter', 'Open Sans', sans-serif;
font-weight: 400-500;

/* Accent/Display - For hero & special text */
--font-display: 'Poppins', sans-serif;
font-weight: 800;
```

### Design Principles

**1. Friendly & Approachable**
- Monster mascot appears throughout site (subtle animations)
- Rounded corners on cards and buttons
- Playful micro-interactions
- Conversational copy tone

**2. Trust Through Transparency**
- Clear pricing upfront
- Progress indicators in flow
- Real testimonials prominently displayed
- Stats and success rates visible

**3. Mobile-First**
- 70%+ users on mobile (got ticket, searching on phone)
- Thumb-friendly tap targets
- Easy photo upload from camera
- Sticky CTAs on mobile

**4. Visual Hierarchy**
- Orange for primary actions (Upload, Pay, Submit)
- Navy for important text
- Cyan for background/sections
- Yellow for highlights/badges

**5. Monster Brand Integration**
- Small monster icon in favicon
- Monster peeking in corners/sections
- Monster holding signs for testimonials
- Thumbs-up monster on success pages
- Worried monster on error/cancel pages

### Component Styling

```css
/* Primary Button */
.btn-primary {
  background: #FF5B23;
  color: white;
  border-radius: 9999px; /* Fully rounded */
  padding: 12px 32px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(255, 91, 35, 0.3);
}
.btn-primary:hover {
  background: #E54D1A;
  transform: translateY(-2px);
}

/* Secondary Button */
.btn-secondary {
  background: white;
  color: #1C174F;
  border: 2px solid #3A39FF;
  border-radius: 9999px;
}

/* Card */
.card {
  background: white;
  border-radius: 16px;
  border: 2px solid #ADE6ED;
  box-shadow: 0 4px 20px rgba(28, 23, 79, 0.08);
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #ADE6ED 0%, #F8FCFC 100%);
}

/* Footer */
.footer {
  background: #1C174F;
  color: white;
}
```

### Animations & Micro-interactions
- Button hover: slight lift + shadow increase
- Cards: subtle scale on hover
- Monster mascot: gentle bounce/wave animation
- Page transitions: fade + slide
- Form success: confetti or monster thumbs-up
- Loading states: monster "thinking" animation

---

## 🐻 Monster Mascot Usage

### Mascot Personality
- **Name**: Could be "Monty" or just "The Monster"
- **Vibe**: Helpful, friendly, confident, protective
- **Message**: "I fight FOR you, not against you"

### Mascot Appearances Throughout Site

| Page/Section | Mascot Pose | Purpose |
|--------------|-------------|---------|
| Header (logo) | Thumbs up | Brand recognition |
| Hero | Full body, thumbs up | Welcome, confidence |
| How It Works | Holding each step icon | Guide through process |
| Success Stories | Peeking from corner | Playful endorsement |
| Upload Page | Pointing at form | Encourage action |
| Checkout | Holding price tag | Transparency |
| Payment Success | Celebrating/jumping | Victory! |
| Payment Cancel | Sad/concerned face | Empathy, try again |
| 404 Page | Confused/looking around | Lighten the error |
| Footer | Small waving version | Friendly goodbye |

### Mascot Assets Needed
```
public/
├── images/
│   ├── monster/
│   │   ├── logo-full.svg          # Full logo with text
│   │   ├── logo-icon.svg          # Just monster (for favicon, small uses)
│   │   ├── monster-thumbsup.svg   # Main hero pose
│   │   ├── monster-thinking.svg   # Loading states
│   │   ├── monster-celebrate.svg  # Success states
│   │   ├── monster-sad.svg        # Error/cancel states
│   │   ├── monster-pointing.svg   # CTAs, forms
│   │   └── monster-wave.svg       # Footer, goodbye
```

### CSS Monster Animations
```css
/* Gentle float animation for hero monster */
@keyframes monster-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Thumbs up wiggle for CTAs */
@keyframes thumbs-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

/* Celebration bounce for success */
@keyframes celebrate {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}
```

---

## 📋 Development Phases

### Phase 1: Foundation
- [ ] Install all dependencies
- [ ] Configure next-intl routing
- [ ] Set up shadcn/ui components
- [ ] Create zustand store
- [ ] Build Header & Footer
- [ ] Set up i18n messages (EN/ES)

### Phase 2: Marketing Pages
- [ ] Home page (all sections)
- [ ] How It Works page
- [ ] Case landing pages (DUI, Traffic, Other)
- [ ] Success Stories page
- [ ] FAQ page
- [ ] Contact page

### Phase 3: Flow Pages
- [ ] Upload page (multi-ticket form)
- [ ] Checkout page (summary + pricing)
- [ ] Payment success page
- [ ] Payment cancel page

### Phase 4: Polish
- [ ] Animations & transitions
- [ ] Mobile responsive testing
- [ ] Accessibility audit
- [ ] SEO meta tags
- [ ] Performance optimization

---

## 🔗 Dependencies to Install

```bash
# Core dependencies
npm install next-intl zustand react-hook-form zod @hookform/resolvers @tanstack/react-query @stripe/stripe-js

# shadcn/ui setup (run after above)
npx shadcn@latest init
npx shadcn@latest add button card input textarea select accordion dialog sheet navigation-menu toast form label badge separator
```

---

## 🎨 Tailwind CSS Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        monster: {
          orange: "#FF5B23",
          "orange-dark": "#E54D1A",
        },
        sky: {
          cyan: "#ADE6ED",
          "cyan-light": "#D6F3F7",
        },
        electric: {
          blue: "#3A39FF",
          "blue-dark": "#2D2CC7",
        },
        sunny: {
          yellow: "#FAD062",
          "yellow-light": "#FCE4A0",
        },
        navy: {
          deep: "#1C174F",
          light: "#2E2875",
        },
        // Semantic
        background: "#F8FCFC",
        foreground: "#1C174F",
        primary: {
          DEFAULT: "#FF5B23",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#ADE6ED",
          foreground: "#1C174F",
        },
        accent: {
          DEFAULT: "#3A39FF",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#E5E7EB",
          foreground: "#4B5563",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1C174F",
        },
        border: "#ADE6ED",
        input: "#ADE6ED",
        ring: "#3A39FF",
      },
      fontFamily: {
        heading: ["Poppins", "Nunito", "sans-serif"],
        body: ["Inter", "Open Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(28, 23, 79, 0.08)",
        button: "0 4px 14px rgba(255, 91, 35, 0.3)",
        "button-hover": "0 6px 20px rgba(255, 91, 35, 0.4)",
      },
      animation: {
        "monster-float": "monster-float 3s ease-in-out infinite",
        "thumbs-wiggle": "thumbs-wiggle 0.5s ease-in-out",
        celebrate: "celebrate 0.6s ease-in-out",
      },
      keyframes: {
        "monster-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "thumbs-wiggle": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        celebrate: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 📝 Notes for Development

1. **All data is mocked** - No backend integration needed for MVP
2. **Stripe is simulated** - Just UI/redirect, no actual payment processing
3. **Focus on UX** - Smooth flow from landing → upload → checkout → success
4. **Bilingual from start** - Build with i18n in mind, not as afterthought
5. **Mobile-first** - Most users will be on phones when they get a ticket
6. **Trust is key** - Every page should build confidence in the service

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

*Last updated: December 2024*

