import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-bg-elevated">
      <div className="mx-auto grid max-w-3xl gap-10 px-6 py-12 sm:grid-cols-2">

        {/* Marca e Instagram */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl tracking-wide text-gold">
              ALTA MESA
            </h3>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted">
              Gastro Bar
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted">
              Cocina de parrilla y sabor de casa, en un ambiente pensado para
              compartir.
            </p>
          </div>

          {/* Botón Instagram */}
          <div className="mt-6">
            <a
              href="https://www.instagram.com/altamesa.gastrobar?igsh=bW90azZkaW5qNTdh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs font-medium text-gold transition-all hover:border-gold hover:bg-gold/10"
            >
              <FaInstagram size={16} />
              <span>Síguenos en Instagram</span>
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <div>
            <h4 className="mb-3 text-xs uppercase tracking-widest text-gold">
              Visítanos
            </h4>

            <ul className="mb-4 space-y-1 text-sm text-muted">
              <li className="font-medium text-ivory">
                Frente a la chec via al lago
              </li>
              <li>Todos los días de 12:00 pm a 3:30 pm</li>

              <li>
                 <h4 className="mb-3 text-xs uppercase tracking-widest text-gold">
              Pide tu domicilio 
            </h4>
                <a
                  href="https://wa.me/573217479995"
                  className="transition-colors hover:text-ivory"
                >
                  +57 321 747 9995
                </a>
              </li>
            </ul>
          </div>

          {/* Imagen del mapa */}
          <div className="overflow-hidden rounded-lg border border-gold/10 shadow-lg opacity-80 transition-opacity duration-300 hover:opacity-100">
            <a
              href="https://maps.app.goo.gl/dSLDQihwn595q6gn8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-32 w-full grayscale contrast-125 transition-all duration-500 hover:grayscale-0"
            >
              <Image
                src="/mapa-ubicacion.jpeg"
                alt="Ubicación Alta Mesa Gastro Bar"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Alta Mesa Gastro Bar
      </div>
    </footer>
  );
}