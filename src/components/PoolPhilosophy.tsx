import React from 'react';
import { Compass, Sparkles, Sun, Droplets, Home, Check } from 'lucide-react';

interface PoolPhilosophyProps {
  onOpenQuote: () => void;
}

export const PoolPhilosophy: React.FC<PoolPhilosophyProps> = ({ onOpenQuote }) => {
  return (
    <section id="filosofia" className="py-20 bg-stone-100/80 relative overflow-hidden border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="Piscina de ensueño integrada en el entorno de Cataluña"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40">
                  <p className="text-xs uppercase tracking-wider font-bold text-cyan-700 mb-0.5">Arquitectura & Bienestar</p>
                  <p className="text-sm font-semibold text-stone-900">Integración paisajística respetando la naturaleza y el terreno catalán.</p>
                </div>
              </div>

              {/* Floating detail card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-stone-200/80 items-center gap-3.5 max-w-xs">
                <div className="w-11 h-11 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                  <Droplets className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900">Agua Cristalina & Pura</h4>
                  <p className="text-[11px] text-stone-500">Cloración salina ecológica que cuida la piel de tu familia.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Philosophy Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              Diseño exclusivo & Bienestar
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
              La piscina de tus sueños,{' '}
              <span className="text-cyan-700">diseñada para ti</span>
            </h2>

            <p className="text-lg font-medium text-stone-700 mb-4 leading-relaxed">
              Una piscina es mucho más que un lugar donde refrescarse.
            </p>

            <p className="text-base text-stone-600 mb-6 leading-relaxed">
              Es un espacio para relajarse, disfrutar con la familia y crear momentos inolvidables sin salir de casa.
            </p>

            <p className="text-base text-stone-600 mb-8 leading-relaxed">
              Por eso estudiamos cada proyecto de manera personalizada, teniendo en cuenta el terreno, el espacio disponible, el presupuesto y las preferencias de cada cliente. Construimos piscinas modernas, funcionales y completamente integradas en su entorno.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm mb-1.5">
                  <Compass className="w-4 h-4 text-cyan-600" />
                  <span>Estudio del Terreno</span>
                </div>
                <p className="text-xs text-stone-600">
                  Nivelación, composición geológica y óptimo aprovechamiento del desnivel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm mb-1.5">
                  <Sun className="w-4 h-4 text-cyan-600" />
                  <span>Orientación Solar</span>
                </div>
                <p className="text-xs text-stone-600">
                  Ubicamos el vaso en la zona de mayor radiación solar natural para mayor temperatura.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm mb-1.5">
                  <Home className="w-4 h-4 text-cyan-600" />
                  <span>Integración Visual</span>
                </div>
                <p className="text-xs text-stone-600">
                  Transición armónica con la terraza, porches y vegetación autóctona de tu vivienda.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-cyan-400 transition-colors">
                <div className="flex items-center gap-2.5 text-stone-900 font-bold text-sm mb-1.5">
                  <Check className="w-4 h-4 text-cyan-600" />
                  <span>Presupuesto Adaptado</span>
                </div>
                <p className="text-xs text-stone-600">
                  Propuestas con precio cerrado y transparente sin sobrecostes imprevistos.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Solicitar estudio técnico gratuito</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
