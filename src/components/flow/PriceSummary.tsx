'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTicketStore, usePriceBreakdown } from '@/store/tickets.store';
import { pricing } from '@/mocks/pricing';
import { Trash2 } from 'lucide-react';

export function PriceSummary() {
  const { tickets, total } = usePriceBreakdown();
  const removeTicket = useTicketStore((state) => state.removeTicket);

  if (tickets.length === 0) {
    return (
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle>Price Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-navy-deep/60 text-center py-8">
            No tickets added yet
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Price Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Ticket Items */}
        <div className="space-y-3">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="flex items-start justify-between gap-2 p-3 rounded-lg bg-sky-cyan/10 border border-sky-cyan"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {ticket.type}
                  </Badge>
                  {ticket.hasDiscount && (
                    <Badge className="text-xs bg-green-500">
                      15% OFF
                    </Badge>
                  )}
                </div>
                <p className="text-sm font-medium text-navy-deep truncate">
                  {ticket.description}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {ticket.hasDiscount && (
                    <span className="text-xs text-navy-deep/50 line-through">
                      ${ticket.basePrice}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-monster-orange">
                    ${ticket.finalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeTicket(ticket.id)}
                className="flex-shrink-0 h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <Separator />

        {/* Total */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-navy-deep/70">Tickets ({tickets.length})</span>
            <span className="text-navy-deep/70">${tickets.reduce((sum, t) => sum + t.basePrice, 0).toFixed(2)}</span>
          </div>
          {tickets.length > 1 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Multi-ticket discount</span>
              <span>-${(tickets.reduce((sum, t) => sum + t.basePrice, 0) - total).toFixed(2)}</span>
            </div>
          )}
          <Separator />
          <div className="flex justify-between text-lg font-bold">
            <span className="text-navy-deep">Total</span>
            <span className="text-monster-orange">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Info */}
        <div className="text-xs text-navy-deep/60 bg-sky-cyan/20 p-3 rounded-lg">
          <p>✓ No hidden fees</p>
          <p>✓ Pay only if we take your case</p>
          <p>✓ 15% off each additional ticket</p>
        </div>
      </CardContent>
    </Card>
  );
}

