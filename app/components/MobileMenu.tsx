'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

export default function MobileMenu({ categories }: { categories: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Función para manejar el cierre y el scroll suave
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault(); // Detenemos el salto brusco del navegador
    setIsOpen(false); // Cerramos el menú

    // Esperamos un momento a que el menú se oculte (opcional, pero ayuda a la fluidez)
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!mounted) return null;

  return (
    <>
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
            <button
              onClick={() => setIsOpen(false)}
              className='absolute top-6 right-6 text-[#C9A24B] text-4xl'
            >
              ×
            </button>

            <nav className='flex flex-col items-center gap-6'>
              {categories.map((cat) => (
                <a // Cambiamos Link por <a> para tener control total del evento
                  key={cat.id}
                  href={`#${cat.id}`}
                  onClick={(e) => handleLinkClick(e, cat.id)}
                  className='text-lg font-sans uppercase tracking-[0.2em] text-[#F3EFE6] hover:text-[#C9A24B] transition-colors cursor-pointer'
                >
                  {cat.title}
                </a>
              ))}
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
