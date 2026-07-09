'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function MeatGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='text-[var(--color-gold)] underline text-xs tracking-widest uppercase hover:text-[var(--color-ivory)] transition-colors'
      >
        Ver guía de términos de carne
      </button>

      {isOpen && (
        <div
          className='fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/90 backdrop-blur-sm p-4 animate-in fade-in duration-300'
          onClick={() => setIsOpen(false)}
        >
          <div className='max-w-md w-full bg-[var(--color-bg-elevated)] p-2 rounded-lg border border-[var(--color-gold)]/30 relative'>
            <button className='absolute -top-10 right-0 text-white text-2xl'>
              ×
            </button>
            {/* Aquí debes poner el path de tu imagen de términos optimizada */}
            <Image
              src='/terminosdecarne.jpeg'
              alt='Guía de términos de carne'
              width={800}
              height={600}
              className='w-full h-auto rounded'
            />
          </div>
        </div>
      )}
    </>
  );
}
