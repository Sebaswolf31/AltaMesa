import { menu } from '@/app/data/menu';

export default function Footer() {
  return (
    <footer className='border-t border-gold/20 bg-bg-elevated'>
      <div className='mx-auto max-w-3xl px-6 py-12 grid gap-10 sm:grid-cols-3'>
        {/* Marca */}
        <div>
          <h3 className='font-display text-2xl text-gold tracking-wide'>
            ALTA MESA
          </h3>
          <p className='text-xs tracking-[0.25em] text-muted uppercase mt-1'>
            Gastro Bar
          </p>
          <p className='mt-4 text-sm text-muted leading-relaxed'>
            Cocina de parrilla y sabor de casa, en un ambiente pensado para
            compartir.
          </p>
        </div>

        {/* Navegación rápida (reusa las mismas categorías del navbar) */}
        <div>
          <h4 className='text-xs uppercase tracking-widest text-gold mb-3'>
            Menú
          </h4>
          <ul className='space-y-2'>
            {menu.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className='text-sm text-muted hover:text-ivory transition-colors'
                >
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className='text-xs uppercase tracking-widest text-gold mb-3'>
            Visítanos
          </h4>
          <ul className='space-y-2 text-sm text-muted'>
            <li>Calle 00 # 00-00, Medellín</li>
            <li>Mar - Dom · 12:00 pm - 10:00 pm</li>
            <li>
              <a
                href='https://wa.me/573000000000'
                className='hover:text-ivory transition-colors'
              >
                +57 300 000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gold/10 px-6 py-4 text-center text-xs text-muted'>
        © {new Date().getFullYear()} Alta Mesa Gastro Bar
      </div>
    </footer>
  );
}
