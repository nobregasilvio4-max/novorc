
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CalculadoraPage() {
  const [numbers, setNumbers] = useState(10);
  const [period, setPeriod] = useState(12);

  const pricePerNumber = 25.00;
  const monthlyRate = 0.15; // 15% ao mês
  const totalInvested = numbers * pricePerNumber;

  const calculateReturns = (months: number) => {
    const monthlyReturn = totalInvested * monthlyRate;
    const totalReturn = monthlyReturn * months;
    const finalValue = totalInvested + totalReturn;
    return { monthlyReturn, totalReturn, finalValue };
  };

  const { monthlyReturn, totalReturn, finalValue } = calculateReturns(period);
  const chances = ((numbers / 100000) * 100).toFixed(4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📊 Calculadora de Rendimentos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simule quanto seus números vão render mensalmente e suas chances de ganhar no sorteio
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <h2 className="text-2xl font-bold text-center">
                Baseado na quantidade de números
              </h2>
              <p className="text-center text-blue-100 mt-2">
                Cada número custa R$ 25,00 • Rendimento mensal de 15%
              </p>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Quantos números você quer comprar?
                    </label>
                    
                    <div className="mb-6">
                      <input
                        type="range"
                        min="1"
                        max="500"
                        value={numbers}
                        onChange={(e) => setNumbers(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>1</span>
                        <span>250</span>
                        <span>500</span>
                      </div>
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-blue-600 mb-2">{numbers}</div>
                      <div className="text-gray-600">números selecionados</div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[5, 10, 25, 50, 100, 200, 300, 500].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setNumbers(preset)}
                          className={`py-2 px-3 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                            numbers === preset
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Simular por quantos meses?
                    </label>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[1, 3, 6, 12].map((months) => (
                        <button
                          key={months}
                          onClick={() => setPeriod(months)}
                          className={`py-3 px-4 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                            period === months
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {months} {months === 1 ? 'mês' : 'meses'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      💰 Simulação de Rendimentos
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Valor investido:</span>
                        <span className="font-semibold text-blue-600">
                          R$ {totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Rendimento mensal:</span>
                        <span className="font-semibold text-green-600">
                          R$ {monthlyReturn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Total de rendimentos ({period} {period === 1 ? 'mês' : 'meses'}):</span>
                        <span className="font-semibold text-green-600">
                          R$ {totalReturn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 bg-white rounded-lg px-4">
                        <span className="text-gray-900 font-medium">Valor final:</span>
                        <span className="text-xl font-bold text-green-600">
                          R$ {finalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                      🎯 Suas Chances no Sorteio
                    </h3>
                    
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">
                        {chances}%
                      </div>
                      <div className="text-gray-600 mb-4">
                        {numbers} em 100.000 números
                      </div>
                      
                      <div className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-2">Prêmio principal mensal:</div>
                        <div className="text-2xl font-bold text-purple-600">
                          R$ 10.000.000
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors cursor-pointer">
                      <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                      COMPRAR {numbers} NÚMEROS - R$ {totalInvested.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h4 className="font-semibold text-yellow-800 mb-2">
                  <i className="ri-lightbulb-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  Como funciona?
                </h4>
                <div className="text-sm text-yellow-700 space-y-2">
                  <p>• <strong>Rendimento mensal:</strong> 15% sobre o valor investido, creditado todo mês</p>
                  <p>• <strong>Sorteio mensal:</strong> Realizado pela Caixa Econômica Federal</p>
                  <p>• <strong>Resgate:</strong> Você pode resgatar seu investimento a partir de 90 dias</p>
                  <p>• <strong>Autorização:</strong> Produto regulamentado pela SUSEP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
