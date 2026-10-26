import { AlertTriangle, Truck, ShieldCheck, Timer } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsAppUrl, buildEmergencyQuote } from '@/lib/data';

const points = [
  { icon: Truck, title: 'Ingreso directo a rampa', sub: 'Sin fila ni papeleo inicial' },
  { icon: ShieldCheck, title: 'Custodia en patio cerrado', sub: 'Cámaras 24/7 y póliza' },
  { icon: Timer, title: 'Diagnóstico inicial en menos de 2 horas', sub: 'Prioridad de evaluación' },
];

export default function EmergencyReception() {
  const send = () => window.open(buildWhatsAppUrl(buildEmergencyQuote()), '_blank');

  return (
    <section className="relative py-16 sm:py-20 bg-ink-50">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="relative rounded-2xl overflow-hidden border border-amber-200 bg-gradient-to-br from-amber-50 to-white shadow-card">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-red-500" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-ink-900 font-display">
                  ¿Tuviste una falla técnica en carretera o el carro se te recalentó?
                </h3>
                <p className="mt-2 text-sm text-ink-600">
                  Si estás pidiendo grúa de tu aseguradora o particular hacia el taller, avísanos de inmediato para habilitarte recepción prioritaria sin filas.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-ink-100">
                  <p.icon className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">{p.title}</div>
                    <div className="text-xs text-ink-500 mt-0.5">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={send} className="btn-wa">
              <WhatsAppIcon className="w-5 h-5" />
              Avisar Llegada de Vehículo Varado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
