import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  prefilledPoolType?: string;
  prefilledEstimatedPrice?: number;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'Construcción de piscinas',
  prefilledPoolType = 'Piscinas de obra y hormigón gunitado',
  prefilledEstimatedPrice,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    municipality: '',
    province: 'Barcelona',
    serviceType: prefilledService,
    poolType: prefilledPoolType,
    estimatedSize: '8x4 m',
    timeframe: 'Próximos 1 - 3 meses',
    comments: prefilledEstimatedPrice ? `Presupuesto orientativo configurador: ${prefilledEstimatedPrice.toLocaleString()} €` : '',
    acceptedPrivacy: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-stone-700 text-stone-100 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">¡Solicitud recibida!</h3>
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm mx-auto">
              Un técnico especialista de Cataluña revisará tu consulta para <strong className="text-cyan-300">{formData.municipality || 'tu municipio'}</strong> y te contactará en menos de 24h.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold"
              >
                Cerrar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                Estudio y Presupuesto Gratuito
              </div>
              <h3 className="text-xl font-bold text-white">Solicita presupuesto sin compromiso</h3>
              <p className="text-xs text-stone-400">Diseño a medida y visita técnica en cualquier punto de Cataluña.</p>
              
              {prefilledEstimatedPrice && (
                <div className="mt-3 p-2.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-xs text-cyan-300">
                  Estimación desde el configurador: <strong>{prefilledEstimatedPrice.toLocaleString()} €</strong>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Nombre completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Laura Vidal"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Teléfono móvil *</label>
                <input
                  type="tel"
                  required
                  placeholder="Ej: 600 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="Ej: laura@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Municipio en Cataluña *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Begur / Sant Cugat / Sitges"
                  value={formData.municipality}
                  onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Provincia</label>
                <select
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option value="Barcelona">Barcelona</option>
                  <option value="Girona">Girona (Costa Brava)</option>
                  <option value="Tarragona">Tarragona</option>
                  <option value="Lleida">Lleida</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1">Tipo de piscina</label>
                <select
                  value={formData.poolType}
                  onChange={(e) => setFormData({ ...formData, poolType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                >
                  <option value="Hormigón gunitado">Hormigón gunitado / Obra</option>
                  <option value="Poliéster y fibra">Poliéster prefabricada</option>
                  <option value="Desbordante o infinita">Desbordante / Infinity</option>
                  <option value="Cloración salina">Cloración salina</option>
                  <option value="Pequeña / Patio">Pequeña / Patio urbano</option>
                  <option value="Diseño exclusivo">Diseño exclusivo de autor</option>
                  <option value="Reforma integral">Reforma de piscina existente</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-300 mb-1">Comentarios o detalles del jardín</label>
              <textarea
                rows={2}
                placeholder="Indícanos si tienes preferencia de dimensiones, accesos, etc."
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>ENVIAR SOLICITUD SIN COMPROMISO</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
