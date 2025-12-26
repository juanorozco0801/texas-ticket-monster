'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Globe } from 'lucide-react';
import { routing, type Locale } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const otherLocale = locale === 'en' ? 'es' : 'en';

  const handleSwitch = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white hover:text-monster-orange border border-white/30 rounded-full hover:border-monster-orange/50 transition-colors"
      aria-label={t('switchTo', { language: t(otherLocale) })}
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase">{otherLocale}</span>
    </button>
  );
}

// Dropdown version for more options
export function LanguageSwitcherDropdown() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const handleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-navy-deep hover:text-monster-orange border border-sky-cyan rounded-full hover:border-monster-orange/30 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase">{locale}</span>
      </button>
      <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-card border border-sky-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {routing.locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleChange(loc)}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              locale === loc
                ? 'text-monster-orange bg-sky-cyan/30'
                : 'text-navy-deep hover:bg-sky-cyan/20'
            }`}
          >
            {t(loc)}
          </button>
        ))}
      </div>
    </div>
  );
}

