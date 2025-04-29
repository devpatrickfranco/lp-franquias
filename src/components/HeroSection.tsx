import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('#lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section 
      id="hero" 
      className="pt-20 relative min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(https://www.damaface.com.br/img-evento.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl text-white">
          Descubra as Franquias de Estética DamaFace: Invista em Seu Futuro com Lucro Acessível e Suporte Completo
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200">
          Transforme sua paixão por estética em um negócio lucrativo com nossa franquia premium e suporte incomparável.
        </p>
        
        <div className="relative">
          <button 
            onClick={scrollToForm}
            className="bg-[#fa1571] hover:bg-[#e01364] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Solicitar Estimativa Agora
            <ArrowRight className="ml-2" size={20} />
          </button>
          <div className="absolute -top-2 -right-2 bg-black text-[#fa1571] text-xs px-2 py-1 rounded-full border border-[#fa1571]">
            40% Lucro
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mt-8 gap-3">
          <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">Suporte Completo</span>
          <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">Tecnologia com IA</span>
          <span className="bg-white/10 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/20">Lucro de 40%</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;