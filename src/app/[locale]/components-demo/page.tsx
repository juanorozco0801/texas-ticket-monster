import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Textarea,
  Badge,
  Separator,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/components/ui';

export default function ComponentsShowcase() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-navy-deep mb-8">
        Shadcn/ui Components Showcase
      </h1>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <Separator />

      {/* Badges */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </section>

      <Separator />

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the card content area.</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Traffic Ticket</CardTitle>
              <CardDescription>Starting at $99</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Fast resolution for speeding and other violations.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DUI Defense</CardTitle>
              <CardDescription>Starting at $199</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expert defense for serious charges.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Form Elements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Elements</h2>
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>Get in touch with us</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ticket-type">Ticket Type</Label>
              <Select>
                <SelectTrigger id="ticket-type">
                  <SelectValue placeholder="Select ticket type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="traffic">Traffic Ticket</SelectItem>
                  <SelectItem value="dui">DUI/DWI</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your ticket..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Submit</Button>
          </CardFooter>
        </Card>
      </section>

      <Separator />

      {/* Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Tabs defaultValue="traffic" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="dui">DUI</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="traffic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Tickets</CardTitle>
                <CardDescription>$99 per ticket</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Handle speeding, red lights, and other traffic violations.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dui" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>DUI Defense</CardTitle>
                <CardDescription>$199 per case</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Expert defense for DUI and DWI charges.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="other" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Other Offenses</CardTitle>
                <CardDescription>$149 per case</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Reckless driving, suspended license, and more.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <Separator />

      {/* Accordion */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Accordion (FAQ)</h2>
        <Accordion type="single" collapsible className="max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>How much does it cost?</AccordionTrigger>
            <AccordionContent>
              Our pricing is transparent: $99 for traffic tickets, $199 for DUI cases, 
              and $149 for other criminal traffic offenses. Multi-ticket discount available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need to appear in court?</AccordionTrigger>
            <AccordionContent>
              No! That&apos;s the whole point. Our attorneys appear on your behalf so you can 
              continue with your life without taking time off work.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does it take?</AccordionTrigger>
            <AccordionContent>
              Most traffic tickets resolve in 2-6 weeks. DUI and criminal cases may take 
              2-4 months depending on the court schedule.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator />

      {/* Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Table</h2>
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>Pricing Table</CardTitle>
            <CardDescription>Our transparent pricing structure</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Violation Type</TableHead>
                  <TableHead>Base Price</TableHead>
                  <TableHead>Multi-Ticket Discount</TableHead>
                  <TableHead>Typical Outcome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Traffic Ticket</TableCell>
                  <TableCell>$99</TableCell>
                  <TableCell>15% off</TableCell>
                  <TableCell>Dismissed or Reduced</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">DUI/DWI</TableCell>
                  <TableCell>$199</TableCell>
                  <TableCell>15% off</TableCell>
                  <TableCell>Reduced Charges</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Criminal Traffic</TableCell>
                  <TableCell>$149</TableCell>
                  <TableCell>15% off</TableCell>
                  <TableCell>Minimized Penalties</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Dialog */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Dialog</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Your Ticket</DialogTitle>
              <DialogDescription>
                Upload a photo or PDF of your traffic ticket to get started.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="ticket-file">Ticket Image</Label>
                <Input id="ticket-file" type="file" accept="image/*,application/pdf" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticket-number">Ticket Number (Optional)</Label>
                <Input id="ticket-number" placeholder="ABC123456" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Upload Ticket</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  );
}

