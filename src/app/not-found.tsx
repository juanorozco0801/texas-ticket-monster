'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-navy-deep to-navy-light flex items-center justify-center px-4">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/LogoVariacion3_Blanco.png"
                alt="Texas Ticket Monster"
                width={200}
                height={200}
                className="mx-auto animate-monster-float"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Page Not Found / Página No Encontrada
            </h2>
            
            <p className="text-lg text-white/80 mb-2 max-w-md mx-auto">
              Oops! The monster couldn&apos;t find this page. Let&apos;s get you back on track.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-md mx-auto">
              ¡Ups! El monstruo no pudo encontrar esta página. Volvamos al camino correcto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-navy-deep bg-sunny-yellow rounded-full hover:bg-sunny-yellow-light transition-all duration-200 hover:-translate-y-1"
              >
                Go Home (English)
              </Link>
              
              <Link
                href="/es"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-monster-orange rounded-full hover:bg-monster-orange-dark transition-all duration-200 hover:-translate-y-1"
              >
                Ir al Inicio (Español)
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

