'use client';

import { useState, useEffect } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { customerSchema, ticketSchema, type CustomerFormData, type TicketFormData } from '@/lib/validations';
import { useTicketStore, useCustomer } from '@/store/tickets.store';
import { pricing } from '@/mocks/pricing';
import { TicketList } from '@/components/flow/TicketList';
import { PriceSummary } from '@/components/flow/PriceSummary';
import { Upload, Plus, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function UploadPage() {
  const router = useRouter();
  const [showTicketForm, setShowTicketForm] = useState(false);
  const customer = useCustomer();
  const { setCustomer, addTicket, ticketCount } = useTicketStore();

  // Customer Form
  const customerForm = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    mode: 'onBlur',
    defaultValues: customer || {
      fullName: '',
      idNumber: '',
      email: '',
      phone: '',
    },
  });

  // Ticket Form
  const ticketForm = useForm<TicketFormData>({
    resolver: zodResolver(ticketSchema),
    mode: 'onBlur',
    defaultValues: {
      category: undefined,
      ticketNumber: '',
      ticketFile: undefined,
      notes: '',
    },
  });

  // Auto-save customer data on blur
  useEffect(() => {
    const subscription = customerForm.watch((value) => {
      if (customerForm.formState.isValid && value.fullName && value.email) {
        setCustomer(value as CustomerFormData);
      }
    });
    return () => subscription.unsubscribe();
  }, [customerForm, setCustomer]);

  // Show ticket form once customer info is complete
  useEffect(() => {
    if (customer) {
      setShowTicketForm(true);
    }
  }, [customer]);

  const onCustomerSubmit = (data: CustomerFormData) => {
    setCustomer(data);
    setShowTicketForm(true);
  };

  const onTicketSubmit = (data: TicketFormData) => {
    const file = data.ticketFile[0];

    addTicket({
      type: data.category,
      description: `${pricing[data.category].label.en} - ${data.ticketNumber}`,
      ticketNumber: data.ticketNumber,
      file: {
        name: file.name,
        size: file.size,
        type: file.type,
      },
      notes: data.notes,
    });

    // Reset only ticket fields
    ticketForm.reset({
      category: undefined,
      ticketNumber: '',
      ticketFile: undefined,
      notes: '',
    });
  };

  const handleContinueToCheckout = () => {
    if (ticketCount() === 0) {
      alert('Please add at least one ticket to continue');
      return;
    }
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <Badge className="mb-4 bg-monster-orange/10 text-monster-orange">
                Step 1 of 2
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-navy-deep mb-2">
                Upload Your Tickets
              </h1>
              <p className="text-lg text-navy-deep/70">
                Add one or more tickets and we&apos;ll calculate your total. Get 15% off each additional ticket!
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <Image 
                src="/LogoVariacion2_Naranja.png"
                alt="Upload"
                width={100}
                height={100}
                className="animate-monster-float"
              />
              <Image 
                src="/LogoVariacion2_Azul.png"
                alt="Process"
                width={100}
                height={100}
                className="animate-monster-float" style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Information</CardTitle>
                <CardDescription>
                  We need this information to process your tickets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={customerForm.handleSubmit(onCustomerSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        {...customerForm.register('fullName')}
                      />
                      {customerForm.formState.errors.fullName && (
                        <p className="text-sm text-red-600">
                          {customerForm.formState.errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idNumber">
                        ID / Driver&apos;s License # <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="idNumber"
                        placeholder="DL123456"
                        {...customerForm.register('idNumber')}
                      />
                      {customerForm.formState.errors.idNumber && (
                        <p className="text-sm text-red-600">
                          {customerForm.formState.errors.idNumber.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        {...customerForm.register('email')}
                      />
                      {customerForm.formState.errors.email && (
                        <p className="text-sm text-red-600">
                          {customerForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        {...customerForm.register('phone')}
                      />
                      {customerForm.formState.errors.phone && (
                        <p className="text-sm text-red-600">
                          {customerForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {!customer && (
                    <Button type="submit" className="w-full bg-monster-orange hover:bg-monster-orange-dark">
                      Continue to Add Tickets
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Existing Tickets */}
            {ticketCount() > 0 && <TicketList />}

            {/* Add Ticket Form */}
            {showTicketForm && (
              <Card className="border-2 border-monster-orange/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Upload className="w-5 h-5 text-monster-orange" />
                        <CardTitle>Add a Ticket</CardTitle>
                      </div>
                      <CardDescription>
                        Upload your traffic ticket (PDF, PNG, or JPG)
                      </CardDescription>
                    </div>
                    <Image 
                      src="/LogoVariacion3_Amarillo.png"
                      alt="Ticket Upload"
                      width={60}
                      height={60}
                      className="hidden md:block"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={ticketForm.handleSubmit(onTicketSubmit)}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="category">
                        Ticket Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          ticketForm.setValue('category', value as 'traffic' | 'dui' | 'other')
                        }
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select ticket type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traffic">
                            Traffic Ticket - ${pricing.traffic.price}
                          </SelectItem>
                          <SelectItem value="dui">
                            DUI / DWI - ${pricing.dui.price}
                          </SelectItem>
                          <SelectItem value="other">
                            Other Criminal Traffic - ${pricing.other.price}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {ticketForm.formState.errors.category && (
                        <p className="text-sm text-red-600">
                          {ticketForm.formState.errors.category.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ticketNumber">
                        Ticket Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="ticketNumber"
                        placeholder="ABC123456"
                        {...ticketForm.register('ticketNumber')}
                      />
                      {ticketForm.formState.errors.ticketNumber && (
                        <p className="text-sm text-red-600">
                          {ticketForm.formState.errors.ticketNumber.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ticketFile">
                        Upload Ticket <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="ticketFile"
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg"
                        {...ticketForm.register('ticketFile')}
                      />
                      <p className="text-xs text-navy-deep/60">
                        Accepted: PDF, PNG, JPG (max 5MB)
                      </p>
                      {ticketForm.formState.errors.ticketFile && (
                        <p className="text-sm text-red-600">
                          {ticketForm.formState.errors.ticketFile.message as string}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any additional information about this ticket..."
                        rows={3}
                        {...ticketForm.register('notes')}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-electric-blue hover:bg-electric-blue-dark"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add This Ticket
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <PriceSummary />

            {/* Continue Button */}
            {ticketCount() > 0 && (
              <Button
                onClick={handleContinueToCheckout}
                size="lg"
                className="w-full mt-6 bg-monster-orange hover:bg-monster-orange-dark"
              >
                Continue to Checkout
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

