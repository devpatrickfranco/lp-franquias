import React from 'react';
import { Instagram, Facebook, Heart } from 'lucide-react';
import { useState } from "react";



const Footer: React.FC = () => {

  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e redes sociais */}
          <div>
            <img 
              src="https://damaface.com.br/LOGO-DAMAFACE-HORIZONTAL-BRANCO.png" 
              alt="DamaFace Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 mb-4">
              Transformando a estética facial com tecnologia de ponta e resultados comprovados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/damafaceoficial/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61555121465049"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#fa1571] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre-a-franquia" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sobre a Franquia
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#modelos" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Modelos de Negócio
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://damaface.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="https://franqueado.damaface.com.br/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Área do Franqueado
                </a>
              </li>
              <li>
                <a 
                  href="#ferramentas-e-recursos" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Materiais de Apoio
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">contato@damaface.com.br</p>
            <p className="text-gray-400 mb-4">(19) 99553-4809</p>
            <button className="bg-[#fa1571] hover:bg-[#e01364] text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 text-sm">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DamaFace. Todos os direitos reservados.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Âncoras */}
          <a
            href="politica-de-privacidade"
            onClick={(e) => {
              e.preventDefault();
              setShowPrivacy(true);
            }}
            className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
          >
            Política de Privacidade
          </a>
          <a
            href="#termos-de-uso"
            onClick={(e) => {
              e.preventDefault();
              setShowTerms(true);
            }}
            className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
          >
            Termos de Uso
          </a>

          {/* Modal Política de Privacidade */}
          {showPrivacy && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Política de Privacidade</h2>
                <p className="mb-4 text-sm text-gray-700">
                  Coletamos apenas dados fornecidos voluntariamente pelo usuário, com o único propósito de comunicação. Esses dados não são compartilhados com terceiros e são tratados com confidencialidade. Você pode solicitar a remoção dos seus dados a qualquer momento.
                </p>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
                >
                  &times;
                </button>
              </div>
            </div>
          )}

          {/* Modal Termos de Uso */}
          {showTerms && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-lg relative">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Termos de Serviço</h2>
                <p className="mb-4 text-sm text-gray-700">
                  O uso deste site é exclusivamente informativo. Não garantimos funcionamento contínuo ou ausência de erros. Ao continuar navegando, você concorda com os termos e eventuais atualizações. Em caso de dúvidas, entre em contato: contato@damaface.com.br
                </p>
                <button
                  onClick={() => setShowTerms(false)}
                  className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-6 text-gray-600 text-sm flex items-center justify-center">
          Feito com <Heart size={14} className="mx-1 text-[#fa1571]" /> por DamaFace
        </div>
      </div>
    </footer>
  );
};

export default Footer;