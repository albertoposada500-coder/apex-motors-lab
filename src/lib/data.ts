export type VehicleMode = 'carro' | 'moto';

export type VehicleType = 'sedan' | 'suv' | 'lujo';

export type MotoType = 'deportiva' | 'urbana' | 'ciclomotor';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  durationHours: number;
  prices: Record<VehicleType, number>;
  icon: string;
  features: string[];
  image: string;
  accent: 'fire' | 'volt';
}

export const vehicleTypes: { id: VehicleType; label: string; description: string }[] = [
  { id: 'sedan', label: 'Sedán', description: 'Vehículos compactos y familiares' },
  { id: 'suv', label: 'SUV / Camioneta', description: 'Vehículos de mayor tamaño' },
  { id: 'lujo', label: 'Vehículo de Lujo', description: 'Modelos premium y alta gama' },
];

export const services: ServiceItem[] = [
  {
    id: 'ac',
    name: 'Mantenimiento de Aire Acondicionado A/C',
    description: 'Diagnóstico y reparación del sistema A/C para soportar el calor de Cartagena. Recarga de gas, limpieza de ductos y cambio de filtros de cabina.',
    duration: '1 - 2 horas',
    durationHours: 2,
    prices: { sedan: 150000, suv: 180000, lujo: 230000 },
    icon: 'Snowflake',
    features: [
      'Recarga de gas refrigerante',
      'Limpieza y desinfección de ductos',
      'Cambio de filtros de cabina',
      'Prueba de presión y rendimiento',
    ],
    image: 'https://images.pexels.com/photos/8985662/pexels-photo-8985662.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
  {
    id: 'refrigeracion',
    name: 'Sistema de Refrigeración Anti-Recalentamiento',
    description: 'Revisión completa del sistema de enfriamiento para evitar recalentamientos en tráfico pesado. Radiador, bomba de agua y termostato.',
    duration: '2 - 3 horas',
    durationHours: 3,
    prices: { sedan: 130000, suv: 160000, lujo: 210000 },
    icon: 'Droplet',
    features: [
      'Limpieza y purga del radiador',
      'Revisión de bomba de agua y termostato',
      'Cambio de refrigerante',
      'Prueba de presión del sistema',
    ],
    image: 'https://images.pexels.com/photos/34351909/pexels-photo-34351909.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
  {
    id: 'chasis',
    name: 'Tratamiento Anti-corrosivo de Chasis (Salitre)',
    description: 'Protección especializada contra el salitre costero. Limpieza, tratamiento antioxidante y sellado del chasis para alargar la vida útil.',
    duration: '3 - 4 horas',
    durationHours: 4,
    prices: { sedan: 180000, suv: 220000, lujo: 280000 },
    icon: 'ShieldCheck',
    features: [
      'Limpieza profunda de chasis en rampa',
      'Aplicación de antioxidante de base petróleo',
      'Sellado de zonas críticas',
      'Reporte fotográfico del estado previo',
    ],
    image: 'https://images.pexels.com/photos/8986137/pexels-photo-8986137.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
  {
    id: 'peritaje',
    name: 'Peritaje Integral Pre-Compra + Reporte ECU',
    description: 'Inspección completa previa a compra de usados con scanner computarizado ECU. Reporte técnico detallado del estado real del vehículo.',
    duration: '2 - 3 horas',
    durationHours: 2,
    prices: { sedan: 220000, suv: 260000, lujo: 320000 },
    icon: 'ClipboardCheck',
    features: [
      'Revisión de 120 puntos en rampa',
      'Scanner computarizado ECU',
      'Reporte fotográfico digital',
      'Verificación de legalidad y VIN',
    ],
    image: 'https://images.pexels.com/photos/4116191/pexels-photo-4116191.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
  {
    id: 'suspension',
    name: 'Suspensión y Tren Delantero',
    description: 'Diagnóstico y reparación de suspensión y tren delantero. Elimina ruidos, vibraciones y restaura la estabilidad de dirección.',
    duration: '2 - 3 horas',
    durationHours: 3,
    prices: { sedan: 160000, suv: 200000, lujo: 260000 },
    icon: 'Disc3',
    features: [
      'Inspección de amortiguadores y espirales',
      'Revisión de rótulas y terminales',
      'Alineación y balanceo',
      'Diagnóstico de dirección asistida',
    ],
    image: 'https://images.pexels.com/photos/13393008/pexels-photo-13393008.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
  {
    id: 'sincronizacion',
    name: 'Sincronización Electrónica e Inyectores',
    description: 'Sincronización computarizada y limpieza profunda del sistema de inyección para máximo rendimiento y consumo eficiente.',
    duration: '3 - 4 horas',
    durationHours: 3,
    prices: { sedan: 190000, suv: 230000, lujo: 290000 },
    icon: 'Gauge',
    features: [
      'Sincronización electrónica',
      'Limpieza ultrasonido de inyectores',
      'Ajuste de mezcla y ralentí',
      'Prueba de emisiones',
    ],
    image: 'https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&w=800',
    accent: 'crimson',
  },
];

export interface TimeSlot {
  id: string;
  label: string;
  range: string;
}

export const timeSlots: TimeSlot[] = [
  { id: 'manana', label: 'Turno Mañana', range: '8:00 AM - 11:00 AM' },
  { id: 'mediodia', label: 'Turno Mediodía', range: '11:00 AM - 2:00 PM' },
  { id: 'tarde', label: 'Turno Tarde', range: '2:00 PM - 5:00 PM' },
];

export const WORKDAY_START = 8;
export const WORKDAY_END = 17;

export interface Booking {
  id: string;
  date: string;
  startHour: number;
  endHour: number;
  serviceId: string;
  plate: string;
}

function tomorrowDate(offset: number): string {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().split('T')[0];
}

export const mockBookings: Booking[] = [
  { id: 'b1', date: tomorrowDate(1), startHour: 8, endHour: 10, serviceId: 'ac', plate: 'TST-001' },
  { id: 'b2', date: tomorrowDate(1), startHour: 14, endHour: 17, serviceId: 'sincronizacion', plate: 'TST-002' },
  { id: 'b3', date: tomorrowDate(2), startHour: 11, endHour: 13, serviceId: 'peritaje', plate: 'TST-003' },
];

export function formatDateLabel(dateStr: string): string {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('es-CO', { weekday: 'short', day: 'numeric', month: 'short' });
}

export function hourToLabel(hour: number): string {
  const h = Math.floor(hour);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${display}:00 ${ampm}`;
}

export function isSlotAvailable(
  dateStr: string,
  startHour: number,
  durationHours: number,
  bookings: Booking[],
): boolean {
  const newStart = startHour;
  const newEnd = startHour + durationHours;
  if (newEnd > WORKDAY_END) return false;
  return !bookings.some(
    (b) => b.date === dateStr && newStart < b.endHour && newEnd > b.startHour,
  );
}

export function generateDateOptions(count: number): { value: string; label: string }[] {
  const opts: { value: string; label: string }[] = [];
  for (let i = 1; i <= count; i++) {
    const d = new Date();
  d.setDate(d.getDate() + i);
    const value = d.toISOString().split('T')[0];
    const label = d.toLocaleDateString('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });
    opts.push({ value, label: label.charAt(0).toUpperCase() + label.slice(1) });
  }
  return opts;
}

export interface TrackingStage {
  id: number;
  title: string;
  description: string;
  icon: string;
  date: string;
}

export interface VehicleTracking {
  plate: string;
  owner: string;
  vehicle: string;
  service: string;
  currentStage: number;
  stages: TrackingStage[];
}

export const sampleTrackings: VehicleTracking[] = [
  {
    plate: 'XYZ-123',
    owner: 'Carlos Mendoza',
    vehicle: 'Toyota Corolla 2021',
    service: 'Mantenimiento Preventivo (10k / 20k km)',
    currentStage: 2,
    stages: [
      { id: 1, title: 'Recibido en Taller', description: 'Check-in completado. Vehículo ingresado al patio.', icon: 'LogIn', date: '25 Oct, 7:45 AM' },
      { id: 2, title: 'En Diagnóstico Computarizado', description: 'Scanner en proceso. Evaluando sistemas electrónicos.', icon: 'Cpu', date: '25 Oct, 9:10 AM' },
      { id: 3, title: 'Esperando Aprobación de Repuestos', description: 'Pendiente. Se notificará al concluir el diagnóstico.', icon: 'PackageCheck', date: 'Pendiente' },
      { id: 4, title: 'Listo para Retirar', description: 'Pendiente. Te avisaremos cuando esté a punto.', icon: 'CheckCircle2', date: 'Pendiente' },
    ],
  },
  {
    plate: 'ABC-789',
    owner: 'Laura Fernández',
    vehicle: 'Mazda CX-5 2022',
    service: 'Sincronización y Limpieza de Inyectores',
    currentStage: 3,
    stages: [
      { id: 1, title: 'Recibido en Taller', description: 'Check-in completado. Vehículo ingresado al patio.', icon: 'LogIn', date: '25 Oct, 8:15 AM' },
      { id: 2, title: 'En Diagnóstico Computarizado', description: 'Diagnóstico finalizado. Se requieren repuestos.', icon: 'Cpu', date: '25 Oct, 9:40 AM' },
      { id: 3, title: 'Esperando Aprobación de Repuestos', description: 'Inyectores por reemplazar. Aprobación enviada vía WhatsApp.', icon: 'PackageCheck', date: '25 Oct, 10:30 AM' },
      { id: 4, title: 'Listo para Retirar', description: 'Pendiente. Te avisaremos cuando esté a punto.', icon: 'CheckCircle2', date: 'Pendiente' },
    ],
  },
  {
    plate: 'JKL-456',
    owner: 'Andrés Gómez',
    vehicle: 'BMW Serie 3 2020',
    service: 'Peritaje Preventivo Integral',
    currentStage: 4,
    stages: [
      { id: 1, title: 'Recibido en Taller', description: 'Check-in completado. Vehículo ingresado al patio.', icon: 'LogIn', date: '24 Oct, 2:00 PM' },
      { id: 2, title: 'En Diagnóstico Computarizado', description: 'Inspección de 120 puntos finalizada.', icon: 'Cpu', date: '24 Oct, 4:15 PM' },
      { id: 3, title: 'Esperando Aprobación de Repuestos', description: 'No se requieren repuestos. Aprobado automáticamente.', icon: 'PackageCheck', date: '24 Oct, 5:00 PM' },
      { id: 4, title: 'Listo para Retirar', description: 'Vehículo a punto. Puedes retirarlo en horario de atención.', icon: 'CheckCircle2', date: '25 Oct, 8:00 AM' },
    ],
  },
];

export const WHATSAPP_NUMBER = '573146856422';

export function formatCOP(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(value);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function buildServiceQuote(service: ServiceItem, vehicleType: VehicleType): string {
  return `Hola Apex Motors, quisiera cotizar el servicio de ${service.name} para mi vehículo.`;
}

export function buildMotoBookingQuote(data: {
  name: string;
  phone: string;
  brand: string;
  model: string;
  plate: string;
  serviceName: string;
  duration: string;
  price: number;
  dateLabel: string;
  hourLabel: string;
}): string {
  return `*NUEVA CITA MOTO - APEX MOTORS LAB*\n\n*Cliente:* ${data.name}\n*Teléfono:* ${data.phone}\n\n*MOTO:* ${data.brand} ${data.model}\n*Placa:* ${data.plate.toUpperCase()}\n\n*Servicio:* ${data.serviceName}\n*Duración:* ${data.duration}\n*Precio:* ${formatCOP(data.price)}\n\n*Fecha:* ${data.dateLabel}\n*Hora:* ${data.hourLabel}\n\nHola Apex Motors, quiero agendar un servicio para mi MOTO ${data.brand} ${data.model} con placa ${data.plate.toUpperCase()}. ¡Gracias!`;
}

export const brands = ['Toyota', 'Mazda', 'BMW', 'Audi', 'Mercedes-Benz', 'Ford', 'Renault'];

export const motoBrands = ['Yamaha', 'Bajaj / Pulsar', 'Suzuki', 'Honda', 'AKT', 'TVS'];

export const motoVehicleTypes: { id: MotoType; label: string; description: string }[] = [
  { id: 'deportiva', label: 'Deportiva', description: 'Alto cilindraje (250cc+)' },
  { id: 'urbana', label: 'Urbana', description: 'Cilindraje medio (125cc - 200cc)' },
  { id: 'ciclomotor', label: 'Ciclomotor', description: 'Bajo cilindraje (hasta 125cc)' },
];

export interface MotoServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  durationHours: number;
  price: number;
  icon: string;
  features: string[];
  image: string;
}

export const motoServices: MotoServiceItem[] = [
  {
    id: 'moto-mant-general',
    name: 'Mantenimiento General + Lavado Técnico y Grafitado',
    description: 'Cambio de aceite, ajuste de guayas, calibración de válvulas y protección anticorrosiva contra salitre costero.',
    duration: '1 - 2 horas',
    durationHours: 2,
    price: 70000,
    icon: 'Wrench',
    features: [
      'Cambio de aceite sintético',
      'Ajuste y calibración de guayas',
      'Calibración de válvulas',
      'Lavado técnico y grafitado anti-salitre',
    ],
    image: 'https://images.pexels.com/photos/3822840/pexels-photo-3822840.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'moto-kit-arrastre',
    name: 'Mantenimiento de Kit de Arrastre y Frenos',
    description: 'Tensionado, lubricación y limpieza de cadena, cambio de pastillas y bandas para tu seguridad en vía.',
    duration: '1 - 2 horas',
    durationHours: 2,
    price: 45000,
    icon: 'Disc3',
    features: [
      'Tensionado y lubricación de cadena',
      'Limpieza profunda de kit de arrastre',
      'Cambio de pastillas de freno',
      'Revisión de bandas y sistema de frenado',
    ],
    image: 'https://images.pexels.com/photos/38202543/pexels-photo-38202543.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'moto-sincronizacion',
    name: 'Sincronización Electrónica FI / Carburador',
    description: 'Limpieza de inyector o carburador, cuerpo de aceleración y filtro de aire para máximo ahorro de gasolina.',
    duration: '1 - 2 horas',
    durationHours: 2,
    price: 65000,
    icon: 'Gauge',
    features: [
      'Limpieza de inyector o carburador',
      'Limpieza de cuerpo de aceleración',
      'Cambio de filtro de aire',
      'Ajuste de mezcla para ahorro de combustible',
    ],
    image: 'https://images.pexels.com/photos/11890959/pexels-photo-11890959.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'moto-suspension',
    name: 'Mantenimiento de Suspensión Telescópica',
    description: 'Cambio de retenes, aceite de barras y eliminación de fugas causadas por huecos y baches de la vía.',
    duration: '2 - 3 horas',
    durationHours: 3,
    price: 80000,
    icon: 'ShieldCheck',
    features: [
      'Cambio de retenes de horquilla',
      'Renovación de aceite de barras',
      'Eliminación de fugas y ruidos',
      'Prueba de amortiguación en ruta',
    ],
    image: 'https://images.pexels.com/photos/10392250/pexels-photo-10392250.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'moto-peritaje',
    name: 'Peritaje Técnico Pre-Compra de Moto',
    description: 'Revisión de chasis, compresión de motor, sistema eléctrico y reporte completo para traspaso seguro.',
    duration: '1 - 2 horas',
    durationHours: 2,
    price: 90000,
    icon: 'ClipboardCheck',
    features: [
      'Revisión de chasis y estructura',
      'Prueba de compresión de motor',
      'Inspección de sistema eléctrico',
      'Reporte técnico para traspaso',
    ],
    image: 'https://images.pexels.com/photos/3855224/pexels-photo-3855224.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'moto-express',
    name: 'Revisión Electromecánica Express',
    description: 'Chequeo rápido de batería, bujía, luces y sistema de carga para trabajar sin varadas en el día.',
    duration: '30 min - 1 hora',
    durationHours: 1,
    price: 35000,
    icon: 'Snowflake',
    features: [
      'Revisión de batería y carga',
      'Cambio o limpieza de bujía',
      'Inspección de luces y direccionales',
      'Diagnóstico de sistema de carga',
    ],
    image: 'https://images.pexels.com/photos/32576306/pexels-photo-32576306.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function buildMotoServiceQuote(service: MotoServiceItem): string {
  return `Hola Apex Motors, quiero cotizar el servicio para MOTO: ${service.name}. ¿Me confirman disponibilidad?`;
}

export interface MileagePlan {
  km: string;
  label: string;
  items: string[];
  cost: number;
}

export const mileagePlans: MileagePlan[] = [
  {
    km: '10000',
    label: '10.000 km',
    items: ['Cambio de aceite sintético', 'Filtro de aceite', 'Filtro de aire', 'Revisión de niveles y líquidos', 'Inspección de frenos', 'Diagnóstico computarizado'],
    cost: 180000,
  },
  {
    km: '30000',
    label: '30.000 km',
    items: ['Todo lo de 10.000 km', 'Filtro de combustible', 'Bujías (iridio)', 'Limpieza de cuerpo de aceleración', 'Alineación y balanceo', 'Revisión de suspensión'],
    cost: 320000,
  },
  {
    km: '50000',
    label: '50.000 km',
    items: ['Todo lo de 30.000 km', 'Cambio de refrigerante', 'Limpieza de radiador', 'Revisión de amortiguadores', 'Tratamiento anti-corrosivo chasis', 'Scanner ECU completo'],
    cost: 480000,
  },
  {
    km: '100000',
    label: '100.000 km',
    items: ['Todo lo de 50.000 km', 'Kit de distribución (correa/tensor)', 'Bomba de agua', 'Inyectores (ultrasonido)', 'Líquido de frenos', 'Servicio de transmisión'],
    cost: 850000,
  },
];

export interface GalleryCase {
  id: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const galleryCases: GalleryCase[] = [
  {
    id: 'chasis',
    title: 'Tratamiento Anticorrosivo',
    subtitle: 'Chasis oxidado por salitre costero vs. chasis con protección cerámica',
    beforeImage: 'https://images.pexels.com/photos/37175105/pexels-photo-37175105.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/8985514/pexels-photo-8985514.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeLabel: 'Chasis con óxido por salitre',
    afterLabel: 'Chasis con protección cerámica',
  },
  {
    id: 'motor',
    title: 'Restauro de Motor',
    subtitle: 'Motor grasoso y acumulado vs. limpieza técnica profunda',
    beforeImage: 'https://images.pexels.com/photos/14038343/pexels-photo-14038343.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/13690607/pexels-photo-13690607.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeLabel: 'Motor grasoso acumulado',
    afterLabel: 'Limpieza técnica profunda',
  },
  {
    id: 'frenos',
    title: 'Sistema de Frenos',
    subtitle: 'Discos desgastados vs. rectificado e instalación de pastillas cerámicas',
    beforeImage: 'https://images.pexels.com/photos/13393008/pexels-photo-13393008.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/34277923/pexels-photo-34277923.jpeg?auto=compress&cs=tinysrgb&w=800',
    beforeLabel: 'Discos desgastados',
    afterLabel: 'Rectificado y pastillas cerámicas',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  { question: '¿Expiden factura electrónica?', answer: 'Sí, somos un taller constituido. Expedimos factura electrónica válida para personas naturales y jurídicas, con tu respectivo NIT.' },
  { question: '¿Qué métodos de pago aceptan?', answer: 'Aceptamos efectivo, transferencia Bancolombia, Nequi, Daviplata y tarjetas débito/crédito. También pagos contra entrega en casos puntuales.' },
  { question: '¿Tienen garantía los trabajos?', answer: 'Sí. Todos nuestros trabajos cuentan con garantía por escrito de 3 a 6 meses según el servicio, respaldada por reporte técnico y fotográfico.' },
  { question: '¿Puedo dejar mi vehículo de un día para otro?', answer: 'Claro. Contamos con patio cerrado, cámaras 24/7 y póliza de custodia. Tu vehículo queda seguro mientras se gestionan los repuestos.' },
];

export function buildCustomQuote(brandModel: string, issue: string): string {
  return `Hola Apex Motors, tengo un vehículo ${brandModel}. La falla o servicio que necesito es: ${issue}. ¿Me pueden enviar una cotización estimada?`;
}

export function buildEmergencyQuote(): string {
  return 'Hola Apex Motors, mi vehículo tuvo una falla técnica en carretera (se recalentó / se varó). Estoy gestionando la grúa hacia el taller. Necesito recepción prioritaria sin filas. ¿Me pueden confirmar disponibilidad?';
}

export function buildMileageQuote(plan: MileagePlan): string {
  return `Hola Apex Motors, quisiera agendar el mantenimiento de ${plan.label} (${formatCOP(plan.cost)}). ¿Me confirman disponibilidad?`;
}

export interface Review {
  name: string;
  avatar: string;
  vehicle: string;
  zone: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: 'Marco Tulio R.',
    avatar: 'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    vehicle: 'Toyota Fortuner',
    zone: 'Bocagrande',
    rating: 5,
    text: 'Llevé mi Toyota Fortuner porque el aire acondicionado dejó de enfriar en pleno trancón en La Castellana. En 2 horas me solucionaron la fuga y recargaron el gas. Servicio impecable.',
    date: 'Hace 2 semanas',
  },
  {
    name: 'Andrés G.',
    avatar: 'https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    vehicle: 'Camioneta usada',
    zone: 'Manga',
    rating: 5,
    text: 'El peritaje anticorrosivo fue clave antes de comprar mi camioneta usada. Me mostraron fotos en rampa de cómo estaba el chasis por el salitre. Transparencia total.',
    date: 'Hace 1 mes',
  },
  {
    name: 'Camilo V.',
    avatar: 'https://images.pexels.com/photos/34081654/pexels-photo-34081654.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    vehicle: 'Mazda 3',
    zone: 'Zona Norte',
    rating: 5,
    text: 'Sincronización rápida y el carro quedó suave para viajar por la Vía al Mar. Agendé por WhatsApp el turno de las 8:00 AM y me recibieron de una.',
    date: 'Hace 3 semanas',
  },
];
