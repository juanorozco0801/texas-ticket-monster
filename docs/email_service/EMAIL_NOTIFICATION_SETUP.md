# Email Notification System - Setup Guide

## Overview

This project uses **Stripe Webhooks** + **Resend** to send confirmation emails to customers after successful payment. This approach is production-ready and ensures emails are sent reliably even if users close their browser.

---

## 📧 Architecture

```
User completes payment
    ↓
Stripe processes payment
    ↓
Stripe sends webhook to /api/webhooks/stripe
    ↓
Webhook handler verifies signature
    ↓
Extracts customer & order info
    ↓
Sends email via Resend
    ↓
Logs case ID for tracking
```

---

## 🔧 Setup Instructions

### **Step 1: Get Resend API Key**

1. Go to https://resend.com
2. Sign up for free account (100 emails/day free)
3. Verify your email
4. Go to **API Keys** → Create API Key
5. Copy the API key (starts with `re_`)

### **Step 2: Configure Email Domain (Optional for Production)**

**For Testing:** Use the default `onboarding@resend.dev` sender (works immediately)

**For Production:**
1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `texasticketmonster.com`)
3. Add DNS records (TXT, MX, CNAME) as shown
4. Wait for verification (~5 minutes to 24 hours)
5. Update sender email in webhook: `noreply@yourdomain.com`

### **Step 3: Add Environment Variables**

Add to `.env.local`:

