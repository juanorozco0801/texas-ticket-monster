import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { pricing } from '@/mocks/pricing';

export default function OtherOffensesPage() {
  const tServices = useTranslations('services');

  const benefits = [
    'Serious charges require serious defense',
    'Experienced criminal traffic attorneys',
    'Protect your future and career',
    'Minimize penalties and jail time',
    'Strong legal representation',
    'Confidential and professional',
  ];

  const violations = pricing.other.examples.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-cta-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              Starting at ${pricing.other.price}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Criminal Traffic Offense Defense
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {tServices('other.description')}
            </p>
            <Link href="/upload">
              <Button size="lg" className="bg-sunny-yellow text-navy-deep hover:bg-sunny-yellow-light px-8 py-6 text-lg">
                Upload Your Ticket →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-monster-orange" />
              <h2 className="text-3xl font-bold text-navy-deep">Expert Defense for Serious Charges</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-sky-cyan">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-navy-deep">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Violations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-deep mb-8 text-center">
              Criminal Traffic Offenses We Handle
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {violations.map((violation, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        ${pricing.other.price}
                      </Badge>
                      {violation}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-sky-cyan/20 to-white border-2 border-sky-cyan">
            <CardContent className="space-y-6 pt-6">
              <h2 className="text-3xl font-bold text-navy-deep">
                Don't Face Serious Charges Alone
              </h2>
              <p className="text-lg text-navy-deep/70">
                Criminal traffic offenses can have life-changing consequences. Get expert legal help now.
              </p>
              <Link href="/upload">
                <Button size="lg" className="bg-monster-orange hover:bg-monster-orange-dark text-white px-8 py-6 text-lg">
                  Upload Your Ticket Now →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

