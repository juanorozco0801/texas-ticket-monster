# Texas Ticket Monster 🦖⚖️

A modern, bilingual (EN/ES) Next.js web application for Texas traffic ticket defense. Upload tickets, pay per ticket, and let attorneys handle cases without court appearances.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Quick Start](#-quick-start)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [License](#-license)

---

## ✨ Features

- 🌐 **Bilingual Support** - Full English and Spanish localization (`/en`, `/es`)
- 🎫 **Multi-Ticket Upload** - Upload and manage multiple tickets at once
- 🤖 **AI Extraction** - OpenAI Vision API extracts ticket information automatically
- 💳 **Stripe Integration** - Secure payment processing with per-ticket pricing
- 📧 **Email Notifications** - Automated confirmation emails via Resend
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- 📱 **Mobile Responsive** - Optimized for mobile-first experience
- 🔒 **Type Safe** - Strict TypeScript with Zod validation
- ⚡ **Fast Performance** - Next.js 15 App Router with streaming

---

## 🛠️ Tech Stack

### Core
- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)

### State & Data
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs)
- **Forms**: [React Hook Form](https://react-hook-form.com)
- **Validation**: [Zod](https://zod.dev)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app)

### Integrations
- **Payments**: [Stripe](https://stripe.com)
- **AI**: [OpenAI Vision API](https://platform.openai.com) (GPT-4o-mini)
- **Email**: [Resend](https://resend.com) + [React Email](https://react.email)
- **Database**: NeonDB (PostgreSQL) - *Planned*

### Deployment
- **Platform**: [Vercel](https://vercel.com)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git
- Stripe account (test mode free)
- OpenAI API key (optional)
- Resend API key (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/texas-ticket-monster.git
   cd texas-ticket-monster
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys (see [Environment Variables](#-environment-variables))

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required (for full functionality)

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Stripe (Required for payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Optional (but recommended)

```env
# OpenAI (for AI ticket extraction)
OPENAI_API_KEY=sk-proj-...

# Resend (for email notifications)
RESEND_API_KEY=re_...

# Database (future feature)
DATABASE_URL=postgresql://...
```

### Getting API Keys

| Service | Get Keys | Free Tier |
|---------|----------|-----------|
| **Stripe** | [Dashboard](https://dashboard.stripe.com/test/apikeys) | ✅ Test mode free |
| **OpenAI** | [Platform](https://platform.openai.com/api-keys) | ✅ $5 credit |
| **Resend** | [Console](https://resend.com/api-keys) | ✅ 100 emails/day |

> 💡 **Tip**: See `.env.example` for complete documentation of all environment variables.

---

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Development Workflow

1. **Create a new feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow TypeScript strict mode
   - Use existing shadcn/ui components
   - Add translations to `src/messages/en.json` and `es.json`
   - Test in both English and Spanish

3. **Test your changes**
   ```bash
   npm run build    # Ensure build succeeds
   npm run lint     # Check for linting errors
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature-name
   ```

### Project Commands

```bash
# Install new shadcn/ui component
npx shadcn@latest add [component-name]

# Database migrations (when implemented)
npx prisma migrate dev

# Generate TypeScript types
npm run codegen
```

---

## 🧪 Testing

### Manual Testing

1. **Test the upload flow**
   ```
   /en/upload → Add customer info → Upload ticket → Continue
   ```

2. **Test AI extraction** (requires OpenAI key)
   - Upload a ticket image (max 5MB)
   - Verify extracted data fills form fields

3. **Test payment flow** (requires Stripe keys)
   ```
   /en/checkout → Accept terms → Pay
   ```
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry, any CVC, any ZIP

4. **Test in Spanish**
   ```
   /es/upload → Complete the flow in Spanish
   ```

### Stripe Test Cards

| Card Number | Result |
|-------------|--------|
| `4242 4242 4242 4242` | ✅ Success |
| `4000 0000 0000 0002` | ❌ Declined |
| `4000 0027 6000 3184` | ⚠️ Requires authentication |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Go to: Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Use **production keys** for Production environment
   - Use **test keys** for Preview and Development environments

4. **Deploy**
   - Vercel auto-deploys on push to `main`
   - Preview deployments for PRs

### Environment-Specific Config

```env
# Development / Preview
NEXT_PUBLIC_APP_URL=https://preview-branch.vercel.app
STRIPE_SECRET_KEY=sk_test_...

# Production
NEXT_PUBLIC_APP_URL=https://texasticketmonster.com
STRIPE_SECRET_KEY=sk_live_...
```

### Post-Deployment Checklist

- [ ] Verify all environment variables are set
- [ ] Test payment flow with production keys
- [ ] Set up Stripe webhook (see [Email Setup](docs/email_service/))
- [ ] Verify email delivery works
- [ ] Test both `/en` and `/es` locales
- [ ] Check mobile responsiveness
- [ ] Monitor error logs in Vercel dashboard

---

## 📁 Project Structure

```
texas-ticket-monster/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── [locale]/             # Localized routes (/en, /es)
│   │   │   ├── page.tsx          # Home page
│   │   │   ├── upload/           # Upload flow
│   │   │   ├── checkout/         # Checkout page
│   │   │   ├── payment/          # Success/cancel pages
│   │   │   ├── how-it-works/     # Marketing pages
│   │   │   ├── success-stories/
│   │   │   ├── faq/
│   │   │   ├── contact/
│   │   │   ├── dui/              # Case landing pages
│   │   │   ├── traffic-tickets/
│   │   │   └── other-offenses/
│   │   └── api/                  # API routes
│   │       ├── create-checkout-session/
│   │       ├── extract-ticket/
│   │       └── webhooks/stripe/
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── layout/               # Header, Footer
│   │   └── flow/                 # Form components
│   ├── store/                    # Zustand store
│   ├── lib/                      # Utilities
│   ├── hooks/                    # Custom React hooks
│   ├── emails/                   # Email templates
│   ├── messages/                 # i18n translations
│   │   ├── en.json
│   │   └── es.json
│   └── mocks/                    # Mock data (MVP)
├── public/                       # Static assets
├── docs/                         # Documentation
│   ├── ai_data_extraction/
│   └── email_service/
├── .env.example                  # Environment variables template
├── PROJECT_CONTEXT.md            # Complete project reference
└── README.md                     # This file
```

---

## 📚 Documentation

For detailed information on specific features, see the `docs/` folder:

### Core Documentation
- **[PROJECT_CONTEXT.md](PROJECT_CONTEXT.md)** - Complete project overview, tech stack, design system

### Feature Documentation
- **[AI Data Extraction](docs/ai_data_extraction/)** - OpenAI Vision API setup and usage
- **[Email Service](docs/email_service/)** - Resend + Stripe webhook configuration
- **[Stripe Integration](docs/stripe_integration/)** - Payment processing setup

### Quick Links
- [Environment Variables Guide](.env.example) - All required and optional variables
- [Component Library](src/components/ui/) - shadcn/ui components used
- [Translations](src/messages/) - i18n message files

---

## 🎯 MVP Status

### ✅ Completed
- [x] All 13 pages (marketing, flow, case landing pages)
- [x] Multi-ticket upload with AI extraction
- [x] Stripe checkout integration
- [x] Email notifications via webhooks
- [x] Full bilingual support (EN/ES)
- [x] Mobile responsive design
- [x] TypeScript strict mode
- [x] Production build successful

### ⏳ Planned (Post-MVP)
- [ ] NeonDB integration for data persistence
- [ ] Admin dashboard for case management
- [ ] User authentication and accounts
- [ ] Case tracking portal
- [ ] PDF receipt generation
- [ ] Analytics and reporting

---

## 🤝 Contributing

This is an MVP project. For feature requests or bug reports:

1. Check existing issues
2. Create a new issue with detailed description
3. Wait for approval before submitting PRs

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/texas-ticket-monster/issues)
- **Email**: help@texasticketmonster.com
- **Docs**: See `docs/` folder for detailed guides

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) - React framework
- [shadcn/ui](https://ui.shadcn.com) - UI component library
- [Stripe](https://stripe.com) - Payment processing
- [OpenAI](https://openai.com) - AI ticket extraction
- [Vercel](https://vercel.com) - Hosting platform

---

**Built with 💪 for Texas Ticket Monster**  
*Ready to fight tickets! 🦖⚖️*

