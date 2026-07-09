import { MenuCategory } from '@/app/data/menu';
import MenuItem from './MenuItem';
import MeatGuideModal from './MeatGuideModal'; // Importa el componente

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
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {/* AQUÍ ESTÁ LA LÓGICA: Solo aparece en la sección de parrilla */}
      {category.id === 'parrilla' && (
        <div className='mt-8 flex justify-center'>
          <MeatGuideModal />
        </div>
      )}
    </section>
  );
}
