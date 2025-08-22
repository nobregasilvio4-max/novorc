
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '1000'
  });
  
  const [showSimulation, setShowSimulation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSimulation(true);
  };

  const monthlyReturn = parseFloat(formData.investmentAmount) * 0.15;
  const threeMonthReturn = parseFloat(formData.investmentAmount) + (monthlyReturn * 3);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Simule seu investimento agora!
          </h2>
          <p className="text-xl text-gray-600">
            Veja quanto você pode ganhar com o RifaCap
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-3">
              <i className="ri-calculator-line w-6 h-6 flex items-center justify-center"></i>
              Calculadora de Rendimento RifaCap
            </h3>
          </div>

          <form id="rifacap-simulator" onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Digite seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Valor do Investimento (R$)
                </label>
                <select
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={(e) => setFormData({...formData, investmentAmount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="500">R$ 500</option>
                  <option value="1000">R$ 1.000</option>
                  <option value="2000">R$ 2.000</option>
                  <option value="5000">R$ 5.000</option>
                  <option value="10000">R$ 10.000</option>
                  <option value="20000">R$ 20.000</option>
                </select>
              </div>
            </div>

            {showSimulation && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  📈 Sua simulação de rendimento:
                </h4>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Investimento inicial</div>
                    <div className="text-2xl font-bold text-gray-900">
                      R$ {parseFloat(formData.investmentAmount).toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Rendimento mensal</div>
                    <div className="text-2xl font-bold text-green-600">
                      R$ {monthlyReturn.toLocaleString('pt-BR')}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <div className="text-sm text-gray-600 mb-1">Total em 90 dias</div>
                    <div className="text-2xl font-bold text-blue-600">
                      R$ {threeMonthReturn.toLocaleString('pt-BR')}
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    + Concorre a <strong>R$ 50 milhões</strong> em prêmios mensais pela Caixa Econômica
                  </p>
                </div>
              </div>
            )}

            {!showSimulation ? (
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-calculator-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
                CALCULAR MEU RENDIMENTO
              </button>
            ) : (
              <Link
                href="/cadastro"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer text-center block"
              >
                <i className="ri-user-add-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
                QUERO INVESTIR AGORA
              </Link>
            )}

            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                <span>Dados protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-verified-badge-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                <span>SUSEP autorizado</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-time-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                <span>Sem taxa de inscrição</span>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center mt-12">
          <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-6 inline-block">
            <h4 className="text-lg font-bold text-yellow-800 mb-2">
              ⚡ Oferta por tempo limitado!
            </h4>
            <p className="text-yellow-700">
              Primeiros 1.000 cadastros ganham <strong>taxa zero</strong> nos primeiros 6 meses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
