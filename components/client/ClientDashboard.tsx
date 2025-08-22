'use client';

import { useState, useEffect } from 'react';

export default function ClientDashboard() {
  const [clientData] = useState({
    numbersOwned: 45,
    totalInvested: 2250,
    currentReturn: 337.50,
    monthlyYield: 15,
    nextDraw: '2024-12-31',
    withdrawalDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
  });

  const [timeToNextDraw, setTimeToNextDraw] = useState({
    days: 21,
    hours: 14,
    minutes: 35,
    seconds: 42
  });

  const [timeToWithdrawal, setTimeToWithdrawal] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateWithdrawalTime = () => {
      const now = new Date().getTime();
      const withdrawalTime = clientData.withdrawalDate.getTime();
      const difference = withdrawalTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeToWithdrawal({ days, hours, minutes, seconds });
      }
    };

    calculateWithdrawalTime();
    const timer = setInterval(() => {
      setTimeToNextDraw(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
      calculateWithdrawalTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [clientData.withdrawalDate]);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Bem-vindo, João!</h2>
          <div className="grid grid-cols-2 gap-4 text-right">
            <div>
              <p className="text-blue-100 text-sm">Próximo sorteio em:</p>
              <div className="flex gap-1 text-sm">
                <div className="bg-white/20 px-2 py-1 rounded">
                  {timeToNextDraw.days}d
                </div>
                <div className="bg-white/20 px-2 py-1 rounded">
                  {timeToNextDraw.hours.toString().padStart(2, '0')}h
                </div>
                <div className="bg-white/20 px-2 py-1 rounded">
                  {timeToNextDraw.minutes.toString().padStart(2, '0')}m
                </div>
                <div className="bg-white/20 px-2 py-1 rounded">
                  {timeToNextDraw.seconds.toString().padStart(2, '0')}s
                </div>
              </div>
            </div>
            <div>
              <p className="text-green-100 text-sm">Resgate disponível em:</p>
              <div className="flex gap-1 text-sm">
                <div className="bg-green-500/30 px-2 py-1 rounded">
                  {timeToWithdrawal.days}d
                </div>
                <div className="bg-green-500/30 px-2 py-1 rounded">
                  {timeToWithdrawal.hours.toString().padStart(2, '0')}h
                </div>
                <div className="bg-green-500/30 px-2 py-1 rounded">
                  {timeToWithdrawal.minutes.toString().padStart(2, '0')}m
                </div>
                <div className="bg-green-500/30 px-2 py-1 rounded">
                  {timeToWithdrawal.seconds.toString().padStart(2, '0')}s
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Seus Números</p>
            <p className="text-3xl font-bold">{clientData.numbersOwned}</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Total Investido</p>
            <p className="text-3xl font-bold">R$ {clientData.totalInvested.toLocaleString('pt-BR')}</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-blue-100 text-sm mb-1">Rendimento Atual</p>
            <p className="text-3xl font-bold text-green-300">R$ {clientData.currentReturn.toLocaleString('pt-BR')}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Evolução do Rendimento
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Mês 1</span>
              <span className="font-semibold text-green-600">+R$ 337,50</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Mês 2 (Projeção)</span>
              <span className="font-semibold text-blue-600">+R$ 387,13</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-600">Mês 3 (Projeção)</span>
              <span className="font-semibold text-blue-600">+R$ 445,20</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-2">
              <i className="ri-trophy-line w-5 h-5 flex items-center justify-center text-green-600"></i>
              <span className="font-semibold text-green-800">Rendimento Garantido</span>
            </div>
            <p className="text-sm text-green-700">
              Seus números estão rendendo <strong>{clientData.monthlyYield}% ao mês</strong> conforme contratado
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <i className="ri-gift-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Suas Chances de Ganhar
          </h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
              <h4 className="font-semibold text-orange-800 mb-2">🥇 1º Prêmio - R$ 10 Milhões</h4>
              <p className="text-sm text-orange-700">
                Suas chances: 45 em 100.000 números
              </p>
              <div className="mt-2 bg-orange-200 rounded-full h-2">
                <div 
                  className="bg-orange-500 h-2 rounded-full" 
                  style={{ width: `${(clientData.numbersOwned / 100000) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Top 50 Compradores</h4>
              <p className="text-sm text-purple-700 mb-2">
                R$ 400.000 para cada um dos 50 maiores
              </p>
              <div className="text-xs text-purple-600">
                Você está na <strong>15ª posição</strong> entre os maiores compradores
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 mb-3">
                Quer aumentar suas chances?
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-add-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                Comprar Mais Números
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          <i className="ri-history-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Histórico de Transações
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Data</th>
                <th className="text-left py-3 px-4">Tipo</th>
                <th className="text-left py-3 px-4">Números</th>
                <th className="text-left py-3 px-4">Valor</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">10/12/2024</td>
                <td className="py-3 px-4">Compra</td>
                <td className="py-3 px-4">20 números</td>
                <td className="py-3 px-4 font-semibold">R$ 1.000,00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Confirmado
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">05/12/2024</td>
                <td className="py-3 px-4">Compra</td>
                <td className="py-3 px-4">25 números</td>
                <td className="py-3 px-4 font-semibold">R$ 1.250,00</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                    Confirmado
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4">10/11/2024</td>
                <td className="py-3 px-4">Rendimento</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4 font-semibold text-green-600">+R$ 337,50</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    Creditado
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}