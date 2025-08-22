'use client';

import { useState } from 'react';

export default function AdminDomains() {
  const [domains] = useState([
    {
      id: 1,
      domain: 'rifacap.com.br',
      status: 'Validado',
      addedDate: '01/12/2024',
      lastCheck: '10/12/2024',
      isMain: true,
      ssl: true,
      dns: 'Configurado'
    },
    {
      id: 2,
      domain: 'www.rifacap.com.br',
      status: 'Validado',
      addedDate: '01/12/2024',
      lastCheck: '10/12/2024',
      isMain: false,
      ssl: true,
      dns: 'Configurado'
    },
    {
      id: 3,
      domain: 'app.rifacap.com.br',
      status: 'Pendente',
      addedDate: '05/12/2024',
      lastCheck: '09/12/2024',
      isMain: false,
      ssl: false,
      dns: 'Pendente'
    }
  ]);

  const [newDomain, setNewDomain] = useState('');
  const [showAddDomain, setShowAddDomain] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Validado':
        return 'bg-green-100 text-green-700';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-700';
      case 'Erro':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const handleAddDomain = () => {
    if (newDomain.trim()) {
      console.log('Adicionando domínio:', newDomain);
      setNewDomain('');
      setShowAddDomain(false);
    }
  };

  const handleValidateDomain = (domainId) => {
    console.log('Validando domínio:', domainId);
  };

  const handleRemoveDomain = (domainId) => {
    console.log('Removendo domínio:', domainId);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Domínios</h2>
          <p className="text-gray-600">Configure os domínios autorizados para links de indicação</p>
        </div>

        <button
          onClick={() => setShowAddDomain(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
        >
          <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
          Adicionar Domínio
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Domínios Validados</p>
              <p className="text-2xl font-bold">{domains.filter(d => d.status === 'Validado').length}</p>
            </div>
            <i className="ri-checkbox-circle-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pendentes</p>
              <p className="text-2xl font-bold">{domains.filter(d => d.status === 'Pendente').length}</p>
            </div>
            <i className="ri-time-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">SSL Ativo</p>
              <p className="text-2xl font-bold">{domains.filter(d => d.ssl).length}</p>
            </div>
            <i className="ri-shield-check-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total</p>
              <p className="text-2xl font-bold">{domains.length}</p>
            </div>
            <i className="ri-global-line text-2xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Domínio</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">SSL</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">DNS</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Adicionado</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Última Verificação</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {domains.map((domain) => (
                <tr key={domain.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-gray-900">{domain.domain}</div>
                      {domain.isMain && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          Principal
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(domain.status)}`}>
                      {domain.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <i className={`w-4 h-4 flex items-center justify-center ${domain.ssl ? 'ri-shield-check-line text-green-600' : 'ri-shield-line text-gray-400'}`}></i>
                      <span className={domain.ssl ? 'text-green-600' : 'text-gray-400'}>
                        {domain.ssl ? 'Ativo' : 'Inativo'}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={domain.dns === 'Configurado' ? 'text-green-600' : 'text-yellow-600'}>
                      {domain.dns}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{domain.addedDate}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{domain.lastCheck}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleValidateDomain(domain.id)}
                        className="text-blue-600 hover:text-blue-800 cursor-pointer"
                        title="Validar domínio"
                      >
                        <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
                      </button>
                      {!domain.isMain && (
                        <button
                          onClick={() => handleRemoveDomain(domain.id)}
                          className="text-red-600 hover:text-red-800 cursor-pointer"
                          title="Remover domínio"
                        >
                          <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          <i className="ri-information-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Como Configurar Domínios
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">1. Registros DNS Necessários</h4>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
              <div className="space-y-2">
                <div><strong>Tipo:</strong> CNAME</div>
                <div><strong>Nome:</strong> seu-dominio.com</div>
                <div><strong>Valor:</strong> rifacap-cdn.herokuapp.com</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">2. Verificação SSL</h4>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                O certificado SSL será configurado automaticamente após a validação do domínio.
                O processo pode levar até 24 horas para ser concluído.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <i className="ri-information-line w-5 h-5 flex items-center justify-center text-yellow-600 mt-0.5"></i>
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">Importante</h4>
              <p className="text-sm text-yellow-700">
                • Apenas domínios validados podem gerar links de indicação<br/>
                • O domínio principal não pode ser removido<br/>
                • Links antigos continuarão funcionando por 30 dias após remoção do domínio
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para Adicionar Domínio */}
      {showAddDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Adicionar Novo Domínio</h3>
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
                  placeholder="exemplo.com.br"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Digite apenas o nome do domínio (sem http:// ou https://)
                </p>
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
    </div>
  );
}