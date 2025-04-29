import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Send, Building2, Calendar, MapPin, Phone, Mail, User } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  city: z.string().min(3, 'Cidade inválida'),
  capital: z.enum([
    'Até R$127.000',
    'Até R$249.000',
    'Até R$349.000',
    'Acima de R$349.000'
  ]),
  timeline: z.enum([
    'Imediato',
    'Dentro de 3 meses',
    'Próximo semestre'
  ])
});

type FormData = z.infer<typeof schema>;

const LeadForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Form data:', data);
      navigate('/obrigado');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div id="lead-form" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece Sua Jornada DamaFace</h2>
          <p className="text-lg text-gray-600">
            Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar todas as oportunidades disponíveis.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User size={18} className="mr-2 text-[#fa1571]" />
                    Nome Completo
                  </label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Digite seu nome completo"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail size={18} className="mr-2 text-[#fa1571]" />
                    Email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone size={18} className="mr-2 text-[#fa1571]" />
                    Telefone
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MapPin size={18} className="mr-2 text-[#fa1571]" />
                    Cidade de Interesse
                  </label>
                  <input
                    {...register('city')}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                    placeholder="Digite sua cidade"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Building2 size={18} className="mr-2 text-[#fa1571]" />
                    Capital Disponível
                  </label>
                  <select
                    {...register('capital')}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                  >
                    <option value="">Selecione o capital disponível</option>
                    <option value="Até R$127.000">Até R$127.000</option>
                    <option value="Até R$249.000">Até R$249.000</option>
                    <option value="Até R$349.000">Até R$349.000</option>
                    <option value="Acima de R$349.000">Acima de R$349.000</option>
                  </select>
                  {errors.capital && (
                    <p className="mt-1 text-sm text-red-500">{errors.capital.message}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={18} className="mr-2 text-[#fa1571]" />
                    Quando Pretende Montar
                  </label>
                  <select
                    {...register('timeline')}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#fa1571] focus:ring-2 focus:ring-[#fa1571] focus:ring-opacity-20 transition-colors duration-200"
                  >
                    <option value="">Selecione o prazo desejado</option>
                    <option value="Imediato">Imediato</option>
                    <option value="Dentro de 3 meses">Dentro de 3 meses</option>
                    <option value="Próximo semestre">Próximo semestre</option>
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-500">{errors.timeline.message}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fa1571] hover:bg-[#e01364] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    Solicitar Informações
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              Ao enviar, você concorda em receber comunicações sobre a franquia DamaFace.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;