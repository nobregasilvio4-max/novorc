'use client';

import { useState } from 'react';

export default function AdminPayment() {
  const [paymentSettings, setPaymentSettings] = useState({
    pixKey: '',
    pixKeyType: 'email',
    gatewayApi: '',
    gatewaySecret: '',
    isPixEnabled: true,
    isGatewayEnabled: false
  });

  const handleSettingChange = (key: string, value: string | boolean) => {
    setPaymentSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-bank-card-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Configurações de Pagamento
        </h3>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-md font-medium text-gray-900">PIX</h4>
              <button
                onClick={() => handleSettingChange('isPixEnabled', !paymentSettings.isPixEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  paymentSettings.isPixEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    paymentSettings.isPixEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {paymentSettings.isPixEnabled && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Chave PIX
                  </label>
                  <select
                    value={paymentSettings.pixKeyType}
                    onChange={(e) => handleSettingChange('pixKeyType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="email">E-mail</option>
                    <option value="cpf">CPF</option>
                    <option value="cnpj">CNPJ</option>
                    <option value="phone">Telefone</option>
                    <option value="random">Chave Aleatória</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Chave PIX
                  </label>
                  <input
                    type="text"
                    value={paymentSettings.pixKey}
                    onChange={(e) => handleSettingChange('pixKey', e.target.value)}
                    placeholder={
                      paymentSettings.pixKeyType === 'email' ? 'seu@email.com' :
                      paymentSettings.pixKeyType === 'cpf' ? '000.000.000-00' :
                      paymentSettings.pixKeyType === 'cnpj' ? '00.000.000/0001-00' :
                      paymentSettings.pixKeyType === 'phone' ? '(11) 99999-9999' :
                      'Chave aleatória'
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="border-b border-gray-200 pb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-md font-medium text-gray-900">Gateway de Pagamento</h4>
              <button
                onClick={() => handleSettingChange('isGatewayEnabled', !paymentSettings.isGatewayEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  paymentSettings.isGatewayEnabled ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    paymentSettings.isGatewayEnabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {paymentSettings.isGatewayEnabled && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    API Key do Gateway
                  </label>
                  <input
                    type="password"
                    value={paymentSettings.gatewayApi}
                    onChange={(e) => handleSettingChange('gatewayApi', e.target.value)}
                    placeholder="sk_live_..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secret Key
                  </label>
                  <input
                    type="password"
                    value={paymentSettings.gatewaySecret}
                    onChange={(e) => handleSettingChange('gatewaySecret', e.target.value)}
                    placeholder="sk_secret_..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-information-line text-yellow-600 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                    <div>
                      <h5 className="font-medium text-yellow-800 mb-1">Gateways Suportados</h5>
                      <p className="text-sm text-yellow-700">
                        Stripe, PagSeguro, Mercado Pago, Asaas, Iugu e outros. 
                        Certifique-se de que as credenciais estejam corretas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar Configurações de Pagamento
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Relatório de Pagamentos
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Pagamentos Aprovados</p>
                <p className="text-2xl font-bold text-green-700">847</p>
              </div>
              <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Pagamentos Pendentes</p>
                <p className="text-2xl font-bold text-yellow-700">23</p>
              </div>
              <i className="ri-time-line text-2xl text-yellow-600"></i>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Pagamentos Recusados</p>
                <p className="text-2xl font-bold text-red-700">12</p>
              </div>
              <i className="ri-close-circle-line text-2xl text-red-600"></i>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4">Cliente</th>
                <th className="text-left py-3 px-4">Valor</th>
                <th className="text-left py-3 px-4">Método</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Data</th>
              </tr>
            </thead>
            <tbody>
              {[
                { client: 'João Silva', amount: 'R$ 100,00', method: 'PIX', status: 'Aprovado', date: '10/12/2024' },
                { client: 'Maria Santos', amount: 'R$ 250,00', method: 'Cartão', status: 'Aprovado', date: '10/12/2024' },
                { client: 'Carlos Lima', amount: 'R$ 50,00', method: 'PIX', status: 'Pendente', date: '10/12/2024' },
                { client: 'Ana Costa', amount: 'R$ 150,00', method: 'PIX', status: 'Aprovado', date: '09/12/2024' }
              ].map((payment, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4">{payment.client}</td>
                  <td className="py-3 px-4 font-semibold">{payment.amount}</td>
                  <td className="py-3 px-4">{payment.method}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      payment.status === 'Aprovado' ? 'bg-green-100 text-green-700' :
                      payment.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}