'use client';

import { useState, useEffect } from 'react';
import { useRouter, Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { useTicketStore, useCustomer, usePriceBreakdown } from '@/store/tickets.store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Check, CreditCard, ShieldCheck, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { pricing } from '@/mocks/pricing';
import { useParams } from 'next/navigation';

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  
  const customer = useCustomer();
  const tickets = useTicketStore((state) => state.tickets);
  const priceBreakdown = usePriceBreakdown();
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect if no customer or tickets
  useEffect(() => {
    if (!customer || tickets.length === 0) {
      router.push('/upload');
    }
  }, [customer, tickets, router]);

  const handlePayment = async () => {
    if (!agreedToTerms) {
      setError(t('termsRequired'));
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tickets: priceBreakdown.tickets,
          customer,
          locale,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        globalThis.location.href = data.url;
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (!customer || tickets.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <Badge className="mb-4 bg-electric-blue/10 text-electric-blue">
            {t('step')}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-deep mb-2">
            {t('title')}
          </h1>
          <Link href="/upload" className="text-monster-orange hover:underline flex items-center gap-2 mt-4">
            <ArrowLeft className="w-4 h-4" />
            {t('goBack')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Review Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{t('yourInfo')}</CardTitle>
                  <Link href="/upload">
                    <Button variant="ghost" size="sm">
                      {t('edit')}
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-navy-deep/60">Full Name</p>
                    <p className="font-medium text-navy-deep">{customer.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-navy-deep/60">ID / License #</p>
                    <p className="font-medium text-navy-deep">{customer.idNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-navy-deep/60">Email</p>
                    <p className="font-medium text-navy-deep">{customer.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-navy-deep/60">Phone</p>
                    <p className="font-medium text-navy-deep">{customer.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tickets List */}
            <Card>
              <CardHeader>
                <CardTitle>{t('orderSummary')}</CardTitle>
                <CardDescription>
                  {tickets.length} {tickets.length === 1 ? 'ticket' : 'tickets'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {priceBreakdown.tickets.map((ticket, index) => (
                  <div key={ticket.id}>
                    {index > 0 && <Separator className="my-4" />}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {pricing[ticket.type].label.en}
                            </Badge>
                            {ticket.hasDiscount && (
                              <Badge className="text-xs bg-sunny-yellow/20 text-navy-deep">
                                -15% {t('discountApplied')}
                              </Badge>
                            )}
                          </div>
                          <p className="font-medium text-navy-deep mt-1">
                            {ticket.description}
                          </p>
                        </div>
                        <div className="text-right">
                          {ticket.hasDiscount && (
                            <p className="text-sm text-navy-deep/50 line-through">
                              ${ticket.basePrice.toFixed(2)}
                            </p>
                          )}
                          <p className="font-bold text-navy-deep">
                            ${ticket.finalPrice.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="border-2 border-monster-orange/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-monster-orange" />
                  {t('paymentMethod')}
                </CardTitle>
                <CardDescription>
                  {t('securePayment')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-electric-blue/10 p-4 rounded-lg">
                  <p className="text-sm text-navy-deep font-medium">
                    ⚠️ {t('testMode')}
                  </p>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      setError(null);
                    }}
                    className="mt-1 w-4 h-4 rounded border-gray-300 text-monster-orange focus:ring-monster-orange"
                  />
                  <label htmlFor="terms" className="text-sm text-navy-deep/80 cursor-pointer">
                    {t('termsAgreement')}
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                {/* Pay Button */}
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing || !agreedToTerms}
                  className="w-full bg-monster-orange hover:bg-monster-orange-dark text-white text-lg py-6"
                  size="lg"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t('processing')}
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      {t('payNow', { amount: `$${priceBreakdown.total.toFixed(2)}` })}
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-navy-deep/60">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t('securePayment')}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-2 border-monster-orange/20">
              <CardHeader className="bg-gradient-to-br from-monster-orange/10 to-sunny-yellow/10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/LogoVariacion2_Naranja.png"
                    alt="Monster"
                    width={60}
                    height={60}
                    className="animate-monster-float"
                  />
                  <CardTitle className="text-navy-deep">
                    {t('orderSummary')}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-deep/70">{t('subtotal')}</span>
                    <span className="font-medium text-navy-deep">
                      ${priceBreakdown.subtotal.toFixed(2)}
                    </span>
                  </div>
                  
                  {priceBreakdown.totalDiscount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-navy-deep/70">{t('discount')}</span>
                      <span className="font-medium text-sunny-yellow-dark">
                        -${priceBreakdown.totalDiscount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-navy-deep">{t('total')}</span>
                    <span className="text-monster-orange">
                      ${priceBreakdown.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {priceBreakdown.totalDiscount > 0 && (
                  <div className="mt-4 p-3 bg-sunny-yellow/20 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-sunny-yellow-dark mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-navy-deep">
                          You saved ${priceBreakdown.totalDiscount.toFixed(2)}!
                        </p>
                        <p className="text-xs text-navy-deep/70 mt-1">
                          15% discount on additional tickets
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


