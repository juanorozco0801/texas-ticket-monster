# Migration to WeyMor Accounts

This guide outlines the steps required to migrate the Texas Ticket Monster project to WeyMor company accounts.

## 📋 Migration Checklist

### 1. GitHub Account Migration

**Current State**: Personal/development repository

**Required Actions**:
- [ ] Create WeyMor organization on GitHub (if not exists)
- [ ] Transfer repository to WeyMor organization
- [ ] Update repository settings:
  - [ ] Set up branch protection rules (main/master)
  - [ ] Configure required PR reviews
  - [ ] Add WeyMor team members with appropriate roles
- [ ] Update GitHub Secrets:
  - [ ] `VERCEL_TOKEN` (for new WeyMor Vercel)
  - [ ] Any CI/CD secrets

**Impact**: Low (repository URL will change)

**Estimated Time**: 15 minutes

---

### 2. Vercel Account Migration

**Current State**: Personal Vercel account

**Required Actions**:
- [ ] Create/access WeyMor Vercel team account
- [ ] Import project to WeyMor Vercel account
- [ ] Configure custom domain:
  - [ ] Add `texasticketmonster.com` (or WeyMor domain)
  - [ ] Configure DNS settings (A/CNAME records)
  - [ ] Enable SSL/TLS (automatic with Vercel)
- [ ] Set up Environment Variables (copy from current):
  - [ ] `NEXT_PUBLIC_APP_URL`
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `STRIPE_PUBLISHABLE_KEY`
  - [ ] `STRIPE_WEBHOOK_SECRET`
  - [ ] `OPENAI_API_KEY`
  - [ ] `RESEND_API_KEY`
- [ ] Connect to WeyMor GitHub repository
- [ ] Test deployment

**Impact**: High (requires DNS and environment reconfiguration)

**Estimated Time**: 30-45 minutes

**Cost**: Vercel Pro ($20/month) recommended for production

---

### 3. Stripe Account Migration

**Current State**: Test mode on personal account

**Required Actions**:
- [ ] Create WeyMor Stripe account (or use existing)
- [ ] Complete Stripe account verification:
  - [ ] Business information
  - [ ] Tax identification (EIN)
  - [ ] Bank account for payouts
  - [ ] Business documents (may take 1-3 business days)
- [ ] Configure Stripe products (if using Product Catalog):
  - [ ] Traffic Ticket service
  - [ ] DUI service
  - [ ] Other Offenses service
- [ ] Set up webhook endpoint:
  - [ ] URL: `https://yourdomain.com/api/webhooks/stripe`
  - [ ] Events: `checkout.session.completed`
  - [ ] Copy new webhook secret
- [ ] Update environment variables:
  - [ ] `STRIPE_SECRET_KEY` (production key)
  - [ ] `STRIPE_PUBLISHABLE_KEY` (production key)
  - [ ] `STRIPE_WEBHOOK_SECRET` (new webhook secret)
- [ ] Enable production mode
- [ ] Test payment flow end-to-end

**Impact**: Critical (handles real payments)

**Estimated Time**: 1-2 hours (plus verification wait time)

**Cost**: Stripe fees (2.9% + $0.30 per transaction)

---

### 4. Resend Account Migration

**Current State**: Development/test account

**Required Actions**:
- [ ] Create WeyMor Resend account
- [ ] Verify custom sending domain:
  - [ ] Add DNS records (SPF, DKIM, DMARC)
  - [ ] Verify domain ownership
  - [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Update `from` address in `src/app/api/webhooks/stripe/route.ts`:
  - [ ] Change from `onboarding@resend.dev` to `noreply@texasticketmonster.com`
- [ ] Copy API key to Vercel environment:
  - [ ] `RESEND_API_KEY`
- [ ] Test email delivery

**Impact**: High (customer communications)

**Estimated Time**: 45 minutes (plus DNS propagation)

**Cost**: Resend Free tier (100 emails/day) or Pro ($20/month for 50k emails)

**Documentation**: See `docs/email_service/EMAIL_SETUP.md`

---

### 5. OpenAI Account Migration

**Current State**: Personal OpenAI account

**Required Actions**:
- [ ] Create WeyMor OpenAI organization
- [ ] Set up billing:
  - [ ] Add payment method
  - [ ] Set monthly spending limits ($50-100 recommended)
- [ ] Create new API key for production
- [ ] Update Vercel environment variable:
  - [ ] `OPENAI_API_KEY`
- [ ] Monitor usage in OpenAI dashboard

**Impact**: Medium (AI ticket extraction feature)

**Estimated Time**: 15 minutes

**Cost**: Usage-based (~$0.15-0.30 per 1000 images with GPT-4o-mini)

---

### 6. NeonDB Account (Future - Not Currently Used)

**Current State**: Not implemented (using mock data)

**Required Actions** (when ready to add database):
- [ ] Create WeyMor NeonDB account
- [ ] Create production database
- [ ] Set up connection string
- [ ] Add to Vercel environment: `DATABASE_URL`

**Impact**: None (not yet implemented)

**Estimated Time**: 20 minutes when needed

**Cost**: NeonDB Free tier available, Pro starts at $19/month

---

## 🔄 Migration Sequence (Recommended Order)

### Phase 1: Repository Setup (Day 1)
1. GitHub account migration
2. Create WeyMor Vercel team account
3. Import project to Vercel (test deployment)

### Phase 2: Service Accounts (Day 1-2)
4. Set up OpenAI organization (quick)
5. Set up Resend account (start DNS verification early)
6. Start Stripe account verification (can take days)

### Phase 3: Integration & Testing (Day 3-5)
7. Update all environment variables in Vercel
8. Configure Stripe webhook
9. Update email `from` address
10. End-to-end testing

### Phase 4: Go Live (Day 6-7)
11. Configure custom domain
12. Enable Stripe production mode
13. Final production testing
14. Launch! 🚀

---

## 🔐 Security Checklist

- [ ] All API keys are stored in Vercel Environment Variables (never in code)
- [ ] Stripe webhook signature verification is enabled
- [ ] Production API keys are separate from test keys
- [ ] GitHub repository secrets are updated
- [ ] Old API keys are rotated/deleted after migration
- [ ] Team access is configured with least-privilege principle

---

## 📞 Support Resources

- **GitHub**: [github.com/pricing](https://github.com/pricing)
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Stripe**: [support.stripe.com](https://support.stripe.com)
- **Resend**: [resend.com/docs](https://resend.com/docs)
- **OpenAI**: [help.openai.com](https://help.openai.com)

---

## 💰 Estimated Monthly Costs

| Service | Tier          | Cost                                  |
|---------|------         |------                                 |
| Vercel  | Pro           | $20/month                             |
| Stripe  | Pay-as-you-go | 2.9% + $0.30/transaction              |
| Resend  | Free/Pro      | $0 (or $20 for high volume)           |
| OpenAI  | Usage-based   | ~$20-50/month (depends on usage)      |
|**Total**|               | **~$40-90/month** + transaction fees  |

---

## ⚠️ Critical Notes

1. **Stripe Account Verification**: Can take 1-3 business days. Start early!
2. **Domain DNS Propagation**: Can take up to 48 hours. Plan accordingly.
3. **Test Everything**: Use Stripe test mode and test emails before going live.
4. **Backup Environment Variables**: Keep a secure copy of all keys before migration.
5. **Webhook URL**: Must be HTTPS with valid SSL certificate (Vercel provides this).

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Maintained By**: WeyMor Development Team

