import { useState } from 'react';
import type { ExtractedTicketData } from '@/types/ticket-extraction';

export function useTicketExtraction() {
  const [isExtracting, setIsExtracting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [extractedData, setExtractedData] = useState<ExtractedTicketData | null>(null);

  const extractTicketData = async (file: File): Promise<ExtractedTicketData | null> => {
    setIsExtracting(true);
    setError(null);
    setExtractedData(null);

    // Validate file size (5MB max)
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB
    if (file.size > MAX_SIZE) {
      const errorMessage = 'File size exceeds 5MB. Please upload a smaller image.';
      setError(errorMessage);
      setIsExtracting(false);
      return null;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/extract-ticket', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Extraction failed');
      }

      setExtractedData(result.data);
      return result.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to extract ticket data';
      setError(errorMessage);
      return null;
    } finally {
      setIsExtracting(false);
    }
  };

  const clearExtraction = () => {
    setExtractedData(null);
    setError(null);
  };

  return {
    extractTicketData,
    isExtracting,
    error,
    extractedData,
    clearExtraction,
  };
}

