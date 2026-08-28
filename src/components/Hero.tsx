import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles, MapPin, Calculator, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenConfigurator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenConfigurator }) => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=2000&q=85"
          alt="Construcción de piscinas a medida en Cataluña"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-stone-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
      </div>

      {/* Decorative Mediterranean glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Especialistas en Barcelona, Costa Brava, Tarragona y Girona</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Construcción de piscinas a medida en{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400">
              Cataluña
            </span>
          </h1>

          {/* Subtitle from prompt */}
          <p className="text-lg sm:text-2xl font-medium text-cyan-100/90 mb-4 leading-snug">
            Convierte tu jardín en el espacio que siempre has imaginado
          </p>

          {/* Description from prompt */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl font-light">
            Diseñamos y construimos piscinas personalizadas, adaptadas a tu vivienda, tus necesidades y tu estilo de vida. Nuestro equipo te acompaña durante todo el proceso, desde el diseño inicial hasta la puesta en marcha de la piscina.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={onOpenQuote}
              id="hero-request-quote-cta"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white text-sm sm:text-base font-bold shadow-lg shadow-cyan-900/40 hover:shadow-cyan-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>SOLICITA PRESUPUESTO SIN COMPROMISO</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenConfigurator}
              id="hero-open-configurator-cta"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-semibold backdrop-blur-md transition-all hover:border-white/40"
            >
              <Calculator className="w-5 h-5 text-cyan-300" />
              <span>Configura tu piscina online</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800/80">
            <div className="flex items-center gap-2.5 text-stone-200">
              <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">10 Años</span>
                <span className="text-stone-400">Garantía decenal</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-stone-200">
              <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">100% A Medida</span>
                <span className="text-stone-400">Diseño y terreno</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-stone-200">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Llave en Mano</span>
                <span className="text-stone-400">Permisos y obra</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-stone-200">
              <PhoneCall className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block">Asesoría Gratis</span>
                <span className="text-stone-400">Visita técnica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
