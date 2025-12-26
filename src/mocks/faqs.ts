export interface FAQ {
  id: string;
  question: {
    en: string;
    es: string;
  };
  answer: {
    en: string;
    es: string;
  };
  category: 'pricing' | 'process' | 'legal' | 'general';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'pricing',
    question: {
      en: 'How much does it cost?',
      es: '¿Cuánto cuesta?',
    },
    answer: {
      en: 'Our pricing is simple and transparent. Traffic tickets start at $99, DUI/DWI cases at $199, and other criminal traffic offenses at $149. If you have multiple tickets, you get 15% off each additional ticket. No hidden fees, no surprises.',
      es: 'Nuestros precios son simples y transparentes. Las multas de tráfico empiezan en $99, casos de DUI/DWI en $199, y otros delitos de tráfico en $149. Si tienes múltiples multas, obtienes 15% de descuento en cada multa adicional. Sin cargos ocultos, sin sorpresas.',
    },
  },
  {
    id: '2',
    category: 'process',
    question: {
      en: 'Do I need to appear in court?',
      es: '¿Necesito ir a la corte?',
    },
    answer: {
      en: "In most cases, no! That's the whole point of Texas Ticket Monster. Our attorneys appear on your behalf so you can go about your life. We'll keep you informed every step of the way without you having to take time off work or wait in court.",
      es: '¡En la mayoría de casos, no! Ese es el punto de Texas Ticket Monster. Nuestros abogados aparecen en tu nombre para que puedas seguir con tu vida. Te mantendremos informado en cada paso sin que tengas que faltar al trabajo o esperar en la corte.',
    },
  },
  {
    id: '3',
    category: 'process',
    question: {
      en: 'How long does the process take?',
      es: '¿Cuánto tiempo toma el proceso?',
    },
    answer: {
      en: 'It depends on the court and type of violation. Simple traffic tickets typically resolve in 2-6 weeks. DUI and criminal traffic cases may take 2-4 months. We work to resolve your case as quickly as possible while getting the best outcome.',
      es: 'Depende de la corte y tipo de violación. Multas de tráfico simples típicamente se resuelven en 2-6 semanas. Casos de DUI y tráfico criminal pueden tomar 2-4 meses. Trabajamos para resolver tu caso lo más rápido posible mientras obtenemos el mejor resultado.',
    },
  },
  {
    id: '4',
    category: 'general',
    question: {
      en: 'What if I live outside Texas?',
      es: '¿Qué pasa si vivo fuera de Texas?',
    },
    answer: {
      en: "No problem! If you got a ticket in Texas but live elsewhere, we can still help. You won't need to travel back to Texas for court. Just upload your ticket, and we'll handle everything remotely.",
      es: '¡No hay problema! Si recibiste una multa en Texas pero vives en otro lugar, aún podemos ayudarte. No necesitarás viajar de regreso a Texas para la corte. Solo sube tu multa, y nosotros manejamos todo remotamente.',
    },
  },
  {
    id: '5',
    category: 'process',
    question: {
      en: 'Can you handle multiple tickets at once?',
      es: '¿Pueden manejar múltiples multas a la vez?',
    },
    answer: {
      en: 'Absolutely! In fact, we encourage it. Upload all your tickets at once and save 15% on each additional ticket. Our team can handle multiple cases simultaneously, whether they\'re in the same court or different jurisdictions.',
      es: '¡Absolutamente! De hecho, lo recomendamos. Sube todas tus multas a la vez y ahorra 15% en cada multa adicional. Nuestro equipo puede manejar múltiples casos simultáneamente, ya sea en la misma corte o diferentes jurisdicciones.',
    },
  },
  {
    id: '6',
    category: 'legal',
    question: {
      en: "What's your success rate?",
      es: '¿Cuál es su tasa de éxito?',
    },
    answer: {
      en: "We have a 95% success rate in getting tickets dismissed or reduced. Success means different things for different cases - it could be a complete dismissal, reduced charges, no points on your license, or minimized fines. We fight for the best possible outcome in every case.",
      es: 'Tenemos una tasa de éxito del 95% en desestimar o reducir multas. El éxito significa diferentes cosas para diferentes casos - puede ser una desestimación completa, cargos reducidos, sin puntos en tu licencia, o multas minimizadas. Luchamos por el mejor resultado posible en cada caso.',
    },
  },
  {
    id: '7',
    category: 'pricing',
    question: {
      en: 'Do you offer payment plans?',
      es: '¿Ofrecen planes de pago?',
    },
    answer: {
      en: 'Currently, we require full payment upfront to begin working on your case. However, our per-ticket pricing is designed to be affordable. We accept all major credit cards, debit cards, and digital payment methods.',
      es: 'Actualmente, requerimos pago completo por adelantado para comenzar a trabajar en tu caso. Sin embargo, nuestros precios por multa están diseñados para ser accesibles. Aceptamos todas las tarjetas de crédito principales, tarjetas de débito y métodos de pago digitales.',
    },
  },
  {
    id: '8',
    category: 'legal',
    question: {
      en: 'What happens if I lose my case?',
      es: '¿Qué pasa si pierdo mi caso?',
    },
    answer: {
      en: "While we have a high success rate, not every case can be won. If your case isn't successful, you'll be responsible for paying the original fine. We always discuss realistic expectations upfront and fight hard for every case we take on.",
      es: 'Aunque tenemos una alta tasa de éxito, no todos los casos se pueden ganar. Si tu caso no tiene éxito, serás responsable de pagar la multa original. Siempre discutimos expectativas realistas por adelantado y luchamos duro por cada caso que tomamos.',
    },
  },
  {
    id: '9',
    category: 'process',
    question: {
      en: 'How do I know my case status?',
      es: '¿Cómo sé el estado de mi caso?',
    },
    answer: {
      en: "We believe in complete transparency. After you submit your ticket, you'll receive email updates at every major milestone. You can also contact us anytime for a status update. No more wondering what's happening with your case.",
      es: 'Creemos en la transparencia completa. Después de enviar tu multa, recibirás actualizaciones por email en cada hito importante. También puedes contactarnos en cualquier momento para una actualización. No más preguntándote qué pasa con tu caso.',
    },
  },
  {
    id: '10',
    category: 'general',
    question: {
      en: 'Is my information secure?',
      es: '¿Mi información está segura?',
    },
    answer: {
      en: 'Absolutely. We use bank-level encryption to protect your personal information and ticket details. Your data is never shared with third parties except as required to handle your case (like court filings). Privacy is a top priority.',
      es: 'Absolutamente. Usamos encriptación de nivel bancario para proteger tu información personal y detalles de multas. Tus datos nunca se comparten con terceros excepto cuando es necesario para manejar tu caso (como documentos de la corte). La privacidad es prioridad máxima.',
    },
  },
  {
    id: '11',
    category: 'legal',
    question: {
      en: 'What types of tickets can you handle?',
      es: '¿Qué tipos de multas pueden manejar?',
    },
    answer: {
      en: 'We handle virtually all Texas traffic violations including speeding, red lights, stop signs, DUI/DWI, reckless driving, driving with suspended license, no insurance, expired registration, and more. If you got a ticket in Texas, we can probably help.',
      es: 'Manejamos virtualmente todas las violaciones de tráfico de Texas incluyendo exceso de velocidad, luces rojas, señales de alto, DUI/DWI, conducción temeraria, conducir con licencia suspendida, sin seguro, registro vencido, y más. Si recibiste una multa en Texas, probablemente podemos ayudar.',
    },
  },
  {
    id: '12',
    category: 'general',
    question: {
      en: 'Why choose Texas Ticket Monster?',
      es: '¿Por qué elegir Texas Ticket Monster?',
    },
    answer: {
      en: "We're Texas-focused, which means we know the local courts and laws inside out. Our process is 100% online - upload your ticket, pay, and we handle the rest. No office visits, no court appearances for you. Plus, our friendly monster is always on your side!",
      es: 'Nos enfocamos en Texas, lo que significa que conocemos las cortes y leyes locales al derecho y al revés. Nuestro proceso es 100% en línea - sube tu multa, paga, y nosotros hacemos el resto. Sin visitas a oficinas, sin ir a la corte. ¡Además, nuestro monstruo amigable siempre está de tu lado!',
    },
  },
];

// Filter FAQs by category
export function getFAQsByCategory(category: FAQ['category'] | 'all'): FAQ[] {
  if (category === 'all') return faqs;
  return faqs.filter((faq) => faq.category === category);
}

// Get category label
export function getCategoryLabel(category: FAQ['category'], locale: 'en' | 'es'): string {
  const labels = {
    pricing: { en: 'Pricing', es: 'Precios' },
    process: { en: 'Process', es: 'Proceso' },
    legal: { en: 'Legal', es: 'Legal' },
    general: { en: 'General', es: 'General' },
  };
  return labels[category][locale];
}

