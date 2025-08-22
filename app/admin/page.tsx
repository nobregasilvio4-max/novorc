'use client';

import { useState } from 'react';
import AdminStats from '../../components/admin/AdminStats';
import AdminSettings from '../../components/admin/AdminSettings';
import AdminPayment from '../../components/admin/AdminPayment';
import AdminContent from '../../components/admin/AdminContent';
import AdminClients from '../../components/admin/AdminClients';
import AdminEditor from '../../components/admin/AdminEditor';
import AdminCloaking from '../../components/admin/AdminCloaking';
import AdminDomains from '../../components/admin/AdminDomains';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-3-line', color: 'text-blue-600' },
    { id: 'editor', label: 'Editor do Site', icon: 'ri-edit-box-line', color: 'text-green-600' },
    { id: 'cloaking', label: 'Sistema Cloaking', icon: 'ri-shield-star-line', color: 'text-red-600' },
    { id: 'domains', label: 'Domínios', icon: 'ri-global-line', color: 'text-indigo-600' },
    { id: 'clients', label: 'Clientes', icon: 'ri-team-line', color: 'text-purple-600' },
    { id: 'settings', label: 'Configurações', icon: 'ri-settings-4-line', color: 'text-orange-600' },
    { id: 'payment', label: 'Pagamento', icon: 'ri-secure-payment-line', color: 'text-yellow-600' },
    { id: 'content', label: 'Conteúdo', icon: 'ri-file-text-line', color: 'text-pink-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-2xl border-r border-gray-200 transition-all duration-300 z-50 ${
        sidebarCollapsed ? 'w-20' : 'w-72'
      }`}>
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
          {!sidebarCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <h1 className="font-['Pacifico'] text-xl font-bold text-white">RifaCap Admin</h1>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`${sidebarCollapsed ? 'ri-menu-line' : 'ri-close-line'} text-white text-lg`}></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-medium text-sm transition-all cursor-pointer group ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-100' 
                  : 'bg-gray-100 group-hover:bg-gray-200'
              }`}>
                <i className={`${tab.icon} ${activeTab === tab.id ? tab.color : 'text-gray-500'} text-lg`}></i>
              </div>
              {!sidebarCollapsed && (
                <span className="flex-1 text-left">{tab.label}</span>
              )}
              {!sidebarCollapsed && activeTab === tab.id && (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* User Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className={`flex items-center gap-3 p-3 bg-gray-50 rounded-xl ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-white text-sm"></i>
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Administrador</p>
                <p className="text-xs text-gray-500 truncate">admin@rifacap.com</p>
              </div>
            )}
          </div>
          
          <button className={`mt-3 w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors cursor-pointer flex items-center ${
            sidebarCollapsed ? 'justify-center' : 'justify-center gap-2'
          }`}>
            <i className="ri-logout-line text-lg"></i>
            {!sidebarCollapsed && <span className="text-sm font-medium">Sair</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-72'}`}>
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h2>
            <p className="text-sm text-gray-500">Gerencie sua plataforma RifaCap</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 font-medium">Sistema Online</span>
            </div>
            
            <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer">
              <i className="ri-notification-3-line text-gray-600 text-lg"></i>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <AdminStats />}
            {activeTab === 'editor' && <AdminEditor />}
            {activeTab === 'cloaking' && <AdminCloaking />}
            {activeTab === 'domains' && <AdminDomains />}
            {activeTab === 'clients' && <AdminClients />}
            {activeTab === 'settings' && <AdminSettings />}
            {activeTab === 'payment' && <AdminPayment />}
            {activeTab === 'content' && <AdminContent />}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {!sidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarCollapsed(true)}
        ></div>
      )}
    </div>
  );
}