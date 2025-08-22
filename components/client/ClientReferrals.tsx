'use client';

import { useState } from 'react';

export default function ClientReferrals() {
  const [referralCode] = useState('JOAO2024RC');
  const [referralLink] = useState(`https://rifacap.com.br/cadastro?ref=${referralCode}`);
  const [referrals] = useState([
    {
      id: 1,
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      purchaseAmount: 750.00,
      commission: 112.50,
      status: 'Pago',
      date: '05/12/2024',
      availableDate: '05/03/2025'
    },
    {
      id: 2,
      name: 'Carlos Lima',
      email: 'carlos.lima@email.com',
      purchaseAmount: 500.00,
      commission: 75.00,
      status: 'Pendente',
      date: '08/12/2024',
      availableDate: '08/03/2025'
    },
    {
      id: 3,
      name: 'Ana Costa',
      email: 'ana.costa@email.com',
      purchaseAmount: 1250.00,
      commission: 187.50,
      status: 'Pago',
      date: '02/12/2024',
      availableDate: '02/03/2025'
    }
  ]);

  const totalCommissions = referrals.reduce((sum, ref) => sum + ref.commission, 0);
  const availableCommissions = referrals.filter(ref => ref.status === 'Pago').reduce((sum, ref) => sum + ref.commission, 0);
  const pendingCommissions = referrals.filter(ref => ref.status === 'Pendente').reduce((sum, ref) => sum + ref.commission, 0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      `🚀 Oi! Descobri uma oportunidade incrível de investimento!\n\n💰 RifaCap: Títulos de Capitalização que rendem 15% ao mês + chance de ganhar R$ 50 milhões!\n\n🎁 Use meu código ${referralCode} e ganhe 10% de desconto!\n\n${referralLink}\n\n#Investimento #RifaCap #RendimentoGarantido`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Programa de Indicações</h2>
        <p className="text-gray-600">Ganhe 15% de comissão em cada indicação confirmada</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total em Comissões</p>
              <p className="text-3xl font-bold">R$ {totalCommissions.toLocaleString('pt-BR')}</p>
            </div>
            <i className="ri-money-dollar-circle-line text-3xl text-green-100"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Disponível para Saque</p>
              <p className="text-3xl font-bold">R$ {availableCommissions.toLocaleString('pt-BR')}</p>
            </div>
            <i className="ri-wallet-3-line text-3xl text-blue-100"></i>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Aguardando Liberação</p>
              <p className="text-3xl font-bold">R$ {pendingCommissions.toLocaleString('pt-BR')}</p>
            </div>
            <i className="ri-time-line text-3xl text-orange-100"></i>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-share-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Compartilhe e Ganhe
        </h3>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-semibold text-gray-900 mb-3">🎯 Como Funciona</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <p className="text-gray-700">Compartilhe seu código ou link de indicação</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <p className="text-gray-700">Seu indicado ganha 10% de desconto na compra</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <p className="text-gray-700">Você recebe 15% de comissão após confirmação</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seu Código de Indicação
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-lg font-bold text-center"
                />
                <button
                  onClick={() => copyToClipboard(referralCode)}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-file-copy-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Link de Indicação
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                />
                <button
                  onClick={() => copyToClipboard(referralLink)}
                  className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-file-copy-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button
              onClick={shareWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <i className="ri-whatsapp-line w-5 h-5 flex items-center justify-center"></i>
              Compartilhar no WhatsApp
            </button>

            <button
              onClick={() => copyToClipboard(referralLink)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <i className="ri-share-line w-5 h-5 flex items-center justify-center"></i>
              Copiar Link
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-group-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Suas Indicações ({referrals.length})
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Indicado</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Valor da Compra</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Sua Comissão</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Data</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Disponível em</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {referrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold text-gray-900">{referral.name}</div>
                      <div className="text-gray-600 text-xs">{referral.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-blue-600">R$ {referral.purchaseAmount.toLocaleString('pt-BR')}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold text-green-600">R$ {referral.commission.toLocaleString('pt-BR')}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      referral.status === 'Pago' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {referral.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600">{referral.date}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-600">{referral.availableDate}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <i className="ri-information-line w-5 h-5 flex items-center justify-center text-yellow-600 mt-0.5"></i>
            <div>
              <h4 className="font-medium text-yellow-800 mb-1">ℹ️ Informações Importantes</h4>
              <p className="text-sm text-yellow-700">
                • As comissões ficam disponíveis para saque 90 dias após a confirmação do pagamento do indicado<br/>
                • Você recebe 15% do valor total da primeira compra de cada pessoa indicada<br/>
                • Seu indicado recebe 10% de desconto usando seu código na primeira compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}