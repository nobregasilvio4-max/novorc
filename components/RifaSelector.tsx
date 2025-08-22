'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RifaSelector() {
  const [selectedTitulos, setSelectedTitulos] = useState(5);

  const handleTituloSelection = (type: 'preset' | 'add', value: number) => {
    if (type === 'preset') {
      setSelectedTitulos(value);
    } else if (type === 'add') {
      setSelectedTitulos(prev => prev + value);
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

  const pricePerTitulo = 25.00;
  const totalPrice = selectedTitulos * pricePerTitulo;
  const monthlyPrize = 50000000; // R$ 50 milhões

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🎯 Compre Seus Títulos da Sorte
          </h2>
          <p className="text-xl text-gray-600">
            Cada título vale R$ 25,00 - Quanto mais títulos, maiores suas chances!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h3 className="text-xl font-bold text-center">
              Selecione quantos títulos você quer comprar
            </h3>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { num: 5, label: '+5', action: 'add' },
                { num: 10, label: '+10', action: 'add' },
                { num: 20, label: '+20', action: 'add' },
                { num: 30, label: '+30', action: 'add' }
              ].map((item) => (
                <button
                  key={item.num}
                  onClick={() => handleTituloSelection('add', item.num)}
                  className="relative p-6 rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-center cursor-pointer"
                >
                  <div className="text-2xl font-bold mb-2 text-blue-600">{item.label}</div>
                  <div className="text-sm text-gray-600">ADICIONAR</div>
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-600 mb-2">Seleções rápidas:</div>
                <div className="flex justify-center gap-2 flex-wrap">
                  {[5, 10, 25, 50, 100].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleTituloSelection('preset', num)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        selectedTitulos === num
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100 border'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={handleDecrement}
                  disabled={selectedTitulos <= 1}
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer border-2 border-gray-200"
                >
                  <i className="ri-arrow-left-line text-xl text-gray-600"></i>
                </button>

                <div className="text-center min-w-[120px]">
                  <div className="text-4xl font-bold text-blue-600 mb-1">{selectedTitulos}</div>
                  <div className="text-sm text-gray-600">títulos</div>
                </div>

                <button
                  onClick={handleIncrement}
                  className="w-12 h-12 flex items-center justify-center bg-white hover:bg-gray-100 rounded-full transition-colors cursor-pointer border-2 border-gray-200"
                >
                  <i className="ri-arrow-right-line text-xl text-gray-600"></i>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
              <div className="text-center">
                <div className="text-lg text-gray-600 mb-2">Total do seu título:</div>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-gray-600">Valor por título</div>
                    <div className="font-semibold text-green-600">
                      R$ {pricePerTitulo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-gray-600">Suas chances</div>
                    <div className="font-semibold text-blue-600">
                      {selectedTitulos} em 100.000
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-gray-600">Prêmio principal</div>
                    <div className="font-semibold text-purple-600">
                      R$ {(monthlyPrize / 1000000).toFixed(0)}M
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/cadastro"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer text-center block"
            >
              <i className="ri-shopping-cart-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
              COMPRAR TÍTULOS - R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Link>

            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-verified-badge-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                <span>SUSEP Autorizado</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-calendar-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                <span>Sorteios mensais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}