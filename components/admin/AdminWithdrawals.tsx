'use client';

import { useState } from 'react';

export default function AdminWithdrawals() {
  const [withdrawals] = useState([
    {
      id: 1,
      clientName: 'João Silva Santos',
      clientEmail: 'joao.silva@email.com',
      type: 'Investimento',
      amount: 2250.00,
      returns: 675.00,
      totalAmount: 2925.00,
      investmentDate: '15/09/2024',
      requestDate: '10/12/2024',
      availableDate: '15/12/2024',
      status: 'Aprovado',
      bankAccount: 'Banco do Brasil - Ag: 1234-5 - CC: 12345-6',
      pixKey: 'joao.silva@email.com'
    },
    {
      id: 2,
      clientName: 'Maria Santos Oliveira',
      clientEmail: 'maria.santos@gmail.com',
      type: 'Comissão',
      amount: 0,
      returns: 187.50,
      totalAmount: 187.50,
      investmentDate: '20/09/2024',
      requestDate: '11/12/2024',
      availableDate: '20/12/2024',
      status: 'Pendente',
      bankAccount: 'Itaú - Ag: 0123 - CC: 98765-4',
      pixKey: '11988887777'
    },
    {
      id: 3,
      clientName: 'Carlos Lima Ferreira',
      clientEmail: 'carlos.lima@outlook.com',
      type: 'Investimento',
      amount: 1000.00,
      returns: 450.00,
      totalAmount: 1450.00,
      investmentDate: '01/09/2024',
      requestDate: '08/12/2024',
      availableDate: '01/12/2024',
      status: 'Processando',
      bankAccount: 'Santander - Ag: 4567 - CC: 11111-2',
      pixKey: 'carlos.lima@outlook.com'
    },
    {
      id: 4,
      clientName: 'Ana Costa Rodrigues',
      clientEmail: 'ana.costa@yahoo.com',
      type: 'Comissão',
      amount: 0,
      returns: 112.50,
      totalAmount: 112.50,
      investmentDate: '25/08/2024',
      requestDate: '05/12/2024',
      availableDate: '25/11/2024',
      status: 'Rejeitado',
      bankAccount: 'Bradesco - Ag: 7890 - CC: 33333-8',
      pixKey: 'ana.costa@yahoo.com',
      rejectionReason: 'Dados bancários incorretos'
    }
  ]);

  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredWithdrawals = withdrawals.filter(withdrawal => {
    if (filter === 'all') return true;
    return withdrawal.status.toLowerCase() === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aprovado':
        return 'bg-green-100 text-green-700';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-700';
      case 'Processando':
        return 'bg-blue-100 text-blue-700';
      case 'Rejeitado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Investimento' ? 'ri-bank-line' : 'ri-group-line';
  };

  const handleStatusChange = (withdrawalId, newStatus) => {
    console.log(`Alterando status do saque ${withdrawalId} para ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Solicitações de Saque</h2>
          <p className="text-gray-600">Gerencie as solicitações de retirada dos clientes</p>
        </div>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
        >
          <option value="all">Todos os Status</option>
          <option value="pendente">Pendentes</option>
          <option value="processando">Processando</option>
          <option value="aprovado">Aprovados</option>
          <option value="rejeitado">Rejeitados</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Pendentes</p>
              <p className="text-2xl font-bold">{withdrawals.filter(w => w.status === 'Pendente').length}</p>
            </div>
            <i className="ri-time-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Processando</p>
              <p className="text-2xl font-bold">{withdrawals.filter(w => w.status === 'Processando').length}</p>
            </div>
            <i className="ri-loader-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Aprovados</p>
              <p className="text-2xl font-bold">{withdrawals.filter(w => w.status === 'Aprovado').length}</p>
            </div>
            <i className="ri-checkbox-circle-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-100 text-sm">Rejeitados</p>
              <p className="text-2xl font-bold">{withdrawals.filter(w => w.status === 'Rejeitado').length}</p>
            </div>
            <i className="ri-close-circle-line text-2xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Tipo</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Valor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Solicitado em</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Disponível em</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredWithdrawals.map((withdrawal) => (
                <tr key={withdrawal.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-gray-900">{withdrawal.clientName}</div>
                      <div className="text-gray-600 text-xs">{withdrawal.clientEmail}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <i className={`${getTypeIcon(withdrawal.type)} w-4 h-4 flex items-center justify-center`}></i>
                      <span className="text-sm">{withdrawal.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-green-600">
                        R$ {withdrawal.totalAmount.toLocaleString('pt-BR')}
                      </div>
                      {withdrawal.type === 'Investimento' && (
                        <div className="text-xs text-gray-600">
                          Principal: R$ {withdrawal.amount.toLocaleString('pt-BR')} + 
                          Rendimentos: R$ {withdrawal.returns.toLocaleString('pt-BR')}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(withdrawal.status)}`}>
                      {withdrawal.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{withdrawal.requestDate}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-sm ${new Date(withdrawal.availableDate.split('/').reverse().join('-')) <= new Date() ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                      {withdrawal.availableDate}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => setSelectedWithdrawal(withdrawal)}
                      className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                    >
                      <i className="ri-eye-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                      Ver Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalhes do Saque */}
      {selectedWithdrawal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Detalhes da Solicitação de Saque
              </h3>
              <button
                onClick={() => setSelectedWithdrawal(null)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <i className="ri-user-line w-5 h-5 flex items-center justify-center"></i>
                    Informações do Cliente
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nome</label>
                      <p className="font-semibold text-gray-900">{selectedWithdrawal.clientName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">E-mail</label>
                      <p className="text-gray-900">{selectedWithdrawal.clientEmail}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Tipo de Saque</label>
                      <p className="font-medium text-blue-600">{selectedWithdrawal.type}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <i className="ri-money-dollar-circle-line w-5 h-5 flex items-center justify-center"></i>
                    Valores e Datas
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    {selectedWithdrawal.type === 'Investimento' && (
                      <>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Valor Investido</label>
                          <p className="text-lg font-bold text-blue-600">R$ {selectedWithdrawal.amount.toLocaleString('pt-BR')}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Rendimentos</label>
                          <p className="text-lg font-bold text-green-600">R$ {selectedWithdrawal.returns.toLocaleString('pt-BR')}</p>
                        </div>
                      </>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-600">Valor Total</label>
                      <p className="text-2xl font-bold text-green-600">R$ {selectedWithdrawal.totalAmount.toLocaleString('pt-BR')}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Data do Investimento</label>
                        <p className="text-gray-900">{selectedWithdrawal.investmentDate}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Solicitação</label>
                        <p className="text-gray-900">{selectedWithdrawal.requestDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <i className="ri-bank-card-line w-5 h-5 flex items-center justify-center"></i>
                  Dados Bancários
                </h4>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Conta Bancária</label>
                      <p className="font-mono text-gray-900 bg-white px-3 py-2 rounded mt-1">
                        {selectedWithdrawal.bankAccount}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Chave PIX</label>
                      <p className="font-mono text-gray-900 bg-white px-3 py-2 rounded mt-1">
                        {selectedWithdrawal.pixKey}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <i className="ri-settings-line w-5 h-5 flex items-center justify-center"></i>
                  Alterar Status
                </h4>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => handleStatusChange(selectedWithdrawal.id, 'Aprovado')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
                    disabled={selectedWithdrawal.status === 'Aprovado'}
                  >
                    <i className="ri-checkbox-circle-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                    Aprovar
                  </button>
                  
                  <button
                    onClick={() => handleStatusChange(selectedWithdrawal.id, 'Processando')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
                    disabled={selectedWithdrawal.status === 'Processando'}
                  >
                    <i className="ri-loader-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                    Processar
                  </button>
                  
                  <button
                    onClick={() => handleStatusChange(selectedWithdrawal.id, 'Rejeitado')}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-close-circle-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                    Rejeitar
                  </button>
                </div>

                {selectedWithdrawal.status === 'Rejeitado' && selectedWithdrawal.rejectionReason && (
                  <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-red-800 mb-2">
                      <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center"></i>
                      <span className="font-medium">Motivo da Rejeição</span>
                    </div>
                    <p className="text-sm text-red-700">{selectedWithdrawal.rejectionReason}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}