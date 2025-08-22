
'use client';

import { useState } from 'react';

export default function ClientWithdrawal() {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [bankData, setBankData] = useState({
    bank: '',
    agency: '',
    account: '',
    accountType: 'corrente',
    cpf: '',
    name: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Dados simulados do cliente
  const clientBalance = {
    totalInvested: 2250,
    currentReturn: 487.50,
    availableForWithdrawal: 2737.50,
    daysUntilWithdrawal: 12 // dias restantes até completar 90 dias
  };

  const canWithdraw = clientBalance.daysUntilWithdrawal <= 0;

  const handleWithdrawalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-4xl text-green-600"></i>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Saque Solicitado com Sucesso!</h3>
          <p className="text-gray-600 mb-6">
            Sua solicitação de saque foi processada. O valor será transferido em até 2 dias úteis.
          </p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700">Valor solicitado:</span>
                <span className="font-bold text-green-800">R$ {parseFloat(withdrawalAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Banco:</span>
                <span className="font-bold text-green-800">{bankData.bank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Agência:</span>
                <span className="font-bold text-green-800">{bankData.agency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700">Conta:</span>
                <span className="font-bold text-green-800">{bankData.account}</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => {
              setShowSuccess(false);
              setShowForm(false);
              setWithdrawalAmount('');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
          >
            Voltar ao Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Realizar Saque</h2>
        <p className="text-gray-600">Resgate seus rendimentos de forma rápida e segura</p>
      </div>

      {/* Resumo do Saldo */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">💰 Seu Saldo Atual</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm opacity-90 mb-1">Investimento Total</div>
            <div className="text-2xl font-bold">R$ {clientBalance.totalInvested.toLocaleString('pt-BR')}</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm opacity-90 mb-1">Rendimentos</div>
            <div className="text-2xl font-bold text-yellow-300">+R$ {clientBalance.currentReturn.toLocaleString('pt-BR')}</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-sm opacity-90 mb-1">Disponível para Saque</div>
            <div className="text-2xl font-bold text-green-300">R$ {clientBalance.availableForWithdrawal.toLocaleString('pt-BR')}</div>
          </div>
        </div>
      </div>

      {/* Status do Saque */}
      {!canWithdraw ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <i className="ri-time-line w-8 h-8 flex items-center justify-center text-yellow-600"></i>
            <div>
              <h4 className="text-lg font-bold text-yellow-800">Saque Disponível em Breve</h4>
              <p className="text-yellow-700">Ainda faltam {clientBalance.daysUntilWithdrawal} dias para completar o prazo mínimo de 90 dias</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <h5 className="font-semibold text-gray-900 mb-2">📋 Informações Importantes:</h5>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                <span>Prazo mínimo de 90 dias para primeiro saque</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                <span>Seus rendimentos continuam crescendo 15% ao mês</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                <span>Você continua concorrendo aos sorteios mensais</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          {!showForm ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-money-dollar-circle-line text-3xl text-green-600"></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Saque Liberado!</h3>
              <p className="text-gray-600 mb-6">
                Parabéns! Você já completou 90 dias e pode resgatar seus rendimentos.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-green-600 mb-1">Valor disponível para saque</div>
                  <div className="text-3xl font-bold text-green-700">
                    R$ {clientBalance.availableForWithdrawal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setShowForm(true)}
                className="bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-bank-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
                SOLICITAR SAQUE
              </button>
              
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                  <span>Transferência segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-time-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                  <span>Até 2 dias úteis</span>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <button 
                  onClick={() => setShowForm(false)}
                  className="text-blue-600 hover:text-blue-700 cursor-pointer"
                >
                  <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
                </button>
                <h3 className="text-xl font-bold text-gray-900">Dados para Saque</h3>
              </div>
              
              <form onSubmit={handleWithdrawalSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor do Saque (R$)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="1"
                    max={clientBalance.availableForWithdrawal}
                    required
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                    placeholder={`Máximo: R$ ${clientBalance.availableForWithdrawal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Banco
                    </label>
                    <select
                      required
                      value={bankData.bank}
                      onChange={(e) => setBankData({...bankData, bank: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="">Selecione o banco</option>
                      <option value="Banco do Brasil">Banco do Brasil</option>
                      <option value="Bradesco">Bradesco</option>
                      <option value="Itaú">Itaú</option>
                      <option value="Santander">Santander</option>
                      <option value="Caixa">Caixa Econômica</option>
                      <option value="Nubank">Nubank</option>
                      <option value="Inter">Inter</option>
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Conta
                    </label>
                    <select
                      value={bankData.accountType}
                      onChange={(e) => setBankData({...bankData, accountType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="corrente">Conta Corrente</option>
                      <option value="poupanca">Conta Poupança</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Agência
                    </label>
                    <input
                      type="text"
                      required
                      value={bankData.agency}
                      onChange={(e) => setBankData({...bankData, agency: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="0000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Conta (com dígito)
                    </label>
                    <input
                      type="text"
                      required
                      value={bankData.account}
                      onChange={(e) => setBankData({...bankData, account: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="00000-0"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF do Titular
                    </label>
                    <input
                      type="text"
                      required
                      value={bankData.cpf}
                      onChange={(e) => setBankData({...bankData, cpf: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="000.000.000-00"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Titular
                    </label>
                    <input
                      type="text"
                      required
                      value={bankData.name}
                      onChange={(e) => setBankData({...bankData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Nome completo como no banco"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <i className="ri-information-line w-5 h-5 flex items-center justify-center text-yellow-600 mt-0.5"></i>
                    <div>
                      <h6 className="font-medium text-yellow-800 mb-1">⚠️ Atenção</h6>
                      <p className="text-sm text-yellow-700">
                        Verifique se todos os dados bancários estão corretos. Transferências para dados incorretos podem demorar até 30 dias para retorno.
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-send-plane-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
                  CONFIRMAR SAQUE - R$ {withdrawalAmount ? parseFloat(withdrawalAmount).toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
