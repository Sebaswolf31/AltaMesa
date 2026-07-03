import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import MenuSection from '@/app/components/MenuSection';
import { menu } from '@/app/data/menu';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <Navbar categories={menu} />
      <div className='mx-auto max-w-3xl px-6 pb-24'>
        {menu.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
