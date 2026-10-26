import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsAppUrl } from '@/lib/data';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'agendar', label: 'Agendar Cita' },
  { id: 'rastreo', label: 'Rastreo' },
  { id: 'beneficios', label: 'Beneficios' },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contacto" className="relative bg-white border-t border-ink-200 pt-16 pb-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ink-100">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="https://i.ibb.co/j98CftHB/Captura-de-pantalla-2026-10-26-104648.png"
                alt="Apex Motors Lab"
                className="rounded-full object-cover w-11 h-11 border-2 border-red-600/20"
              />
              <span className="text-slate-950 font-black text-xl tracking-tight font-display">Apex</span>
              <span className="text-red-600 font-black text-xl tracking-tight font-display">Motors</span>
            </div>
            <p className="text-sm text-ink-600 leading-relaxed">
              Mecánica especializada y peritajes de precisión en Cartagena. Tecnología de concesionario, servicio de taller experto.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={buildWhatsAppUrl('Hola, me interesa conocer más sobre los servicios de Apex Motors Lab.')}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-ink-50 hover:bg-green-500/10 border border-ink-200 hover:border-green-500/40 flex items-center justify-center text-ink-500 hover:text-green-600 transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-ink-50 hover:bg-crimson-50 border border-ink-200 hover:border-crimson-300 flex items-center justify-center text-ink-500 hover:text-crimson-600 transition-all hover:-translate-y-0.5">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-ink-50 hover:bg-ink-100 border border-ink-200 hover:border-ink-300 flex items-center justify-center text-ink-500 hover:text-ink-900 transition-all hover:-translate-y-0.5">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-ink-900 font-semibold mb-4 text-sm font-display">Navegación</h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-ink-600 hover:text-crimson-600 transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-ink-900 font-semibold mb-4 text-sm font-display">Contacto</h4>
            <ul className="space-y-3 text-sm text-ink-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crimson-600 mt-0.5 flex-shrink-0" />
                Cartagena, Colombia
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-crimson-600 flex-shrink-0" />
                +57 314 685 6422
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-crimson-600 flex-shrink-0" />
                contacto@apexmotorslab.co
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink-900 font-semibold mb-4 text-sm font-display">Horario</h4>
            <ul className="space-y-3 text-sm text-ink-600">
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-crimson-600 flex-shrink-0" />
                Lun - Vie: 8:00 AM - 6:00 PM
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-crimson-600 flex-shrink-0" />
                Sábado: 8:00 AM - 2:00 PM
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-ink-300 flex-shrink-0" />
                Domingo: Cerrado
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500 text-center sm:text-left">
            © {new Date().getFullYear()} Apex Motors Lab. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-center sm:text-right">
            <Sparkles className="w-3.5 h-3.5 text-crimson-600" />
            <span className="text-ink-500">Desarrollado con ingeniería de élite por</span>
            <span className="text-crimson-gradient font-bold">Nova Web</span>
            <span className="text-ink-400">— Tu idea, en la web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
