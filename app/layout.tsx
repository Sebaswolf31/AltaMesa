import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Preloader from './components/Preloader';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const sans = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Alta Mesa Gastro Bar | Menú',
  description: 'Menú digital de Alta Mesa Gastro Bar',
  openGraph: {
    title: 'Alta Mesa Gastro Bar',
    description: 'Cocina de parrilla y sabor de casa.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es' className={`${display.variable} ${sans.variable}`}>
      <body className='antialiased'>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
