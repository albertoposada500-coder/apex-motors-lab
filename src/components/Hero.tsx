import { useState } from 'react';
import { ArrowRight, ShieldCheck, Star, Radar } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsAppUrl } from '@/lib/data';

interface HeroProps {
  onAgendar: () => void;
}

export default function Hero({ onAgendar }: HeroProps) {
  const [imageOk, setImageOk] = useState(true);

  const openWhatsApp = () => {
    const msg = 'Hola, quiero agendar una cita en Apex Motors Lab. ¿Me pueden ayudar con la disponibilidad?';
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="inicio" className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {imageOk ? (
        <img
          src="https://images.pexels.com/photos/9702382/pexels-photo-9702382.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Taller automotriz panorámico de alta gama"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
          onError={() => setImageOk(false)}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60 z-10" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-24 lg:py-32 z-20">
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 font-semibold text-sm tracking-wide uppercase shadow-lg backdrop-blur-md animate-fade-up">
            <ShieldCheck className="w-4 h-4" />
            Tecnología de Diagnóstico Avanzada en Cartagena
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none drop-shadow-md font-display animate-fade-up" style={{ animationDelay: '0.05s' }}>
            Ingeniería automotriz de{' '}
            <span className="text-red-500">precisión</span>{' '}
            en Cartagena.
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Diagnóstico computarizado y mantenimiento especializado para carros y motos. Sin filas ni sorpresas:
            agenda tu cupo y haz seguimiento a tu vehículo en tiempo real.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <button
              onClick={onAgendar}
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg rounded-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Agendar Cita por WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('rastreo')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-xl border border-white/30 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Radar className="w-5 h-5" />
              Rastrear mi Vehículo
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-300 pt-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
              ))}
              <span className="ml-1.5 text-white font-semibold">4.9/5</span>
              <span>· Clientes en Cartagena</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl mt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '+500', label: 'Vehículos y Motos Atendidos' },
            { value: '99%', label: 'Citas a Tiempo sin Filas' },
            { value: '100%', label: 'Protección Anticorrosiva Garantizada' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-black font-display text-white">{s.value}</div>
              <div className="text-sm text-slate-400 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
