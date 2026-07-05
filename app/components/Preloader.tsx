'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Ajustado a 3.5s para que las animaciones terminen de forma fluida
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className='fixed inset-0 z-[99999] flex items-center justify-center bg-[var(--color-bg)]'>
      <div className='preloader-content flex flex-col items-center'>
        <div className='preloader-monogram mb-6 flex flex-col items-center'>
          <span className='font-display text-5xl text-[var(--color-gold)] leading-none'>
            A
          </span>
          <span className='preloader-star'>✦</span>
          <span className='font-display text-5xl text-[var(--color-gold)] leading-none'>
            M
          </span>
        </div>

        <h1 className='flex flex-col items-center font-display text-[var(--color-gold)]'>
          <span className='preloader-alta text-6xl tracking-[0.45em]'>
            ALTA
          </span>
          <span className='preloader-mesa text-6xl tracking-[0.45em]'>
            MESA
          </span>
        </h1>

        <div className='preloader-line mt-8'></div>

        <p className='preloader-tagline mt-6 text-xs tracking-[0.5em] uppercase text-[var(--color-gold-soft)]'>
          Experiencias que perduran
        </p>
      </div>
    </div>
  );
}
