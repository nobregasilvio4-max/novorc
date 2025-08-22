'use client';

import { useState, useRef } from 'react';

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    ticketPrice: '25.00',
    monthlyRate: '15.00',
    maxNumbers: '100000',
    drawDate: '2024-12-31',
    minPurchase: '1',
    maxPurchase: '500',
    isActive: true
  });

  const [branding, setBranding] = useState({
    siteName: 'RifaCap',
    logoText: 'RC',
    primaryColor: '#2563eb',
    secondaryColor: '#10b981'
  });

  const [tracking, setTracking] = useState({
    facebookPixel: '',
    googleAnalytics: '',
    googleTag: '',
    isTrackingEnabled: true
  });

  const [images, setImages] = useState({
    logo: null as File | null,
    hero: null as File | null,
    heroBanner: null as File | null,
    banner1: null as File | null,
    banner2: null as File | null
  });

  const fileInputRefs = {
    logo: useRef<HTMLInputElement>(null),
    hero: useRef<HTMLInputElement>(null),
    heroBanner: useRef<HTMLInputElement>(null),
    banner1: useRef<HTMLInputElement>(null),
    banner2: useRef<HTMLInputElement>(null)
  };

  const handleSettingChange = (key: string, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleBrandingChange = (key: string, value: string) => {
    setBranding(prev => ({ ...prev, [key]: value }));
  };

  const handleTrackingChange = (key: string, value: string | boolean) => {
    setTracking(prev => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (key: string, file: File | null) => {
    if (file) {
      setImages(prev => ({ ...prev, [key]: file }));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, key: string) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(key, file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-image-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Gerenciar Logo e Banners
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              <i className="ri-award-line w-4 h-4 flex items-center justify-center mr-2 inline-flex text-blue-600"></i>
              Logo Principal (Header)
            </label>
            
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
              onDrop={(e) => handleDrop(e, 'logo')}
              onDragOver={handleDragOver}
              onClick={() => fileInputRefs.logo?.current?.click()}
            >
              {images.logo ? (
                <div>
                  <img 
                    src={URL.createObjectURL(images.logo)} 
                    alt="Logo"
                    className="mx-auto max-h-20 rounded object-contain mb-3"
                  />
                  <p className="text-sm text-green-600 font-medium">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                    {images.logo.name}
                  </p>
                </div>
              ) : (
                <div className="text-gray-400 py-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RC</span>
                    </div>
                    <span className="font-['Pacifico'] text-lg font-bold text-blue-600">RifaCap</span>
                  </div>
                  <p className="font-medium mb-2">Trocar Logo</p>
                  <p className="text-sm">Arraste aqui ou clique</p>
                  <p className="text-xs mt-2 text-gray-500">PNG, JPG, WEBP até 5MB</p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRefs.logo}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload('logo', e.target.files?.[0] || null)}
              className="hidden"
            />
            
            {images.logo && (
              <button
                onClick={() => setImages(prev => ({ ...prev, logo: null }))}
                className="w-full text-red-600 hover:text-red-700 text-sm font-medium py-2 transition-colors"
              >
                <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                Remover Logo
              </button>
            )}
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              <i className="ri-landscape-line w-4 h-4 flex items-center justify-center mr-2 inline-flex text-green-600"></i>
              Banner Superior (Hero)
            </label>
            
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors cursor-pointer"
              onDrop={(e) => handleDrop(e, 'heroBanner')}
              onDragOver={handleDragOver}
              onClick={() => fileInputRefs.heroBanner?.current?.click()}
            >
              {images.heroBanner ? (
                <div>
                  <img 
                    src={URL.createObjectURL(images.heroBanner)} 
                    alt="Banner Hero"
                    className="mx-auto max-h-32 rounded object-cover mb-3"
                  />
                  <p className="text-sm text-green-600 font-medium">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                    {images.heroBanner.name}
                  </p>
                </div>
              ) : (
                <div className="text-gray-400 py-8">
                  <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-lg p-4 mb-3 text-white text-sm">
                    Área azul superior atual
                  </div>
                  <p className="font-medium mb-2">Trocar Banner Superior</p>
                  <p className="text-sm">Arraste aqui ou clique</p>
                  <p className="text-xs mt-2 text-gray-500">PNG, JPG, WEBP até 5MB</p>
                </div>
              )}
            </div>

            <input
              ref={fileInputRefs.heroBanner}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload('heroBanner', e.target.files?.[0] || null)}
              className="hidden"
            />
            
            {images.heroBanner && (
              <button
                onClick={() => setImages(prev => ({ ...prev, heroBanner: null }))}
                className="w-full text-red-600 hover:text-red-700 text-sm font-medium py-2 transition-colors"
              >
                <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                Remover Banner
              </button>
            )}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-blue-900 mb-2">
            <i className="ri-information-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
            Como personalizar sua marca
          </h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
            <div>
              <strong>Logo Principal:</strong>
              <ul className="mt-1 space-y-1 list-disc list-inside">
                <li>Aparece no header ao lado do nome</li>
                <li>Substitui o quadrado azul "RC"</li>
                <li>Tamanho recomendado: 40x40px</li>
              </ul>
            </div>
            <div>
              <strong>Banner Superior:</strong>
              <ul className="mt-1 space-y-1 list-disc list-inside">
                <li>Substitui o fundo azul da área principal</li>
                <li>Tamanho recomendado: 1400x800px</li>
                <li>Pode incluir sua marca ou produto</li>
              </ul>
            </div>
          </div>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-upload-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Atualizar Logo e Banner
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-palette-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Identidade Visual e Marca
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome do Site
            </label>
            <input
              type="text"
              value={branding.siteName}
              onChange={(e) => handleBrandingChange('siteName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="RifaCap"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Texto do Logo (Iniciais)
            </label>
            <input
              type="text"
              value={branding.logoText}
              onChange={(e) => handleBrandingChange('logoText', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="RC"
              maxLength={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cor Primária
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={branding.primaryColor}
                onChange={(e) => handleBrandingChange('primaryColor', e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={branding.primaryColor}
                onChange={(e) => handleBrandingChange('primaryColor', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="#2563eb"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cor Secundária
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={branding.secondaryColor}
                onChange={(e) => handleBrandingChange('secondaryColor', e.target.value)}
                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={branding.secondaryColor}
                onChange={(e) => handleBrandingChange('secondaryColor', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="#10b981"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-gray-900 mb-3">Visualização da Logo</h4>
          <div className="flex items-center gap-3">
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: branding.primaryColor }}
            >
              {branding.logoText}
            </div>
            <span className="font-['Pacifico'] text-2xl font-bold" style={{ color: branding.primaryColor }}>
              {branding.siteName}
            </span>
          </div>
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar Identidade Visual
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-advertisement-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Pixels de Rastreamento e Analytics
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-medium text-gray-900">Rastreamento de Conversões</h4>
            <button
              onClick={() => handleTrackingChange('isTrackingEnabled', !tracking.isTrackingEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                tracking.isTrackingEnabled ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  tracking.isTrackingEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {tracking.isTrackingEnabled && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-facebook-fill w-4 h-4 flex items-center justify-center mr-2 inline-flex text-blue-600"></i>
                  Facebook Pixel ID
                </label>
                <input
                  type="text"
                  value={tracking.facebookPixel}
                  onChange={(e) => handleTrackingChange('facebookPixel', e.target.value)}
                  placeholder="123456789012345"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Para rastrear conversões de anúncios no Facebook e Instagram
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-google-fill w-4 h-4 flex items-center justify-center mr-2 inline-flex text-red-600"></i>
                  Google Analytics 4 ID
                </label>
                <input
                  type="text"
                  value={tracking.googleAnalytics}
                  onChange={(e) => handleTrackingChange('googleAnalytics', e.target.value)}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Para análise de tráfego e comportamento dos usuários
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-advertisement-line w-4 h-4 flex items-center justify-center mr-2 inline-flex text-yellow-600"></i>
                  Google Ads Tag ID (gtag)
                </label>
                <input
                  type="text"
                  value={tracking.googleTag}
                  onChange={(e) => handleTrackingChange('googleTag', e.target.value)}
                  placeholder="AW-XXXXXXXXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Para rastrear conversões de anúncios no Google Ads
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h5 className="font-medium text-blue-900 mb-2">
                  <i className="ri-information-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
                  Eventos Rastreados Automaticamente
                </h5>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Visualização de página</strong> - Todas as páginas</li>
                  <li>• <strong>Início de compra</strong> - Quando seleciona números</li>
                  <li>• <strong>Adição ao carrinho</strong> - Seleção de números finalizada</li>
                  <li>• <strong>Compra finalizada</strong> - Pagamento aprovado</li>
                  <li>• <strong>Cadastro de usuário</strong> - Nova conta criada</li>
                  <li>• <strong>Login</strong> - Acesso à área do cliente</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar Configurações de Rastreamento
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-settings-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Configurações dos Títulos
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Valor por Número (R$)
            </label>
            <input
              type="number"
              step="0.01"
              min="1"
              max="1000"
              value={settings.ticketPrice}
              onChange={(e) => handleSettingChange('ticketPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Valor entre R$ 1,00 e R$ 1.000,00</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Taxa de Rendimento Mensal (%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="50"
              value={settings.monthlyRate}
              onChange={(e) => handleSettingChange('monthlyRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Taxa entre 0% e 50% ao mês</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total de Números Disponíveis
            </label>
            <input
              type="number"
              min="1000"
              max="1000000"
              value={settings.maxNumbers}
              onChange={(e) => handleSettingChange('maxNumbers', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Entre 1.000 e 1.000.000 números</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data do Próximo Sorteio
            </label>
            <input
              type="date"
              value={settings.drawDate}
              onChange={(e) => handleSettingChange('drawDate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status dos Sorteios
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleSettingChange('isActive', !settings.isActive)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.isActive ? 'bg-green-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.isActive ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${settings.isActive ? 'text-green-600' : 'text-gray-500'}`}>
                {settings.isActive ? 'Sorteios Ativos' : 'Sorteios Pausados'}
              </span>
            </div>
          </div>

          <div></div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mínimo de Números por Compra
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={settings.minPurchase}
              onChange={(e) => handleSettingChange('minPurchase', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Máximo de Números por Compra
            </label>
            <input
              type="number"
              min="1"
              max="5000"
              value={settings.maxPurchase}
              onChange={(e) => handleSettingChange('maxPurchase', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Resumo das Configurações</h4>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-blue-700">Valor por número:</span>
              <div className="font-semibold text-blue-900">R$ {parseFloat(settings.ticketPrice).toFixed(2)}</div>
            </div>
            <div>
              <span className="text-blue-700">Taxa mensal:</span>
              <div className="font-semibold text-blue-900">{parseFloat(settings.monthlyRate).toFixed(1)}%</div>
            </div>
            <div>
              <span className="text-blue-700">Números disponíveis:</span>
              <div className="font-semibold text-blue-900">{parseInt(settings.maxNumbers).toLocaleString()}</div>
            </div>
            <div>
              <span className="text-blue-700">Faixa de compra:</span>
              <div className="font-semibold text-blue-900">{settings.minPurchase} - {settings.maxPurchase}</div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-green-500">
            <div className="text-sm text-gray-700">
              <strong>Exemplo:</strong> Cliente comprando 20 números 
              (R$ {(20 * parseFloat(settings.ticketPrice)).toFixed(2)}) 
              terá rendimento mensal de 
              <strong className="text-green-600"> R$ {(20 * parseFloat(settings.ticketPrice) * parseFloat(settings.monthlyRate) / 100).toFixed(2)}</strong>
            </div>
          </div>
        </div>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-save-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Salvar Configurações
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          <i className="ri-image-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Gerenciar Imagens do Site
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(images).map(([key, file]) => (
            <div key={key} className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {key === 'logo' ? 'Logo Principal' : 
                 key === 'hero' ? 'Imagem Hero (Principal)' : 
                 `Banner ${key.slice(-1)}`}
              </label>
              
              <div 
                className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
                onDrop={(e) => handleDrop(e, key)}
                onDragOver={handleDragOver}
                onClick={() => fileInputRefs[key as keyof typeof fileInputRefs]?.current?.click()}
              >
                {file ? (
                  <div>
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={key}
                      className="mx-auto max-h-32 rounded object-cover mb-3"
                    />
                    <p className="text-sm text-green-600 font-medium">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                      {file.name}
                    </p>
                  </div>
                ) : (
                  <div className="text-gray-400 py-8">
                    <i className="ri-upload-cloud-2-line text-4xl mb-3 block"></i>
                    <p className="font-medium mb-2">Arraste a imagem aqui</p>
                    <p className="text-sm">ou clique para selecionar</p>
                    <p className="text-xs mt-2 text-gray-500">PNG, JPG, WEBP até 5MB</p>
                  </div>
                )}
              </div>

              <input
                ref={fileInputRefs[key as keyof typeof fileInputRefs]}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(key, e.target.files?.[0] || null)}
                className="hidden"
              />
              
              {file && (
                <button
                  onClick={() => setImages(prev => ({ ...prev, [key]: null }))}
                  className="w-full text-red-600 hover:text-red-700 text-sm font-medium py-2 transition-colors"
                >
                  <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center mr-1 inline-flex"></i>
                  Remover Imagem
                </button>
              )}
            </div>
          ))}
        </div>

        <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer">
          <i className="ri-upload-line w-4 h-4 flex items-center justify-center mr-2 inline-flex"></i>
          Atualizar Imagens
        </button>
      </div>
    </div>
  );
}