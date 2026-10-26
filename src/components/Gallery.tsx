import { ArrowLeftRight, Sparkles } from 'lucide-react';
import { galleryCases } from '@/lib/data';

export default function Gallery() {
  return (
    <section id="galeria" className="relative py-20 sm:py-28 bg-ink-50">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
            <Sparkles className="w-3.5 h-3.5" />
            Resultados reales
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
            Transformaciones y Resultados Reales en Taller
          </h2>
          <p className="mt-4 text-ink-600">
            Antes y después de trabajos especializados realizados en nuestro taller en Cartagena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {galleryCases.map((c, i) => (
            <div
              key={c.id}
              className="card card-hover overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative grid grid-cols-2 h-56">
                <div className="relative overflow-hidden border-r border-ink-100">
                  <img src={c.beforeImage} alt={c.beforeLabel} loading="lazy" className="w-full h-full object-cover grayscale" />
                  <div className="absolute inset-0 bg-ink-900/20" />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-ink-900/80 text-white text-[10px] font-semibold">
                    ANTES
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img src={c.afterImage} alt={c.afterLabel} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-green-500/5" />
                  <span className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-green-600/90 text-white text-[10px] font-semibold">
                    DESPUÉS
                  </span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-ink-200 shadow-card-hover flex items-center justify-center z-10">
                  <ArrowLeftRight className="w-4 h-4 text-crimson-600" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-ink-900 font-display">{c.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{c.subtitle}</p>
                <div className="mt-3 flex flex-col gap-1 text-xs">
                  <span className="text-ink-400">· {c.beforeLabel}</span>
                  <span className="text-green-600 font-medium">· {c.afterLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
