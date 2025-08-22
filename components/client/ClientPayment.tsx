
'use client';

import { useState } from 'react';

export default function ClientPayment({ selectedTitulos = 5, totalPrice = 125.00, onPaymentSuccess }: { 
  selectedTitulos?: number;
  totalPrice?: number; 
  onPaymentSuccess?: () => void;
}) {
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [paymentStep, setPaymentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simula processamento do pagamento
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      if (onPaymentSuccess) {
        setTimeout(() => {
          onPaymentSuccess();
        }, 3000);
      }
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="ri-check-line text-4xl text-green-600"></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Pagamento Confirmado!</h3>
        <p className="text-gray-600 mb-6">
          Seus {selectedTitulos} títulos foram confirmados e já estão participando dos próximos sorteios.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-800 font-semibold">
            Total pago: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-green-700 text-sm">
            Comprovante enviado para seu e-mail
          </p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
        >
          Ver Meus Títulos
        </button>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Processando Pagamento...</h3>
        <p className="text-gray-600 mb-6">
          Aguarde enquanto confirmamos seu pagamento. Não feche esta página.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            {paymentMethod === 'pix' ? 'Verificando pagamento PIX...' : 'Processando cartão...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          <i className="ri-shopping-cart-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
          Finalizar Compra
        </h3>

        {/* Resumo da Compra */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-6">
          <h4 className="font-semibold text-blue-900 mb-4">Resumo da Compra</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-blue-800">Quantidade de títulos:</span>
              <span className="font-bold text-blue-900">{selectedTitulos}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800">Valor por título:</span>
              <span className="font-bold text-blue-900">R$ 25,00</span>
            </div>
            <div className="border-t border-blue-200 pt-2">
              <div className="flex justify-between">
                <span className="font-semibold text-blue-900">Total a pagar:</span>
                <span className="font-bold text-2xl text-blue-900">
                  R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Seleção do Método de Pagamento */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Escolha a forma de pagamento:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => setPaymentMethod('pix')}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                paymentMethod === 'pix'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg">
                  <i className="ri-qr-code-line text-2xl text-green-600"></i>
                </div>
                <div className="text-left">
                  <div className="font-semibold">PIX</div>
                  <div className="text-sm text-gray-600">Pagamento instantâneo</div>
                  <div className="text-xs text-green-600 font-medium">Recomendado</div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setPaymentMethod('card')}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                paymentMethod === 'card'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
                  <i className="ri-bank-card-line text-2xl text-blue-600"></i>
                </div>
                <div className="text-left">
                  <div className="font-semibold">Cartão</div>
                  <div className="text-sm text-gray-600">Crédito ou débito</div>
                  <div className="text-xs text-blue-600 font-medium">Até 12x sem juros</div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Formulário PIX */}
        {paymentMethod === 'pix' && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h4 className="font-semibold text-green-900 mb-4 flex items-center gap-2">
              <i className="ri-qr-code-line w-5 h-5 flex items-center justify-center"></i>
              Pagamento via PIX
            </h4>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg mb-4 inline-block">
                <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-gray-500 text-center">
                    <i className="ri-qr-code-line text-6xl mb-2"></i>
                    <p className="text-sm">QR Code PIX</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-2">Chave PIX (Copiar):</p>
                <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm flex items-center justify-between">
                  <span>rifacap.pix.{Date.now()}</span>
                  <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                    <i className="ri-file-copy-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>

              <div className="text-sm text-green-700 space-y-1">
                <p>1. Abra seu app do banco</p>
                <p>2. Escaneie o QR Code ou copie a chave PIX</p>
                <p>3. Confirme o pagamento de R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              </div>
            </div>
          </div>
        )}

        {/* Formulário Cartão */}
        {paymentMethod === 'card' && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
              <i className="ri-bank-card-line w-5 h-5 flex items-center justify-center"></i>
              Dados do Cartão
            </h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  placeholder="0000 0000 0000 0000"
                  value={cardData.number}
                  onChange={(e) => setCardData({...cardData, number: e.target.value})}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-800 mb-2">
                  Nome do Titular
                </label>
                <input
                  type="text"
                  placeholder="Nome como está no cartão"
                  value={cardData.name}
                  onChange={(e) => setCardData({...cardData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    Validade
                  </label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={cardData.expiry}
                    onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="000"
                    value={cardData.cvv}
                    onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h5 className="font-medium text-blue-900 mb-3">Parcelamento:</h5>
                <select className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm pr-8">
                  <option>À vista - R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</option>
                  <option>2x de R$ {(totalPrice / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                  <option>3x de R$ {(totalPrice / 3).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                  <option>6x de R$ {(totalPrice / 6).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                  <option>12x de R$ {(totalPrice / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Botão de Pagamento */}
        <button 
          onClick={handlePayment}
          className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer mt-6"
        >
          <i className="ri-secure-payment-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
          {paymentMethod === 'pix' ? 'CONFIRMAR PAGAMENTO PIX' : 'PAGAR COM CARTÃO'}
        </button>

        <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
            <span>Pagamento seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-lock-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
            <span>SSL 256 bits</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-verified-badge-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
            <span>SUSEP autorizado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
