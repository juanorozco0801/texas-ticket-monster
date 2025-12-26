'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

const navLinks = [
  { href: '/how-it-works', key: 'howItWorks' },
  { href: '/success-stories', key: 'successStories' },
  { href: '/faq', key: 'faq' },
  { href: '/contact', key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sky-cyan">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Monster Icon Placeholder - Replace with actual logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-monster-orange rounded-full flex items-center justify-center group-hover:animate-thumbs-wiggle transition-transform">
                <span className="text-white font-bold text-lg md:text-xl">🦖</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-navy-deep text-lg md:text-xl">
                Texas
              </span>
              <span className="font-heading font-bold text-monster-orange text-lg md:text-xl">
                {' '}Ticket Monster
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`font-medium transition-colors hover:text-monster-orange ${
                  isActive(link.href)
                    ? 'text-monster-orange'
                    : 'text-navy-deep'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/upload"
              className="inline-flex items-center justify-center px-6 py-2.5 font-semibold text-white bg-monster-orange rounded-full shadow-button hover:bg-monster-orange-dark hover:shadow-button-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('upload')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-deep hover:text-monster-orange transition-colors"
              aria-label={mobileMenuOpen ? tHeader('menuClose') : tHeader('menuOpen')}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-sky-cyan animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-sky-cyan text-monster-orange'
                      : 'text-navy-deep hover:bg-sky-cyan/50'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/upload"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-monster-orange rounded-full shadow-button hover:bg-monster-orange-dark transition-all duration-200"
                >
                  {t('upload')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

