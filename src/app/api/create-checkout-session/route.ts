import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if secret key is available
const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey, {
    apiVersion: '2025-12-15.clover',
  });
};

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured. Please add STRIPE_SECRET_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    const { tickets, customer, locale } = await req.json();

    if (!tickets || tickets.length === 0) {
      return NextResponse.json(
        { error: 'No tickets provided' },
        { status: 400 }
      );
    }

    // Calculate line items with proper pricing
    const lineItems = tickets.map((ticket: { 
      description: string; 
      finalPrice: number;
      hasDiscount: boolean;
    }, index: number) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: ticket.description,
          description: ticket.hasDiscount 
            ? `Multi-ticket discount applied` 
            : index === 0 
              ? 'Full price'
              : undefined,
        },
        unit_amount: Math.round(ticket.finalPrice * 100), // Stripe expects cents
      },
      quantity: 1,
    }));

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const successUrl = `${appUrl}/${locale}/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${appUrl}/${locale}/checkout`;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customer.email,
      metadata: {
        customerId: customer.idNumber,
        customerName: customer.fullName,
        ticketCount: tickets.length.toString(),
        locale: locale || 'en',
      },
      payment_method_types: ['card'],
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

