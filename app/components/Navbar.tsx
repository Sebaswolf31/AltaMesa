'use client'; // NECESARIO para usar eventos de clic

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

interface NavbarProps {
  categories: { id: string; title: string }[];
}

export default function Navbar({ categories }: NavbarProps) {
  // Función para manejar el scroll suave
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // Si es un enlace de ancla (ej: #menu)
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Si es el logo (/) y ya estamos en el inicio
    else if (href === '/' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className='fixed top-0 w-full z-40 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-gold)]/15'>
      <div className='max-w-3xl mx-auto px-6 h-16 flex items-center justify-between'>
        {/* LOGO */}
        <Link
          href='/'
          onClick={(e) => handleSmoothScroll(e, '/')}
          className='flex items-center transition-opacity hover:opacity-80'
        >
          <Image
            src='/logo.png'
            alt='Alta Mesa'
            width={55}
            height={55}
            priority
            className='brightness-125 contrast-125'
          />
        </Link>

        {/* Menú Escritorio */}
        <div className='hidden md:flex gap-6'>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`#${cat.id}`}
              onClick={(e) => handleSmoothScroll(e, `#${cat.id}`)}
              className='text-xs uppercase tracking-widest text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors'
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {/* Menú Móvil */}
        <div className='md:hidden'>
          <MobileMenu categories={categories} />
        </div>
      </div>
    </nav>
  );
}
