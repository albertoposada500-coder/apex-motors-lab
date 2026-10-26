import { useEffect, useState } from 'react';
import {
  X,
  User,
  Phone,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Hash,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  Lock,
  Wrench,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import {
  services,
  vehicleTypes,
  motoServices,
  motoBrands,
  formatCOP,
  buildWhatsAppUrl,
  buildMotoBookingQuote,
  generateDateOptions,
  formatDateLabel,
  hourToLabel,
  isSlotAvailable,
  WORKDAY_START,
  WORKDAY_END,
  type ServiceItem,
  type VehicleType,
  type VehicleMode,
  type Booking,
} from '@/lib/data';

interface BookingWizardProps {
  open: boolean;
  onClose: () => void;
  preselect: { service: ServiceItem | null; vehicleType: VehicleType; mode: VehicleMode };
  bookings: Booking[];
  onConfirmBooking: (booking: Booking) => void;
}

interface FormData {
  name: string;
  phone: string;
  brand: string;
  model: string;
  plate: string;
  year: string;
  serviceId: string;
  vehicleType: VehicleType;
  mode: VehicleMode;
  date: string;
  startHour: number;
}

const empty: FormData = {
  name: '',
  phone: '',
  brand: '',
  model: '',
  plate: '',
  year: '',
  serviceId: '',
  vehicleType: 'sedan',
  mode: 'carro',
  date: '',
  startHour: -1,
};

const dateOptions = generateDateOptions(7);

export default function BookingWizard({ open, onClose, preselect, bookings, onConfirmBooking }: BookingWizardProps) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(empty);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setConfirmed(false);
      setData({
        ...empty,
        mode: preselect.mode,
        vehicleType: preselect.vehicleType,
        serviceId: preselect.service?.id ?? '',
        date: dateOptions[0]?.value ?? '',
      });
    }
  }, [open, preselect]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const isMoto = data.mode === 'moto';
  const selectedCarService = services.find((s) => s.id === data.serviceId) ?? null;
  const selectedMotoService = motoServices.find((s) => s.id === data.serviceId) ?? null;
  const durationHours = isMoto
    ? (selectedMotoService?.durationHours ?? 1)
    : (selectedCarService?.durationHours ?? 1);

  const availableStartHours: { hour: number; available: boolean }[] = [];
  for (let h = WORKDAY_START; h <= WORKDAY_END - 1; h++) {
    availableStartHours.push({
      hour: h,
      available: isSlotAvailable(data.date, h, durationHours, bookings),
    });
  }

  const hasAnyAvailable = availableStartHours.some((s) => s.available);

  const stepValid = [
    data.name.trim().length >= 3 && data.phone.trim().length >= 7,
    isMoto
      ? data.brand.trim() && data.model.trim() && data.plate.trim().length >= 4
      : data.brand.trim() && data.model.trim() && data.plate.trim().length >= 4 && data.year.trim().length === 4,
    !!data.serviceId && data.startHour >= 0,
    true,
  ];

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleConfirm = () => {
    if (data.startHour < 0) return;
    const endHour = data.startHour + durationHours;

    let msg: string;
    if (isMoto && selectedMotoService) {
      msg = buildMotoBookingQuote({
        name: data.name,
        phone: data.phone,
        brand: data.brand,
        model: data.model,
        plate: data.plate,
        serviceName: selectedMotoService.name,
        duration: selectedMotoService.duration,
        price: selectedMotoService.price,
        dateLabel: formatDateLabel(data.date),
        hourLabel: `${hourToLabel(data.startHour)} - ${hourToLabel(endHour)}`,
      });
    } else if (selectedCarService) {
      msg = `*NUEVA CITA - APEX MOTORS LAB*\n\n*Cliente:* ${data.name}\n*Teléfono:* ${data.phone}\n\n*Vehículo:* ${data.brand} ${data.model} ${data.year}\n*Placa:* ${data.plate.toUpperCase()}\n*Tipo:* ${vehicleTypes.find((v) => v.id === data.vehicleType)?.label}\n\n*Servicio:* ${selectedCarService.name}\n*Duración estimada:* ${selectedCarService.duration} (${durationHours}h)\n*Precio estimado:* ${formatCOP(selectedCarService.prices[data.vehicleType])}\n\n*Fecha:* ${formatDateLabel(data.date)}\n*Hora:* ${hourToLabel(data.startHour)} - ${hourToLabel(endHour)}\n\nQuedo atento(a) a la confirmación. ¡Gracias!`;
    } else {
      return;
    }

    window.open(buildWhatsAppUrl(msg), '_blank');

    onConfirmBooking({
      id: `bk-${Date.now()}`,
      date: data.date,
      startHour: data.startHour,
      endHour,
      serviceId: data.serviceId,
      plate: data.plate.toUpperCase(),
    });
    setConfirmed(true);
  };

  const steps = ['Cliente', 'Vehículo', 'Servicio', 'Confirmar'];
  const stepIcons = [User, Car, Sparkles, CheckCircle2];

  const serviceName = isMoto ? selectedMotoService?.name : selectedCarService?.name;
  const serviceDuration = isMoto ? selectedMotoService?.duration : selectedCarService?.duration;
  const servicePrice = isMoto
    ? (selectedMotoService ? formatCOP(selectedMotoService.price) : '')
    : (selectedCarService ? formatCOP(selectedCarService.prices[data.vehicleType]) : '');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-ink-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl border border-ink-200 shadow-card-hover animate-scale-in">
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xl border-b border-ink-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-crimson-500 to-crimson-700 flex items-center justify-center shadow-glow-crimson">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink-900 font-display">Agendar Cita</h2>
              <p className="text-xs text-ink-500">Reserva tu cupo en 4 pasos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-ink-400 hover:text-ink-900 hover:bg-ink-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pt-6">
          <div className="flex items-center gap-2">
            {steps.map((label, i) => {
              const Icon = stepIcons[i];
              const state = i < step ? 'done' : i === step ? 'current' : 'todo';
              return (
                <div key={label} className="flex-1 flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    state === 'done' ? 'bg-green-500/10 border border-green-500/30 text-green-600'
                    : state === 'current' ? 'bg-crimson-600 text-white shadow-glow-crimson'
                    : 'bg-ink-50 border border-ink-200 text-ink-400'
                  }`}>
                    {state === 'done' ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 rounded-full transition-colors ${i < step ? 'bg-green-500/40' : 'bg-ink-200'}`} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-ink-400">
            {steps.map((s, i) => (
              <span key={s} className={i === step ? 'text-crimson-600 font-semibold' : ''}>{s}</span>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Mode toggle - always visible at the top of each step */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex p-1 rounded-xl bg-ink-50 border border-ink-200">
              <button
                type="button"
                onClick={() => setData({ ...data, mode: 'carro', serviceId: '', startHour: -1 })}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                  data.mode === 'carro' ? 'bg-crimson-600 text-white shadow-glow-crimson' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <Car className="w-4 h-4" />
                Carro
              </button>
              <button
                type="button"
                onClick={() => setData({ ...data, mode: 'moto', serviceId: '', startHour: -1 })}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                  data.mode === 'moto' ? 'bg-crimson-600 text-white shadow-glow-crimson' : 'text-ink-600 hover:text-ink-900'
                }`}
              >
                <Wrench className="w-4 h-4" />
                Moto
              </button>
            </div>
          </div>

          {step === 0 && (
            <div className="space-y-4 animate-fade-up">
              <Field label="Nombre completo" icon={<User className="w-4 h-4" />}>
                <input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder="Ej: Juan Pérez" className="input" />
              </Field>
              <Field label="Teléfono / Celular" icon={<Phone className="w-4 h-4" />}>
                <input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} placeholder="Ej: 300 123 4567" inputMode="tel" className="input" />
              </Field>
            </div>
          )}

          {step === 1 && !isMoto && (
            <div className="space-y-4 animate-fade-up">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Marca" icon={<Car className="w-4 h-4" />}>
                  <input value={data.brand} onChange={(e) => setData({ ...data, brand: e.target.value })} placeholder="Ej: Toyota" className="input" />
                </Field>
                <Field label="Modelo">
                  <input value={data.model} onChange={(e) => setData({ ...data, model: e.target.value })} placeholder="Ej: Corolla" className="input" />
                </Field>
                <Field label="Placa" icon={<Hash className="w-4 h-4" />}>
                  <input value={data.plate} onChange={(e) => setData({ ...data, plate: e.target.value.toUpperCase() })} placeholder="Ej: XYZ-123" className="input uppercase tracking-wider font-semibold" />
                </Field>
                <Field label="Año">
                  <input value={data.year} onChange={(e) => setData({ ...data, year: e.target.value.replace(/\D/g, '').slice(0, 4) })} placeholder="Ej: 2021" inputMode="numeric" className="input" />
                </Field>
              </div>
              <Field label="Tipo de vehículo">
                <div className="grid grid-cols-3 gap-2">
                  {vehicleTypes.map((vt) => (
                    <button
                      key={vt.id}
                      type="button"
                      onClick={() => setData({ ...data, vehicleType: vt.id })}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                        data.vehicleType === vt.id
                          ? 'border-crimson-500 bg-crimson-50 text-ink-900 shadow-glow-crimson'
                          : 'border-ink-200 bg-white text-ink-600 hover:border-ink-300'
                      }`}
                    >
                      {vt.label}
                    </button>
                  ))}
                </div>
              </Field>
            </div>
          )}

          {step === 1 && isMoto && (
            <div className="space-y-4 animate-fade-up">
              <Field label="Marca de Moto" icon={<Wrench className="w-4 h-4" />}>
                <select
                  value={data.brand}
                  onChange={(e) => setData({ ...data, brand: e.target.value })}
                  className="input cursor-pointer"
                >
                  <option value="">Selecciona la marca</option>
                  {motoBrands.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </Field>
              <Field label="Cilindraje / Modelo">
                <input value={data.model} onChange={(e) => setData({ ...data, model: e.target.value })} placeholder="Ej: FZ 250, NS 200, NMAX 155, NKD 125" className="input" />
              </Field>
              <Field label="Placa" icon={<Hash className="w-4 h-4" />}>
                <input value={data.plate} onChange={(e) => setData({ ...data, plate: e.target.value.toUpperCase() })} placeholder="Ej: ABC-12D" className="input uppercase tracking-wider font-semibold" />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-up">
              <Field label="Servicio">
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {isMoto
                    ? motoServices.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setData({ ...data, serviceId: s.id, startHour: -1 })}
                          className={`w-full text-left p-3 rounded-xl border transition-all ${
                            data.serviceId === s.id
                              ? 'border-crimson-500 bg-crimson-50 shadow-glow-crimson'
                              : 'border-ink-200 bg-white hover:border-ink-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-ink-900">{s.name}</div>
                              <div className="text-xs text-ink-500 mt-0.5">{s.duration} · {s.durationHours}h</div>
                            </div>
                            <div className="text-sm font-bold text-crimson-600">{formatCOP(s.price)}</div>
                          </div>
                        </button>
                      ))
                    : services.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setData({ ...data, serviceId: s.id, startHour: -1 })}
                          className={`w-full text-left p-3 rounded-xl border transition-all ${
                            data.serviceId === s.id
                              ? 'border-crimson-500 bg-crimson-50 shadow-glow-crimson'
                              : 'border-ink-200 bg-white hover:border-ink-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-ink-900">{s.name}</div>
                              <div className="text-xs text-ink-500 mt-0.5">{s.duration} · {s.durationHours}h</div>
                            </div>
                            <div className="text-sm font-bold text-crimson-600">{formatCOP(s.prices[data.vehicleType])}</div>
                          </div>
                        </button>
                      ))
                  }
                </div>
              </Field>

              <Field label="Fecha" icon={<CalendarDays className="w-4 h-4" />}>
                <select
                  value={data.date}
                  onChange={(e) => setData({ ...data, date: e.target.value, startHour: -1 })}
                  className="input cursor-pointer"
                >
                  {dateOptions.map((d) => (
                    <option key={d.value} value={d.value}>{d.label}</option>
                  ))}
                </select>
              </Field>

              {(selectedCarService || selectedMotoService) && (
                <Field label={`Hora de inicio · ${durationHours}h de servicio`}>
                  {!hasAnyAvailable ? (
                    <div className="text-center py-6 px-4 rounded-xl bg-ink-50 border border-ink-200">
                      <Lock className="w-5 h-5 text-ink-400 mx-auto mb-2" />
                      <p className="text-sm text-ink-500">No hay franjas disponibles para esta fecha y servicio. Por favor elige otra fecha.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableStartHours.map((slot) => {
                        const isSelected = data.startHour === slot.hour;
                        const endH = slot.hour + durationHours;
                        return (
                          <button
                            key={slot.hour}
                            type="button"
                            disabled={!slot.available}
                            onClick={() => setData({ ...data, startHour: slot.hour })}
                            className={`relative p-2.5 rounded-lg border text-center transition-all ${
                              isSelected
                                ? 'border-crimson-500 bg-crimson-50 shadow-glow-crimson'
                                : slot.available
                                  ? 'border-ink-200 bg-white hover:border-ink-300 cursor-pointer'
                                  : 'border-ink-100 bg-ink-50 cursor-not-allowed opacity-60'
                            }`}
                          >
                            <div className={`text-sm font-semibold ${slot.available ? 'text-ink-900' : 'text-ink-400'}`}>
                              {hourToLabel(slot.hour)}
                            </div>
                            <div className="text-[10px] text-ink-400 mt-0.5">
                              {slot.available ? `→ ${hourToLabel(endH)}` : 'Ocupado'}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </Field>
              )}
            </div>
          )}

          {step === 3 && !confirmed && (
            <div className="space-y-3 animate-fade-up">
              <p className="text-sm text-ink-600 mb-3">Revisa que todo esté correcto antes de enviar al taller.</p>
              <SummaryRow label="Cliente" value={data.name} />
              <SummaryRow label="Teléfono" value={data.phone} />
              <SummaryRow label={isMoto ? 'Moto' : 'Vehículo'} value={isMoto ? `${data.brand} ${data.model}` : `${data.brand} ${data.model} ${data.year}`} />
              <SummaryRow label="Placa" value={data.plate.toUpperCase()} highlight />
              {!isMoto && <SummaryRow label="Tipo" value={vehicleTypes.find((v) => v.id === data.vehicleType)?.label ?? ''} />}
              <SummaryRow label="Servicio" value={serviceName ?? ''} />
              <SummaryRow label="Duración" value={serviceDuration ? `${serviceDuration} (${durationHours}h)` : ''} />
              <SummaryRow label="Precio estimado" value={servicePrice} highlight />
              <SummaryRow label="Fecha" value={formatDateLabel(data.date)} />
              <SummaryRow label="Horario" value={data.startHour >= 0 ? `${hourToLabel(data.startHour)} - ${hourToLabel(data.startHour + durationHours)}` : ''} highlight />
            </div>
          )}

          {step === 3 && confirmed && (
            <div className="text-center py-8 animate-scale-in">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-ink-900 font-display">¡Cita enviada al taller!</h3>
              <p className="mt-2 text-sm text-ink-600 max-w-sm mx-auto">
                Abrimos WhatsApp con tu reserva lista para enviar. Confirma el mensaje y nuestro equipo validará tu cupo. Ese horario ya quedó bloqueado para nuevas reservas.
              </p>
              <button onClick={handleConfirm} className="mt-6 btn-secondary">
                <WhatsAppIcon className="w-5 h-5 text-green-600" />
                Reenviar por WhatsApp
              </button>
              <button onClick={onClose} className="mt-3 block mx-auto text-sm text-ink-500 hover:text-ink-900">
                Cerrar
              </button>
            </div>
          )}
        </div>

        {step < 3 && (
          <div className="px-6 pb-6 flex items-center justify-between gap-3">
            <button
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Atrás
            </button>
            <button
              onClick={next}
              disabled={!stepValid[step]}
              className="btn-primary text-sm py-2.5 px-5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 3 && !confirmed && (
          <div className="px-6 pb-6 flex items-center justify-between gap-3">
            <button onClick={back} className="inline-flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Atrás
            </button>
            <button onClick={handleConfirm} className="btn-primary">
              <Check className="w-4 h-4" />
              Confirmar Cita y Enviar al Taller
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-ink-600 mb-1.5">{label}</span>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">{icon}</span>}
        <div className={icon ? '[&_.input]:pl-10' : ''}>{children}</div>
      </div>
    </label>
  );
}

function SummaryRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5 px-4 rounded-lg bg-ink-50 border border-ink-100">
      <span className="text-xs text-ink-500">{label}</span>
      <span className={`text-sm font-semibold text-right ${highlight ? 'text-crimson-600' : 'text-ink-900'}`}>{value}</span>
    </div>
  );
}
