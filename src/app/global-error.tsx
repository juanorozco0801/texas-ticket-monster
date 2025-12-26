'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function GlobalError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  const t = useTranslations('error');

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-red-900 to-navy-deep flex items-center justify-center px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              Oops! / ¡Ups!
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Something Went Wrong / Algo Salió Mal
            </h2>
            
            <p className="text-lg text-white/80 mb-8">
              The monster encountered an unexpected error. Don&apos;t worry, we&apos;re on it!
              <br />
              El monstruo encontró un error inesperado. ¡No te preocupes, estamos trabajando en ello!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-monster-orange rounded-full hover:bg-monster-orange-dark transition-all duration-200"
              >
                Try Again / Intentar de Nuevo
              </button>
              
              <Link
                href="/en"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-navy-deep bg-sunny-yellow rounded-full hover:bg-sunny-yellow-light transition-all duration-200"
              >
                Go Home / Ir al Inicio
              </Link>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-black/30 rounded-lg text-left">
                <p className="text-sm text-white/60 font-mono">
                  {error.message}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}

