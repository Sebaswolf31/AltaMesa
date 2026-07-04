import { MenuItem as MenuItemType } from '@/app/data/menu';
import { formatPrice } from '@/app/utils/format';

export default function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <div className='py-4 border-b border-gold/5 last:border-0 md:border-b md:border-gold/5'>
      <div className='flex items-baseline gap-3'>
        <h3 className='font-display text-lg sm:text-xl text-ivory tracking-wide'>
          {item.name}
        </h3>
        <span className='flex-1 border-b border-dashed border-gold/40 translate-y-[-4px]' />
        <span className='font-sans text-sm sm:text-base text-gold-soft whitespace-nowrap'>
          {formatPrice(item.price)}
        </span>
      </div>
      <p className='mt-1 text-sm text-muted leading-relaxed max-w-xl'>
        {item.description}
      </p>
    </div>
  );
}
