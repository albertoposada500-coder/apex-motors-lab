import { Star, BadgeCheck, MapPin } from 'lucide-react';
import { reviews } from '@/lib/data';

function GoogleG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-20 sm:py-28 bg-ink-50">
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GoogleG className="w-8 h-8" />
            <span className="chip bg-white border border-ink-200 text-ink-700 shadow-soft">
              Reseñas de Google
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
            Lo que dicen nuestros clientes
          </h2>

          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3 bg-white border border-ink-200 rounded-2xl px-6 py-4 shadow-soft">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold font-display text-ink-900">4.9</span>
              <span className="text-sm text-ink-400">/ 5.0</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-ink-200" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400" fill="currentColor" />
              ))}
            </div>
            <div className="hidden sm:block w-px h-10 bg-ink-200" />
            <p className="text-sm text-ink-600 max-w-xs text-center sm:text-left">
              Basado en más de <span className="font-semibold text-ink-900">180 reseñas verificadas</span> en Google Maps
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="card card-hover p-6 animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-ink-100"
                    loading="lazy"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-ink-900">{r.name}</span>
                      <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    </div>
                    <span className="text-xs text-blue-600 font-medium">Usuario verificado de Google</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-ink-700 leading-relaxed flex-1">{r.text}</p>

              <div className="mt-4 pt-4 border-t border-ink-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-500">
                  <MapPin className="w-3.5 h-3.5 text-crimson-500" />
                  {r.zone} · {r.vehicle}
                </span>
                <span className="text-xs text-ink-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
