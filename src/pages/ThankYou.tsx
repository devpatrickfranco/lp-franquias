import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Download } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-[#fa1571]" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Obrigado pelo interesse!
          </h2>
          <p className="mt-2 text-gray-600">
            Em breve, nossa equipe entrará em contato com você para dar continuidade ao processo.
          </p>
        </div>

        <div className="mt-8 space-y-4">
         <a
            href="materias/ebook-franquias-marketing.pdf"
            download
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#fa1571] hover:bg-[#e01364] transition-colors duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Baixar Material Informativo
          </a>

          <Link
            to="/"
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;