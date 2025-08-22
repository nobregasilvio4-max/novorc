
'use client';

import { useState } from 'react';
import ClientPayment from './ClientPayment';

export default function ClientPurchase() {
  const [selectedTitulos, setSelectedTitulos] = useState(20);
  const [showPayment, setShowPayment] = useState(false);
  const [showRendimentoCalculator, setShowRendimentoCalculator] = useState(false);
  
  const pricePerTitulo = 25.00;
  const monthlyRate = 0.15; // 15% ao mês - será configurável pelo admin
  const totalPrice = selectedTitulos * pricePerTitulo;
  const monthlyReturn = totalPrice * monthlyRate;
  const threeMonthReturn = totalPrice + (monthlyReturn * 3);
  const totalProfit = threeMonthReturn - totalPrice;

  const handleTituloSelection = (type: 'preset' | 'custom', value: number) => {
    if (type === 'preset') {
      setSelectedTitulos(value);
    }
  };

  const handleIncrement = () => {
    setSelectedTitulos(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (selectedTitulos > 1) {
      setSelectedTitulos(prev => prev - 1);
    }
  };

  const handlePurchaseClick = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    // Aqui você pode adicionar lógica para atualizar o dashboard
  };

  if (showPayment) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => setShowPayment(false)}
            className="text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Finalizar Compra</h2>
        </div>
        
        <ClientPayment 
          selectedTitulos={selectedTitulos}
          totalPrice={totalPrice}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Comprar Mais Títulos</h2>
        <p className="text-gray-600">Aumente suas chances de ganhar nos próximos sorteios</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-list-check w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Selecione a quantidade de títulos
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[5, 10, 20, 50].map((num) => (
            <button
              key={num}
              onClick={() => handleTituloSelection('preset', num)}
              className={`relative p-6 rounded-xl border-2 transition-all text-center cursor-pointer ${
                selectedTitulos === num
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {num === 20 && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Mais popular
                  </span>
                </div>
              )}
              <div className="text-2xl font-bold mb-2">{num}</div>
              <div className="text-sm text-gray-600">títulos</div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={handleDecrement}
            disabled={selectedTitulos <= 1}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <i className="ri-subtract-line text-xl"></i>
          </button>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{selectedTitulos}</div>
            <div className="text-sm text-gray-600">títulos</div>
          </div>
          
          <button
            onClick={handleIncrement}
            className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
          >
            <i className="ri-add-line text-xl"></i>
          </button>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
          <div className="text-center">
            <div className="text-sm text-blue-600 mb-1">Total a pagar</div>
            <div className="text-4xl font-bold text-blue-900 mb-4">
              R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-3">
                <div className="text-gray-600">Valor por título</div>
                <div className="font-semibold">R$ {pricePerTitulo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-gray-600">Chance de ganhar</div>
                <div className="font-semibold text-purple-600">{(selectedTitulos / 100000 * 100).toFixed(4)}%</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-gray-600">Rendimento mensal</div>
                <div className="font-semibold text-green-600">R$ {monthlyReturn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-gray-600">Total em 3 meses</div>
                <div className="font-semibold text-blue-600">R$ {threeMonthReturn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Calculadora de Rendimentos Expandida */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <i className="ri-calculator-line w-5 h-5 flex items-center justify-center"></i>
              Simulador de Rendimentos
            </h4>
            <button
              onClick={() => setShowRendimentoCalculator(!showRendimentoCalculator)}
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              <i className={`ri-${showRendimentoCalculator ? 'subtract' : 'add'}-line w-5 h-5 flex items-center justify-center`}></i>
            </button>
          </div>

          {showRendimentoCalculator && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3">Rendimentos por Período</h5>
                  <div className="space-y-3">
                    {[
                      { period: '1 mês', value: totalPrice + monthlyReturn },
                      { period: '3 meses', value: totalPrice + (monthlyReturn * 3) },
                      { period: '6 meses', value: totalPrice + (monthlyReturn * 6) },
                      { period: '12 meses', value: totalPrice + (monthlyReturn * 12) }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">{item.period}</span>
                        <span className="font-semibold text-green-600">
                          R$ {item.value.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-3">Comparativo de Investimento</h5>
                  <div className="space-y-3">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-700">15% ao mês</div>
                      <div className="text-sm text-blue-600">Taxa de rendimento</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-700">
                        R$ {totalProfit.toLocaleString('pt-BR')}
                      </div>
                      <div className="text-sm text-green-600">Lucro em 3 meses</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-700">
                        {((totalProfit / totalPrice) * 100).toFixed(1)}%
                      </div>
                      <div className="text-sm text-purple-600">Rentabilidade total</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <i className="ri-lightbulb-line w-5 h-5 flex items-center justify-center text-yellow-600 mt-0.5"></i>
                  <div>
                    <h6 className="font-medium text-yellow-800 mb-1">💡 Dica de Investimento</h6>
                    <p className="text-sm text-yellow-700">
                      Com {selectedTitulos} títulos, você tem <strong>{(selectedTitulos / 100000 * 100).toFixed(4)}%</strong> de chance 
                      de ganhar R$ 50 milhões + o rendimento garantido de <strong>15% ao mês</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button 
          onClick={handlePurchaseClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
        >
          <i className="ri-shopping-cart-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
          COMPRAR TÍTULOS - R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </button>

        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-verified-badge-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
            <span>SUSEP autorizado</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-time-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
            <span>Confirmação imediata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
