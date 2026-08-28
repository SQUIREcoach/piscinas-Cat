import React, { useState } from 'react';
import { FAQS } from '../data/poolsData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wide mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-700" />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Resolvemos tus dudas
          </h2>
          <p className="mt-3 text-base text-stone-600 font-light">
            Todo lo que necesitas saber sobre normativas, plazos, garantías y mantenimiento de piscinas en Cataluña.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-cyan-700 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-cyan-100 text-cyan-700' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp help banner */}
        <div className="mt-12 p-6 rounded-2xl bg-cyan-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold">¿Tienes alguna pregunta específica sobre tu terreno?</h3>
            <p className="text-xs text-cyan-200 mt-1">Escríbenos directamente o envíanos una foto de tu jardín por WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/34600123456?text=Hola,%20tengo%20una%20duda%20sobre%20mi%20terreno%20para%20construir%20una%20piscina."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold whitespace-nowrap shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
