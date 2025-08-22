
'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientDashboard from '../../components/client/ClientDashboard';
import ClientNumbers from '../../components/client/ClientNumbers';
import ClientPurchase from '../../components/client/ClientPurchase';
import ClientReferrals from '../../components/client/ClientReferrals';
import ClientWithdrawal from '../../components/client/ClientWithdrawal';

export default function ClientePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'ri-dashboard-line',
      description: 'Visão geral da conta'
    },
    {
      id: 'numbers',
      label: 'Meus Números',
      icon: 'ri-ticket-line',
      description: 'Títulos adquiridos'
    },
    {
      id: 'purchase',
      label: 'Comprar Títulos',
      icon: 'ri-shopping-cart-line',
      description: 'Adquirir novos títulos'
    },
    {
      id: 'withdrawal',
      label: 'Sacar',
      icon: 'ri-bank-line',
      description: 'Resgatar rendimentos'
    },
    {
      id: 'referrals',
      label: 'Indicações',
      icon: 'ri-user-add-line',
      description: 'Programa de afiliados'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <Link href="/" className="font-['Pacifico'] text-4xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
              RifaCap
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">Área do Cliente</h2>
            <p className="text-gray-600">Acesse sua conta para ver seus números e sorteios</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                required
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                required
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                placeholder="********"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">
              Ainda não tem conta?
            </p>
            <Link
              href="/cadastro"
              className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Cadastre-se agora
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      } flex-shrink-0`}>
        {/* Header da Sidebar */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RC</span>
              </div>
              {isSidebarOpen && (
                <span className="font-['Pacifico'] text-xl font-bold text-blue-600">
                  RifaCap
                </span>
              )}
            </Link>
          </div>
          {isSidebarOpen && (
            <div className="mt-3">
              <p className="text-sm text-gray-600">Área do Cliente</p>
              <p className="text-xs text-blue-600 font-medium">João Silva</p>
            </div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="py-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <i className={`${item.icon} w-5 h-5 flex items-center justify-center flex-shrink-0`}></i>
              {isSidebarOpen && (
                <div>
                  <div className="font-medium">{item.label}</div>
                  <div className="text-xs opacity-75">{item.description}</div>
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Footer da Sidebar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`ri-${isSidebarOpen ? 'arrow-left-s' : 'arrow-right-s'}-line w-4 h-4 flex items-center justify-center`}></i>
            {isSidebarOpen && <span className="text-sm">Recolher</span>}
          </button>
          
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer mt-2"
          >
            <i className="ri-logout-circle-line w-4 h-4 flex items-center justify-center"></i>
            {isSidebarOpen && <span className="text-sm">Sair</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-sm text-gray-600">
                {menuItems.find(item => item.id === activeTab)?.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">João Silva</div>
                  <div className="text-xs text-gray-600">Cliente Premium</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs text-green-600 font-medium">Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'dashboard' && <ClientDashboard />}
          {activeTab === 'numbers' && <ClientNumbers />}
          {activeTab === 'purchase' && <ClientPurchase />}
          {activeTab === 'withdrawal' && <ClientWithdrawal />}
          {activeTab === 'referrals' && <ClientReferrals />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {!isSidebarOpen && (
        <div className="lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer z-50"
          >
            <i className="ri-menu-line w-5 h-5 flex items-center justify-center"></i>
          </button>
        </div>
      )}
    </div>
  );
}
