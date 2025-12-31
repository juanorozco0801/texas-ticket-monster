# 🚀 Quick Start - Email Notifications

## 5-Minute Setup

### 1. Install Dependencies ✅
Already installed: `resend`, `react-email`, `@react-email/components`

### 2. Get API Keys

**Resend** (2 minutes)
```
1. Go to https://resend.com → Sign up
2. Get API key from dashboard
3. Copy the key (starts with re_)
```

**Stripe Webhook Secret** (2 minutes)
```
For Local Dev:
stripe listen --forward-to localhost:3000/api/webhooks/stripe
Copy the webhook signing secret (whsec_...)

For Production:
1. Stripe Dashboard → Webhooks → Add endpoint
2. URL: https://your-app.vercel.app/api/webhooks/stripe
3. Events: checkout.session.completed
4. Copy signing secret
```

### 3. Add to `.env.local`

```env
RESEND_API_KEY=re_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
```

### 4. Test It!

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Forward webhooks (local only)
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Terminal 3: Complete test payment
# Use test card: 4242 4242 4242 4242
```

## ✅ Done!

Emails will be sent automatically when:
- ✅ User completes payment
- ✅ Stripe webhook fires
- ✅ Confirmation email sent via Resend

## 📧 Email Includes:

- Customer name
- Unique case ID (TTM-XXXXXX-XXXX)
- Order summary with line items
- Total amount paid
- What happens next (4 steps)
- Support contact

## 🔍 Verify

**Check Resend Dashboard:**
https://resend.com/emails

**Check Stripe Webhooks:**
https://dashboard.stripe.com/webhooks

## 📝 Change Sender Email (Production)

In `src/app/api/webhooks/stripe/route.ts`:

```typescript
from: 'Texas Ticket Monster <noreply@yourdomain.com>'
```

**Note:** You must verify your domain in Resend first.

## 🆘 Troubleshooting

**Email not sending?**
- Check `RESEND_API_KEY` is set
- Check Resend dashboard for errors
- Verify customer email is valid

**Webhook not working?**
- Check `STRIPE_WEBHOOK_SECRET` is set
- Ensure `stripe listen` is running (local)
- Check webhook URL is correct (production)

**See full docs:** `EMAIL_NOTIFICATION_SETUP.md`

