import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="bg-hero-gradient min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-navy-deep mb-4">
          {t('heroTitle')}
          <span className="block text-monster-orange">{t('heroTitleHighlight')}</span>
        </h1>
        <p className="text-lg md:text-xl text-navy-deep/80 max-w-2xl mx-auto mb-8">
          {t('heroSubtitle')}
        </p>
        <a
          href="/upload"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-monster-orange rounded-full shadow-button hover:bg-monster-orange-dark hover:shadow-button-hover transition-all duration-200 hover:-translate-y-1"
        >
          {t('heroCta')}
        </a>
      </div>
    </div>
  );
}

