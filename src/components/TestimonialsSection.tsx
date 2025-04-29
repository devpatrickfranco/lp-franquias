import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amanda Oliveira",
    location: "São Paulo, SP",
    role: "Franqueada há 2 anos",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Depois de 15 anos trabalhando em salões, decidi empreender com a DamaFace. O suporte da equipe foi fundamental para alcançar lucratividade em apenas 5 meses."
  },
  {
    name: "Carla Mendes",
    location: "Rio de Janeiro, RJ",
    role: "Franqueada há 1 ano",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "A franquia superou minhas expectativas. O treinamento é excepcional e o modelo de negócio realmente entrega os 40% de lucro prometidos."
  },
  {
    name: "Roberto Almeida",
    location: "Belo Horizonte, MG",
    role: "Franqueado há 3 anos",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Mesmo sem experiência prévia em estética, consegui estabelecer um negócio lucrativo graças ao suporte contínuo e tecnologia exclusiva da DamaFace."
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    role: "Franqueada há 1 ano e meio",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "A inteligência artificial nos procedimentos é um diferencial incrível que atrai muitos clientes. Minha clínica está sempre lotada e já estou planejando abrir uma segunda unidade."
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórias de Sucesso</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossos franqueados transformaram suas vidas com a DamaFace.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-24 h-24 rounded-full object-cover border-2 border-[#d8a8a1]"
                          />
                          <div className="absolute -top-2 -right-2 bg-[#fa1571] rounded-full p-1">
                            <Quote size={14} className="text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.location}</p>
                          <p className="text-[#fa1571] font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
            onClick={prevTestimonial}
            disabled={isAnimating}
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300 disabled:opacity-50"
            onClick={nextTestimonial}
            disabled={isAnimating}
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-[#fa1571]' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;