import { useTranslations } from 'next-intl';

export default function Loading() {
  const t = useTranslations('loading');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-monster-orange border-t-transparent mb-4"></div>
        <p className="text-lg text-navy-deep font-semibold">{t('text')}</p>
      </div>
    </div>
  );
}

