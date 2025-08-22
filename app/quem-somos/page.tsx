'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quem Somos
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça a história e missão da RifaCap, pioneira em títulos de capitalização no Brasil
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A RifaCap nasceu em 2024 com o objetivo de revolucionar o mercado de títulos de capitalização no Brasil. 
                Fundada por especialistas em mercado financeiro e tecnologia, nossa empresa combina a tradição dos 
                títulos de capitalização com a inovação digital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Desde o início, nossa missão é oferecer uma alternativa segura e transparente para quem busca 
                participar de sorteios milionários, sempre com respaldo legal e regulamentação da SUSEP.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-target-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Missão</h3>
                <p className="text-gray-600">
                  Democratizar o acesso a títulos de capitalização, oferecendo transparência, 
                  segurança e a emoção de concorrer a prêmios milionários através de uma 
                  plataforma 100% digital e confiável.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nossa Visão</h3>
                <p className="text-gray-600">
                  Ser a principal referência em títulos de capitalização digital no Brasil, 
                  reconhecida pela inovação, transparência e pelos maiores prêmios do mercado.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossos Valores</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-shield-check-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Transparência</h4>
                  <p className="text-gray-600 text-sm">
                    Todos os sorteios são auditados e realizados com total transparência
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-customer-service-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Atendimento</h4>
                  <p className="text-gray-600 text-sm">
                    Suporte especializado para esclarecer todas as suas dúvidas
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-rocket-line text-2xl text-white"></i>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Inovação</h4>
                  <p className="text-gray-600 text-sm">
                    Tecnologia de ponta para uma experiência única e segura
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulamentação e Segurança</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Autorizada pela SUSEP</h4>
                    <p className="text-gray-600">
                      Processo nº 15414.901574/2024-17 - Superintendência de Seguros Privados
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-bank-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sorteios Oficiais</h4>
                    <p className="text-gray-600">
                      Realizados pela Caixa Econômica Federal com total transparência
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-shield-keyhole-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dados Protegidos</h4>
                    <p className="text-gray-600">
                      Criptografia de ponta e conformidade com a LGPD
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Junte-se a Nós</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Faça parte da comunidade RifaCap e concorra mensalmente a prêmios de até R$ 50 milhões. 
                Sua participação é simples, segura e pode mudar sua vida!
              </p>
              
              <div className="flex justify-center gap-4">
                <a
                  href="/cadastro"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors cursor-pointer"
                >
                  COMEÇAR AGORA
                </a>
                
                <a
                  href="/contato"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors cursor-pointer"
                >
                  FALE CONOSCO
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}