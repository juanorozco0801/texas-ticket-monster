'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  const t = useTranslations('error');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-cyan/10 flex items-center justify-center px-4 py-16">
      <Card className="max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-navy-deep mb-2">
            {t('pageError')}
          </h2>
          
          <p className="text-navy-deep/70 mb-6">
            {t('pageErrorDesc')}
          </p>
          
          <div className="space-y-3">
            <Button
              onClick={reset}
              className="w-full bg-monster-orange hover:bg-monster-orange-dark"
            >
              {t('tryAgain')}
            </Button>
            
            <Button
              onClick={() => { globalThis.location.href = '/'; }}
              variant="outline"
              className="w-full"
            >
              {t('goHome')}
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-6 p-3 bg-red-50 rounded-lg text-left">
              <p className="text-xs text-red-800 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

