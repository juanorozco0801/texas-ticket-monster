'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Home, Download, Mail, Clock, UserCheck, Gavel, FileCheck } from 'lucide-react';
import Image from 'next/image';
import { useCustomer, usePriceBreakdown, useTicketStore } from '@/store/tickets.store';

export default function PaymentSuccessPage() {
  const t = useTranslations('payment.success');
  const tCommon = useTranslations('common');
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const customer = useCustomer();
  const priceBreakdown = usePriceBreakdown();
  const clearAll = useTicketStore((state) => state.clearAll);
  
  const [caseId, setCaseId] = useState<string>('');

  useEffect(() => {
    // Generate a mock case ID
    const id = `TTM-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    setCaseId(id);
  }, []);

  const handleDownloadReceipt = () => {
    // Mock receipt download
    alert('Receipt download would happen here in production');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sunny-yellow/10 via-sky-cyan/10 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6 relative">
              <div className="absolute inset-0 bg-sunny-yellow/30 rounded-full blur-2xl animate-pulse"></div>
              <Image
                src="/LogoVariacion2_Naranja.png"
                alt="Success"
                width={120}
                height={120}
                className="relative animate-monster-float"
              />
            </div>
            
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-navy-deep mb-3">
              {t('title')}
            </h1>
            <p className="text-xl text-navy-deep/70 mb-6">
              {t('subtitle')}
            </p>
            
            <Card className="inline-block bg-gradient-to-r from-monster-orange to-sunny-yellow text-white">
              <CardContent className="py-4 px-8">
                <p className="text-sm font-semibold mb-1">{t('caseId')}</p>
                <p className="text-2xl font-bold tracking-wider">{caseId}</p>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          {customer && priceBreakdown.tickets.length > 0 && (
            <Card className="mb-8 border-2 border-green-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-navy-deep">Order Summary</h3>
                  <Badge className="bg-green-500/10 text-green-700">
                    {priceBreakdown.tickets.length} ticket{priceBreakdown.tickets.length > 1 ? 's' : ''}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  {priceBreakdown.tickets.map((ticket) => (
                    <div key={ticket.id} className="flex justify-between">
                      <span className="text-navy-deep/70">{ticket.description}</span>
                      <span className="font-medium text-navy-deep">${ticket.finalPrice.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-navy-deep">Total Paid</span>
                  <span className="text-monster-orange">${priceBreakdown.total.toFixed(2)}</span>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-sm text-navy-deep/70">
                  <Mail className="w-4 h-4" />
                  <span>{t('emailSent')} <strong>{customer.email}</strong></span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* What's Next Section */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-navy-deep mb-6 text-center">
                {t('whatNext')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-electric-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">{t('step1Title')}</h3>
                    <p className="text-sm text-navy-deep/70">{t('step1Desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-monster-orange/10 flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-monster-orange" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">{t('step2Title')}</h3>
                    <p className="text-sm text-navy-deep/70">{t('step2Desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sunny-yellow/30 flex items-center justify-center">
                      <Gavel className="w-6 h-6 text-navy-deep" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">{t('step3Title')}</h3>
                    <p className="text-sm text-navy-deep/70">{t('step3Desc')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sky-cyan/30 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-electric-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-deep mb-1">{t('step4Title')}</h3>
                    <p className="text-sm text-navy-deep/70">{t('step4Desc')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadReceipt}
              variant="outline"
              size="lg"
              className="border-monster-orange text-monster-orange hover:bg-monster-orange/10"
            >
              <Download className="w-5 h-5 mr-2" />
              {t('downloadReceipt')}
            </Button>
            
            <Link href="/">
              <Button size="lg" className="bg-navy-deep hover:bg-navy-light text-white">
                <Home className="w-5 h-5 mr-2" />
                {t('backHome')}
              </Button>
            </Link>
          </div>

          {/* Thank You Message */}
          <div className="mt-8 text-center">
            <p className="text-lg text-navy-deep/80 italic">
              {t('thankYou')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


