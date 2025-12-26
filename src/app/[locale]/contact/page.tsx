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

export default function ContactPage() {
  const t = useTranslations('footer');
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
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-monster-orange/10 text-monster-orange hover:bg-monster-orange/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-navy-deep/70 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help you fight your ticket
          </p>
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
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ticketType">Ticket Type *</Label>
                      <Select required>
                        <SelectTrigger id="ticketType">
                          <SelectValue placeholder="Select ticket type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traffic">Traffic Ticket</SelectItem>
                          <SelectItem value="dui">DUI / DWI</SelectItem>
                          <SelectItem value="other">Other Criminal Traffic</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        placeholder="Tell us about your ticket and how we can help..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-monster-orange hover:bg-monster-orange-dark"
                      size="lg"
                    >
                      {submitted ? 'Message Sent! ✓' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">Phone</p>
                      <a href="tel:1-888-898-4253" className="text-navy-deep/70 hover:text-monster-orange">
                        {t('phone')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">Email</p>
                      <a href="mailto:help@texasticketmonster.com" className="text-navy-deep/70 hover:text-monster-orange">
                        {t('email')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">Hours</p>
                      <p className="text-navy-deep/70">{t('hours')}</p>
                      <p className="text-navy-deep/70 text-sm">Saturday: 9am-2pm CST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-monster-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-navy-deep">Location</p>
                      <p className="text-navy-deep/70">
                        123 Main Street<br />
                        Houston, TX 77001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-sky-cyan/20 border-sky-cyan">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-navy-deep mb-2">Quick Response</h3>
                  <p className="text-sm text-navy-deep/70">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

