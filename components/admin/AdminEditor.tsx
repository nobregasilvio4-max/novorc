'use client';

import { useState } from 'react';

export default function AdminEditor() {
  const [content, setContent] = useState({
    // Hero Section
    heroTitle: 'RifaCap - O Primeiro Título de Capitalização',
    heroSubtitle: 'que Une Sorteio e Rendimento!',
    heroDescription: 'Seu dinheiro não fica parado: rende até 15% ao mês e pode ser resgatado em apenas 90 dias.',
    heroButton: 'SIMULE SUA RENDA AGORA',
    
    // Prize Section
    prizeTitle: 'R$ 50 MILHÕES em Prêmios Todo Mês!',
    prizeDescription: 'Os 3 primeiros títulos sorteados pela Caixa Econômica Federal ganham R$ 10 milhões cada',
    prizeSubtext: 'Mais 50 ganhadores de R$ 400 mil cada',
    
    // Features Section
    featuresTitle: 'Não é apenas uma rifa!',
    featuresSubtitle: 'É um investimento inteligente que combina rentabilidade garantida com a emoção de concorrer a prêmios milionários',
    
    // Footer Section
    footerCompanyName: 'RifaCap Títulos LTDA',
    footerCnpj: '12.345.678/0001-90',
    footerPhone: '(11) 99999-9999',
    footerEmail: 'contato@rifacap.com.br',
    footerAddress: 'São Paulo - SP',
    footerDescription: 'O primeiro título de capitalização que combina sorteio e rendimento garantido.',
    
    // General Terms
    productName: 'título',
    productPlural: 'títulos',
    companyName: 'RifaCap'
  });

  const handleContentChange = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const saveContent = () => {
    console.log('Salvando conteúdo:', content);
    alert('Conteúdo salvo com sucesso!');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
          <i className="ri-edit-box-line w-5 h-5 flex items-center justify-center"></i>
          Editor Completo do Site
        </h3>

        <div className="space-y-8">
          {/* Seção Principal (Hero) */}
          <div className="border-b border-gray-200 pb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-home-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
              Seção Principal (Tela Inicial)
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título Principal</label>
                <input
                  type="text"
                  value={content.heroTitle}
                  onChange={(e) => handleContentChange('heroTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
                <input
                  type="text"
                  value={content.heroSubtitle}
                  onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Principal</label>
                <textarea
                  rows={3}
                  value={content.heroDescription}
                  onChange={(e) => handleContentChange('heroDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texto do Botão Principal</label>
                <input
                  type="text"
                  value={content.heroButton}
                  onChange={(e) => handleContentChange('heroButton', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Seção de Prêmios */}
          <div className="border-b border-gray-200 pb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-trophy-line w-4 h-4 flex items-center justify-center text-yellow-600"></i>
              Seção de Prêmios
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título dos Prêmios</label>
                <input
                  type="text"
                  value={content.prizeTitle}
                  onChange={(e) => handleContentChange('prizeTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição Principal dos Prêmios</label>
                <textarea
                  rows={2}
                  value={content.prizeDescription}
                  onChange={(e) => handleContentChange('prizeDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texto Secundário dos Prêmios</label>
                <input
                  type="text"
                  value={content.prizeSubtext}
                  onChange={(e) => handleContentChange('prizeSubtext', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Seção Sobre */}
          <div className="border-b border-gray-200 pb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-information-line w-4 h-4 flex items-center justify-center text-green-600"></i>
              Seção Sobre o Produto
            </h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Título da Seção Sobre</label>
                <input
                  type="text"
                  value={content.featuresTitle}
                  onChange={(e) => handleContentChange('featuresTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Seção Sobre</label>
                <textarea
                  rows={3}
                  value={content.featuresSubtitle}
                  onChange={(e) => handleContentChange('featuresSubtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Informações da Empresa */}
          <div className="border-b border-gray-200 pb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-building-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
              Informações da Empresa (Rodapé)
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Empresa</label>
                <input
                  type="text"
                  value={content.footerCompanyName}
                  onChange={(e) => handleContentChange('footerCompanyName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CNPJ</label>
                <input
                  type="text"
                  value={content.footerCnpj}
                  onChange={(e) => handleContentChange('footerCnpj', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                <input
                  type="text"
                  value={content.footerPhone}
                  onChange={(e) => handleContentChange('footerPhone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input
                  type="email"
                  value={content.footerEmail}
                  onChange={(e) => handleContentChange('footerEmail', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Endereço</label>
                <input
                  type="text"
                  value={content.footerAddress}
                  onChange={(e) => handleContentChange('footerAddress', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Empresa</label>
                <textarea
                  rows={2}
                  value={content.footerDescription}
                  onChange={(e) => handleContentChange('footerDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Termos Gerais */}
          <div className="pb-8">
            <h4 className="text-md font-medium text-gray-900 mb-4 flex items-center gap-2">
              <i className="ri-settings-2-line w-4 h-4 flex items-center justify-center text-orange-600"></i>
              Configurações Gerais
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Produto (singular)</label>
                <input
                  type="text"
                  value={content.productName}
                  onChange={(e) => handleContentChange('productName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="título"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Produto (plural)</label>
                <input
                  type="text"
                  value={content.productPlural}
                  onChange={(e) => handleContentChange('productPlural', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="títulos"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Marca</label>
                <input
                  type="text"
                  value={content.companyName}
                  onChange={(e) => handleContentChange('companyName', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="RifaCap"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-6 border-t border-gray-200">
          <button 
            onClick={saveContent}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <i className="ri-save-line w-4 h-4 flex items-center justify-center"></i>
            Salvar Alterações
          </button>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
            Visualizar Site
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2">
            <i className="ri-refresh-line w-4 h-4 flex items-center justify-center"></i>
            Restaurar Padrão
          </button>
        </div>
      </div>

      {/* Preview do Conteúdo */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <i className="ri-eye-line w-5 h-5 flex items-center justify-center"></i>
          Pré-visualização das Alterações
        </h3>

        <div className="bg-gray-50 rounded-lg p-6 space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-2">{content.heroTitle}</h1>
            <h2 className="text-xl mb-3">{content.heroSubtitle}</h2>
            <p className="mb-4 opacity-90">{content.heroDescription}</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-bold">
              {content.heroButton}
            </button>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-red-600 mb-2">{content.prizeTitle}</h3>
            <p className="text-gray-700 mb-2">{content.prizeDescription}</p>
            <p className="text-sm text-gray-600">{content.prizeSubtext}</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{content.featuresTitle}</h3>
            <p className="text-gray-700">{content.featuresSubtitle}</p>
          </div>

          <div className="bg-gray-900 text-white rounded-lg p-4 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold">{content.companyName}</span>
            </div>
            <p className="text-gray-400 mb-3">{content.footerDescription}</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <p>CNPJ: {content.footerCnpj}</p>
              <p>Razão Social: {content.footerCompanyName}</p>
              <p>📞 {content.footerPhone}</p>
              <p>✉️ {content.footerEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}