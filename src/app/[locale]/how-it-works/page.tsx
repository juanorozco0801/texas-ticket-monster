import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Upload, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const tCommon = useTranslations('common');

  const steps = [
    {
      number: 1,
      icon: Upload,
      titleKey: 'step1.title',
      descKey: 'step1.description',
      color: 'bg-monster-orange',
    },
    {
      number: 2,
      icon: CreditCard,
      titleKey: 'step2.title',
      descKey: 'step2.description',
      color: 'bg-electric-blue',
    },
    {
      number: 3,
      icon: CheckCircle2,
      titleKey: 'step3.title',
      descKey: 'step3.description',
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-monster-orange/10 text-monster-orange hover:bg-monster-orange/20">
            Simple Process
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-navy-deep/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <Card key={step.number} className="relative overflow-hidden border-2 hover:shadow-xl transition-shadow">
                {/* Step number badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-navy-deep text-white flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{t(step.titleKey)}</CardTitle>
                      <CardDescription className="text-base">{t(step.descKey)}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                {index < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-monster-orange rotate-90" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-deep mb-6">
            Ready to Get Started?
          </h2>
          <Link href="/upload">
            <Button size="lg" className="bg-monster-orange hover:bg-monster-orange-dark text-white px-8 py-6 text-lg">
              {tCommon('uploadTickets')} →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

