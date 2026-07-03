'use client';

import { useEffect, useState } from 'react';
import { MenuCategory } from '@/app/data/menu';

export default function Navbar({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id);

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [categories]);

  return (
    <nav className='sticky top-0 z-20 bg-bg/95 backdrop-blur border-b border-gold/20'>
      <ul className='flex gap-6 overflow-x-auto px-6 py-3 sm:justify-center sm:overflow-visible scrollbar-hide'>
        {categories.map((c) => (
          <li key={c.id} className='shrink-0'>
            <a
              href={`#${c.id}`}
              className={`text-xs sm:text-sm tracking-widest uppercase transition-colors ${
                active === c.id ? 'text-gold' : 'text-muted hover:text-ivory'
              }`}
            >
              {c.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
