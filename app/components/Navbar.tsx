import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

interface NavbarProps {
  categories: { id: string; title: string }[];
}

export default function Navbar({ categories }: NavbarProps) {
  return (
    <nav className='fixed top-0 w-full z-40 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-gold)]/15'>
      <div className='max-w-3xl mx-auto px-6 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
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
              className='text-xs uppercase tracking-widest text-[var(--color-ivory)] hover:text-[var(--color-gold)]'
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {/* El menú móvil se renderiza solo cuando sea necesario */}
        <div className='md:hidden'>
          <MobileMenu categories={categories} />
        </div>
      </div>
    </nav>
  );
}
