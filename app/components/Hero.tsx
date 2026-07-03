export default function Hero() {
  return (
    <header className='relative px-6 py-16 sm:py-24 text-center border-b border-gold/20'>
      <div className='mx-auto mb-4 h-16 w-16 rounded-full border border-gold flex items-center justify-center'>
        <span className='font-display text-gold text-2xl'>AM</span>
      </div>
      <h1 className='font-display text-4xl sm:text-6xl tracking-widest text-ivory'>
        ALTA MESA
      </h1>
      <p className='mt-2 text-xs sm:text-sm tracking-[0.3em] text-gold uppercase'>
        Gastro Bar
      </p>
      <p className='mt-6 text-muted text-sm'>Menú</p>
    </header>
  );
}
