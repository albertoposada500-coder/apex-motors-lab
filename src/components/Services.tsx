import { useState } from 'react';
import {
  ClipboardCheck,
  Gauge,
  Wrench,
  Disc3,
  Snowflake,
  Droplet,
  ShieldCheck,
  Sparkles as SparklesIcon,
  Clock,
  Check,
  Car,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import {
  services,
  vehicleTypes,
  motoServices,
  formatCOP,
  buildServiceQuote,
  buildMotoServiceQuote,
  buildWhatsAppUrl,
  type ServiceItem,
  type VehicleType,
  type VehicleMode,
} from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  Gauge,
  Wrench,
  Disc3,
  Snowflake,
  Droplet,
  ShieldCheck,
  Sparkles: SparklesIcon,
};

export default function Services() {
  const [mode, setMode] = useState<VehicleMode>('carro');
  const [selectedType, setSelectedType] = useState<VehicleType>('sedan');

  const cotizarWhatsApp = (service: ServiceItem, vehicleType: VehicleType) => {
    window.open(buildWhatsAppUrl(buildServiceQuote(service, vehicleType)), '_blank');
  };

  const cotizarMotoWhatsApp = (serviceId: string) => {
    const service = motoServices.find((s) => s.id === serviceId);
    if (service) window.open(buildWhatsAppUrl(buildMotoServiceQuote(service)), '_blank');
  };

  return (
    <section id="servicios" className="relative py-20 sm:py-28 bg-ink-50">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
            <Sparkles className="w-3.5 h-3.5" />
            Catálogo técnico
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
            Cotizador interactivo de servicios
          </h2>
          <p className="mt-4 text-ink-600">
            Selecciona tu tipo de vehículo y visualiza el precio estimado de cada servicio especializado.
          </p>
        </div>

        {/* Mode toggle: Carro / Moto */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-ink-200 shadow-soft">
            <button
              onClick={() => setMode('carro')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                mode === 'carro'
                  ? 'bg-crimson-600 text-white shadow-glow-crimson'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              <Car className="w-5 h-5" />
              Carros y Camionetas
            </button>
            <button
              onClick={() => setMode('moto')}
              className={`flex items-center gap-2 px-5 sm:px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                mode === 'moto'
                  ? 'bg-crimson-600 text-white shadow-glow-crimson'
                  : 'text-ink-600 hover:text-ink-900'
              }`}
            >
              <Wrench className="w-5 h-5" />
              Motos y Ciclomotores
            </button>
          </div>
        </div>

        {/* Car vehicle type selector */}
        {mode === 'carro' && (
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
            {vehicleTypes.map((vt) => {
              const active = selectedType === vt.id;
              return (
                <button
                  key={vt.id}
                  onClick={() => setSelectedType(vt.id)}
                  className={`group relative px-5 py-4 rounded-2xl border text-left min-w-[190px] transition-all duration-300 ${
                    active
                      ? 'border-crimson-500 bg-white shadow-glow-crimson'
                      : 'border-ink-200 bg-white hover:border-ink-300 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Car className={`w-4 h-4 transition-colors ${active ? 'text-crimson-600' : 'text-ink-400'}`} />
                    <span className={`font-semibold transition-colors ${active ? 'text-ink-900' : 'text-ink-700'}`}>
                      {vt.label}
                    </span>
                  </div>
                  <span className="text-xs text-ink-500">{vt.description}</span>
                  {active && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-crimson-600 ring-2 ring-ink-50" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Car services grid */}
        {mode === 'carro' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Wrench;
              const price = s.prices[selectedType];
              return (
                <div
                  key={s.id}
                  className="card card-hover overflow-hidden animate-fade-up flex flex-col"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-ink-900/10 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-md border border-white shadow-soft">
                      <Icon className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div className="absolute top-4 right-4 chip bg-white/90 backdrop-blur-md border border-white text-ink-700 shadow-soft">
                      <Clock className="w-3 h-3 text-crimson-600" />
                      {s.duration}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-ink-900 leading-tight font-display">{s.name}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.description}</p>

                    <ul className="grid grid-cols-1 gap-2 mt-4">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                          <Check className="w-4 h-4 flex-shrink-0 text-crimson-600" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5 border-t border-ink-100">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <span className="text-xs text-ink-500">Precio estimado</span>
                          <div className="text-2xl font-bold font-display text-ink-900">
                            {formatCOP(price)}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => cotizarWhatsApp(s, selectedType)}
                        className="btn-wa w-full text-sm py-2.5"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Cotizar por WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Moto services grid */}
        {mode === 'moto' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {motoServices.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Wrench;
              return (
                <div
                  key={s.id}
                  className="card card-hover overflow-hidden animate-fade-up flex flex-col"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-ink-900/10 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-md border border-white shadow-soft">
                      <Icon className="w-6 h-6 text-crimson-600" />
                    </div>
                    <div className="absolute top-4 right-4 chip bg-white/90 backdrop-blur-md border border-white text-ink-700 shadow-soft">
                      <Clock className="w-3 h-3 text-crimson-600" />
                      {s.duration}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-ink-900 leading-tight font-display">{s.name}</h3>
                    <p className="mt-2 text-sm text-ink-600 leading-relaxed">{s.description}</p>

                    <ul className="grid grid-cols-1 gap-2 mt-4">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                          <Check className="w-4 h-4 flex-shrink-0 text-crimson-600" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5 border-t border-ink-100">
                      <div className="flex items-end justify-between mb-3">
                        <div>
                          <span className="text-xs text-ink-500">Precio</span>
                          <div className="text-2xl font-bold font-display text-ink-900">
                            {formatCOP(s.price)}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => cotizarMotoWhatsApp(s.id)}
                        className="btn-wa w-full text-sm py-2.5"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Cotizar por WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-center text-xs text-ink-500 mt-8">
          * Los precios son estimados y pueden variar según el estado del vehículo. El diagnóstico final define el valor real.
        </p>
      </div>
    </section>
  );
}
