import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'agendar', label: 'Agendar Cita' },
  { id: 'rastreo', label: 'Rastreo' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contacto', label: 'Contacto' },
];

interface NavbarProps {
  onAgendar: () => void;
}

export default function Navbar({ onAgendar }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-ink-200 shadow-soft'
          : 'bg-white/0'
      }`}
    >
      <nav className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-2.5 group">
            <img
              src="https://i.ibb.co/j98CftHB/Captura-de-pantalla-2026-10-26-104648.png"
              alt="Apex Motors Lab"
              className="rounded-full object-cover w-11 h-11 border-2 border-red-600/20"
            />
            <span className="text-slate-950 font-black text-xl tracking-tight font-display">Apex</span>
            <span className="text-red-600 font-black text-xl tracking-tight font-display">Motors</span>
          </button>

          <div className="hidden lg:flex items-center gap-1.5">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-all duration-200"
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button onClick={onAgendar} className="btn-wa text-sm py-2.5 px-5">
              <WhatsAppIcon className="w-4 h-4" />
              Agendar Cita Ahora
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-ink-700 hover:text-ink-900"
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 pt-2 space-y-1 border-t border-ink-200 animate-slide-down bg-white">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-ink-700 hover:text-ink-900 rounded-lg hover:bg-ink-50 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => { setOpen(false); onAgendar(); }}
              className="mt-2 w-full btn-wa text-sm py-3"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar Cita Ahora
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
