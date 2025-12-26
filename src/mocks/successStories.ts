import { TicketType } from './pricing';

export interface SuccessStory {
  id: string;
  category: TicketType;
  outcome: 'dismissed' | 'reduced' | 'no-points' | 'minimized';
  title: {
    en: string;
    es: string;
  };
  quote: {
    en: string;
    es: string;
  };
  customerName: string;
  location: string;
  date: string;
  originalCharge: {
    en: string;
    es: string;
  };
  result: {
    en: string;
    es: string;
  };
}

export const successStories: SuccessStory[] = [
  {
    id: '1',
    category: 'traffic',
    outcome: 'dismissed',
    title: {
      en: 'Speeding Ticket Dismissed',
      es: 'Multa por Exceso de Velocidad Desestimada',
    },
    quote: {
      en: "I was going 20 over and thought I had no chance. Texas Ticket Monster got it completely dismissed! No points, no fine. Amazing service.",
      es: "Iba 20 mph de más y pensé que no tenía oportunidad. ¡Texas Ticket Monster lo desestimó por completo! Sin puntos, sin multa. Servicio increíble.",
    },
    customerName: 'Michael R.',
    location: 'Houston, TX',
    date: '2024-11',
    originalCharge: {
      en: 'Speeding 20+ mph over limit',
      es: 'Exceso de velocidad 20+ mph',
    },
    result: {
      en: 'Case Dismissed',
      es: 'Caso Desestimado',
    },
  },
  {
    id: '2',
    category: 'dui',
    outcome: 'reduced',
    title: {
      en: 'DUI Reduced to Minor Offense',
      es: 'DUI Reducido a Ofensa Menor',
    },
    quote: {
      en: "I was terrified about losing my license and job. The team fought hard and got my DUI reduced. I can still drive to work. Forever grateful!",
      es: "Estaba aterrado de perder mi licencia y trabajo. El equipo luchó duro y redujeron mi DUI. Aún puedo manejar al trabajo. ¡Eternamente agradecido!",
    },
    customerName: 'David L.',
    location: 'Dallas, TX',
    date: '2024-10',
    originalCharge: {
      en: 'DUI - First Offense',
      es: 'DUI - Primera Ofensa',
    },
    result: {
      en: 'Reduced to Obstruction of Highway',
      es: 'Reducido a Obstrucción de Carretera',
    },
  },
  {
    id: '3',
    category: 'traffic',
    outcome: 'no-points',
    title: {
      en: 'Red Light Camera - No Points',
      es: 'Cámara de Luz Roja - Sin Puntos',
    },
    quote: {
      en: "Got a red light camera ticket that would have added points to my license. They handled everything and I got no points. Worth every penny!",
      es: "Recibí una multa de cámara de luz roja que habría agregado puntos a mi licencia. Manejaron todo y no recibí puntos. ¡Valió cada centavo!",
    },
    customerName: 'Sarah M.',
    location: 'San Antonio, TX',
    date: '2024-09',
    originalCharge: {
      en: 'Running Red Light',
      es: 'Pasarse Luz Roja',
    },
    result: {
      en: 'No Points on License',
      es: 'Sin Puntos en Licencia',
    },
  },
  {
    id: '4',
    category: 'other',
    outcome: 'dismissed',
    title: {
      en: 'Reckless Driving Dismissed',
      es: 'Conducción Temeraria Desestimada',
    },
    quote: {
      en: "Was charged with reckless driving after an accident. The monster team found issues with the police report and got it dismissed!",
      es: "Fui acusado de conducción temeraria después de un accidente. ¡El equipo monstruo encontró problemas con el reporte policial y lo desestimaron!",
    },
    customerName: 'James K.',
    location: 'Austin, TX',
    date: '2024-08',
    originalCharge: {
      en: 'Reckless Driving',
      es: 'Conducción Temeraria',
    },
    result: {
      en: 'Case Dismissed',
      es: 'Caso Desestimado',
    },
  },
  {
    id: '5',
    category: 'traffic',
    outcome: 'dismissed',
    title: {
      en: 'No Insurance Ticket Gone',
      es: 'Multa Sin Seguro Eliminada',
    },
    quote: {
      en: "I had insurance but forgot my card. They proved I was covered and the ticket was dismissed. So easy, I didn't even go to court!",
      es: "Tenía seguro pero olvidé mi tarjeta. Probaron que estaba cubierto y la multa fue desestimada. ¡Tan fácil, ni siquiera fui a la corte!",
    },
    customerName: 'Maria G.',
    location: 'El Paso, TX',
    date: '2024-07',
    originalCharge: {
      en: 'Failure to Maintain Insurance',
      es: 'No Mantener Seguro',
    },
    result: {
      en: 'Case Dismissed',
      es: 'Caso Desestimado',
    },
  },
  {
    id: '6',
    category: 'dui',
    outcome: 'minimized',
    title: {
      en: 'Second DUI - License Saved',
      es: 'Segundo DUI - Licencia Salvada',
    },
    quote: {
      en: "Facing my second DUI, I thought I'd lose my license for sure. They negotiated hard and I kept my driving privileges. Life savers!",
      es: "Enfrentando mi segundo DUI, pensé que perdería mi licencia seguro. Negociaron duro y mantuve mis privilegios. ¡Salvavidas!",
    },
    customerName: 'Robert T.',
    location: 'Fort Worth, TX',
    date: '2024-06',
    originalCharge: {
      en: 'DUI - Second Offense',
      es: 'DUI - Segunda Ofensa',
    },
    result: {
      en: 'Restricted License, No Jail Time',
      es: 'Licencia Restringida, Sin Cárcel',
    },
  },
  {
    id: '7',
    category: 'other',
    outcome: 'reduced',
    title: {
      en: 'Hit and Run Reduced',
      es: 'Fuga de Accidente Reducida',
    },
    quote: {
      en: "I panicked after a minor fender bender and left. They got it reduced to a simple traffic violation. Thank you for giving me a second chance!",
      es: "Entré en pánico después de un choque menor y me fui. Lo redujeron a una simple infracción. ¡Gracias por darme una segunda oportunidad!",
    },
    customerName: 'Jennifer P.',
    location: 'Plano, TX',
    date: '2024-05',
    originalCharge: {
      en: 'Leaving Scene of Accident',
      es: 'Abandonar Escena de Accidente',
    },
    result: {
      en: 'Reduced to Failure to Report',
      es: 'Reducido a No Reportar',
    },
  },
  {
    id: '8',
    category: 'traffic',
    outcome: 'dismissed',
    title: {
      en: 'Multiple Tickets - All Dismissed',
      es: 'Múltiples Multas - Todas Desestimadas',
    },
    quote: {
      en: "Had 3 tickets from one bad day. Uploaded all of them, paid one fair price, and they got ALL THREE dismissed. Unbelievable!",
      es: "Tenía 3 multas de un mal día. Subí todas, pagué un precio justo, ¡y desestimaron LAS TRES! ¡Increíble!",
    },
    customerName: 'Carlos H.',
    location: 'Laredo, TX',
    date: '2024-04',
    originalCharge: {
      en: 'Speeding, Improper Lane Change, Expired Registration',
      es: 'Exceso de Velocidad, Cambio de Carril, Registro Vencido',
    },
    result: {
      en: 'All 3 Cases Dismissed',
      es: 'Los 3 Casos Desestimados',
    },
  },
  {
    id: '9',
    category: 'other',
    outcome: 'dismissed',
    title: {
      en: 'Suspended License Charge Dropped',
      es: 'Cargo de Licencia Suspendida Retirado',
    },
    quote: {
      en: "Didn't know my license was suspended due to unpaid ticket. They sorted it all out and charges were dropped. Professional and fast!",
      es: "No sabía que mi licencia estaba suspendida por multa impaga. Lo resolvieron todo y retiraron los cargos. ¡Profesional y rápido!",
    },
    customerName: 'Anthony W.',
    location: 'Corpus Christi, TX',
    date: '2024-03',
    originalCharge: {
      en: 'Driving with Suspended License',
      es: 'Conducir con Licencia Suspendida',
    },
    result: {
      en: 'Charges Dropped',
      es: 'Cargos Retirados',
    },
  },
  {
    id: '10',
    category: 'traffic',
    outcome: 'no-points',
    title: {
      en: 'School Zone Speeding - No Points',
      es: 'Exceso en Zona Escolar - Sin Puntos',
    },
    quote: {
      en: "School zone tickets are serious! They got it handled so fast and no points were added. My insurance stayed the same too!",
      es: "¡Las multas de zona escolar son serias! Lo manejaron rápido y no agregaron puntos. ¡Mi seguro se mantuvo igual!",
    },
    customerName: 'Lisa N.',
    location: 'Arlington, TX',
    date: '2024-02',
    originalCharge: {
      en: 'Speeding in School Zone',
      es: 'Exceso en Zona Escolar',
    },
    result: {
      en: 'Deferred Adjudication, No Points',
      es: 'Adjudicación Diferida, Sin Puntos',
    },
  },
];

// Filter stories by category
export function getStoriesByCategory(category: TicketType | 'all'): SuccessStory[] {
  if (category === 'all') return successStories;
  return successStories.filter((story) => story.category === category);
}

// Get outcome badge color
export function getOutcomeColor(outcome: SuccessStory['outcome']): string {
  const colors = {
    dismissed: 'bg-green-100 text-green-800',
    reduced: 'bg-blue-100 text-blue-800',
    'no-points': 'bg-yellow-100 text-yellow-800',
    minimized: 'bg-purple-100 text-purple-800',
  };
  return colors[outcome];
}

// Get outcome label
export function getOutcomeLabel(outcome: SuccessStory['outcome'], locale: 'en' | 'es'): string {
  const labels = {
    dismissed: { en: 'Dismissed', es: 'Desestimado' },
    reduced: { en: 'Reduced', es: 'Reducido' },
    'no-points': { en: 'No Points', es: 'Sin Puntos' },
    minimized: { en: 'Minimized', es: 'Minimizado' },
  };
  return labels[outcome][locale];
}

