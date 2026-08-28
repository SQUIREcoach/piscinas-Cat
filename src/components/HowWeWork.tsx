import React, { useState } from 'react';
import { WORK_STEPS } from '../data/poolsData';
import { 
  MessageSquare, 
  Maximize2, 
  Layers, 
  Hammer, 
  CheckCircle2, 
  Clock, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface HowWeWorkProps {
  onOpenQuote: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onOpenQuote }) => {
  const [activeStep, setActiveStep] = useState(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  return (
    <section id="como-trabajamos" className="py-20 bg-stone-50 relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wide mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-700" />
            Metodología y Proceso
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Cómo trabajamos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 font-light">
            Un proceso transparente, organizado y coordinado paso a paso para que disfrutes de la experiencia sin preocupaciones.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {WORK_STEPS.map((step) => {
            const isSelected = activeStep === step.number;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(step.number)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-white border-cyan-600 shadow-lg ring-2 ring-cyan-500/20 text-stone-900'
                    : 'bg-white/70 border-stone-200 text-stone-600 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                      isSelected
                        ? 'bg-cyan-600 text-white'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    0{step.number}
                  </span>
                  <span className="text-[10px] font-mono text-stone-700 font-semibold">{step.duration}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm line-clamp-1">{step.title}</div>
                <div className="text-[11px] text-stone-600 line-clamp-1">{step.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Showcase Card */}
        {(() => {
          const current = WORK_STEPS.find((s) => s.number === activeStep) || WORK_STEPS[0];
          return (
            <div className="bg-white rounded-2xl border border-stone-200 shadow-xl p-6 sm:p-10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md">
                      {getStepIcon(current.iconName)}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-cyan-700 tracking-wider">PASO 0{current.number} DE 05</div>
                      <h3 className="text-2xl font-extrabold text-stone-900">{current.title}</h3>
                    </div>
                  </div>

                  <p className="text-base text-stone-700 leading-relaxed font-medium">
                    {current.description}
                  </p>

                  {/* Bullet details */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">Acciones clave en esta fase:</h4>
                    {current.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-600">
                        <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
                    <div className="flex items-center gap-1.5 text-xs text-stone-700 font-semibold">
                      <Clock className="w-4 h-4 text-cyan-600" />
                      <span>Plazo aproximado: {current.duration}</span>
                    </div>

                    <button
                      onClick={onOpenQuote}
                      className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors"
                    >
                      <span>Comenzar mi proyecto</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Highlight */}
                <div className="lg:col-span-4 bg-stone-900 text-white p-6 rounded-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[220px]">
                  <div className="relative z-10">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-2">Compromiso Cataluña</span>
                    <h4 className="text-lg font-bold text-white mb-2">Garantía y Tranquilidad</h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Supervisión técnica continua por jefe de obra colegiado. Tramitamos el proyecto y licencias municipales en tu ayuntamiento.
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-cyan-300">
                    <span>100% Coordinado</span>
                    <span className="font-mono">Paso {current.number}/5</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
