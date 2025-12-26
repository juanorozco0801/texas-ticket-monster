import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { faqs, getFAQsByCategory, getCategoryLabel } from '@/mocks/faqs';
import type { FAQ } from '@/mocks/faqs';

export default function FAQPage() {
  const categories: FAQ['category'][] = ['pricing', 'process', 'legal', 'general'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20">
            Frequently Asked Questions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-deep mb-6">
            Got Questions? We&apos;ve Got Answers
          </h1>
          <p className="text-xl text-navy-deep/70 max-w-2xl mx-auto">
            Everything you need to know about fighting your Texas ticket
          </p>
        </div>
      </section>

      {/* FAQ Section with Category Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="capitalize">
                  {getCategoryLabel(cat, 'en')}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <Card>
                <CardHeader>
                  <CardTitle>All Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="capitalize">
                              {faq.category}
                            </Badge>
                            <span>{faq.question.en}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-navy-deep/80 leading-relaxed">
                          {faq.answer.en}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat}>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{getCategoryLabel(cat, 'en')} Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {getFAQsByCategory(cat).map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="text-left">
                            {faq.question.en}
                          </AccordionTrigger>
                          <AccordionContent className="text-navy-deep/80 leading-relaxed">
                            {faq.answer.en}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

