import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/poolsData';
import { ServiceItem } from '../types';
import { 
  Compass, 
  Wrench, 
  Sparkles, 
  Sliders, 
  Check, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <section id="servicios" className="py-20 bg-stone-50 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wide mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-700" />
            Especialistas en Cataluña
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Nuestros servicios
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-light">
            Soluciones integrales de máxima calidad para crear, renovar y mantener tu piscina en perfecto estado todo el año.
          </p>
        </div>

        {/* 4 Core Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICES_DATA.map((service) => {
            const isCurrent = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                  isCurrent
                    ? 'bg-white border-cyan-500 shadow-xl ring-2 ring-cyan-500/20 translate-y-[-4px]'
                    : 'bg-white border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                      isCurrent
                        ? 'bg-cyan-600 text-white'
                        : 'bg-stone-100 text-cyan-700 group-hover:bg-cyan-50'
                    }`}
                  >
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-stone-900 mb-2.5">
                    {service.title}
                  </h3>

                  {/* Short text from prompt */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-cyan-700">
                  <span>Ver detalles y opciones</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isCurrent ? 'rotate-90 text-cyan-600' : ''}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Deep-Dive View */}
        <div className="bg-white rounded-2xl border border-stone-200 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-600 text-white flex items-center justify-center">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-cyan-700 tracking-wider">Servicio Especializado</span>
                  <h3 className="text-2xl font-extrabold text-stone-900">{selectedService.title}</h3>
                </div>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>

              {/* Sub services tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">Especialidades incluidas:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.subServices.map((sub, idx) => (
                    <span key={idx} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-semibold rounded-lg border border-stone-200">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3">Ventajas y garantías:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectServiceForQuote(selectedService.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Pedir presupuesto para {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3] relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md p-2.5 rounded-lg border border-white/20">
                  Instalación y ejecución profesional en Cataluña
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
