'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function MobileMenu({ categories }: { categories: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {/* Botón hamburguesa compacto */}
      <button onClick={() => setIsOpen(true)} className='p-2 z-[999]'>
        <div className='space-y-1.5'>
          <span className='block w-6 h-0.5 bg-[#C9A24B]' />
          <span className='block w-6 h-0.5 bg-[#C9A24B]' />
          <span className='block w-6 h-0.5 bg-[#C9A24B]' />
        </div>
      </button>

      {isOpen &&
        createPortal(
          <div className='fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B1710] w-full h-full animate-in fade-in duration-300'>
            {/* Botón cerrar más pequeño y mejor ubicado */}
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-6 right-6 text-[#C9A24B] text-4xl'
            >
              ×
            </button>

            {/* Menú compacto */}
            <nav className='flex flex-col items-center gap-6'>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-sans uppercase tracking-[0.2em] text-[#F3EFE6] hover:text-[#C9A24B] transition-colors'
                >
                  {cat.title}
                </Link>
              ))}
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
