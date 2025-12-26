import { z } from 'zod';

// Customer Schema
export const customerSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  idNumber: z.string().min(3, 'ID number must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
});

export type CustomerFormData = z.infer<typeof customerSchema>;

// Ticket Schema
export const ticketSchema = z.object({
  category: z.enum(['traffic', 'dui', 'other'], {
    required_error: 'Please select a ticket type',
  }),
  ticketNumber: z.string().min(3, 'Ticket number must be at least 3 characters'),
  ticketFile: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, 'Please upload a ticket file')
    .refine(
      (files) => files?.[0]?.size <= 5000000,
      'File size must be less than 5MB'
    )
    .refine(
      (files) =>
        ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(
          files?.[0]?.type
        ),
      'Only PDF, PNG, and JPG files are accepted'
    ),
  notes: z.string().optional(),
});

export type TicketFormData = z.infer<typeof ticketSchema>;

