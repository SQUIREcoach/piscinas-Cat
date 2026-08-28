import React, { useState } from 'react';
import { POOL_TYPES } from '../data/poolsData';
import { PoolTypeItem } from '../types';
import { Check, ArrowRight, Sparkles, Clock, MapPin, X } from 'lucide-react';

interface PoolTypesShowcaseProps {
  onSelectPoolTypeForQuote: (poolName: string) => void;
}

export const PoolTypesShowcase: React.FC<PoolTypesShowcaseProps> = ({ onSelectPoolTypeForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedPoolModal, setSelectedPoolModal] = useState<PoolTypeItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas las piscinas' },
    { id: 'gunitado', label: 'Hormigón & Obra' },
    { id: 'poliester', label: 'Poliéster & Fibra' },
    { id: 'desbordante', label: 'Desbordantes & Infinitas' },
    { id: 'salina', label: 'Cloración Salina' },
    { id: 'pequena', label: 'Pequeñas / Patios' },
    { id: 'diseno', label: 'Diseño Exclusivo' },
    { id: 'hotel', label: 'Comunitarias & Hoteles' },
  ];

  const filteredPools = activeCategory === 'todos' 
    ? POOL_TYPES 
    : POOL_TYPES.filter(p => p.category === activeCategory);

  return (
    <section id="tipos-piscinas" className="py-20 bg-stone-100/60 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            Catálogo de Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Piscinas completamente personalizadas
          </h2>
          <p className="mt-3 text-base text-stone-600 font-light max-w-2xl mx-auto">
            Cada vivienda, cada jardín y cada cliente son diferentes. Puedes elegir la forma, el tamaño, el revestimiento, el color del agua, el sistema de filtración y todos los elementos que acompañarán tu nueva piscina.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-xl whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-600 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Pools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {filteredPools.map((pool) => (
            <div
              key={pool.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <img
                  src={pool.image}
                  alt={pool.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60" />
                <span className="absolute top-3 left-3 px-3 py-1 bg-stone-900/85 backdrop-blur-md text-white text-[11px] font-bold rounded-lg uppercase tracking-wider border border-white/20">
                  {pool.tag}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-medium rounded-md flex items-center gap-1 shadow-sm">
                  <Clock className="w-3 h-3 text-cyan-600" />
                  {pool.approxTime}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {pool.name}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {pool.shortDesc}
                  </p>

                  <div className="space-y-1.5 mb-5 pt-3 border-t border-stone-100">
                    {pool.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                  <button
                    onClick={() => setSelectedPoolModal(pool)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors"
                  >
                    Ver detalles
                  </button>
                  <button
                    onClick={() => onSelectPoolTypeForQuote(pool.name)}
                    className="py-2.5 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Presupuesto</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Pool Details */}
        {selectedPoolModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedPoolModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5">
                <img
                  src={selectedPoolModal.image}
                  alt={selectedPoolModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="inline-block px-2.5 py-1 rounded bg-cyan-100 text-cyan-800 text-xs font-bold uppercase mb-2">
                {selectedPoolModal.tag}
              </div>

              <h3 className="text-2xl font-extrabold text-stone-900 mb-3">
                {selectedPoolModal.name}
              </h3>

              <p className="text-sm text-stone-700 leading-relaxed mb-5">
                {selectedPoolModal.fullDesc}
              </p>

              <div className="mb-5 p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                  Ideal para:
                </h4>
                <p className="text-xs text-stone-600">{selectedPoolModal.idealFor}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Características clave:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedPoolModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-stone-200">
                <button
                  onClick={() => {
                    const name = selectedPoolModal.name;
                    setSelectedPoolModal(null);
                    onSelectPoolTypeForQuote(name);
                  }}
                  className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Solicitar presupuesto sin compromiso para este modelo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
