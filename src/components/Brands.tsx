import { brands } from '@/lib/data';

export default function Brands() {
  return (
    <section className="relative py-12 bg-white border-y border-ink-100">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-ink-400 mb-7">
          Especialistas en vehículos de alto rendimiento y familiares
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-lg sm:text-xl font-bold font-display text-ink-400 hover:text-ink-900 transition-colors duration-300 select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
