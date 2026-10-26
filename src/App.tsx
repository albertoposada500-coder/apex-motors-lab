import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Services from '@/components/Services';
import CustomServiceForm from '@/components/CustomServiceForm';
import EmergencyReception from '@/components/EmergencyReception';
import MileageSimulator from '@/components/MileageSimulator';
import Gallery from '@/components/Gallery';
import Tracking from '@/components/Tracking';
import Benefits from '@/components/Benefits';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import BookingWizard from '@/components/BookingWizard';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { CalendarPlus, Cpu, Clock, ShieldCheck } from 'lucide-react';
import type { ServiceItem, VehicleType, Booking, VehicleMode } from '@/lib/data';
import { mockBookings } from '@/lib/data';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselect, setPreselect] = useState<{ service: ServiceItem | null; vehicleType: VehicleType; mode: VehicleMode }>({
    service: null,
    vehicleType: 'sedan',
    mode: 'carro',
  });
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const openBooking = (service: ServiceItem | null = null, vehicleType: VehicleType = 'sedan') => {
    setPreselect({ service, vehicleType });
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-ink-900 antialiased">
      <Navbar onAgendar={() => openBooking()} />
      <main>
        <Hero onAgendar={() => openBooking()} />
        <Brands />
        <Services />
        <CustomServiceForm />
        <EmergencyReception />
        <MileageSimulator />
        <Gallery />

        <section id="agendar" className="relative py-20 sm:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="chip bg-crimson-50 border border-crimson-200 text-crimson-700">
                <CalendarPlus className="w-3.5 h-3.5" />
                Reserva tu cupo
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 tracking-tight font-display">
                Agenda tu cita en minutos
              </h2>
              <p className="mt-4 text-ink-600">
                Completa el formulario, elige tu franja horaria y envía la reserva directamente al taller por WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 mb-10">
              {[
                { icon: Cpu, title: 'Diagnóstico computarizado', sub: 'Tecnología OEM en cada revisión' },
                { icon: ShieldCheck, title: 'Garantía certificada', sub: 'Respaldamos cada servicio' },
                { icon: Clock, title: 'Cupos confirmados', sub: 'Sin filas ni esperas innecesarias' },
              ].map((f) => (
                <div key={f.title} className="card card-hover p-5 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border bg-crimson-50 border-crimson-100 flex-shrink-0">
                    <f.icon className="w-5 h-5 text-crimson-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">{f.title}</div>
                    <div className="text-xs text-ink-500 mt-0.5">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={() => openBooking()} className="btn-wa">
                <WhatsAppIcon className="w-5 h-5" />
                Iniciar agendamiento
              </button>
            </div>
          </div>
        </section>

        <Tracking />
        <Benefits />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
      <BookingWizard
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselect={preselect}
        bookings={bookings}
        onConfirmBooking={(b) => setBookings((prev) => [...prev, b])}
      />
    </div>
  );
}
