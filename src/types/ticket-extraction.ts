export interface ExtractedTicketData {
  ticketNumber: string | null;
  violationType: string | null;
  violationDate: string | null;
  violationTime: string | null;
  location: string | null;
  courtDate: string | null;
  courtLocation: string | null;
  fineAmount: number | null;
  officerName: string | null;
  officerBadge: string | null;
  vehicleInfo: {
    make?: string;
    model?: string;
    plate?: string;
    color?: string;
  } | null;
  speedLimit: number | null;
  actualSpeed: number | null;
  notes: string | null;
}

export interface ExtractionResponse {
  success: boolean;
  data: ExtractedTicketData;
  confidence?: number;
}

