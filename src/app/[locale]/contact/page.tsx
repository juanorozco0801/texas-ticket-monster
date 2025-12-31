'use client';

import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-monster-orange/10 text-monster-orange hover:bg-monster-orange/20">
                {t('badge')}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                {t('title')}
              </h1>
              <p className="text-xl text-navy-deep/70">
                {t('subtitle')}
              </p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/CONTACTUS.png"
                alt="Contact Us"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('formTitle')}</CardTitle>
                  <CardDescription>
                    {t('formDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t('firstName')} {t('required')}</Label>
                        <Input id="firstName" required placeholder={t('placeholderFirstName')} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">{t('lastName')} {t('required')}</Label>
                        <Input id="lastName" required placeholder={t('placeholderLastName')} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('email')} {t('required')}</Label>
                      <Input id="email" type="email" required placeholder={t('placeholderEmail')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('phoneNumber')}</Label>
                      <Input id="phone" type="tel" placeholder={t('placeholderPhone')} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ticketType">{t('ticketType')} {t('required')}</Label>
                      <Select required>
                        <SelectTrigger id="ticketType">
                          <SelectValue placeholder={t('placeholderTicketType')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traffic">{t('selectTraffic')}</SelectItem>
                          <SelectItem value="dui">{t('selectDui')}</SelectItem>
                          <SelectItem value="other">{t('selectOther')}</SelectItem>
                          <SelectItem value="not-sure">{t('selectNotSure')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('message')} {t('required')}</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder={t('placeholderMessage')}
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-monster-orange hover:bg-monster-orange-dark"
                      size="lg"
                    >
                      {submitted ? t('messageSent') : t('sendMessage')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('contactInfo')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">{t('phone')}</p>
                      <a href="tel:1-888-898-4253" className="text-navy-deep/70 hover:text-monster-orange">
                        {tFooter('phone')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">{t('emailLabel')}</p>
                      <a href="mailto:help@texasticketmonster.com" className="text-navy-deep/70 hover:text-monster-orange">
                        {tFooter('email')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">{t('hours')}</p>
                      <p className="text-navy-deep/70">{tFooter('hours')}</p>
                      <p className="text-navy-deep/70 text-sm">{t('saturdayHours')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">{t('location')}</p>
                      <p className="text-navy-deep/70">
                        {t('address')}<br />
                        {t('city')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-sky-cyan/20 border-sky-cyan">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/ticketEater.png"
                      alt="Support"
                      width={80}
                      height={80}
                    />
                  </div>
                  <h3 className="font-semibold text-navy-deep mb-2">{t('quickResponseTitle')}</h3>
                  <p className="text-sm text-navy-deep/70">
                    {t('quickResponseText')}
                  </p>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-4">
                <Image 
                  src="/LogoVariacion2_Naranja.png"
                  alt="Monster Icon"
                  width={60}
                  height={60}
                />
                <Image 
                  src="/LogoVariacion2_Azul.png"
                  alt="Monster Icon"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

