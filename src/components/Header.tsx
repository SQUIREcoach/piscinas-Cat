import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Waves, MapPin } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Tipos de Piscinas', href: '#tipos-piscinas' },
    { label: 'Configurador', href: '#configurador' },
    { label: 'Cómo trabajamos', href: '#como-trabajamos' },
    { label: 'Por qué elegirnos', href: '#por-que-elegirnos' },
    { label: 'Preguntas', href: '#preguntas' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3'
          : 'bg-gradient-to-b from-stone-950/70 via-stone-950/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Waves className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg sm:text-xl font-bold tracking-tight ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                PISCINAS<span className="text-cyan-500 font-extrabold ml-1">CATALUÑA</span>
              </span>
              <span
                className={`text-[10px] tracking-wider uppercase font-semibold flex items-center gap-1 ${
                  isScrolled ? 'text-stone-700 font-bold' : 'text-stone-200 font-medium'
                }`}
              >
                <MapPin className="w-2.5 h-2.5 text-cyan-500" />
                Construcción a medida
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+34932123456"
              id="phone-contact-btn"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                isScrolled
                  ? 'text-stone-700 hover:bg-stone-100'
                  : 'text-stone-100 bg-white/10 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-cyan-500" />
              <span>932 123 456</span>
            </a>

            <a
              href="https://wa.me/34600123456?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20y%20presupuesto%20para%20una%20piscina%20a%20medida%20en%20Catalu%C3%B1a."
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-header-btn"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all hover:shadow"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenQuote}
              id="header-cta-quote-btn"
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Pedir Presupuesto
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-md bg-cyan-600 text-white"
            >
              Presupuesto
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className={`p-2 rounded-lg ${
                isScrolled ? 'text-stone-800 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 text-stone-800 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-stone-700 hover:text-cyan-600 hover:bg-stone-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
              <a
                href="tel:+34932123456"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-stone-700 bg-stone-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>Llamar: 932 123 456</span>
              </a>
              <a
                href="https://wa.me/34600123456?text=Hola,%20quisiera%20solicitar%20informaci%C3%B3n%20para%20una%20piscina."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-white bg-emerald-600 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg shadow-sm"
              >
                SOLICITA PRESUPUESTO SIN COMPROMISO
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
