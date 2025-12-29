'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft, CreditCard, HelpCircle, Phone, Upload } from 'lucide-react';
import Image from 'next/image';

export default function PaymentCancelPage() {
  const t = useTranslations('payment.cancel');
  const tCommon = useTranslations('common');

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50/50 via-white to-sky-cyan/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Cancel Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6 relative">
              <Image
                src="/LogoVariacion3_Naranja.png"
                alt="Payment Cancelled"
                width={120}
                height={120}
                className="relative opacity-50 grayscale"
              />
            </div>
            
            <div className="mb-4">
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-navy-deep mb-3">
              {t('title')}
            </h1>
            <p className="text-xl text-navy-deep/70">
              {t('subtitle')}
            </p>
          </div>

          {/* Information Card */}
          <Card className="mb-8 border-2 border-red-500/20">
            <CardHeader className="bg-red-50/50">
              <CardTitle className="flex items-center gap-2 text-navy-deep">
                <CreditCard className="w-5 h-5 text-red-500" />
                What Happened?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-navy-deep/80 leading-relaxed">
                {t('message')}
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <Link href="/checkout" className="block">
              <Button 
                size="lg" 
                className="w-full bg-monster-orange hover:bg-monster-orange-dark text-white"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('tryAgain')}
              </Button>
            </Link>
            
            <Link href="/upload" className="block">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-navy-deep text-navy-deep hover:bg-navy-deep/5"
              >
                <Upload className="w-5 h-5 mr-2" />
                {t('backToUpload')}
              </Button>
            </Link>
          </div>

          {/* Help Section */}
          <Card className="bg-gradient-to-br from-sky-cyan/20 to-sunny-yellow/10 border-none">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-electric-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-navy-deep mb-2">
                    {t('needHelp')}
                  </h3>
                  <div className="flex items-center gap-2 text-monster-orange font-semibold">
                    <Phone className="w-4 h-4" />
                    <span>{t('phone')}</span>
                  </div>
                  <p className="text-sm text-navy-deep/70 mt-2">
                    Mon-Fri 8am-6pm CST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-electric-blue hover:underline inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


