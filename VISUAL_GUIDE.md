# 🎨 Checkout Flow Visual Guide

## Page Flow Diagram

```
╔════════════════════════════════════════════════════════════════╗
║                        UPLOAD PAGE                             ║
║                    /[locale]/upload                            ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  Step 1 of 2                                                  ║
║                                                                ║
║  ┌─────────────────────────┐  ┌──────────────────┐          ║
║  │ Your Information        │  │ Price Summary    │          ║
║  │ - Full Name             │  │                  │          ║
║  │ - ID Number             │  │ 🦖 Monster      │          ║
║  │ - Email                 │  │                  │          ║
║  │ - Phone                 │  │ Traffic: $99.00  │          ║
║  └─────────────────────────┘  │                  │          ║
║                                │ Total: $99.00    │          ║
║  ┌─────────────────────────┐  └──────────────────┘          ║
║  │ Add New Ticket          │                                 ║
║  │ - Category              │  ┌──────────────────┐          ║
║  │ - Ticket Number         │  │ Ticket List      │          ║
║  │ - Upload File           │  │ 1. Traffic #123  │          ║
║  │ - Notes                 │  │    $99.00        │          ║
║  │                         │  └──────────────────┘          ║
║  │ [+ Add Ticket]          │                                 ║
║  └─────────────────────────┘  [Continue to Checkout]         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
                            │
                            ▼
╔════════════════════════════════════════════════════════════════╗
║                      CHECKOUT PAGE                             ║
║                    /[locale]/checkout                          ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  Step 2 of 2                                                  ║
║                                                                ║
║  ┌─────────────────────────┐  ┌──────────────────┐          ║
║  │ Your Information  [Edit]│  │ Order Summary    │          ║
║  │ John Doe                │  │                  │          ║
║  │ DL123456                │  │ 🦖 Monster      │          ║
║  │ john@email.com          │  │                  │          ║
║  │ (555) 123-4567          │  │ Subtotal: $99.00 │          ║
║  └─────────────────────────┘  │ Discount: $0.00  │          ║
║                                │ Total:    $99.00 │          ║
║  ┌─────────────────────────┐  └──────────────────┘          ║
║  │ Order Summary           │                                 ║
║  │                         │                                 ║
║  │ Traffic Ticket - #123   │                                 ║
║  │ Base: $99.00            │                                 ║
║  │                         │                                 ║
║  └─────────────────────────┘                                 ║
║                                                                ║
║  ┌─────────────────────────┐                                 ║
║  │ 💳 Payment Method       │                                 ║
║  │                         │                                 ║
║  │ ⚠️ TEST MODE            │                                 ║
║  │ Use: 4242 4242 4242     │                                 ║
║  │                         │                                 ║
║  │ ☐ I agree to Terms      │                                 ║
║  │                         │                                 ║
║  │ [🛡️ Pay $99.00]        │                                 ║
║  │                         │                                 ║
║  │ 🔒 Secure by Stripe     │                                 ║
║  └─────────────────────────┘                                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
                            │
                            ▼
╔════════════════════════════════════════════════════════════════╗
║                  STRIPE CHECKOUT (External)                    ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║                       Stripe Logo                              ║
║                                                                ║
║  Pay Texas Ticket Monster                                     ║
║  Total: $99.00                                                ║
║                                                                ║
║  ┌────────────────────────────────────┐                      ║
║  │ Card Number                        │                      ║
║  │ 4242 4242 4242 4242                │                      ║
║  └────────────────────────────────────┘                      ║
║                                                                ║
║  ┌─────────────┐  ┌──────────────────┐                      ║
║  │ MM / YY     │  │ CVC              │                      ║
║  │ 12 / 34     │  │ 123              │                      ║
║  └─────────────┘  └──────────────────┘                      ║
║                                                                ║
║  [Pay $99.00]                                                 ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
                    │                   │
          (Success) │                   │ (Cancel)
                    ▼                   ▼
    ╔═════════════════════════╗  ╔═════════════════════════╗
    ║   SUCCESS PAGE          ║  ║   CANCEL PAGE           ║
    ║ /payment/success        ║  ║ /payment/cancel         ║
    ╠═════════════════════════╣  ╠═════════════════════════╣
    ║                         ║  ║                         ║
    ║      🦖 Monster         ║  ║    🦖 (grayscale)       ║
    ║                         ║  ║                         ║
    ║         ✅              ║  ║         ❌              ║
    ║                         ║  ║                         ║
    ║ Payment Successful!     ║  ║  Payment Cancelled      ║
    ║                         ║  ║                         ║
    ║ Case ID:                ║  ║  No charges made        ║
    ║ TTM-123456-ABCD         ║  ║                         ║
    ║                         ║  ║  [Try Again]            ║
    ║ Order Summary           ║  ║  [Back to Upload]       ║
    ║ Total Paid: $99.00      ║  ║                         ║
    ║                         ║  ║  Need help?             ║
    ║ What's Next?            ║  ║  📞 1-888-TX-TICKET     ║
    ║ 1. Review (24h)         ║  ║                         ║
    ║ 2. Attorney Assigned    ║  ║  [Back to Home]         ║
    ║ 3. Court Rep            ║  ║                         ║
    ║ 4. Resolution           ║  ╚═════════════════════════╝
    ║                         ║
    ║ [📥 Download Receipt]   ║
    ║ [🏠 Back to Home]       ║
    ║                         ║
    ╚═════════════════════════╝
```

