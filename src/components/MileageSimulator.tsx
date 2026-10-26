import { useState } from 'react';
import { Gauge, Check } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { mileagePlans, formatCOP, buildWhatsAppUrl, buildMileageQuote } from '@/lib/data';

export default function MileageSimulator() {
  const [active, setActive] = useState(0);
  const plan = mileagePlans[active];

  const send = () => window.open(buildWhatsAppUrl(buildMileageQuote(plan)), '_blank');

  return (
    <section id="kilometraje" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
            <Gauge className="w-3.5 h-3.5" />
            Simulador de mantenimiento
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
            Mantenimiento por kilometraje
          </h2>
          <p className="mt-4 text-ink-600">
            Selecciona el kilometraje de tu vehículo y revisa la lista de chequeo de repuestos y fluidos correspondientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {mileagePlans.map((p, i) => (
            <button
              key={p.km}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all duration-300 ${
                active === i
                  ? 'border-crimson-500 bg-crimson-50 text-crimson-700 shadow-glow-crimson'
                  : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-bold text-ink-900 font-display mb-4">Lista de chequeo</h3>
            <ul className="space-y-3">
              {plan.items.map((item, i) => (
                <li key={item} className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: `${i * 0.04}s` }}>
                  <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm text-ink-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 flex flex-col">
            <h3 className="text-lg font-bold text-ink-900 font-display mb-2">Costo aproximado</h3>
            <p className="text-sm text-ink-500 mb-4">Incluye mano de obra y repuestos básicos del plan.</p>
            <div className="text-5xl font-bold font-display text-crimson-gradient mb-6">
              {formatCOP(plan.cost)}
            </div>
            <div className="mt-auto">
              <button onClick={send} className="btn-wa w-full">
                <WhatsAppIcon className="w-5 h-5" />
                Agendar Mantenimiento de {plan.label}
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-ink-500 mt-6">
          * Los costos son referenciales. El valor final se confirma tras diagnóstico.
        </p>
      </div>
    </section>
  );
}
