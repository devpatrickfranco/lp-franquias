import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const RoiCalculator: React.FC = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [operationalCosts, setOperationalCosts] = useState<number>(0);
  const [initialInvestment, setInitialInvestment] = useState<number>(0);

  const calculateROI = () => {
    const annualProfit = (monthlyRevenue - operationalCosts) * 12;
    return initialInvestment > 0 ? (annualProfit / initialInvestment) * 100 : 0;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Calculadora de ROI DamaFace
          </h1>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Faturamento Mensal Estimado
              </label>
              <input
                type="number"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#fa1571] focus:border-[#fa1571]"
                placeholder="R$ 0,00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Custos Operacionais Mensais
              </label>
              <input
                type="number"
                value={operationalCosts}
                onChange={(e) => setOperationalCosts(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#fa1571] focus:border-[#fa1571]"
                placeholder="R$ 0,00"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Investimento Inicial
              </label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-[#fa1571] focus:border-[#fa1571]"
                placeholder="R$ 0,00"
              />
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Resultados</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Lucro Mensal Estimado:</p>
                  <p className="text-lg font-bold text-[#fa1571]">
                    {formatCurrency(monthlyRevenue - operationalCosts)}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">Lucro Anual Estimado:</p>
                  <p className="text-lg font-bold text-[#fa1571]">
                    {formatCurrency((monthlyRevenue - operationalCosts) * 12)}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-600">ROI Anual:</p>
                  <p className="text-2xl font-bold text-[#fa1571]">
                    {calculateROI().toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-[#fa1571] transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoiCalculator;