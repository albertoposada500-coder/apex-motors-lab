import { useState } from 'react';
import {
  Search,
  LogIn,
  Cpu,
  PackageCheck,
  CheckCircle2,
  Car,
  User,
  AlertCircle,
  Loader2,
  Radar,
} from 'lucide-react';
import { sampleTrackings, type VehicleTracking } from '@/lib/data';

const stageIcons: Record<string, typeof LogIn> = {
  LogIn,
  Cpu,
  PackageCheck,
  CheckCircle2,
};

export default function Tracking() {
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VehicleTracking | null>(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (plate.trim().length < 4) return;
    setLoading(true);
    setResult(null);
    setSearched(false);
    setTimeout(() => {
      const norm = (s: string) => s.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      const found = sampleTrackings.find((t) => norm(t.plate) === norm(plate));
      setResult(found ?? null);
      setLoading(false);
      setSearched(true);
    }, 700);
  };

  return (
    <section id="rastreo" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
            <Radar className="w-3.5 h-3.5" />
            Rastreo en tiempo real
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
            ¿Cómo va tu vehículo?
          </h2>
          <p className="mt-4 text-ink-600">
            Ingresa la placa y revisa el estado en el taller. Sin llamadas, sin filas, sin esperas.
          </p>
        </div>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white border border-ink-200 shadow-card-hover">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
              <input
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                placeholder="Ingresa la placa (Ej: XYZ-123)"
                className="w-full pl-10 pr-3 py-3 bg-transparent text-ink-900 text-sm placeholder:text-ink-400 focus:outline-none uppercase tracking-wider font-semibold"
              />
            </div>
            <button
              type="submit"
              disabled={loading || plate.trim().length < 4}
              className="btn-primary text-sm py-3 px-5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
              {loading ? 'Buscando...' : 'Rastrear'}
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-ink-500">
            Placas de prueba:{' '}
            <span className="text-crimson-600 font-semibold">XYZ-123</span> ·{' '}
            <span className="text-crimson-600 font-semibold">ABC-789</span> ·{' '}
            <span className="text-crimson-600 font-semibold">JKL-456</span>
          </p>
        </form>

        {searched && !loading && !result && (
          <div className="mt-8 max-w-xl mx-auto p-6 rounded-2xl border border-ink-200 bg-white shadow-card text-center animate-scale-in">
            <AlertCircle className="w-8 h-8 text-crimson-600 mx-auto mb-2" />
            <p className="text-ink-900 font-semibold">No encontramos esa placa</p>
            <p className="text-sm text-ink-500 mt-1">
              Verifica la placa o comunícate con el taller si tu ingreso fue reciente.
            </p>
          </div>
        )}

        {result && (
          <div className="mt-10 rounded-2xl bg-white border border-ink-200 shadow-card-hover overflow-hidden animate-scale-in">
            <div className="p-5 sm:p-6 border-b border-ink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-crimson-50 border border-crimson-100 flex items-center justify-center">
                  <Car className="w-7 h-7 text-crimson-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-ink-900 tracking-wider font-display">{result.plate}</span>
                    <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
                      En taller
                    </span>
                  </div>
                  <p className="text-sm text-ink-500 mt-0.5">{result.vehicle}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-ink-600">
                  <User className="w-4 h-4 text-crimson-600" />
                  {result.owner}
                </div>
                <div className="col-span-2 sm:col-span-1 text-ink-500 text-xs sm:text-right">
                  {result.service}
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <ol className="relative">
                {result.stages.map((stage, i) => {
                  const Icon = stageIcons[stage.icon] ?? LogIn;
                  const isDone = stage.id < result.currentStage;
                  const isCurrent = stage.id === result.currentStage;
                  const isPending = stage.id > result.currentStage;
                  const isLast = i === result.stages.length - 1;
                  return (
                    <li key={stage.id} className="flex gap-4 sm:gap-5">
                      <div className="flex flex-col items-center">
                        <div
                          className={`relative w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                            isDone
                              ? 'bg-green-500/10 border border-green-500/30'
                              : isCurrent
                              ? 'bg-crimson-600 border border-crimson-600 shadow-glow-crimson'
                              : 'bg-ink-50 border border-ink-200'
                          }`}
                        >
                          {isCurrent && (
                            <span className="absolute inset-0 rounded-full bg-crimson-500/30 animate-pulse-ring" />
                          )}
                          <Icon
                            className={`relative w-5 h-5 ${
                              isDone ? 'text-green-600' : isCurrent ? 'text-white' : 'text-ink-400'
                            }`}
                          />
                        </div>
                        {!isLast && (
                          <div className={`w-0.5 flex-1 my-1 min-h-[2.5rem] ${isDone ? 'bg-green-500/40' : 'bg-ink-200'}`} />
                        )}
                      </div>
                      <div className={`pb-7 ${isLast ? 'pb-0' : ''} flex-1`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className={`font-semibold font-display ${isDone ? 'text-ink-700' : isCurrent ? 'text-ink-900' : 'text-ink-400'}`}>
                            {stage.title}
                          </h4>
                          {isCurrent && (
                            <span className="chip bg-crimson-600 text-white">
                              En proceso
                            </span>
                          )}
                          {isDone && (
                            <span className="chip bg-green-500/10 border border-green-500/30 text-green-600">
                              Completado
                            </span>
                          )}
                          {isPending && (
                            <span className="chip bg-ink-100 border border-ink-200 text-ink-500">
                              Pendiente
                            </span>
                          )}
                        </div>
                        <p className={`text-sm mt-1.5 ${isPending ? 'text-ink-400' : 'text-ink-600'}`}>{stage.description}</p>
                        <p className={`text-xs mt-1.5 ${isPending ? 'text-ink-300' : 'text-ink-500'}`}>{stage.date}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
