import React from 'react';
import { Calculator, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResourcesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section  
    id='ferramentas-e-recursos'
    className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ferramentas e Recursos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acesse nossos materiais exclusivos e descubra como a DamaFace pode ser a oportunidade perfeita para você.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#ededed] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <Calculator size={48} className="text-[#fa1571]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Calculadora de ROI</h3>
            <p className="text-gray-600 text-center mb-6">
              Estime o retorno do seu investimento baseado no modelo de franquia e localização de sua escolha.
            </p>
            <div className="text-center">
              <button 
                onClick={() => navigate('/calculadora-de-roi')}
                className="bg-[#fa1571] hover:bg-[#e01364] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 flex items-center mx-auto"
              >
                Calcular meu ROI
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
          
          <div className="bg-[#ededed] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <FileText size={48} className="text-[#fa1571]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Materiais Educativos</h3>
            <p className="text-gray-600 text-center mb-6">
              Acesse e-books, vídeos e guias para entender melhor o mercado de estética e nossas soluções.
            </p>
            <div className="text-center">
              <button 
                onClick={() => {
                  const formElement = document.querySelector('#lead-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-[#d8a8a1] hover:bg-[#c29992] text-white font-medium py-2 px-6 rounded-full transition-colors duration-300 flex items-center mx-auto"
              >
                Acessar materiais
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;