'use client';

import { useState } from 'react';

export default function AdminClients() {
  const [clients] = useState([
    {
      id: 1,
      name: 'João Silva Santos',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-1234',
      address: 'Rua das Flores, 123, Apt 45, Vila Madalena, São Paulo - SP, CEP 05433-100',
      numbers: 20,
      amount: 500.00,
      paymentMethod: 'PIX',
      status: 'Pago',
      date: '10/12/2024 14:30',
      pixKey: 'joao.silva@email.com',
      cardNumber: null,
      cardBank: null,
      cardExpiry: null,
      cardCvv: null
    },
    {
      id: 2,
      name: 'Maria Santos Oliveira',
      email: 'maria.santos@gmail.com',
      phone: '(11) 98888-5678',
      address: 'Av. Paulista, 1000, Sala 201, Bela Vista, São Paulo - SP, CEP 01310-100',
      numbers: 50,
      amount: 1250.00,
      paymentMethod: 'Cartão de Crédito',
      status: 'Pago',
      date: '09/12/2024 10:15',
      pixKey: null,
      cardNumber: '4532 1234 5678 9012',
      cardBank: 'Banco do Brasil',
      cardExpiry: '12/2027',
      cardCvv: '123'
    },
    {
      id: 3,
      name: 'Carlos Lima Ferreira',
      email: 'carlos.lima@outlook.com',
      phone: '(11) 97777-9012',
      address: 'Rua Augusta, 456, Consolação, São Paulo - SP, CEP 01305-000',
      numbers: 10,
      amount: 250.00,
      paymentMethod: 'PIX',
      status: 'Pendente',
      date: '09/12/2024 16:45',
      pixKey: '11977779012',
      cardNumber: null,
      cardBank: null,
      cardExpiry: null,
      cardCvv: null
    },
    {
      id: 4,
      name: 'Ana Costa Rodrigues',
      email: 'ana.costa@yahoo.com',
      phone: '(11) 96666-3456',
      address: 'Rua Oscar Freire, 789, Jardins, São Paulo - SP, CEP 01426-001',
      numbers: 30,
      amount: 750.00,
      paymentMethod: 'Cartão de Débito',
      status: 'Recusado',
      date: '08/12/2024 11:20',
      pixKey: null,
      cardNumber: '5555 4444 3333 2222',
      cardBank: 'Itaú',
      cardExpiry: '09/2025',
      cardCvv: '456'
    },
    {
      id: 5,
      name: 'Pedro Oliveira Silva',
      email: 'pedro.oliveira@hotmail.com',
      phone: '(11) 95555-7890',
      address: 'Alameda Santos, 321, Cerqueira César, São Paulo - SP, CEP 01419-000',
      numbers: 15,
      amount: 375.00,
      paymentMethod: 'Cartão de Crédito',
      status: 'Pago',
      date: '07/12/2024 09:30',
      pixKey: null,
      cardNumber: '4111 1111 1111 1111',
      cardBank: 'Santander',
      cardExpiry: '03/2026',
      cardCvv: '789'
    },
    {
      id: 6,
      name: 'Fernanda Alves Souza',
      email: 'fernanda.alves@gmail.com',
      phone: '(11) 94444-2468',
      address: 'Rua Haddock Lobo, 567, Cerqueira César, São Paulo - SP, CEP 01414-001',
      numbers: 25,
      amount: 625.00,
      paymentMethod: 'PIX',
      status: 'Pago',
      date: '06/12/2024 13:15',
      pixKey: '11944442468',
      cardNumber: null,
      cardBank: null,
      cardExpiry: null,
      cardCvv: null
    },
    {
      id: 7,
      name: 'Ricardo Mendes Lima',
      email: 'ricardo.mendes@uol.com.br',
      phone: '(11) 93333-1357',
      address: 'Rua da Consolação, 890, República, São Paulo - SP, CEP 01302-907',
      numbers: 40,
      amount: 1000.00,
      paymentMethod: 'Cartão de Crédito',
      status: 'Pendente',
      date: '05/12/2024 17:45',
      pixKey: null,
      cardNumber: '3782 8224 6310 005',
      cardBank: 'American Express',
      cardExpiry: '11/2028',
      cardCvv: '1234'
    }
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client => {
    const matchesFilter = filter === 'all' || client.status.toLowerCase() === filter;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.phone.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pago':
        return 'bg-green-100 text-green-700';
      case 'Pendente':
        return 'bg-yellow-100 text-yellow-700';
      case 'Recusado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentIcon = (method) => {
    if (method === 'PIX') return 'ri-qr-code-line';
    return 'ri-bank-card-line';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gerenciar Clientes</h2>
          <p className="text-gray-600">Total de {clients.length} clientes cadastrados</p>
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Buscar por nome, email ou telefone..."
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
            <option value="pago">Pagos</option>
            <option value="pendente">Pendentes</option>
            <option value="recusado">Recusados</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Clientes Ativos</p>
              <p className="text-2xl font-bold">{clients.filter(c => c.status === 'Pago').length}</p>
            </div>
            <i className="ri-user-check-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total de Títulos</p>
              <p className="text-2xl font-bold">{clients.reduce((sum, c) => sum + c.numbers, 0)}</p>
            </div>
            <i className="ri-ticket-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Receita Total</p>
              <p className="text-2xl font-bold">R$ {clients.reduce((sum, c) => sum + c.amount, 0).toLocaleString('pt-BR')}</p>
            </div>
            <i className="ri-money-dollar-circle-line text-2xl"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Pendentes</p>
              <p className="text-2xl font-bold">{clients.filter(c => c.status === 'Pendente').length}</p>
            </div>
            <i className="ri-time-line text-2xl"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Cliente</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Contato</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Títulos</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Valor</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Pagamento</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredClients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-gray-900">{client.name}</div>
                      <div className="text-gray-600 text-xs">{client.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-gray-900">{client.phone}</div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-blue-600">{client.numbers}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-green-600">R$ {client.amount.toLocaleString('pt-BR')}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <i className={`${getPaymentIcon(client.paymentMethod)} w-4 h-4 flex items-center justify-center`}></i>
                      <span className="text-sm">{client.paymentMethod}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{client.date}</span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => setSelectedClient(client)}
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

      {/* Modal de Detalhes do Cliente */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Detalhes do Cliente - {selectedClient.name}
              </h3>
              <button
                onClick={() => setSelectedClient(null)}
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
                    Informações Pessoais
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Nome Completo</label>
                      <p className="font-semibold text-gray-900">{selectedClient.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">E-mail</label>
                      <p className="text-gray-900">{selectedClient.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Telefone</label>
                      <p className="text-gray-900">{selectedClient.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Endereço Completo</label>
                      <p className="text-gray-900">{selectedClient.address}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <i className="ri-shopping-bag-line w-5 h-5 flex items-center justify-center"></i>
                    Detalhes da Compra
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Títulos Comprados</label>
                        <p className="text-2xl font-bold text-blue-600">{selectedClient.numbers}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Valor Total</label>
                        <p className="text-2xl font-bold text-green-600">R$ {selectedClient.amount.toLocaleString('pt-BR')}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Data da Compra</label>
                      <p className="text-gray-900">{selectedClient.date}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Status do Pagamento</label>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedClient.status)}`}>
                        {selectedClient.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <i className="ri-bank-card-line w-5 h-5 flex items-center justify-center"></i>
                  Informações de Pagamento
                </h4>
                
                {selectedClient.paymentMethod === 'PIX' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                        <i className="ri-qr-code-line text-green-600 text-xl"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-900">Pagamento via PIX</h5>
                        <p className="text-sm text-green-700">Chave PIX utilizada</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <label className="text-sm font-medium text-gray-600">Chave PIX</label>
                      <p className="font-mono text-gray-900 bg-gray-100 px-3 py-2 rounded mt-1">
                        {selectedClient.pixKey}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                        <i className="ri-bank-card-line text-blue-600 text-xl"></i>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-900">{selectedClient.paymentMethod}</h5>
                        <p className="text-sm text-blue-700">Informações do cartão</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-600">Número do Cartão</label>
                          <p className="font-mono text-lg font-bold text-gray-900 bg-gray-100 px-3 py-2 rounded mt-1">
                            {selectedClient.cardNumber}
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600">Banco Emissor</label>
                          <p className="font-semibold text-gray-900">{selectedClient.cardBank}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-sm font-medium text-gray-600">Validade</label>
                            <p className="font-mono font-bold text-gray-900 bg-gray-100 px-3 py-2 rounded mt-1">
                              {selectedClient.cardExpiry}
                            </p>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-600">CVV</label>
                            <p className="font-mono font-bold text-gray-900 bg-gray-100 px-3 py-2 rounded mt-1">
                              {selectedClient.cardCvv}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {selectedClient.status === 'Recusado' && (
                      <div className="mt-4 bg-red-100 border border-red-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-red-800">
                          <i className="ri-error-warning-line w-5 h-5 flex items-center justify-center"></i>
                          <span className="font-medium">Pagamento Recusado</span>
                        </div>
                        <p className="text-sm text-red-700 mt-1">
                          Motivo: Cartão sem limite suficiente ou dados inválidos
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-download-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  Exportar Dados
                </button>
                
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  Enviar E-mail
                </button>
                
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  Ligar para Cliente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}