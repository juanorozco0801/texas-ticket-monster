import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';
import { TicketConfirmationEmail } from '@/emails/TicketConfirmation';

// Initialize Stripe
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY is not configured');
    return null;
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-12-15.clover',
  });
};

// Initialize Resend
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return null;
  }
  return new Resend(apiKey);
};

// Disable body parsing, we need the raw body for Stripe signature verification
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  const resend = getResend();

  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe is not configured' },
      { status: 500 }
    );
  }

  if (!resend) {
    return NextResponse.json(
      { error: 'Email service is not configured' },
      { status: 500 }
    );
  }

  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing Stripe signature' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET is not configured');
      return NextResponse.json(
        { error: 'Webhook secret not configured' },
        { status: 500 }
      );
    }

    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: `Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}` },
      { status: 400 }
    );
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    console.log('Processing completed checkout session:', session.id);

    try {
      // Generate case ID
      const caseId = `TTM-${Date.now().toString().slice(-6)}-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;

      // Extract customer info from metadata and session
      const customerName = session.metadata?.customerName || 'Valued Customer';
      const customerEmail = session.customer_email;
      const locale = (session.metadata?.locale || 'en') as 'en' | 'es';

      if (!customerEmail) {
        console.error('No customer email found in session');
        return NextResponse.json(
          { error: 'Customer email not found' },
          { status: 400 }
        );
      }

      // Get line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
        expand: ['data.price.product'],
      });

      // Build tickets array from line items
      const tickets = lineItems.data.map((item) => ({
        description: item.description || 'Ticket',
        finalPrice: (item.amount_total || 0) / 100, // Convert from cents to dollars
      }));

      const total = (session.amount_total || 0) / 100;

      console.log('Sending confirmation email to:', customerEmail);

      // Send confirmation email using Resend
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Texas Ticket Monster <onboarding@resend.dev>', // Change to your verified domain
        to: [customerEmail],
        subject: `Payment Confirmed - Case ${caseId} - Texas Ticket Monster`,
        react: TicketConfirmationEmail({
          customerName,
          caseId,
          tickets,
          total,
          locale,
        }) as React.ReactElement,
      });

      if (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't return error to Stripe - we still want to acknowledge the webhook
        // Log this for follow-up manual email sending
      } else {
        console.log('Email sent successfully:', emailData?.id);
      }

      // TODO: Store case information in database (NeonDB)
      // Example:
      // await db.cases.create({
      //   caseId,
      //   customerName,
      //   customerEmail,
      //   tickets,
      //   total,
      //   stripeSessionId: session.id,
      //   status: 'pending_review',
      //   createdAt: new Date(),
      // });

      return NextResponse.json({
        received: true,
        caseId,
        emailSent: !emailError,
      });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json(
        { error: 'Failed to process webhook' },
        { status: 500 }
      );
    }
  }

  // Handle other event types if needed
  if (event.type === 'payment_intent.succeeded') {
    console.log('Payment intent succeeded:', event.data.object.id);
  }

  if (event.type === 'payment_intent.payment_failed') {
    console.log('Payment intent failed:', event.data.object.id);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ received: true });
}

