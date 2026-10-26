import { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsAppUrl } from '@/lib/data';

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openWhatsApp = () => {
    const msg = 'Hola, me interesa automatizar las citas de mi taller con una web como esta';
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {open && (
        <div className="w-72 rounded-2xl bg-white border border-ink-200 shadow-card-hover overflow-hidden animate-scale-in">
          <div className="bg-gradient-to-r from-crimson-500 to-crimson-700 p-4 flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm font-display">Nova Web</p>
                <p className="text-white/80 text-xs">En línea ahora</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4">
            <div className="bg-ink-50 rounded-lg p-3 mb-3">
              <p className="text-sm text-ink-700">
                ¡Hola! ¿Tienes un taller y quieres automatizar tus citas así? Escríbenos y te ayudamos.
              </p>
            </div>
            <button onClick={openWhatsApp} className="w-full btn-secondary text-sm py-2.5">
              <WhatsAppIcon className="w-4 h-4 text-green-600" />
              Abrir WhatsApp
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-[0_8px_30px_-5px_rgba(34,197,94,0.5)] flex items-center justify-center transition-all hover:scale-105"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
        {open ? <X className="relative w-6 h-6 text-white" /> : <WhatsAppIcon className="relative w-7 h-7 text-white" />}
      </button>
    </div>
  );
}
