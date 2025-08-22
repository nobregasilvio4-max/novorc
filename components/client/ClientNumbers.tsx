
'use client';

import { useState, useEffect } from 'react';

export default function ClientNumbers() {
  const [myTitulos, setMyTitulos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Simula geração automática de números aleatórios baseado na compra
  useEffect(() => {
    // Simulando que o cliente comprou títulos em diferentes datas
    const generateRandomNumbers = (quantity: number, purchaseDate: string) => {
      const numbers = [];
      for (let i = 0; i < quantity; i++) {
        // Gera número aleatório entre 1 e 100000 (configurável pelo admin)
        const randomNumber = Math.floor(Math.random() * 100000) + 1;
        numbers.push({
          number: randomNumber.toString().padStart(5, '0'),
          date: purchaseDate,
          status: 'Ativo'
        });
      }
      return numbers;
    };

    // Simula diferentes compras do cliente
    const allTitulos = [
      ...generateRandomNumbers(5, '10/12/2024'),
      ...generateRandomNumbers(3, '05/12/2024'),
      ...generateRandomNumbers(2, '28/11/2024')
    ];

    setMyTitulos(allTitulos);
  }, []);

  const filteredTitulos = myTitulos.filter(item => {
    const matchesFilter = filter === 'all' || item.status.toLowerCase() === filter;
    const matchesSearch = item.number.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Meus Títulos</h2>
          <p className="text-gray-600">Total de {myTitulos.length} títulos ativos</p>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Buscar título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
          >
            <option value="all">Todos</option>
            <option value="ativo">Ativos</option>
            <option value="premiado">Premiados</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
            <div>Número do Título</div>
            <div>Data da Compra</div>
            <div>Status</div>
            <div>Ações</div>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filteredTitulos.map((item, index) => (
            <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="grid grid-cols-4 gap-4 items-center">
                <div>
                  <span className="text-2xl font-bold text-blue-600 font-mono">
                    {item.number}
                  </span>
                </div>
                
                <div>
                  <span className="text-gray-600">{item.date}</span>
                </div>
                
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Ativo' ? 'bg-green-100 text-green-700' :
                    item.status === 'Premiado' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                
                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer">
                    <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                    Comprovante
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            <i className="ri-information-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Informações Importantes
          </h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mt-0.5"></i>
              <span>Todos os seus títulos participam automaticamente dos sorteios mensais</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mt-0.5"></i>
              <span>O rendimento de 15% ao mês é calculado sobre o valor investido</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600 mt-0.5"></i>
              <span>Você pode resgatar seu investimento após 90 dias</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-4">
            <i className="ri-trophy-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Suas Chances no Próximo Sorteio
          </h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-800">1º Prêmio (R$ 10 MI):</span>
              <span className="font-semibold text-green-900">{myTitulos.length} chances</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-800">2º Prêmio (R$ 10 MI):</span>
              <span className="font-semibold text-green-900">{myTitulos.length} chances</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-800">3º Prêmio (R$ 10 MI):</span>
              <span className="font-semibold text-green-900">{myTitulos.length} chances</span>
            </div>
            <div className="pt-2 border-t border-green-300">
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-800">Top 50 (R$ 400 mil cada):</span>
                <span className="font-semibold text-green-900">15ª posição</span>
              </div>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
            Aumentar Minhas Chances
          </button>
        </div>
      </div>
    </div>
  );
}
