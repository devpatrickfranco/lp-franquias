import React, { useEffect, useRef, useState } from 'react';
import { Percent, TrendingUp, Lightbulb, Brain } from 'lucide-react';

const benefits = [
  {
    title: "40% de lucro",
    description: "Rentabilidade superior à média do mercado com modelo de negócio otimizado para maximizar seus ganhos.",
    icon: <Percent size={40} className="text-[#fa1571]" />,
  },
  {
    title: "Baixo custo de operação",
    description: "Estrutura enxuta e processos eficientes que garantem despesas controladas e maior lucratividade.",
    icon: <TrendingUp size={40} className="text-[#fa1571]" />,
  },
  {
    title: "Treinamento e suporte completo",
    description: "Capacitação contínua e acompanhamento especializado para garantir o sucesso do seu negócio desde o primeiro dia.",
    icon: <Lightbulb size={40} className="text-[#fa1571]" />,
  },
  {
    title: "Uso de inteligência artificial",
    description: "Tecnologia avançada para diagnósticos precisos e resultados superiores, diferenciando seu negócio da concorrência.",
    icon: <Brain size={40} className="text-[#fa1571]" />,
  },
];

const NumberCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

const WhyInvestSection: React.FC = () => {
  return (
    <section id="benefícios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que investir na DamaFace?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nosso modelo de franquia foi desenvolvido para maximizar seus ganhos com suporte completo em todas as etapas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#d8a8a1]"
            >
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-[#fa1571] mb-2">
                +<NumberCounter end={100} /> 
              </div>
              <p className="text-gray-600">Unidades em Operação</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-[#fa1571] mb-2">
                +<NumberCounter end={10000} />
              </div>
              <p className="text-gray-600">Clientes Atendidos</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-[#fa1571] mb-2">
                <NumberCounter end={40} />%
              </div>
              <p className="text-gray-600">Média de Lucro</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl font-bold text-[#fa1571] mb-2">
                <NumberCounter end={12} />
              </div>
              <p className="text-gray-600">Anos no Mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;