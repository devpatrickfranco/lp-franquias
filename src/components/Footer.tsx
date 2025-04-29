import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://images.builderservices.io/s/cdn/v1.0/i/m?url=https%3A%2F%2Fstorage.googleapis.com%2Fproduction-hostgator-brasil-v1-0-5%2F955%2F318955%2FcX5ejCQ7%2F4dce5db9740c49baaa09755065dfcd71&methods=resize%2C500%2C5000" 
              alt="DamaFace Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transformando a estética facial com tecnologia de ponta e resultados comprovados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre-a-franquia" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre a Franquia</a>
              </li>
              <li>
                <a href="#benefícios" className="text-gray-400 hover:text-white transition-colors duration-300">Benefícios</a>
              </li>
              <li>
                <a href="#modelos" className="text-gray-400 hover:text-white transition-colors duration-300">Modelos de Negócio</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors duration-300">Depoimentos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contato</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Área do Franqueado</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Materiais de Apoio</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">contato@damaface.com.br</p>
            <p className="text-gray-400 mb-4">(11) 3456-7890</p>
            <button className="bg-[#fa1571] hover:bg-[#e01364] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 text-sm">
              Fale Conosco
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DamaFace. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300">
              Contato
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 text-gray-600 text-sm flex items-center justify-center">
          Feito com <Heart size={14} className="mx-1 text-[#fa1571]" /> por DamaFace
        </div>
      </div>
    </footer>
  );
};

export default Footer;