import { useState } from 'react';
import { Wrench, Send } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { buildWhatsAppUrl, buildCustomQuote } from '@/lib/data';

export default function CustomServiceForm() {
  const [brandModel, setBrandModel] = useState('');
  const [issue, setIssue] = useState('');

  const send = () => {
    if (!brandModel.trim() || !issue.trim()) return;
    window.open(buildWhatsAppUrl(buildCustomQuote(brandModel, issue)), '_blank');
  };

  return (
    <section className="relative py-16 sm:py-20 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="card card-hover p-6 sm:p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-crimson-50 border border-crimson-100 flex items-center justify-center flex-shrink-0">
              <Wrench className="w-6 h-6 text-crimson-600" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900 font-display">
                ¿No encuentras el servicio que buscas o tu carro tiene una falla específica?
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                Cuéntanos qué le ocurre a tu auto (ruidos, testigos encendidos) y te enviamos una cotización estimada por WhatsApp.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <label className="block">
              <span className="block text-xs font-semibold text-ink-600 mb-1.5">Marca y Modelo de tu vehículo</span>
              <input
                value={brandModel}
                onChange={(e) => setBrandModel(e.target.value)}
                placeholder="Ej: Toyota Corolla 2019"
                className="input"
              />
            </label>
            <label className="block">
              <span className="block text-xs font-semibold text-ink-600 mb-1.5">Describe la falla o servicio necesario</span>
              <textarea
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Ej: El carro hace un ruido en la parte delantera al frenar y el testigo del motor está encendido..."
                rows={4}
                className="input resize-none"
              />
            </label>
            <button
              onClick={send}
              disabled={!brandModel.trim() || !issue.trim()}
              className="btn-wa disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar Diagnóstico / Cotizar por WhatsApp
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
