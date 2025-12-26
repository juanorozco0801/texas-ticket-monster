import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketType, pricing, multiTicketDiscount } from '@/mocks/pricing';

// Customer information
export interface Customer {
  fullName: string;
  idNumber: string;
  email: string;
  phone: string;
}

// File metadata (not storing actual file, just metadata)
export interface FileMetadata {
  name: string;
  size: number;
  type: string;
}

// Individual ticket
export interface Ticket {
  id: string;
  type: TicketType;
  description: string;
  ticketNumber?: string;
  file?: FileMetadata;
  notes?: string;
  violationDate?: string;
  courtDate?: string;
  location?: string;
  imageUrl?: string;
  createdAt: Date;
}

// Locale type
export type Locale = 'en' | 'es';

// Store state
interface TicketState {
  customer: Customer | null;
  tickets: Ticket[];
  locale: Locale;
}

// Store actions
interface TicketActions {
  // Customer actions
  setCustomer: (customer: Customer) => void;
  updateCustomer: (updates: Partial<Customer>) => void;
  clearCustomer: () => void;

  // Ticket actions
  addTicket: (ticket: Omit<Ticket, 'id' | 'createdAt'>) => void;
  updateTicket: (id: string, updates: Partial<Omit<Ticket, 'id' | 'createdAt'>>) => void;
  removeTicket: (id: string) => void;
  clearTickets: () => void;

  // Locale actions
  setLocale: (locale: Locale) => void;

  // Clear all
  clearAll: () => void;

  // Computed values
  total: () => number;
  ticketCount: () => number;
  getTicketById: (id: string) => Ticket | undefined;
}

// Combined store type
type TicketStore = TicketState & TicketActions;

// Generate unique ID
const generateId = (): string => {
  return `ticket_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Initial state
const initialState: TicketState = {
  customer: null,
  tickets: [],
  locale: 'en',
};

// Create the store with persistence
export const useTicketStore = create<TicketStore>()(
  persist(
    (set, get) => ({
      // Initial state
      ...initialState,

      // Customer actions
      setCustomer: (customer: Customer) => {
        set({ customer });
      },

      updateCustomer: (updates: Partial<Customer>) => {
        const current = get().customer;
        if (current) {
          set({ customer: { ...current, ...updates } });
        }
      },

      clearCustomer: () => {
        set({ customer: null });
      },

      // Ticket actions
      addTicket: (ticketData: Omit<Ticket, 'id' | 'createdAt'>) => {
        const newTicket: Ticket = {
          ...ticketData,
          id: generateId(),
          createdAt: new Date(),
        };
        set((state) => ({
          tickets: [...state.tickets, newTicket],
        }));
      },

      updateTicket: (id: string, updates: Partial<Omit<Ticket, 'id' | 'createdAt'>>) => {
        set((state) => ({
          tickets: state.tickets.map((ticket) =>
            ticket.id === id ? { ...ticket, ...updates } : ticket
          ),
        }));
      },

      removeTicket: (id: string) => {
        set((state) => ({
          tickets: state.tickets.filter((ticket) => ticket.id !== id),
        }));
      },

      clearTickets: () => {
        set({ tickets: [] });
      },

      // Locale actions
      setLocale: (locale: Locale) => {
        set({ locale });
      },

      // Clear all
      clearAll: () => {
        set(initialState);
      },

      // Computed: Calculate total price with multi-ticket discount
      total: () => {
        const { tickets } = get();
        if (tickets.length === 0) return 0;

        // Sort by price descending so highest priced ticket pays full price
        const sortedTickets = [...tickets].sort(
          (a, b) => pricing[b.type].price - pricing[a.type].price
        );

        return sortedTickets.reduce((total, ticket, index) => {
          const basePrice = pricing[ticket.type].price;
          // First ticket at full price, rest get discount
          if (index === 0) {
            return total + basePrice;
          }
          const discountedPrice = basePrice * (1 - multiTicketDiscount.percentage / 100);
          return total + discountedPrice;
        }, 0);
      },

      // Computed: Get ticket count
      ticketCount: () => {
        return get().tickets.length;
      },

      // Computed: Get ticket by ID
      getTicketById: (id: string) => {
        return get().tickets.find((ticket) => ticket.id === id);
      },
    }),
    {
      name: 'texas-ticket-monster-storage',
      // Only persist these fields
      partialize: (state) => ({
        customer: state.customer,
        tickets: state.tickets,
        locale: state.locale,
      }),
    }
  )
);

// Selector hooks for better performance
export const useCustomer = () => useTicketStore((state) => state.customer);
export const useTickets = () => useTicketStore((state) => state.tickets);
export const useLocale = () => useTicketStore((state) => state.locale);
export const useTicketCount = () => useTicketStore((state) => state.tickets.length);

// Helper to get price breakdown
export interface PriceBreakdown {
  tickets: {
    id: string;
    type: TicketType;
    description: string;
    basePrice: number;
    finalPrice: number;
    hasDiscount: boolean;
  }[];
  subtotal: number;
  totalDiscount: number;
  total: number;
}

export const usePriceBreakdown = (): PriceBreakdown => {
  const tickets = useTicketStore((state) => state.tickets);

  if (tickets.length === 0) {
    return {
      tickets: [],
      subtotal: 0,
      totalDiscount: 0,
      total: 0,
    };
  }

  // Sort by price descending
  const sortedTickets = [...tickets].sort(
    (a, b) => pricing[b.type].price - pricing[a.type].price
  );

  const breakdownTickets = sortedTickets.map((ticket, index) => {
    const basePrice = pricing[ticket.type].price;
    const hasDiscount = index > 0;
    const finalPrice = hasDiscount
      ? basePrice * (1 - multiTicketDiscount.percentage / 100)
      : basePrice;

    return {
      id: ticket.id,
      type: ticket.type,
      description: ticket.description,
      basePrice,
      finalPrice,
      hasDiscount,
    };
  });

  const subtotal = breakdownTickets.reduce((sum, t) => sum + t.basePrice, 0);
  const total = breakdownTickets.reduce((sum, t) => sum + t.finalPrice, 0);

  return {
    tickets: breakdownTickets,
    subtotal,
    totalDiscount: subtotal - total,
    total,
  };
};

