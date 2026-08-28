import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PoolPhilosophy } from './components/PoolPhilosophy';
import { PoolConfigurator } from './components/PoolConfigurator';
import { ServicesSection } from './components/ServicesSection';
import { PoolTypesShowcase } from './components/PoolTypesShowcase';
import { HowWeWork } from './components/HowWeWork';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ConfiguratorState } from './types';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Construcción de piscinas');
  const [selectedPoolTypeForQuote, setSelectedPoolTypeForQuote] = useState('Piscinas de obra y hormigón gunitado');
  const [estimatedPrice, setEstimatedPrice] = useState<number | undefined>(undefined);

  const handleOpenQuote = () => {
    const el = document.getElementById('presupuesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleOpenConfigurator = () => {
    const el = document.getElementById('configurador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    const el = document.getElementById('presupuesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleSelectPoolTypeForQuote = (poolName: string) => {
    setSelectedPoolTypeForQuote(poolName);
    const el = document.getElementById('presupuesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleApplyConfigToQuote = (config: ConfiguratorState, price: number) => {
    setEstimatedPrice(price);
    const poolTypeNames: Record<string, string> = {
      gunitado: 'Piscinas de obra y hormigón gunitado',
      poliester: 'Piscinas de poliéster y fibra',
      desbordante: 'Piscinas desbordantes e infinitas',
      pequena: 'Piscinas pequeñas y patios urbanos',
      diseno: 'Piscinas de diseño exclusivo',
    };
    setSelectedPoolTypeForQuote(poolTypeNames[config.poolType] || 'Piscinas de obra');
    setQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-cyan-600 selection:text-white relative">
      {/* Header */}
      <Header onOpenQuote={() => setQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuote={handleOpenQuote}
          onOpenConfigurator={handleOpenConfigurator}
        />

        {/* 2. Philosophy: La piscina de tus sueños, diseñada para ti */}
        <PoolPhilosophy onOpenQuote={handleOpenQuote} />

        {/* 3. Interactive Configurator & Live Price Estimator */}
        <PoolConfigurator onApplyConfigToQuote={handleApplyConfigToQuote} />

        {/* 4. Nuestros Servicios (Construcción, Reforma, Mantenimiento, Equipamiento) */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 5. Catálogo de Piscinas Completamente Personalizadas */}
        <PoolTypesShowcase onSelectPoolTypeForQuote={handleSelectPoolTypeForQuote} />

        {/* 6. Cómo trabajamos (1. Escuchamos, 2. Estudiamos, 3. Diseñamos, 4. Construimos, 5. Entregamos) */}
        <HowWeWork onOpenQuote={handleOpenQuote} />

        {/* 7. ¿Por qué elegirnos? & Calidad, diseño y bienestar */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* 8. Haz realidad tu proyecto / Formulario de Presupuesto Sin Compromiso */}
        <ContactSection 
          initialService={selectedServiceForQuote}
          initialPoolType={selectedPoolTypeForQuote}
        />

        {/* 9. Preguntas Frecuentes */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Interactive Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefilledService={selectedServiceForQuote}
        prefilledPoolType={selectedPoolTypeForQuote}
        prefilledEstimatedPrice={estimatedPrice}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-md shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <a
          href="https://wa.me/34600123456?text=Hola,%20quisiera%20solicitar%20presupuesto%20para%20una%20piscina%20en%20Catalu%C3%B1a."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
