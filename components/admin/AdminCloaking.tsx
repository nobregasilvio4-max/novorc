'use client';

import { useState } from 'react';

export default function AdminCloaking() {
  const [cloakingSettings, setCloakingSettings] = useState({
    isEnabled: false,
    googleBotBlock: true,
    metaBotBlock: true,
    facebookBotBlock: true,
    manualUserAgents: '',
    cloakingMode: 'redirect',
    safePageUrl: 'https://exemplo.com/pagina-segura',
    safePage: 'about',
    geoBlocking: false,
    allowedCountries: 'BR',
    vpnDetection: false,
    aiDetection: true,
    trafficSource: false,
    allowedReferers: ''
  });

  const [domains, setDomains] = useState([
    {
      id: 1,
      domain: 'meusiteseguro.com.br',
      status: 'Ativo',
      cloaking: true,
      hits: 1250,
      blocked: 89,
      lastCheck: '10/12/2024 14:30'
    },
    {
      id: 2,
      domain: 'landingpage.net',
      status: 'Ativo',
      cloaking: false,
      hits: 890,
      blocked: 45,
      lastCheck: '10/12/2024 12:15'
    }
  ]);

  const [newDomain, setNewDomain] = useState('');
  const [showAddDomain, setShowAddDomain] = useState(false);

  const handleSettingChange = (key: string, value: string | boolean) => {
    setCloakingSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleAddDomain = () => {
    if (newDomain.trim()) {
      const newId = Math.max(...domains.map(d => d.id)) + 1;
      setDomains(prev => [...prev, {
        id: newId,
        domain: newDomain,
        status: 'Pendente',
        cloaking: false,
        hits: 0,
        blocked: 0,
        lastCheck: 'Nunca'
      }]);
      setNewDomain('');
      setShowAddDomain(false);
    }
  };

  const toggleDomainCloaking = (domainId: number) => {
    setDomains(prev => prev.map(domain => 
      domain.id === domainId 
        ? { ...domain, cloaking: !domain.cloaking }
        : domain
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sistema de Cloaking Avançado</h2>
          <p className="text-gray-600">Proteja suas páginas de vendas com IA e Machine Learning</p>
        </div>

        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            cloakingSettings.isEnabled 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {cloakingSettings.isEnabled ? 'Sistema Ativo' : 'Sistema Inativo'}
          </div>
          
          <button
            onClick={() => handleSettingChange('isEnabled', !cloakingSettings.isEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              cloakingSettings.isEnabled ? 'bg-green-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                cloakingSettings.isEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Acessos Liberados</p>
              <p className="text-2xl font-bold">{domains.reduce((sum, d) => sum + d.hits - d.blocked, 0)}</p>
            </div>
            <i className="ri-shield-check-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Bots Bloqueados</p>
              <p className="text-2xl font-bold">{domains.reduce((sum, d) => sum + d.blocked, 0)}</p>
            </div>
            <i className="ri-shield-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Domínios Ativos</p>
              <p className="text-2xl font-bold">{domains.filter(d => d.status === 'Ativo').length}</p>
            </div>
            <i className="ri-global-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Taxa de Sucesso</p>
              <p className="text-2xl font-bold">
                {domains.length > 0 
                  ? Math.round((domains.reduce((sum, d) => sum + d.blocked, 0) / domains.reduce((sum, d) => sum + d.hits, 0)) * 100) || 0
                  : 0}%
              </p>
            </div>
            <i className="ri-pie-chart-line text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Configurações de Proteção */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <i className="ri-shield-star-line w-5 h-5 flex items-center justify-center"></i>
          Configurações de Proteção com IA
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Bloqueio Automático de Bots</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-google-line w-5 h-5 flex items-center justify-center text-red-500"></i>
                  <span className="text-sm">Google Bot & Crawlers</span>
                </div>
                <button
                  onClick={() => handleSettingChange('googleBotBlock', !cloakingSettings.googleBotBlock)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.googleBotBlock ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.googleBotBlock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-meta-line w-5 h-5 flex items-center justify-center text-blue-500"></i>
                  <span className="text-sm">Meta/Facebook Crawler</span>
                </div>
                <button
                  onClick={() => handleSettingChange('metaBotBlock', !cloakingSettings.metaBotBlock)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.metaBotBlock ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.metaBotBlock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-facebook-line w-5 h-5 flex items-center justify-center text-blue-600"></i>
                  <span className="text-sm">Facebook External Hit</span>
                </div>
                <button
                  onClick={() => handleSettingChange('facebookBotBlock', !cloakingSettings.facebookBotBlock)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.facebookBotBlock ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.facebookBotBlock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User Agents Personalizados para Bloquear
              </label>
              <textarea
                rows={4}
                value={cloakingSettings.manualUserAgents}
                onChange={(e) => handleSettingChange('manualUserAgents', e.target.value)}
                placeholder="Digite user agents separados por linha"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Proteções Avançadas com IA</h4>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-brain-line w-5 h-5 flex items-center justify-center text-purple-500"></i>
                  <div>
                    <span className="text-sm block">Detecção de IA/ML</span>
                    <span className="text-xs text-gray-500">Identifica comportamento não-humano</span>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('aiDetection', !cloakingSettings.aiDetection)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.aiDetection ? 'bg-purple-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.aiDetection ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-shield-keyhole-line w-5 h-5 flex items-center justify-center text-orange-500"></i>
                  <div>
                    <span className="text-sm block">Detecção de VPN</span>
                    <span className="text-xs text-gray-500">Bloqueia conexões VPN/Proxy</span>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('vpnDetection', !cloakingSettings.vpnDetection)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.vpnDetection ? 'bg-orange-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.vpnDetection ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="ri-map-line w-5 h-5 flex items-center justify-center text-green-500"></i>
                  <div>
                    <span className="text-sm block">Geo-blocking</span>
                    <span className="text-xs text-gray-500">Bloqueia países específicos</span>
                  </div>
                </div>
                <button
                  onClick={() => handleSettingChange('geoBlocking', !cloakingSettings.geoBlocking)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    cloakingSettings.geoBlocking ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      cloakingSettings.geoBlocking ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {cloakingSettings.geoBlocking && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Países Permitidos (códigos ISO)
                </label>
                <input
                  type="text"
                  value={cloakingSettings.allowedCountries}
                  onChange={(e) => handleSettingChange('allowedCountries', e.target.value)}
                  placeholder="BR,US,UK"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Configuração de Páginas de Redirecionamento */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <i className="ri-external-link-line w-5 h-5 flex items-center justify-center"></i>
          Página de Redirecionamento
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modo de Cloaking
            </label>
            <select
              value={cloakingSettings.cloakingMode}
              onChange={(e) => handleSettingChange('cloakingMode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
            >
              <option value="redirect">Redirecionamento Externo</option>
              <option value="internal">Página Interna Segura</option>
              <option value="error">Página de Erro 404</option>
              <option value="maintenance">Página de Manutenção</option>
            </select>
          </div>

          {cloakingSettings.cloakingMode === 'redirect' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL de Redirecionamento
              </label>
              <input
                type="url"
                value={cloakingSettings.safePageUrl}
                onChange={(e) => handleSettingChange('safePageUrl', e.target.value)}
                placeholder="https://exemplo.com/pagina-segura"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}

          {cloakingSettings.cloakingMode === 'internal' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Página Interna Segura
              </label>
              <select
                value={cloakingSettings.safePage}
                onChange={(e) => handleSettingChange('safePage', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="about">Quem Somos</option>
                <option value="contact">Contato</option>
                <option value="privacy">Política de Privacidade</option>
                <option value="terms">Termos de Uso</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Gerenciamento de Domínios */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <i className="ri-global-line w-5 h-5 flex items-center justify-center"></i>
            Gerenciar Domínios Protegidos
          </h3>

          <button
            onClick={() => setShowAddDomain(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
          >
            <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
            Adicionar Domínio
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Domínio</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Cloaking</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Acessos</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Bloqueados</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Última Verificação</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {domains.map((domain) => (
                <tr key={domain.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-semibold text-gray-900">{domain.domain}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      domain.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {domain.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => toggleDomainCloaking(domain.id)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        domain.cloaking ? 'bg-red-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          domain.cloaking ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-blue-600">{domain.hits.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-red-600">{domain.blocked.toLocaleString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{domain.lastCheck}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800 cursor-pointer">
                        <i className="ri-bar-chart-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      <button className="text-green-600 hover:text-green-800 cursor-pointer">
                        <i className="ri-settings-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para Adicionar Domínio */}
      {showAddDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Adicionar Domínio Protegido</h3>
              <button
                onClick={() => setShowAddDomain(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Domínio
                </label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  placeholder="meudominio.com.br"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddDomain}
                  disabled={!newDomain.trim()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
                >
                  Adicionar Domínio
                </button>
                <button
                  onClick={() => setShowAddDomain(false)}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar Configurações
        </button>
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-refresh-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Testar Proteções
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Exportar Logs
        </button>
      </div>
    </div>
  );
}