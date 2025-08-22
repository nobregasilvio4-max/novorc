'use client';

import { useState, useEffect } from 'react';

export default function AdminStats() {
  const [stats, setStats] = useState({
    onlineUsers: 47,
    todayVisitors: 1234,
    totalSales: 856,
    revenue: 125600,
    conversionRate: 3.2
  });

  const [chartData] = useState([
    { name: 'Jan', vendas: 65, visitas: 2400 },
    { name: 'Fev', vendas: 78, visitas: 2800 },
    { name: 'Mar', vendas: 92, visitas: 3200 },
    { name: 'Abr', vendas: 134, visitas: 4100 },
    { name: 'Mai', vendas: 156, visitas: 4800 },
    { name: 'Jun', vendas: 178, visitas: 5200 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 3) - 1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Usuários Online</p>
              <p className="text-3xl font-bold">{stats.onlineUsers}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">
              <i className="ri-user-line text-2xl"></i>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse mr-2"></div>
            <span className="text-sm text-green-100">Ao vivo</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Visitantes Hoje</p>
              <p className="text-3xl font-bold">{stats.todayVisitors.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">
              <i className="ri-eye-line text-2xl"></i>
            </div>
          </div>
          <div className="text-sm text-blue-100 mt-4">
            +12% vs ontem
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Vendas Totais</p>
              <p className="text-3xl font-bold">{stats.totalSales}</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">
              <i className="ri-shopping-cart-line text-2xl"></i>
            </div>
          </div>
          <div className="text-sm text-purple-100 mt-4">
            {stats.conversionRate}% conversão
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Receita Total</p>
              <p className="text-3xl font-bold">R$ {(stats.revenue / 1000).toFixed(0)}k</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg">
              <i className="ri-money-dollar-circle-line text-2xl"></i>
            </div>
          </div>
          <div className="text-sm text-orange-100 mt-4">
            +28% vs mês anterior
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Vendas vs Visitas (Últimos 6 meses)
          </h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="relative flex items-end gap-1 h-48 w-full">
                  <div 
                    className="bg-blue-500 rounded-t w-1/2 min-h-[20px]"
                    style={{ height: `${(item.visitas / 5200) * 100}%` }}
                    title={`Visitas: ${item.visitas}`}
                  ></div>
                  <div 
                    className="bg-green-500 rounded-t w-1/2 min-h-[20px]"
                    style={{ height: `${(item.vendas / 178) * 100}%` }}
                    title={`Vendas: ${item.vendas}`}
                  ></div>
                </div>
                <span className="text-xs text-gray-600 mt-2">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Visitas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Vendas</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            <i className="ri-user-follow-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
            Atividade Recente
          </h3>
          <div className="space-y-4">
            {[
              { user: 'João Silva', action: 'comprou 20 números', time: '2 min atrás', amount: 'R$ 100,00' },
              { user: 'Maria Santos', action: 'comprou 50 números', time: '5 min atrás', amount: 'R$ 250,00' },
              { user: 'Carlos Lima', action: 'comprou 10 números', time: '8 min atrás', amount: 'R$ 50,00' },
              { user: 'Ana Costa', action: 'comprou 30 números', time: '12 min atrás', amount: 'R$ 150,00' },
              { user: 'Pedro Oliveira', action: 'comprou 15 números', time: '15 min atrás', amount: 'R$ 75,00' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    {activity.user.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                    <p className="text-xs text-gray-500">{activity.action}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{activity.amount}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}