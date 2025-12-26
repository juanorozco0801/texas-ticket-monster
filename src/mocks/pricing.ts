export type TicketType = 'traffic' | 'dui' | 'other';

export interface PricingTier {
  type: TicketType;
  price: number;
  label: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  examples: {
    en: string[];
    es: string[];
  };
}

export const pricing: Record<TicketType, PricingTier> = {
  traffic: {
    type: 'traffic',
    price: 99,
    label: {
      en: 'Traffic Ticket',
      es: 'Multa de Tráfico',
    },
    description: {
      en: 'Speeding, red lights, stop signs, and more',
      es: 'Exceso de velocidad, semáforos, señales de alto y más',
    },
    examples: {
      en: [
        'Speeding (1-25+ mph over)',
        'Running red light',
        'Running stop sign',
        'Failure to yield',
        'Improper lane change',
        'Expired registration',
        'Expired inspection',
        'No insurance',
        'Failure to signal',
        'Following too closely',
      ],
      es: [
        'Exceso de velocidad (1-25+ mph)',
        'Pasarse luz roja',
        'Pasarse señal de alto',
        'No ceder el paso',
        'Cambio de carril indebido',
        'Registro vencido',
        'Inspección vencida',
        'Sin seguro',
        'No señalizar',
        'Seguir muy de cerca',
      ],
    },
  },
  dui: {
    type: 'dui',
    price: 199,
    label: {
      en: 'DUI / DWI',
      es: 'DUI / DWI',
    },
    description: {
      en: 'Driving under the influence defense',
      es: 'Defensa por conducir bajo la influencia',
    },
    examples: {
      en: [
        'First-time DUI/DWI',
        'DUI with accident',
        'Under 21 DUI',
        'Commercial DUI',
        'Repeat DUI offense',
        'DUI with injury',
        'Refusal to submit to test',
      ],
      es: [
        'Primera ofensa DUI/DWI',
        'DUI con accidente',
        'DUI menor de 21',
        'DUI comercial',
        'DUI reincidente',
        'DUI con lesiones',
        'Negarse a prueba de alcohol',
      ],
    },
  },
  other: {
    type: 'other',
    price: 149,
    label: {
      en: 'Other Criminal Traffic',
      es: 'Otros Delitos de Tráfico',
    },
    description: {
      en: 'Reckless driving, suspended license, and more serious offenses',
      es: 'Conducción temeraria, licencia suspendida y otras ofensas graves',
    },
    examples: {
      en: [
        'Reckless driving',
        'Driving with suspended license',
        'Hit and run',
        'Racing / Exhibition of speed',
        'Evading police',
        'Driving without license',
        'Vehicular assault',
      ],
      es: [
        'Conducción temeraria',
        'Conducir con licencia suspendida',
        'Fuga de accidente',
        'Carreras / Exhibición de velocidad',
        'Evadir a la policía',
        'Conducir sin licencia',
        'Asalto vehicular',
      ],
    },
  },
};

// Multi-ticket discount
export const multiTicketDiscount = {
  percentage: 15,
  minTickets: 2,
  label: {
    en: '15% off each additional ticket',
    es: '15% de descuento en cada ticket adicional',
  },
};

// Helper function to calculate total price
export function calculateTotalPrice(tickets: { type: TicketType }[]): number {
  if (tickets.length === 0) return 0;

  const sortedByPrice = [...tickets].sort(
    (a, b) => pricing[b.type].price - pricing[a.type].price
  );

  return sortedByPrice.reduce((total, ticket, index) => {
    const basePrice = pricing[ticket.type].price;
    // First ticket at full price, rest get discount
    if (index === 0) {
      return total + basePrice;
    }
    return total + basePrice * (1 - multiTicketDiscount.percentage / 100);
  }, 0);
}

// Get price for a single ticket type
export function getTicketPrice(type: TicketType): number {
  return pricing[type].price;
}

