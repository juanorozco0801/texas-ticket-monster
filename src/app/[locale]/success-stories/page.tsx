import { useTranslations } from 'next-intl';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { successStories, getStoriesByCategory, getOutcomeLabel } from '@/mocks/successStories';
import type { TicketType } from '@/mocks/pricing';
import Image from 'next/image';

export default function SuccessStoriesPage() {
  const t = useTranslations('nav');

  const categories: Array<{ value: TicketType | 'all'; label: string }> = [
    { value: 'all', label: 'All Stories' },
    { value: 'traffic', label: 'Traffic Tickets' },
    { value: 'dui', label: 'DUI Cases' },
    { value: 'other', label: 'Other Offenses' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image 
                src="/SUCCESSSTORIES.png"
                alt="Success Stories"
                width={400}
                height={400}
                className="animate-monster-float"
              />
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <Badge className="mb-4 bg-green-500/10 text-green-700 hover:bg-green-500/20">
                Real Results
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
                Success Stories
              </h1>
              <p className="text-xl text-navy-deep/70">
                See how we&apos;ve helped thousands of Texans fight their tickets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section with Tabs Filter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="inline-flex">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <div className="flex justify-center mb-8">
                  <Image 
                    src="/ticketEater.png"
                    alt="Success Icon"
                    width={100}
                    height={100}
                    className="opacity-20"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getStoriesByCategory(cat.value).map((story) => (
                    <Card key={story.id} className="hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="capitalize">
                            {story.category}
                          </Badge>
                          <Badge className={
                            story.outcome === 'dismissed' ? 'bg-green-500' :
                            story.outcome === 'reduced' ? 'bg-blue-500' :
                            story.outcome === 'no-points' ? 'bg-yellow-500' :
                            'bg-purple-500'
                          }>
                            {getOutcomeLabel(story.outcome, 'en')}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{story.title.en}</CardTitle>
                        <CardDescription className="text-sm">
                          {story.originalCharge.en}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-sunny-yellow fill-sunny-yellow" />
                          ))}
                        </div>
                        <p className="text-sm text-navy-deep/80 italic mb-4">
                          &ldquo;{story.quote.en}&rdquo;
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-navy-deep">
                            {story.customerName}
                          </span>
                          <span className="text-navy-deep/60">{story.location}</span>
                        </div>
                        <div className="mt-3 pt-3 border-t">
                          <p className="text-sm font-semibold text-green-600">
                            Result: {story.result.en}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

