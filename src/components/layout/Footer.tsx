'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Phone, Mail, Clock } from 'lucide-react';

const quickLinks = [
  { href: '/how-it-works', key: 'howItWorks' },
  { href: '/success-stories', key: 'successStories' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
] as const;

const caseLinks = [
  { href: '/dui', key: 'dui' },
  { href: '/traffic-tickets', key: 'trafficTickets' },
  { href: '/other-offenses', key: 'otherOffenses' },
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-monster-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦖</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-lg">
                  Texas
                </span>
                <span className="font-heading font-bold text-monster-orange text-lg">
                  {' '}Ticket Monster
                </span>
              </div>
            </Link>
            <p className="text-sky-cyan/80 text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sky-cyan/80 hover:text-monster-orange transition-colors text-sm"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Types */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              {tNav('home')}
            </h3>
            <ul className="space-y-3">
              {caseLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sky-cyan/80 hover:text-monster-orange transition-colors text-sm"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/upload"
                  className="text-monster-orange hover:text-sunny-yellow transition-colors text-sm font-medium"
                >
                  {tNav('upload')} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1-888-898-4253"
                  className="flex items-center gap-3 text-sky-cyan/80 hover:text-monster-orange transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {t('phone')}
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@texasticketmonster.com"
                  className="flex items-center gap-3 text-sky-cyan/80 hover:text-monster-orange transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {t('email')}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sky-cyan/80 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  {t('hours')}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sky-cyan/60 text-xs leading-relaxed mb-4">
            {t('disclaimerText')}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sky-cyan/60 text-xs">
              {t('copyright', { year: currentYear })}
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="text-sky-cyan/60 hover:text-monster-orange transition-colors"
              >
                {t('privacyPolicy')}
              </Link>
              <span className="text-sky-cyan/40">|</span>
              <Link
                href="/terms"
                className="text-sky-cyan/60 hover:text-monster-orange transition-colors"
              >
                {t('termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

