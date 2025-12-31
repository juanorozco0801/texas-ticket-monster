# Texas Ticket Monster - Project Context

## 🎯 Overview

**Texas Ticket Monster** is a bilingual (EN/ES) Next.js MVP for a Texas traffic ticket defense service. Users upload tickets, pay per ticket, and attorneys handle cases without court appearances.

**Business Model**: Lead + payment funnel for traffic legal services (Traffic Tickets, DUI, Criminal Traffic Offenses).

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (Strict) |
| Styling | Tailwind CSS + shadcn/ui |
| State | Zustand |
| i18n | next-intl (`/en`, `/es`) |
| Forms | React Hook Form + Zod |
| Payments | Stripe (Test mode) |
| AI | OpenAI GPT-4o-mini Vision |
| Email | Resend + React Email |
| Database | NeonDB (PostgreSQL) - Planned |
| Deployment | Vercel |

---

## 🎨 Brand & Design

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Monster Orange | `#FF5B23` | Primary CTAs, highlights |
| Sunny Yellow | `#FAD062` | Badges, discounts |
| Electric Blue | `#3A39FF` | Links, accents |
| Sky Cyan | `#ADE6ED` | Backgrounds |
| Deep Navy | `#1C174F` | Text, headers |

### Monster Mascot
- **Personality**: Friendly, confident, protective
- **Message**: "Fights FOR you, not against you"
- **Usage**: Logo, hero sections, success/error states

---

## 📁 Project Structure

```
texas-ticket-monster/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── create-checkout-session/    # Stripe API
│   │   │   ├── extract-ticket/             # AI extraction
│   │   │   └── webhooks/stripe/            # Payment webhooks
│   │   └── [locale]/
│   │       ├── page.tsx                    # Home
│   │       ├── how-it-works/               # Marketing
│   │       ├── success-stories/
│   │       ├── faq/
│   │       ├── contact/
│   │       ├── dui/                        # Case landing pages
│   │       ├── traffic-tickets/
│   │       ├── other-offenses/
│   │       ├── upload/                     # Flow pages
│   │       ├── checkout/
│   │       └── payment/
│   │           ├── success/
│   │           └── cancel/
│   ├── components/
│   │   ├── ui/                             # shadcn/ui
│   │   ├── layout/                         # Header, Footer
│   │   └── flow/                           # Ticket forms, summaries
│   ├── store/
│   │   └── tickets.store.ts                # Zustand (customer, tickets, pricing)
│   ├── mocks/
│   │   ├── successStories.ts               # 10 stories
│   │   ├── faqs.ts                         # 12 questions
│   │   └── pricing.ts                      # Per-ticket pricing
│   ├── lib/
│   │   ├── validations.ts                  # Zod schemas
│   │   └── stripe.ts                       # Stripe client
│   ├── emails/
│   │   └── TicketConfirmation.tsx          # React Email template
│   ├── hooks/
│   │   └── useTicketExtraction.ts          # AI extraction hook
│   └── messages/
│       ├── en.json                         # English translations
│       └── es.json                         # Spanish translations
├── public/
│   ├── PAGINAPRINCIPAL.png                 # Hero monster
│   ├── HOWITWORKS.png                      # Page-specific images
│   ├── SUCCESSSTORIES.png
│   ├── GOTQUESTIONS.png
│   ├── CONTACTUS.png
│   ├── animatedMonster.mp4                 # Success animation
│   └── Logo*.png                           # Brand variations
└── docs/                                   # Documentation
```

---

## ✅ Implementation Status

### Pages Completed (9 core + root)

**Marketing Pages (8)**
- ✅ Root redirect to `/en`
- ✅ Home - Hero, services, stats, testimonials
- ✅ How It Works - 3-step process
- ✅ Success Stories - Tabs filter, 10 stories
- ✅ FAQ - Accordion, 12 questions
- ✅ Contact - Form with validation
- ✅ DUI Defense - $199, benefits, violations
- ✅ Traffic Tickets - $99, benefits, violations
- ✅ Other Offenses - $149, benefits, violations

**Flow Pages (4)**
- ✅ Upload - Multi-ticket form with AI extraction
- ✅ Checkout - Review order, Stripe integration
- ✅ Payment Success - Case ID, confirmation
- ✅ Payment Cancel - Retry options

**Additional**
- ✅ 404 pages (root + locale-specific)
- ✅ Error pages (global + locale)
- ✅ Loading states

---

## 🔑 Key Features

### 1. Multi-Ticket Upload
- Customer form (name, ID, email, phone)
- Add unlimited tickets
- AI-powered ticket info extraction (OpenAI Vision)
- Per-ticket pricing with 15% multi-ticket discount
- File metadata only (name, size, type)

### 2. AI Ticket Extraction
- OpenAI GPT-4o-mini Vision API
- Extracts: ticket number, violation type, date, time, location, fine, officer details
- Optional feature (graceful degradation if no API key)
- Max file size: 5MB

### 3. Stripe Checkout
- Server-side session creation
- Secure redirect to Stripe Checkout
- Test mode enabled
- Multi-ticket discount calculation
- Locale-aware (passes EN/ES to Stripe)
- Success/cancel URL handling

### 4. Email Notifications
- Resend + React Email
- Stripe webhook (`checkout.session.completed`)
- Bilingual email templates
- Order summary with case ID
- 4-step "What's Next" timeline

### 5. Internationalization
- Full EN/ES support
- Route-based: `/en/*` and `/es/*`
- All UI text translated
- Locale persistence through flow
- Language switcher in header

---

## 💰 Pricing Logic

```typescript
// src/mocks/pricing.ts
{
  traffic: 99,    // Speeding, red lights, etc.
  dui: 199,       // DUI/DWI defense
  other: 149      // Criminal traffic offenses
}

// Multi-ticket discount: 15% off additional tickets
// First ticket: Full price
// Additional: 85% of base price
```

---

## 🗃️ State Management (Zustand)

```typescript
interface TicketStore {
  customer: {
    fullName: string;
    idNumber: string;
    email: string;
    phone: string;
  };
  tickets: Array<{
    id: string;
    category: 'traffic' | 'dui' | 'other';
    ticketNumber: string;
    file: { name: string; size: number; type: string };
    notes?: string;
    price: number;
  }>;
  // Actions: setCustomer, addTicket, removeTicket, clearAll
  // Selectors: ticketCount, totalAmount, priceBreakdown
}
```

---

## 🌐 Environment Variables

```env
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (required)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# OpenAI (optional)
OPENAI_API_KEY=sk-proj-...

# Resend (optional)
RESEND_API_KEY=re_...

# NeonDB (planned)
DATABASE_URL=postgresql://...
```

See `.env.example` for full documentation.

---

## 🧪 Testing

### Test Cards (Stripe)
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Any future expiry, any CVC, any ZIP

### Test Flow
1. Navigate to `/en/upload`
2. Fill customer form + add ticket(s)
3. Optional: Upload image for AI extraction
4. Continue to checkout
5. Review order, accept terms
6. Click "Pay $XX.XX"
7. Use test card on Stripe
8. See success page with case ID
9. Receive confirmation email


## 🎓 Resources

**Stripe**
- Docs: https://stripe.com/docs/checkout
- Test Cards: https://stripe.com/docs/testing
- Dashboard: https://dashboard.stripe.com

**OpenAI**
- API Keys: https://platform.openai.com/api-keys
- Docs: https://platform.openai.com/docs

**Resend**
- Dashboard: https://resend.com
- Docs: https://resend.com/docs

**Next.js**
- Docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app

**Vercel**
- Dashboard: https://vercel.com/dashboard
- Deployment: https://vercel.com/docs
