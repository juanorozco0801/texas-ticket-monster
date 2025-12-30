'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { 
  Upload, 
  CreditCard, 
  Shield, 
  CheckCircle2, 
  Star,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

export default function HomePage() {
  const t = useTranslations('home');
  const tServices = useTranslations('services');
  const tHowItWorks = useTranslations('howItWorks');
  const tTrust = useTranslations('trust');
  const tCta = useTranslations('cta');
  const tCommon = useTranslations('common');

  return (
    <>
      {/* Hero Section - Banner Inspired */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient Background matching banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] via-[#6b21a8] via-[#9333ea] to-[#0891b2] opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
        
        {/* Decorative Blurs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-electric-blue/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-monster-orange/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Monster Image */}
            <div className="flex justify-center lg:justify-center order-2 lg:order-1 w-full">
              <div className="relative">
                {/* Background Text Logo */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <Image 
                    src="/TEXASTICKETMONSTER.png" 
                    alt="Background Logo"
                    width={600}
                    height={400}
                    className="w-[150%] h-full object-contain opacity-30"
                  />
                </div>
                
                <Image 
                  src="/PAGINAPRINCIPAL.png" 
                  alt="Texas Ticket Monster Mascot"
                  width={384}
                  height={384}
                  priority
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-monster-float drop-shadow-2xl"
                />
                {/* Glow effect behind monster */}
                <div className="absolute inset-0 bg-monster-orange/20 rounded-full blur-3xl -z-20" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center order-1 lg:order-2 flex flex-col items-center">

              {/* Main Logo */}
              <div className="mb-0 flex justify-center">
                <Image 
                  src="/LogoVariacion2_Blanco.png" 
                  alt="Texas Ticket Monster Logo"
                  width={800}
                  height={400}
                  priority
                  className="w-full max-w-md md:max-w-xl lg:max-w-2xl aspect-[2/1] object-cover drop-shadow-2xl"
                />
              </div>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white/90 max-w-xl mb-8 leading-relaxed mx-auto">
                {t('heroSubtitle')}
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 text-sm md:text-base">
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-sunny-yellow" />
                  <span className="font-semibold">No Court</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-sunny-yellow" />
                  <span className="font-semibold">No Points</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-sunny-yellow" />
                  <span className="font-semibold">No Hidden Fees</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/upload"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-navy-deep bg-sunny-yellow rounded-full shadow-2xl hover:bg-sunny-yellow-light hover:shadow-button-hover transition-all duration-200 hover:-translate-y-1 hover:scale-105"
              >
                {t('heroCta')} →
              </Link>

              {/* Trust Badge */}
              <p className="mt-6 text-sm text-white/70">
                ⚡ Fast turnaround • 💰 Starting at $99 • 🏆 Trusted by 10,000+ Texans
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b-2 border-sky-cyan">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-monster-orange" />
              </div>
              <div className="text-4xl font-bold text-navy-deep mb-1">{t('statsTickets')}</div>
              <div className="text-sm text-navy-deep/70">{t('statsTicketsLabel')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-monster-orange" />
              </div>
              <div className="text-4xl font-bold text-navy-deep mb-1">{t('statsSuccess')}</div>
              <div className="text-sm text-navy-deep/70">{t('statsSuccessLabel')}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-monster-orange fill-monster-orange" />
              </div>
              <div className="text-4xl font-bold text-navy-deep mb-1">{t('statsReviews')}</div>
              <div className="text-sm text-navy-deep/70">{t('statsReviewsLabel')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-24 md:pb-50 bg-gradient-to-b from-white to-sky-cyan/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-deep text-center mb-4">
            {tServices('title')}
          </h2>
          <p className="text-center text-navy-deep/70 mb-12 max-w-2xl mx-auto">
            From speeding tickets to DUIs, we defend all traffic violations in Texas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* DUI Card */}
            <Link href="/dui">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-monster-orange cursor-pointer h-full">
                <div className="w-14 h-14 bg-monster-orange/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-monster-orange" />
                </div>
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {tServices('dui.title')}
                </h3>
                <p className="text-navy-deep/70 mb-4">
                  {tServices('dui.description')}
                </p>
                <div className="text-monster-orange font-semibold">
                  Starting at $199 →
                </div>
              </div>
            </Link>

            {/* Traffic Tickets Card */}
            <Link href="/traffic-tickets">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-monster-orange cursor-pointer h-full">
                <div className="w-14 h-14 bg-electric-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Upload className="w-7 h-7 text-electric-blue" />
                </div>
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {tServices('traffic.title')}
                </h3>
                <p className="text-navy-deep/70 mb-4">
                  {tServices('traffic.description')}
                </p>
                <div className="text-monster-orange font-semibold">
                  Starting at $99 →
                </div>
              </div>
            </Link>

            {/* Other Offenses Card */}
            <Link href="/other-offenses">
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-monster-orange cursor-pointer h-full">
                <div className="w-14 h-14 bg-sunny-yellow/20 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-sunny-yellow" />
                </div>
                <h3 className="text-xl font-bold text-navy-deep mb-3">
                  {tServices('other.title')}
                </h3>
                <p className="text-navy-deep/70 mb-4">
                  {tServices('other.description')}
                </p>
                <div className="text-monster-orange font-semibold">
                  Starting at $149 →
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        {/* ADD PAGINAPRINCIPAL2.png STICK TO THE BOTTOM OF THE SECTION */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px]">
          <Image 
            src="/PAGINAPRINCIPAL2.png" 
            alt="Background Logo"
            width={300}
            height={150}
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              {tHowItWorks('title')}
            </h2>
            <p className="text-lg text-navy-deep/70">
              {tHowItWorks('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-monster-orange rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-deep text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">
                {tHowItWorks('step1.title')}
              </h3>
              <p className="text-navy-deep/70">
                {tHowItWorks('step1.description')}
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-electric-blue rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-deep text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">
                {tHowItWorks('step2.title')}
              </h3>
              <p className="text-navy-deep/70">
                {tHowItWorks('step2.description')}
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-sunny-yellow rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-navy-deep text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">
                {tHowItWorks('step3.title')}
              </h3>
              <p className="text-navy-deep/70">
                {tHowItWorks('step3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-cyan/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-4">
              {tTrust('title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`star-1-${i}`} className="w-5 h-5 text-sunny-yellow fill-sunny-yellow" />
                ))}
              </div>
              <p className="text-navy-deep mb-4 italic">&ldquo;{tTrust('testimonial1')}&rdquo;</p>
              <p className="text-sm text-navy-deep/60 font-semibold">— Michael R., Houston</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`star-2-${i}`} className="w-5 h-5 text-sunny-yellow fill-sunny-yellow" />
                ))}
              </div>
              <p className="text-navy-deep mb-4 italic">&ldquo;{tTrust('testimonial2')}&rdquo;</p>
              <p className="text-sm text-navy-deep/60 font-semibold">— David L., Dallas</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={`star-3-${i}`} className="w-5 h-5 text-sunny-yellow fill-sunny-yellow" />
                ))}
              </div>
              <p className="text-navy-deep mb-4 italic">&ldquo;{tTrust('testimonial3')}&rdquo;</p>
              <p className="text-sm text-navy-deep/60 font-semibold">— Carlos H., Laredo</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-monster-orange font-semibold hover:text-monster-orange-dark transition-colors"
            >
              {tCommon('viewAll')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-electric-blue to-electric-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/LogoVariacion1_Amarillo.png"
              alt="Monster Icon"
              width={300}
              height={200}
              className="animate-monster-float"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {tCta('title')}
          </h2>
          <p className="text-lg md:text-xl text-sky-cyan/90 mb-8 max-w-2xl mx-auto">
            {tCta('subtitle')}
          </p>
          <Link
            href="/upload"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-deep bg-sunny-yellow rounded-full shadow-lg hover:bg-sunny-yellow-light hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
          >
            {tCta('button')}
          </Link>
        </div>
      </section>
    </>
  );
}
