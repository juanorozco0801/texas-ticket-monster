import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Hr,
} from '@react-email/components';

interface TicketConfirmationEmailProps {
  customerName: string;
  caseId: string;
  tickets: Array<{
    description: string;
    finalPrice: number;
  }>;
  total: number;
  locale?: 'en' | 'es';
}

// Translations
const translations = {
  en: {
    preview: 'Payment Confirmed - Case {caseId} - Texas Ticket Monster',
    headerTitle: 'Texas Ticket Monster',
    headerSubtitle: 'Payment Confirmed! 🎉',
    greeting: 'Thank you, {customerName}!',
    paymentSuccess: 'Your payment has been successfully processed. Here are your case details:',
    caseIdLabel: 'Your Case ID',
    orderSummary: 'Order Summary',
    totalPaid: 'Total Paid',
    whatNext: 'What Happens Next?',
    step1Title: '1. Review (24-48 hours)',
    step1Desc: 'Our legal team will review your ticket(s) and case details.',
    step2Title: '2. Attorney Assignment',
    step2Desc: 'An experienced Texas traffic attorney will be assigned to your case.',
    step3Title: '3. Court Representation',
    step3Desc: 'Your attorney will handle all court appearances and negotiations.',
    step4Title: '4. Resolution',
    step4Desc: "We'll keep you updated throughout the process and notify you of the final outcome.",
    supportLabel: 'Need help?',
    supportEmail: 'Contact us at support@texasticketmonster.com',
    footerCopyright: '© {year} Texas Ticket Monster. All rights reserved.',
  },
  es: {
    preview: 'Pago Confirmado - Caso {caseId} - Texas Ticket Monster',
    headerTitle: 'Texas Ticket Monster',
    headerSubtitle: '¡Pago Confirmado! 🎉',
    greeting: '¡Gracias, {customerName}!',
    paymentSuccess: 'Tu pago ha sido procesado exitosamente. Aquí están los detalles de tu caso:',
    caseIdLabel: 'Tu ID de Caso',
    orderSummary: 'Resumen del Pedido',
    totalPaid: 'Total Pagado',
    whatNext: '¿Qué Sigue?',
    step1Title: '1. Revisión (24-48 horas)',
    step1Desc: 'Nuestro equipo legal revisará tu(s) multa(s) y detalles del caso.',
    step2Title: '2. Asignación de Abogado',
    step2Desc: 'Un abogado experimentado de tráfico de Texas será asignado a tu caso.',
    step3Title: '3. Representación en Corte',
    step3Desc: 'Tu abogado manejará todas las apariciones en corte y negociaciones.',
    step4Title: '4. Resolución',
    step4Desc: 'Te mantendremos actualizado durante el proceso y te notificaremos del resultado final.',
    supportLabel: '¿Necesitas ayuda?',
    supportEmail: 'Contáctanos en support@texasticketmonster.com',
    footerCopyright: '© {year} Texas Ticket Monster. Todos los derechos reservados.',
  },
};

