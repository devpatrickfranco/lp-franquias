import React from 'react';
import { ClipboardCheck, GraduationCap, Store, Zap } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCheck size={32} className="text-white" />,
    title: "Inscrição",
    description: "Preencha o formulário e agende uma conversa com nossos especialistas para entender melhor o modelo de negócio."
  },

  {
    icon: <Store size={32} className="text-white" />,
    title: "Implantação",
    description: "Conte com o nosso suporte desde a escolha do ponto até a montagem da clínica e estruturação da equipe"
  },

  {
    icon: <GraduationCap size={32} className="text-white" />,
    title: "Treinamento",
    description: "Nosso treinamento abrange todas as áreas essenciais: técnica, administrativa, estratégica e comercial, preparando você para liderar com confiança desde o primeiro dia"
  },

  {
    icon: <Zap size={32} className="text-white" />,
    title: "Início das operações",
    description: "Comece suas atividades com acompanhamento próximo, garantindo estabilidade e desempenho desde o início"
  }
];

const ProcessSection: React.FC = () => {
  return (
    <section id="inicie-agora" className="py-16 bg-[#ededed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Iniciar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
           Siga as etapas fundamentais para se tornar um franqueado DamaFace e iniciar sua trajetória com suporte, estratégia e segurança.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#d8a8a1] transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="relative my-4 md:my-0 z-10">
                  <div className="w-14 h-14 rounded-full bg-[#fa1571] flex items-center justify-center shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-[#fa1571] opacity-20 transform scale-125 animate-pulse"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">Pronto para dar o próximo passo?</p>
          <button
            onClick={() => {
              const formElement = document.querySelector('#lead-form');
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#fa1571] hover:bg-[#e01364] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">               
            Solicitar Estimativa Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;