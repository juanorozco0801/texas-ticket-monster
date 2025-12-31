# 🚀 Quick Start Guide - Stripe Checkout

## Step 1: Get Stripe Test Keys (2 minutes)

1. Go to https://dashboard.stripe.com/register
2. Create a free account (no credit card needed for test mode)
3. Skip onboarding questions
4. Go to **Developers** → **API keys** → **Test mode** toggle ON
5. Copy both keys:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`) - Click "Reveal test key"

## Step 2: Add Keys to Project (1 minute)

Create `.env.local` in your project root:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important**: Replace `YOUR_KEY_HERE` with your actual keys!

## Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 4: Test the Flow

1. **Navigate**: http://localhost:3000/en/upload
2. **Fill form**: Add customer info and upload a ticket (use any test image/PDF)
3. **Continue**: Click "Continue to Checkout"
4. **Review**: Check the order summary
5. **Accept terms**: Check the terms checkbox
6. **Pay**: Click the orange "Pay" button
7. **Stripe Checkout**: Use test card:
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)
8. **Success**: You'll see the success page with your case ID!

## Test Card Numbers

✅ **Successful payment**: `4242 4242 4242 4242`  
❌ **Card declined**: `4000 0000 0000 0002`  
⚠️ **Requires authentication**: `4000 0027 6000 3184`

## Troubleshooting

### Can't see checkout page?
- Make sure you added at least one ticket on the upload page
- Check that customer form is filled completely

### "Stripe key is missing" error?
- Verify `.env.local` file exists in project root
- Check that key names match exactly (including `NEXT_PUBLIC_`)
- Restart the dev server

### Payment not redirecting?
- Check browser console for errors
- Verify `NEXT_PUBLIC_APP_URL` is set correctly
- Make sure you're using test mode keys (they start with `pk_test_` and `sk_test_`)

## 🎉 You're Done!

The checkout flow is now fully functional with:
- ✅ Multi-ticket pricing with discounts
- ✅ Secure Stripe integration
- ✅ Success and cancel pages
- ✅ Full English & Spanish support
- ✅ Mobile responsive design
- ✅ Monster branding throughout

## Next: Add Your Real Keys for Production

When ready to go live:
1. Complete Stripe business verification
2. Switch to **Live mode** in Stripe dashboard
3. Get your live keys (start with `pk_live_` and `sk_live_`)
4. Update environment variables in Vercel/production
5. Test with real card before launching!

---

Need help? Check `CHECKOUT_FLOW.md` for detailed documentation.