export const TicketConfirmationEmail: React.FC<TicketConfirmationEmailProps> = ({
  customerName,
  caseId,
  tickets,
  total,
  locale = 'en',
}) => {
  const currentYear = new Date().getFullYear();
  const t = translations[locale];

  return (
    <Html>
      <Head />
      <Preview>{t.preview.replace('{caseId}', caseId)}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={headerTitle}>{t.headerTitle}</Heading>
            <Text style={headerSubtitle}>{t.headerSubtitle}</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={greeting}>{t.greeting.replace('{customerName}', customerName)}</Heading>
            
            <Text style={paragraph}>
              {t.paymentSuccess}
            </Text>

            {/* Case ID Badge */}
            <Section style={caseIdSection}>
              <Text style={caseIdLabel}>{t.caseIdLabel}</Text>
              <Text style={caseIdValue}>{caseId}</Text>
            </Section>

            {/* Order Summary */}
            <Heading style={sectionHeading}>{t.orderSummary}</Heading>
            
            {tickets.map((ticket, index) => (
              <Row key={index} style={ticketRow}>
                <Column style={ticketDescription}>
                  <Text style={ticketText}>{ticket.description}</Text>
                </Column>
                <Column style={ticketPrice}>
                  <Text style={ticketPriceText}>${ticket.finalPrice.toFixed(2)}</Text>
                </Column>
              </Row>
            ))}

            <Hr style={divider} />

            <Row style={totalRow}>
              <Column>
                <Text style={totalLabel}>{t.totalPaid}</Text>
              </Column>
              <Column style={ticketPrice}>
                <Text style={totalValue}>${total.toFixed(2)}</Text>
              </Column>
            </Row>

            {/* What's Next */}
            <Heading style={sectionHeading}>{t.whatNext}</Heading>

            <Section style={stepBox}>
              <Text style={stepTitle}>{t.step1Title}</Text>
              <Text style={stepDescription}>
                {t.step1Desc}
              </Text>
            </Section>

            <Section style={stepBox}>
              <Text style={stepTitle}>{t.step2Title}</Text>
              <Text style={stepDescription}>
                {t.step2Desc}
              </Text>
            </Section>

            <Section style={stepBox}>
              <Text style={stepTitle}>{t.step3Title}</Text>
              <Text style={stepDescription}>
                {t.step3Desc}
              </Text>
            </Section>

            <Section style={stepBox}>
              <Text style={stepTitle}>{t.step4Title}</Text>
              <Text style={stepDescription}>
                {t.step4Desc}
              </Text>
            </Section>

            {/* Support Section */}
            <Section style={supportSection}>
              <Text style={supportText}>
                <strong>{t.supportLabel}</strong> {t.supportEmail}
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              {t.footerCopyright.replace('{year}', currentYear.toString())}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default TicketConfirmationEmail;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#1C174F',
  padding: '40px 20px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#FAD062',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0',
};

const headerSubtitle = {
  color: '#ADE6ED',
  fontSize: '18px',
  margin: '10px 0 0',
  padding: '0',
};

const content = {
  padding: '40px 20px',
};

const greeting = {
  color: '#1C174F',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
};

const paragraph = {
  color: '#1C174F',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 20px',
};

const caseIdSection = {
  backgroundColor: '#FF5B23',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center' as const,
  margin: '20px 0',
};

const caseIdLabel = {
  color: '#ffffff',
  fontSize: '14px',
  margin: '0',
  padding: '0',
};

const caseIdValue = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  margin: '10px 0 0',
  padding: '0',
};

const sectionHeading = {
  color: '#1C174F',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '30px 0 20px',
  borderBottom: '2px solid #ADE6ED',
  paddingBottom: '10px',
};

const ticketRow = {
  borderBottom: '1px solid #e5e7eb',
  padding: '12px 0',
};

const ticketDescription = {
  paddingRight: '10px',
};

const ticketText = {
  color: '#1C174F',
  fontSize: '14px',
  margin: '0',
};

const ticketPrice = {
  textAlign: 'right' as const,
};

const ticketPriceText = {
  color: '#1C174F',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
};

const divider = {
  borderColor: '#1C174F',
  margin: '20px 0',
};

const totalRow = {
  borderTop: '2px solid #1C174F',
  padding: '12px 0',
};

const totalLabel = {
  color: '#1C174F',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const totalValue = {
  color: '#FF5B23',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const stepBox = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '15px',
  margin: '0 0 10px',
};

const stepTitle = {
  color: '#1C174F',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 5px',
};

const stepDescription = {
  color: '#1C174F',
  fontSize: '14px',
  margin: '0',
  lineHeight: '1.5',
};

const supportSection = {
  backgroundColor: '#ADE6ED',
  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center' as const,
  margin: '30px 0 0',
};

const supportText = {
  color: '#1C174F',
  fontSize: '14px',
  margin: '0',
};

const footer = {
  backgroundColor: '#1C174F',
  padding: '20px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#ADE6ED',
  fontSize: '12px',
  margin: '0',
};

