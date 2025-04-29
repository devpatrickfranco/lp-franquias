import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.querySelector('#lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu futuro?<br />
            Seja um Franqueado DamaFace!
          </h2>
          
          <p className="text-lg mb-8 text-gray-300">
            Junte-se a uma rede em expansão que já transformou a vida de dezenas de empreendedores em todo o Brasil.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-[#fa1571] hover:bg-[#e01364] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Solicitar Estimativa Agora
              <ArrowRight className="ml-2" size={20} />
            </button>
            
            <button 
              onClick={scrollToForm}
              className="bg-transparent border-2 border-[#d8a8a1] text-white hover:bg-[#d8a8a1] hover:bg-opacity-20 font-bold py-4 px-8 rounded-full transition-colors duration-300 flex items-center justify-center"
            >
              Falar com um Consultor
              <MessageCircle className="ml-2" size={20} />
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="bg-[#111] p-4 rounded-lg flex items-center">
              <span className="text-[#fa1571] font-bold text-3xl mr-2">40%</span>
              <span className="text-sm">de lucro<br/>médio</span>
            </div>
            
            <div className="bg-[#111] p-4 rounded-lg flex items-center">
              <span className="text-[#fa1571] font-bold text-3xl mr-2">100+</span>
              <span className="text-sm">unidades<br/>em operação</span>
            </div>
            
            <div className="bg-[#111] p-4 rounded-lg flex items-center">
              <span className="text-[#fa1571] font-bold text-3xl mr-2">1 ano</span>
              <span className="text-sm">retorno<br/>do investimento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection