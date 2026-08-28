import React, { useState } from 'react';
import { ConfiguratorState } from '../types';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  Sun, 
  Moon, 
  Waves, 
  ShieldCheck, 
  Flame, 
  Layers, 
  ArrowRight,
  Info
} from 'lucide-react';

interface PoolConfiguratorProps {
  onApplyConfigToQuote: (config: ConfiguratorState, estimatedPrice: number) => void;
}

export const PoolConfigurator: React.FC<PoolConfiguratorProps> = ({ onApplyConfigToQuote }) => {
  const [config, setConfig] = useState<ConfiguratorState>({
    poolType: 'gunitado',
    size: '8x4',
    finish: 'porcelanico',
    waterTreatment: 'salina_ph',
    extras: {
      heating: false,
      ledRgb: true,
      waterfall: false,
      cover: false,
      robotCleaner: true,
      hydromassageBench: true,
    },
    province: 'barcelona',
    gardenStatus: 'tierra',
  });

  const [isNightMode, setIsNightMode] = useState(false);

  // Price Calculation Logic
  const calculatePrice = () => {
    let base = 0;
    
    // Type base
    switch (config.poolType) {
      case 'poliester':
        base = 13500;
        break;
      case 'gunitado':
        base = 16800;
        break;
      case 'desbordante':
        base = 24500;
        break;
      case 'pequena':
        base = 11900;
        break;
      case 'diseno':
        base = 27000;
        break;
    }

    // Size multiplier
    switch (config.size) {
      case '6x3':
        base *= 0.85;
        break;
      case '7x3.5':
        base *= 0.95;
        break;
      case '8x4':
        base *= 1.0;
        break;
      case '10x5':
        base *= 1.35;
        break;
      case 'custom':
        base *= 1.2;
        break;
    }

    // Finish
    if (config.finish === 'porcelanico') base += 2200;
    if (config.finish === 'gresite_bali') base += 1800;
    if (config.finish === 'gris_antracita') base += 1600;
    if (config.finish === 'arena') base += 2500;

    // Treatment
    if (config.waterTreatment === 'salina_ph') base += 1400;
    if (config.waterTreatment === 'magnesio') base += 1900;

    // Extras
    if (config.extras.heating) base += 2800;
    if (config.extras.ledRgb) base += 450;
    if (config.extras.waterfall) base += 1100;
    if (config.extras.cover) base += 3200;
    if (config.extras.robotCleaner) base += 950;
    if (config.extras.hydromassageBench) base += 1350;

    return Math.round(base);
  };

  const estimatedPrice = calculatePrice();

  // Visual tones mapping
  const waterTones: Record<string, { bg: string; water: string; name: string; desc: string }> = {
    porcelanico: {
      bg: 'bg-stone-300',
      water: 'from-cyan-400 via-sky-300 to-teal-400',
      name: 'Gres Porcelánico Arena / Piedra Clara',
      desc: 'Agua color verde turquesa cristalino estilo cala de la Costa Brava'
    },
    gresite_bali: {
      bg: 'bg-emerald-800',
      water: 'from-emerald-400 via-teal-400 to-cyan-500',
      name: 'Gresite Verde Bali / Exótico',
      desc: 'Tonalidad verde esmeralda tropical con matices luminosos'
    },
    gresite_azul: {
      bg: 'bg-sky-600',
      water: 'from-sky-400 via-blue-500 to-cyan-400',
      name: 'Gresite Azul Mediterráneo Clásico',
      desc: 'Azul vibrante, puro y luminoso con efecto refrescante'
    },
    gris_antracita: {
      bg: 'bg-stone-800',
      water: 'from-sky-600 via-cyan-700 to-slate-800',
      name: 'Porcelánico Gris Antracita',
      desc: 'Reflejos azul profundo con efecto espejo minimalista de alta gama'
    },
    arena: {
      bg: 'bg-amber-100',
      water: 'from-emerald-300 via-cyan-400 to-teal-300',
      name: 'Arena Resinada Continua (Efecto Playa)',
      desc: 'Entrada suave con agua color azul turquesa caribeño'
    }
  };

  const currentFinish = waterTones[config.finish];

  return (
    <section id="configurador" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4" />
            <span>Configurador Interactivo Online</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diseña y calcula el presupuesto de tu piscina
          </h2>
          <p className="mt-3 text-base text-stone-300 font-light">
            Elige la estructura, dimensiones, acabados cerámicos y equipamiento para obtener una estimación aproximada para tu vivienda en Cataluña.
          </p>
        </div>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Tipo de Piscina */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/70">
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                1. Tipo de estructura constructiva
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'gunitado', label: 'Hormigón Gunitado', desc: 'Obra a medida (Durabilidad 50+ años)' },
                  { id: 'poliester', label: 'Poliéster / Fibra', desc: 'Rápida instalación (7 días)' },
                  { id: 'desbordante', label: 'Desbordante / Infinity', desc: 'Gama alta con efecto horizonte' },
                  { id: 'pequena', label: 'Mini-Piscina / Urbana', desc: 'Para patios y terrazas' },
                  { id: 'diseno', label: 'Diseño Exclusivo', desc: 'Arquitectura singular de autor' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConfig({ ...config, poolType: type.id as any })}
                    className={`p-3 text-left rounded-xl border transition-all text-xs ${
                      config.poolType === type.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-white ring-1 ring-cyan-400'
                        : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:border-stone-500'
                    }`}
                  >
                    <div className="font-bold text-sm mb-1">{type.label}</div>
                    <div className="text-[11px] text-stone-400 leading-tight">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Dimensiones */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/70">
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                2. Dimensiones estimadas
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: '6x3', label: '6 x 3 m', sub: '18 m²' },
                  { id: '7x3.5', label: '7 x 3.5 m', sub: '24.5 m²' },
                  { id: '8x4', label: '8 x 4 m', sub: '32 m² (Estándar)' },
                  { id: '10x5', label: '10 x 5 m', sub: '50 m² (Grande)' },
                  { id: 'custom', label: 'A Medida', sub: 'Personalizado' },
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setConfig({ ...config, size: size.id as any })}
                    className={`py-2.5 px-3 text-center rounded-xl border transition-all ${
                      config.size === size.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 ring-1 ring-cyan-400 font-bold'
                        : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:border-stone-500'
                    }`}
                  >
                    <div className="text-sm font-semibold">{size.label}</div>
                    <div className="text-[10px] text-stone-400">{size.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Revestimiento interior y Color de Agua */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/70">
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                3. Revestimiento interior y tonalidad del agua
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'porcelanico', label: 'Gres Porcelánico Arena', sub: 'Agua verde turquesa suave' },
                  { id: 'gresite_bali', label: 'Gresite Verde Bali Exótico', sub: 'Agua esmeralda tropical' },
                  { id: 'gresite_azul', label: 'Gresite Azul Mediterráneo', sub: 'Agua azul cristalina' },
                  { id: 'gris_antracita', label: 'Porcelánico Gris Antracita', sub: 'Agua azul profundo con espejo' },
                  { id: 'arena', label: 'Microcemento / Arena Resinada', sub: 'Agua celeste caribeña' },
                ].map((fin) => (
                  <button
                    key={fin.id}
                    onClick={() => setConfig({ ...config, finish: fin.id as any })}
                    className={`p-3 text-left rounded-xl border flex items-center justify-between transition-all ${
                      config.finish === fin.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-white ring-1 ring-cyan-400'
                        : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:border-stone-500'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">{fin.label}</div>
                      <div className="text-[11px] text-stone-400">{fin.sub}</div>
                    </div>
                    {config.finish === fin.id && <Check className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Tratamiento del Agua & Equipamiento Extra */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/70">
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                4. Tratamiento del agua y accesorios de confort
              </label>

              {/* Treatment selector */}
              <div className="mb-4">
                <span className="text-xs text-stone-400 block mb-2 font-medium">Sistema de desinfección:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'salina_ph', label: 'Cloración Salina + pH Auto', desc: 'Recomendado para la piel' },
                    { id: 'magnesio', label: 'Sistema Magnesio Mineral', desc: 'Sensación spa de alta gama' },
                    { id: 'cloro_tradicional', label: 'Cloro Tradicional', desc: 'Filtración básica' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setConfig({ ...config, waterTreatment: item.id as any })}
                      className={`p-2.5 text-left rounded-lg border text-xs ${
                        config.waterTreatment === item.id
                          ? 'bg-cyan-900/50 border-cyan-500 text-cyan-200'
                          : 'bg-stone-900/60 border-stone-700 text-stone-300'
                      }`}
                    >
                      <div className="font-semibold text-xs">{item.label}</div>
                      <div className="text-[10px] text-stone-400">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-700">
                {[
                  { key: 'heating', label: 'Bomba de Calor Inverter', desc: 'Alarga el baño de abril a nov.' },
                  { key: 'ledRgb', label: 'Iluminación LED RGB', desc: 'Colores regulables por mando/app' },
                  { key: 'waterfall', label: 'Cascada / Cañón Laminar', desc: 'Efecto estético y masaje cervical' },
                  { key: 'cover', label: 'Cubierta Automática / Térmica', desc: 'Seguridad y conservación calor' },
                  { key: 'robotCleaner', label: 'Robot Limpiafondos Autónomo', desc: 'Limpieza automática inteligente' },
                  { key: 'hydromassageBench', label: 'Banco Spa con Hidromasaje', desc: 'Zona chillout con jets de aire' },
                ].map((extra) => {
                  const isChecked = config.extras[extra.key as keyof typeof config.extras];
                  return (
                    <button
                      key={extra.key}
                      onClick={() =>
                        setConfig({
                          ...config,
                          extras: {
                            ...config.extras,
                            [extra.key]: !isChecked,
                          },
                        })
                      }
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-cyan-950/70 border-cyan-500/80 text-white'
                          : 'bg-stone-900/40 border-stone-700/60 text-stone-400 hover:text-stone-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold">{extra.label}</div>
                        <div className="text-[10px] text-stone-400">{extra.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded flex items-center justify-center text-xs transition-colors shrink-0 ml-2 ${
                          isChecked ? 'bg-cyan-500 text-stone-900 font-bold' : 'border border-stone-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* 5. Ubicación en Cataluña */}
            <div className="bg-stone-800/80 p-5 rounded-2xl border border-stone-700/70">
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                5. Ubicación del proyecto en Cataluña
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'barcelona', label: 'Barcelona', desc: 'Maresme, Vallès, Garraf' },
                  { id: 'girona', label: 'Girona', desc: 'Costa Brava, Empordà' },
                  { id: 'tarragona', label: 'Tarragona', desc: 'Costa Daurada, Penedès' },
                  { id: 'lleida', label: 'Lleida', desc: 'Segrià, Pirineus' },
                ].map((prov) => (
                  <button
                    key={prov.id}
                    onClick={() => setConfig({ ...config, province: prov.id as any })}
                    className={`p-2.5 text-center rounded-xl border transition-all ${
                      config.province === prov.id
                        ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 ring-1 ring-cyan-400 font-bold'
                        : 'bg-stone-900/60 border-stone-700 text-stone-300 hover:border-stone-500'
                    }`}
                  >
                    <div className="text-xs font-bold">{prov.label}</div>
                    <div className="text-[10px] text-stone-400">{prov.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live 3D / Realistic Pool Visualizer & Budget Summary (5 cols sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            
            {/* Visualizer Frame */}
            <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden relative">
              
              {/* Day / Night Toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-300">
                  <Waves className="w-4 h-4 text-cyan-400" />
                  <span>Simulación Visual del Agua</span>
                </div>

                <button
                  onClick={() => setIsNightMode(!isNightMode)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-800 text-stone-200 text-xs hover:bg-stone-700 border border-stone-700 transition-colors"
                >
                  {isNightMode ? (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Modo Noche (LED RGB)</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Modo Día (Luz Solar)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Pool 3D Graphical Canvas Mock */}
              <div 
                className={`relative w-full h-56 rounded-xl overflow-hidden border-4 transition-all duration-700 ${
                  isNightMode ? 'border-stone-900 bg-stone-950' : 'border-stone-300/30 bg-stone-800'
                }`}
              >
                {/* Exterior Terrace Coping Deck */}
                <div className="absolute inset-0 p-3 bg-stone-400/20">
                  
                  {/* Pool Basin */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-inner border-2 border-stone-400/30">
                    
                    {/* Interior Wall & Finish color */}
                    <div className={`absolute inset-0 ${currentFinish.bg} opacity-90`} />

                    {/* Water Layer with Gradient and Ripples */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${
                        isNightMode
                          ? config.extras.ledRgb 
                            ? 'from-cyan-600 via-indigo-700 to-sky-900 opacity-90'
                            : 'from-blue-950 via-slate-900 to-stone-950 opacity-95'
                          : `${currentFinish.water} opacity-75`
                      } transition-all duration-700`}
                    >
                      {/* Animated Water Ripple Simulation */}
                      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent animate-pulse" />
                      
                      {/* Light Caustic Lines */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-6 animate-pulse" />
                    </div>

                    {/* Integrated features inside basin */}
                    {config.extras.hydromassageBench && (
                      <div className="absolute bottom-2 left-2 w-20 h-10 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                        Banco Spa
                      </div>
                    )}

                    {config.extras.waterfall && (
                      <div className="absolute top-0 right-8 w-12 h-2.5 bg-slate-300 rounded-b shadow flex items-center justify-center">
                        <div className="w-8 h-12 bg-white/40 blur-[1px] animate-pulse" />
                      </div>
                    )}

                    {config.extras.robotCleaner && (
                      <div className="absolute top-10 right-12 w-6 h-4 bg-cyan-400/80 rounded-sm shadow-md border border-white/50" title="Robot limpiafondos" />
                    )}

                    {/* Night Underwater LED Glow */}
                    {isNightMode && config.extras.ledRgb && (
                      <div className="absolute bottom-4 right-6 w-16 h-16 bg-cyan-400/70 rounded-full blur-xl animate-ping" />
                    )}

                    {/* Dimension Tag */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-cyan-200">
                      {config.size.toUpperCase()} | {config.poolType.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Water Tone Description */}
              <div className="mt-3 p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs">
                <div className="font-semibold text-cyan-300">{currentFinish.name}</div>
                <div className="text-[11px] text-stone-400 mt-0.5">{currentFinish.desc}</div>
              </div>

            </div>

            {/* Estimated Budget Box */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 p-6 rounded-2xl border border-cyan-500/40 shadow-xl relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">Presupuesto Estimado</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-medium">Llave en Mano</span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {estimatedPrice.toLocaleString('es-ES')} €
                </span>
                <span className="text-xs text-stone-400 font-light">+ IVA aprox.</span>
              </div>

              <p className="text-xs text-stone-400 mb-6 leading-relaxed flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Incluye excavación, estructura estanca con garantía 10 años, revestimiento, fontanería, cloración y puesta en marcha.</span>
              </p>

              <button
                onClick={() => onApplyConfigToQuote(config, estimatedPrice)}
                id="apply-config-btn"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-stone-950 font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95"
              >
                <span>Solicitar visita técnica con esta configuración</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-4 pt-4 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-stone-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  Presupuesto cerrado sin sorpresas
                </span>
                <span>Visita técnica gratuita</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
