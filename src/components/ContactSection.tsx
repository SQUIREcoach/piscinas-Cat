import React, { useState } from 'react';
import { QuoteFormData } from '../types';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialPoolType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService = 'Construcción de piscinas',
  initialPoolType = 'Piscinas de obra y hormigón gunitado'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    municipality: '',
    province: 'Barcelona',
    serviceType: initialService,
    poolType: initialPoolType,
    estimatedSize: '8x4 m',
    timeframe: 'Próximos 1 - 3 meses',
    comments: '',
    acceptedPrivacy: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate high reliability instant processing
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola, me gustaría solicitar presupuesto para una piscina en Cataluña.\n` +
      `Nombre: ${formData.fullName || 'Cliente'}\n` +
      `Municipio: ${formData.municipality || 'Cataluña'} (${formData.province})\n` +
      `Servicio: ${formData.serviceType}\n` +
      `Tipo de piscina: ${formData.poolType}\n` +
      `Dimensiones: ${formData.estimatedSize}`
    );
    return `https://wa.me/34600123456?text=${text}`;
  };

  return (
    <section id="presupuesto" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>SOLICITA PRESUPUESTO SIN COMPROMISO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Haz realidad tu proyecto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-300 font-light max-w-2xl mx-auto">
            Cuéntanos cómo imaginas tu piscina. Nuestro equipo estudiará tu proyecto y te asesorará para encontrar la solución más adecuada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-850/90 p-6 sm:p-8 rounded-2xl border border-stone-700/80 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                ¿Prefieres hablar directamente con un técnico?
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Te asesoramos sin compromiso sobre viabilidad técnica, normativa municipal en tu ayuntamiento catalán y estimación de costes.
              </p>

              {/* Direct channels */}
              <div className="space-y-4">
                <a
                  href="tel:+34932123456"
                  className="flex items-center gap-4 p-4 rounded-xl bg-stone-800/80 hover:bg-stone-750 border border-stone-700 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 font-medium block">Atención telefónica directa</span>
                    <span className="text-base font-bold text-white">932 123 456 / 600 123 456</span>
                  </div>
                </a>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-700/50 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-300 font-medium block">Chat instantáneo</span>
                    <span className="text-base font-bold text-white">Contactar por WhatsApp</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-stone-800/80 border border-stone-700">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-400 font-medium block">Email para proyectos y planos</span>
                    <span className="text-sm font-semibold text-white">proyectos@piscinasdecatalunya.cat</span>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-4 border-t border-stone-700/70 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Garantía decenal estructural por escrito</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Respuesta y valoración inicial en menos de 24 horas</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Visita técnica in situ gratuita en toda Cataluña</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-stone-850 p-6 sm:p-8 rounded-2xl border border-stone-700/90 shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-10 px-4 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Solicitud recibida con éxito!</h3>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Muchas gracias, <strong className="text-white">{formData.fullName || 'estimado cliente'}</strong>. Nuestro departamento técnico está analizando tu solicitud para el municipio de <strong className="text-cyan-300">{formData.municipality || 'tu zona'} ({formData.province})</strong>. Te contactaremos en menos de 24 horas laborables.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-white text-xs font-semibold"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-stone-700 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-white">Formulario de Solicitud de Presupuesto</h3>
                    <p className="text-xs text-stone-400">Rellena los datos para recibir una propuesta personalizada y sin compromiso.</p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Nombre y apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Marc Rovira"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej: 600 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Municipality */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ej: marc@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Municipio o Población en Cataluña *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Sant Cugat / Begur / Mataró"
                        value={formData.municipality}
                        onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Province & Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Provincia
                      </label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Barcelona">Barcelona (Maresme, Vallès, Garraf, etc.)</option>
                        <option value="Girona">Girona (Costa Brava, Empordà, etc.)</option>
                        <option value="Tarragona">Tarragona (Costa Daurada, Penedès, etc.)</option>
                        <option value="Lleida">Lleida (Segrià, Pirineus, etc.)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Servicio solicitado
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Construcción de piscinas">Construcción de nueva piscina</option>
                        <option value="Reforma y rehabilitación">Reforma / Rehabilitación integral</option>
                        <option value="Mantenimiento de piscinas">Mantenimiento periódico</option>
                        <option value="Equipamiento y accesorios">Equipamiento (Salina, Climatización)</option>
                      </select>
                    </div>
                  </div>

                  {/* Pool Type & Estimated Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Tipología de piscina
                      </label>
                      <select
                        value={formData.poolType}
                        onChange={(e) => setFormData({ ...formData, poolType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Hormigón gunitado">Piscinas de hormigón gunitado / obra</option>
                        <option value="Poliéster y fibra">Piscinas de poliéster</option>
                        <option value="Desbordante o infinita">Piscinas desbordantes / infinitas</option>
                        <option value="Cloración salina">Piscinas con cloración salina</option>
                        <option value="Pequeña / Patio urbano">Piscinas pequeñas / patios urbanos</option>
                        <option value="Diseño exclusivo">Piscinas de diseño exclusivo</option>
                        <option value="Comunitaria o turístico">Piscinas comunitarias / hoteles / casas rurales</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                        Dimensiones estimadas
                      </label>
                      <select
                        value={formData.estimatedSize}
                        onChange={(e) => setFormData({ ...formData, estimatedSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="6x3 m">6 x 3 m (Pequeña)</option>
                        <option value="7x3.5 m">7 x 3.5 m</option>
                        <option value="8x4 m">8 x 4 m (Medida habitual)</option>
                        <option value="10x5 m">10 x 5 m (Grande)</option>
                        <option value="A medida / Forma libre">Diseño a medida según jardín</option>
                      </select>
                    </div>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                      Cuéntanos cómo imaginas tu piscina o detalles de tu jardín
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Indícanos si el terreno tiene desnivel, accesos para maquinaria, si deseas banco hidromasaje, cloración salina, etc."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900/90 border border-stone-700 text-white placeholder-stone-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  {/* Privacy checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      checked={formData.acceptedPrivacy}
                      onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                      className="mt-1 rounded bg-stone-900 border-stone-700 text-cyan-600 focus:ring-cyan-500"
                    />
                    <label htmlFor="privacy" className="text-[11px] text-stone-400 leading-tight">
                      Acepto la política de privacidad y autorizo el contacto para el estudio técnico y envío del presupuesto de la piscina sin compromiso.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      id="submit-quote-form-btn"
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-cyan-900/50 hover:shadow-cyan-600/40 transition-all flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Procesando solicitud...</span>
                      ) : (
                        <>
                          <span>SOLICITA PRESUPUESTO SIN COMPROMISO</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