```env
# Resend Email Service
RESEND_API_KEY=re_your_api_key_here

# Stripe Webhook Secret (get from Step 4)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### **Step 4: Configure Stripe Webhook**

#### **For Local Development (Stripe CLI)**

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli

```bash
# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Copy the webhook signing secret (starts with whsec_)
# Add it to .env.local as STRIPE_WEBHOOK_SECRET
```

2. Keep the `stripe listen` command running while testing locally

#### **For Production (Vercel)**

1. Deploy your app to Vercel first
2. Go to Stripe Dashboard → **Developers** → **Webhooks**
3. Click **Add endpoint**
4. Enter endpoint URL:
   ```
   https://your-vercel-domain.vercel.app/api/webhooks/stripe
   ```
5. Select events to listen for:
   - ✅ `checkout.session.completed` (required)
   - ✅ `payment_intent.succeeded` (optional)
   - ✅ `payment_intent.payment_failed` (optional)
6. Click **Add endpoint**
7. Copy the **Signing secret** (starts with `whsec_`)
8. Add to Vercel environment variables:
   - Go to Vercel project → **Settings** → **Environment Variables**
   - Add `STRIPE_WEBHOOK_SECRET` = `whsec_...`
   - Add `RESEND_API_KEY` = `re_...`
9. Redeploy the app

---

## 📝 Files Created

### 1. Email Template
**File:** `src/emails/TicketConfirmation.tsx`

Beautiful branded email template with:
- Company logo colors
- Case ID badge
- Order summary with line items
- "What happens next" steps
- Support contact info

### 2. Webhook Handler
**File:** `src/app/api/webhooks/stripe/route.ts`

Handles Stripe webhook events:
- Verifies webhook signature (security)
- Generates unique case ID
- Extracts customer and order info
- Sends email via Resend
- Logs results for debugging

---

## 🧪 Testing

### **Test Locally**

1. Start dev server:
```bash
npm run dev
```

2. In another terminal, start Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

3. Complete a test payment using test card: `4242 4242 4242 4242`

4. Check terminal logs for:
```
Webhook received: checkout.session.completed
Processing completed checkout session: cs_test_...
Sending confirmation email to: customer@example.com
Email sent successfully: <email-id>
```

5. Check the customer's email inbox for confirmation

### **Test Webhook Manually**

Use Stripe CLI to send a test webhook:

```bash
stripe trigger checkout.session.completed
```

### **Test Email Rendering**

You can preview the email template:

```bash
npm install -g react-email
cd src/emails
react-email dev
```

Open http://localhost:3000 to see the email preview.

---

## 🔍 Troubleshooting

### **Issue: Webhook signature verification failed**

**Error:** `Webhook Error: No signatures found matching the expected signature`

**Solutions:**
1. Make sure `STRIPE_WEBHOOK_SECRET` is set correctly
2. Restart dev server after adding environment variables
3. Check that the webhook secret matches your endpoint (dev vs production)
4. Don't use the same webhook secret for dev and production

### **Issue: Email not sending**

**Error:** `Failed to send email`

**Solutions:**
1. Verify `RESEND_API_KEY` is correct
2. Check Resend dashboard for error logs
3. Verify sender domain (use `onboarding@resend.dev` for testing)
4. Check customer email is valid
5. Look at Resend logs: https://resend.com/emails

### **Issue: Webhook not receiving events**

**Solutions:**
1. For local dev: Make sure `stripe listen` is running
2. For production: Check webhook URL is correct in Stripe dashboard
3. Check webhook endpoint is deployed and accessible
4. Test webhook manually: Stripe Dashboard → Webhooks → Test webhook

### **Issue: Email goes to spam**

**Solutions:**
1. Verify your domain with Resend (add SPF, DKIM records)
2. Use a custom domain instead of `onboarding@resend.dev`
3. Add plain text version of email
4. Ensure "From" name looks professional

---

## 📊 Monitoring

### **Check Email Delivery**

Resend Dashboard: https://resend.com/emails
- View all sent emails
- See delivery status
- Check open rates
- View error logs

### **Check Webhook Events**

Stripe Dashboard: https://dashboard.stripe.com/webhooks
- View all webhook events
- See success/failure status
- Retry failed webhooks
- View webhook logs

### **Application Logs**

Check Vercel logs:
```bash
vercel logs --follow
```

Or in Vercel dashboard: Project → Logs

---

## 💰 Costs

### **Resend Pricing**
- **Free tier:** 100 emails/day, 3,000/month
- **Pay as you go:** $0.001 per email ($1 per 1,000 emails)
- **Pro plan:** $20/month for 50,000 emails

### **Estimated Monthly Cost**
| Daily Volume | Monthly Emails | Resend Cost |
|--------------|----------------|-------------|
| 10 orders    | 300            | Free        |
| 50 orders    | 1,500          | Free        |
| 100 orders   | 3,000          | Free        |
| 200 orders   | 6,000          | $3          |
| 500 orders   | 15,000         | $12         |

---

## 🔐 Security Best Practices

1. **Always verify webhook signatures** ✅ (implemented)
2. **Never commit API keys to git** ✅ (using .env.local)
3. **Use environment variables** ✅ (implemented)
4. **Use HTTPS in production** ✅ (Vercel provides this)
5. **Log webhook events for auditing** ✅ (implemented)
6. **Handle webhook retries** ✅ (Stripe does this automatically)
7. **Validate email addresses** ✅ (Stripe provides validated emails)

---

## 🚀 Production Checklist

Before going live:

- [ ] Verify custom domain in Resend
- [ ] Update sender email from `onboarding@resend.dev` to `noreply@yourdomain.com`
- [ ] Configure Stripe webhook in production with live API keys
- [ ] Add `STRIPE_WEBHOOK_SECRET` to Vercel environment variables
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Test end-to-end payment flow in production
- [ ] Monitor Resend dashboard for delivery issues
- [ ] Set up email monitoring/alerts
- [ ] Consider adding email templates for:
  - Payment failed
  - Case status updates
  - Attorney assignment notification

---

## 📚 Additional Features (Future)

### **Add Admin Notification**

Send a copy to your team when a new case is created:

```typescript
// In webhook handler, after customer email
await resend.emails.send({
  from: 'Texas Ticket Monster <notifications@yourdomain.com>',
  to: ['admin@texasticketmonster.com'],
  subject: `New Case: ${caseId}`,
  react: AdminNotificationEmail({ ... }),
});
```

### **Add Receipt PDF Attachment**

Generate PDF receipt and attach to email:

```bash
npm install @react-pdf/renderer
```

### **Add SMS Notifications**

Use Twilio for SMS confirmations:

```bash
npm install twilio
```

---

## 🆘 Support

**Resend Documentation:** https://resend.com/docs  
**Stripe Webhooks Guide:** https://stripe.com/docs/webhooks  
**React Email Docs:** https://react.email/docs

**Need Help?**
- Check Resend support: support@resend.com
- Stripe support: https://support.stripe.com
- Project issues: Create GitHub issue

---

**Last Updated:** December 30, 2025  
**Status:** ✅ Production Ready

