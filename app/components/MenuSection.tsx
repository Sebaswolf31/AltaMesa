import { MenuCategory } from '@/app/data/menu';
import MenuItem from './MenuItem';

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section
      id={category.id}
      className='scroll-mt-24 py-10 border-t border-gold/15'
    >
      <div className='flex items-center gap-4 mb-2'>
        <h2 className='font-display text-3xl sm:text-4xl text-gold tracking-wide uppercase'>
          {category.title}
        </h2>
        <span className='flex-1 h-px bg-gradient-to-r from-gold/50 to-transparent' />
      </div>
      <div className='divide-y divide-gold/10'>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
