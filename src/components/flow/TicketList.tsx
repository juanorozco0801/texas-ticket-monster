'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTicketStore } from '@/store/tickets.store';
import { FileText, Trash2 } from 'lucide-react';

export function TicketList() {
  const tickets = useTicketStore((state) => state.tickets);
  const removeTicket = useTicketStore((state) => state.removeTicket);

  if (tickets.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Tickets ({tickets.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="flex items-start gap-4 p-4 rounded-lg border border-sky-cyan bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-cyan/20 flex items-center justify-center">
                <FileText className="w-6 h-6 text-electric-blue" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="capitalize">
                    {ticket.type}
                  </Badge>
                  <span className="text-xs text-navy-deep/60">
                    {new Date(ticket.createdAt).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="font-semibold text-navy-deep mb-1">
                  {ticket.description}
                </h3>
                
                {ticket.ticketNumber && (
                  <p className="text-sm text-navy-deep/70 mb-1">
                    Ticket #: {ticket.ticketNumber}
                  </p>
                )}
                
                {ticket.file && (
                  <p className="text-xs text-navy-deep/60">
                    📎 {ticket.file.name} ({(ticket.file.size / 1024).toFixed(1)} KB)
                  </p>
                )}
                
                {ticket.notes && (
                  <p className="text-sm text-navy-deep/70 mt-2 italic">
                    Note: {ticket.notes}
                  </p>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeTicket(ticket.id)}
                className="flex-shrink-0 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

