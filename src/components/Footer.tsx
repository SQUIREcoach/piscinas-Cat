import React from 'react';
import { Waves, Phone, Mail, MapPin, Shield, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center text-white shadow-md">
                <Waves className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                PISCINAS<span className="text-cyan-400 font-extrabold ml-1">CATALUÑA</span>
              </span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Construcción de piscinas a medida en Cataluña. Diseñamos y construimos piscinas personalizadas, adaptadas a tu vivienda, tus necesidades y tu estilo de vida.
            </p>

            <div className="flex items-center gap-4 text-xs text-stone-400 pt-2">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Garantía decenal</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Llave en mano</span>
              </div>
            </div>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Construcción de piscinas</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Reforma y rehabilitación</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Mantenimiento de piscinas</a></li>
              <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Equipamiento y accesorios</a></li>
              <li><a href="#configurador" className="hover:text-cyan-400 transition-colors">Cloración salina y domótica</a></li>
            </ul>
          </div>

          {/* Col 4: Tipos de Piscinas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Tipos de Piscinas</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas de hormigón gunitado</a></li>
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas de poliéster</a></li>
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas desbordantes e infinitas</a></li>
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas pequeñas y urbanas</a></li>
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas de diseño exclusivo</a></li>
              <li><a href="#tipos-piscinas" className="hover:text-cyan-400 transition-colors">Piscinas comunitarias y hoteles</a></li>
            </ul>
          </div>

          {/* Col 5: Cobertura & Contacto */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Atención & Zonas</h4>
            <div className="space-y-3 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Barcelona, Girona (Costa Brava), Tarragona y Lleida.</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>932 123 456 / 600 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@piscinasdecatalunya.cat</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Piscinas Catalunya - Construcción de piscinas a medida. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span>Aviso Legal</span>
            <span>Política de Privacidad</span>
            <span>Cookies</span>
            <span>Garantía de Obra</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
