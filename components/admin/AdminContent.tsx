'use client';

import { useState } from 'react';

export default function AdminContent() {
  const [content, setContent] = useState({
    heroTitle: 'RifaCap - O Primeiro Título de Capitalização',
    heroSubtitle: 'que Une Sorteio e Rendimento!',
    heroDescription: 'Seu dinheiro não fica parado: rende até 15% ao mês e pode ser resgatado em apenas 90 dias.',
    prizeTitle: 'R$ 50 MILHÕES em Prêmios Todo Mês!',
    prizeDescription: 'Os 3 primeiros números sorteados pela Caixa Econômica Federal',
    ctaButton: 'SIMULE SUA RENDA AGORA',
    aboutTitle: 'Não é apenas uma rifa!',
    aboutDescription: 'É um investimento inteligente que combina rentabilidade garantida com a emoção de concorrer a prêmios milionários'
  });

  const handleContentChange = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-edit-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Editar Conteúdo do Site
        </h3>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h4 className="text-md font-medium text-gray-900 mb-4">Seção Principal (Hero)</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título Principal
                </label>
                <input
                  type="text"
                  value={content.heroTitle}
                  onChange={(e) => handleContentChange('heroTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtítulo
                </label>
                <input
                  type="text"
                  value={content.heroSubtitle}
                  onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição
                </label>
                <textarea
                  rows={3}
                  value={content.heroDescription}
                  onChange={(e) => handleContentChange('heroDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Texto do Botão Principal
                </label>
                <input
                  type="text"
                  value={content.ctaButton}
                  onChange={(e) => handleContentChange('ctaButton', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h4 className="text-md font-medium text-gray-900 mb-4">Seção de Prêmios</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da Seção de Prêmios
                </label>
                <input
                  type="text"
                  value={content.prizeTitle}
                  onChange={(e) => handleContentChange('prizeTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição dos Prêmios
                </label>
                <textarea
                  rows={2}
                  value={content.prizeDescription}
                  onChange={(e) => handleContentChange('prizeDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h4 className="text-md font-medium text-gray-900 mb-4">Seção Sobre</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da Seção Sobre
                </label>
                <input
                  type="text"
                  value={content.aboutTitle}
                  onChange={(e) => handleContentChange('aboutTitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição da Seção Sobre
                </label>
                <textarea
                  rows={3}
                  value={content.aboutDescription}
                  onChange={(e) => handleContentChange('aboutDescription', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
            Salvar Alterações
          </button>
          
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-eye-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
            Visualizar Site
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-notification-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Configurações de SEO
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título da Página (Meta Title)
            </label>
            <input
              type="text"
              placeholder="RifaCap - Título de Capitalização com Sorteio"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Máximo 60 caracteres</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição da Página (Meta Description)
            </label>
            <textarea
              rows={3}
              placeholder="Invista no RifaCap e tenha rendimento garantido de até 15% ao mês. Concorra a prêmios de R$ 50 milhões mensais."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Máximo 160 caracteres</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Palavras-chave (Keywords)
            </label>
            <input
              type="text"
              placeholder="rifa, capitalização, investimento, sorteio, prêmios"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Separar por vírgulas</p>
          </div>
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar SEO
        </button>
      </div>
    </div>
  );
}