## Color Code

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Buttons | Monster Orange | #FF5B23 |
| Discount Badges | Sunny Yellow | #FAD062 |
| Step Indicators | Electric Blue | #3A39FF |
| Backgrounds | Sky Cyan | #ADE6ED |
| Text/Headers | Deep Navy | #1C174F |
| Success | Green | #10B981 |
| Error/Cancel | Red | #EF4444 |

## Component Breakdown

### Checkout Page Components
```
├── Header
│   ├── Step Badge (Electric Blue)
│   ├── Title
│   └── Back Link (Monster Orange)
├── Left Column (2/3)
│   ├── Customer Info Card
│   │   ├── Header with Edit button
│   │   └── Grid of customer fields
│   ├── Order Summary Card
│   │   ├── Ticket items with badges
│   │   └── Discount indicators (Sunny Yellow)
│   └── Payment Card (Orange border)
│       ├── Test mode banner (Electric Blue)
│       ├── Terms checkbox
│       ├── Error message area
│       ├── Pay button (Monster Orange)
│       └── Security badge
└── Right Column (1/3)
    └── Price Summary (Sticky)
        ├── Monster mascot
        ├── Price breakdown
        └── Savings badge (Sunny Yellow)
```

### Success Page Components
```
├── Hero Section
│   ├── Animated Monster
│   ├── Success Icon (Green)
│   ├── Title
│   └── Case ID Card (Orange gradient)
├── Order Summary Card
│   ├── Ticket list
│   ├── Total paid
│   └── Email confirmation notice
├── What's Next Section
│   └── 4 Step Timeline
│       ├── Review (Electric Blue icon)
│       ├── Attorney (Monster Orange icon)
│       ├── Court (Sunny Yellow icon)
│       └── Resolution (Sky Cyan icon)
└── Action Buttons
    ├── Download Receipt (outline)
    └── Back Home (Navy)
```

### Cancel Page Components
```
├── Hero Section
│   ├── Desaturated Monster
│   ├── Cancel Icon (Red)
│   └── Title
├── Info Card (Red border)
│   └── Explanation message
├── Action Buttons
│   ├── Try Again (Monster Orange)
│   └── Back to Upload (outline)
└── Help Card (Sky Cyan background)
    ├── Help icon
    ├── Phone number
    └── Hours
```

## Interactions

### Checkout Page
- ✏️ "Edit" button → Returns to `/upload`
- ✅ Terms checkbox → Enables pay button
- 💳 "Pay" button → Creates Stripe session & redirects
- ⬅️ "Back" link → Returns to `/upload`

### Success Page
- 📥 "Download Receipt" → Mock download
- 🏠 "Back to Home" → Navigates to `/`

### Cancel Page
- 🔄 "Try Again" → Returns to `/checkout`
- ⬆️ "Back to Upload" → Returns to `/upload`
- ⬅️ "Back to Home" → Navigates to `/`

## Responsive Breakpoints

- **Mobile** (< 768px): Single column, stacked layout
- **Tablet** (768px - 1024px): Adjusted spacing
- **Desktop** (> 1024px): Full 2-column layout with sticky sidebar

## Animations

- 🦖 **Monster Float**: Gentle up/down animation
- ✨ **Success Glow**: Pulsing background on success page
- ⏳ **Loading Spinner**: During payment processing
- 🎯 **Hover States**: All buttons and links

---

**Test the flow at: http://localhost:3000/en/upload**


