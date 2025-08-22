
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-3xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mensagem enviada!</h2>
          <p className="text-gray-600 mb-6">
            Obrigado pelo contato! Nossa equipe responderá em até 24 horas.
          </p>
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="font-['Pacifico'] text-4xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
            RifaCap
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600">Estamos aqui para ajudar você</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h2>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <select
                      name="assunto"
                      required
                      value={formData.assunto}
                      onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="duvidas">Dúvidas sobre investimento</option>
                      <option value="suporte">Suporte técnico</option>
                      <option value="reclamacao">Reclamação</option>
                      <option value="sugestao">Sugestão</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={6}
                    maxLength={500}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                    placeholder="Descreva sua dúvida ou mensagem (máx. 500 caracteres)"
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.mensagem.length}/500 caracteres
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-send-plane-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-whatsapp-line text-xl text-green-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600">(11) 99999-9999</p>
                      <p className="text-sm text-gray-500">Segunda a Sexta • 8h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@rifacap.com.br</p>
                      <p className="text-sm text-gray-500">Resposta em até 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-customer-service-line text-xl text-purple-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">SAC</h4>
                      <p className="text-gray-600">0800 123 4567</p>
                      <p className="text-sm text-gray-500">Gratuito • Segunda a Sexta • 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Dúvidas Frequentes</h3>
                <p className="text-blue-100 mb-6">
                  Antes de entrar em contato, consulte nossas perguntas frequentes para respostas rápidas.
                </p>
                <Link 
                  href="/perguntas-frequentes"
                  className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  Ver FAQ
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <i className="ri-shield-check-line w-6 h-6 flex items-center justify-center text-green-600"></i>
                  <h3 className="text-xl font-bold text-gray-900">Segurança e Regulamentação</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  O RifaCap é um título de capitalização autorizado pela SUSEP. 
                  Todos os seus dados são protegidos e suas informações financeiras são tratadas com total segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
