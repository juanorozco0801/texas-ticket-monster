import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Home, Upload } from 'lucide-react';

export default function LocaleNotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-cyan/20 to-white flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <Image
            src="/LogoVariacion3_Naranja.png"
            alt="Texas Ticket Monster"
            width={200}
            height={200}
            className="mx-auto animate-monster-float opacity-50"
          />
        </div>
        
        <h1 className="text-7xl md:text-9xl font-bold text-navy-deep mb-4">
          {t('title')}
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
          {t('heading')}
        </h2>
        
        <p className="text-xl text-navy-deep/70 mb-8">
          {t('monsterNotFound')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/">
            <Button size="lg" className="bg-monster-orange hover:bg-monster-orange-dark">
              <Home className="w-5 h-5 mr-2" />
              {t('goHome')}
            </Button>
          </Link>
          
          <Link href="/upload">
            <Button size="lg" variant="outline" className="border-monster-orange text-monster-orange hover:bg-monster-orange/10">
              <Upload className="w-5 h-5 mr-2" />
              {t('uploadTickets')}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <Link href="/how-it-works" className="p-4 rounded-lg border border-sky-cyan hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-navy-deep mb-2">{t('howItWorksTitle')}</h3>
            <p className="text-sm text-navy-deep/60">{t('howItWorksDesc')}</p>
          </Link>
          
          <Link href="/faq" className="p-4 rounded-lg border border-sky-cyan hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-navy-deep mb-2">{t('faqTitle')}</h3>
            <p className="text-sm text-navy-deep/60">{t('faqDesc')}</p>
          </Link>
          
          <Link href="/contact" className="p-4 rounded-lg border border-sky-cyan hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-navy-deep mb-2">{t('contactTitle')}</h3>
            <p className="text-sm text-navy-deep/60">{t('contactDesc')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

