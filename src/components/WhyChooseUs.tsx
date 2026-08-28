import React from 'react';
import { WHY_CHOOSE_US, CATALONIA_REGIONS } from '../data/poolsData';
import { 
  Award, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  CheckCheck, 
  Leaf, 
  Sparkles, 
  Zap, 
  Droplet,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'CheckCheck':
        return <CheckCheck className="w-6 h-6" />;
      default:
        return <Award className="w-6 h-6" />;
    }
  };

  return (
    <section id="por-que-elegirnos" className="py-20 bg-stone-100/60 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wide mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-700" />
            Confianza y Excelencia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-light">
            Experiencia comprobada en Cataluña, materiales de alta gama y atención cercana en cada detalle.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-lg hover:border-cyan-500 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-xs text-stone-600 leading-relaxed">{item.description}</p>
              </div>

              {item.stat && (
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <div className="text-2xl font-black text-cyan-700">{item.stat}</div>
                  <div className="text-[11px] text-stone-500 font-medium">{item.statLabel}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quality, Design and Wellbeing Feature Section */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-stone-800 mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Sostenibilidad y Confort
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Calidad, diseño y bienestar
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Nuestro objetivo es crear piscinas duraderas, eficientes y fáciles de mantener.
              </p>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Utilizamos materiales de calidad y las últimas soluciones en tratamiento del agua, climatización y ahorro energético. El resultado es una piscina que se integra perfectamente en tu vivienda y transforma el jardín en un auténtico espacio de bienestar.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <Leaf className="w-5 h-5 text-emerald-400 mb-2" />
                  <div className="text-xs font-bold text-white mb-1">Ahorro de Agua</div>
                  <p className="text-[11px] text-stone-400">Filtración por vidrio ecológico y recuperación de agua pluvial.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <Zap className="w-5 h-5 text-amber-400 mb-2" />
                  <div className="text-xs font-bold text-white mb-1">Eficiencia Energética</div>
                  <p className="text-[11px] text-stone-400">Bombas de velocidad variable con -80% de consumo eléctrico.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700">
                  <Droplet className="w-5 h-5 text-cyan-400 mb-2" />
                  <div className="text-xs font-bold text-white mb-1">Salud y Piel Suave</div>
                  <p className="text-[11px] text-stone-400">Electrólisis salina con autorregulación continua de pH.</p>
                </div>
              </div>
            </div>

            {/* Image right */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-700 aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=1000&q=80"
                  alt="Piscina de diseño en Cataluña"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-200 bg-stone-950/60 backdrop-blur-md p-3 rounded-xl border border-stone-700/60">
                  <span className="font-bold text-white block">Integración arquitectónica</span>
                  Materiales atérmicos y antideslizantes para el máximo confort familiar.
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Coverage Across Catalonia */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-600" />
                Cobertura Territorial
              </span>
              <h3 className="text-xl font-bold text-stone-900 mt-1">
                Construimos en las 4 provincias de Cataluña
              </h3>
            </div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold whitespace-nowrap self-start sm:self-auto"
            >
              Consultar disponibilidad en mi municipio
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATALONIA_REGIONS.map((reg) => (
              <div key={reg.province} className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                  <span>{reg.province}</span>
                </div>
                <p className="text-xs text-stone-600 font-medium mb-2">{reg.highlight}</p>
                <div className="text-[11px] text-stone-700 leading-tight">
                  <strong className="text-stone-800">Comarcas:</strong> {reg.areas.join(', ')}.
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
