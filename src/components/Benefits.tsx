import {
  LayoutGrid,
  CalendarCheck,
  Repeat2,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react';

const benefits = [
  { icon: LayoutGrid, title: 'Cero caos en el patio', description: 'Cada vehículo entra con su cupo asignado. Sabes qué hay, dónde está y en qué estado se encuentra.' },
  { icon: CalendarCheck, title: 'Cupos diarios organizados', description: 'El agendamiento distribuye los turnos automáticamente. Evita saturación y tiempos muertos.' },
  { icon: Repeat2, title: 'Mayor retención de clientes', description: 'El seguimiento en tiempo real elimina llamadas y genera confianza. El cliente vuelve.' },
  { icon: TrendingUp, title: 'Formalidad que vende', description: 'Una plataforma profesional transmite calidad y permite cobrar lo que tu trabajo vale.' },
  { icon: ShieldCheck, title: 'Trazabilidad de servicios', description: 'Registro claro de cada etapa. Respaldas tu trabajo y reduces discusiones con el cliente.' },
  { icon: Smartphone, title: 'Todo desde el celular', description: 'Tus clientes agendan y rastrean desde su teléfono. Sin descargar apps ni llamadas innecesarias.' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32725838/pexels-photo-32725838.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Motor de altas prestaciones"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90" />
        <div className="absolute inset-0 bg-slate-950/40" />
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-red-600/20 border border-red-500/40 text-red-300 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5" />
            Para dueños de taller
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
            Un sistema que <span className="text-red-500">ordena tu operación</span>
          </h2>
          <p className="mt-4 text-slate-300">
            La misma tecnología que usan los concesionarios, al alcance de tu taller en Cartagena.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="relative bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-black font-display text-red-600 leading-none tracking-tight">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <b.icon className="w-5 h-5 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-display">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
