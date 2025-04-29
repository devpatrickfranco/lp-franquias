import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';

const businessModels = [
  {
    name: "Modelo Express",
    investment: "R$ 90.000",
    roi: "6-12 meses",
    features: [
      "Espaço compacto (30-50m²)",
      "Equipe reduzida",
      "Ideal para iniciantes",
      "Suporte de marketing local"
    ],
    recommended: false
  },
  {
    name: "Modelo Premium",
    investment: "R$ 150.000",
    roi: "8-14 meses",
    features: [
      "Espaço médio (50-80m²)",
      "Equipe completa",
      "Tecnologia avançada",
      "Marketing regional exclusivo"
    ],
    recommended: true
  },
  {
    name: "Modelo Master",
    investment: "R$ 250.000",
    roi: "12-18 meses",
    features: [
      "Espaço luxuoso (80-120m²)",
      "Equipe especializada",
      "Equipamentos exclusivos",
      "Marketing nacional"
    ],
    recommended: false
  }
];

const BusinessModelsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="modelos" className="py-16 bg-[#ededed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelos de Negócio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o modelo que melhor se adapta ao seu perfil de investimento e objetivos de crescimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessModels.map((model, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              } ${model.recommended ? 'border-2 border-[#fa1571]' : 'border border-gray-200'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {model.recommended && (
                <div className="bg-[#fa1571] text-white text-center py-2 font-semibold">
                  Mais Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">{model.name}</h3>
                
                <div className="mb-6 text-center">
                  <span className="text-3xl font-bold">{model.investment}</span>
                  <p className="text-gray-500 mt-1">Investimento inicial</p>
                </div>
                
                <div className="mb-6 text-center">
                  <span className="text-xl font-semibold text-[#fa1571]">{model.roi}</span>
                  <p className="text-gray-500 mt-1">Retorno estimado</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Diferenciais:</h4>
                  <ul className="space-y-2">
                    {model.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-[#fa1571] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={`w-full py-3 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  model.recommended 
                    ? 'bg-[#fa1571] hover:bg-[#e01364] text-white' 
                    : 'bg-[#d8a8a1] hover:bg-[#c29992] text-white'
                }`}>
                  Saiba mais
                  <ChevronRight size={18} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelsSection;