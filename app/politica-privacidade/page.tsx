'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Como coletamos, usamos e protegemos suas informações pessoais
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Última atualização: 10 de dezembro de 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-3">1. Introdução</h2>
              <p className="text-blue-800">
                A RifaCap está comprometida em proteger sua privacidade e dados pessoais. Esta política 
                explica como coletamos, usamos, armazenamos e protegemos suas informações de acordo com 
                a Lei Geral de Proteção de Dados (LGPD) e demais legislações aplicáveis.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Dados Pessoais Fornecidos</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Nome completo</li>
                <li>CPF</li>
                <li>E-mail</li>
                <li>Telefone/WhatsApp</li>
                <li>Endereço completo</li>
                <li>Data de nascimento</li>
                <li>Dados bancários (quando necessário)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2 Dados Coletados Automaticamente</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Endereço IP</li>
                <li>Informações do dispositivo</li>
                <li>Dados de navegação</li>
                <li>Cookies e tecnologias similares</li>
                <li>Localização aproximada</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Finalidades Principais</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Processar compras de números</li>
                    <li>• Realizar sorteios</li>
                    <li>• Comunicar resultados</li>
                    <li>• Efetuar pagamentos de prêmios</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Finalidades Secundárias</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Melhorar nossos serviços</li>
                    <li>• Enviar comunicações relevantes</li>
                    <li>• Prevenir fraudes</li>
                    <li>• Cumprir obrigações legais</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Legal para Tratamento</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-contract-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Execução de Contrato</h4>
                    <p className="text-gray-600 text-sm">Para processar suas compras e participação nos sorteios</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Consentimento</h4>
                    <p className="text-gray-600 text-sm">Para comunicações de marketing e melhorias do serviço</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-scales-line text-orange-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Obrigação Legal</h4>
                    <p className="text-gray-600 text-sm">Para cumprimento de regulamentações da SUSEP e Receita Federal</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-gray-700 mb-4">
                Compartilhamos seus dados apenas quando necessário e nas seguintes situações:
              </p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Parceiros Essenciais</h4>
                  <p className="text-sm text-gray-600">Processadores de pagamento, auditores e órgãos reguladores</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Autoridades Competentes</h4>
                  <p className="text-sm text-gray-600">Quando exigido por lei ou ordem judicial</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800">Prestadores de Serviço</h4>
                  <p className="text-sm text-gray-600">Sempre com contratos de confidencialidade</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Segurança dos Dados</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <i className="ri-shield-keyhole-line text-3xl text-red-600 mb-2"></i>
                  <h4 className="font-semibold text-red-800">Criptografia</h4>
                  <p className="text-sm text-red-600">SSL/TLS para todas as transmissões</p>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <i className="ri-database-2-line text-3xl text-blue-600 mb-2"></i>
                  <h4 className="font-semibold text-blue-800">Armazenamento</h4>
                  <p className="text-sm text-blue-600">Servidores seguros e auditados</p>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <i className="ri-user-settings-line text-3xl text-green-600 mb-2"></i>
                  <h4 className="font-semibold text-green-800">Acesso</h4>
                  <p className="text-sm text-green-600">Controle rigoroso de usuários</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Seus Direitos (LGPD)</h2>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Você tem os seguintes direitos sobre seus dados pessoais:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <i className="ri-information-line text-blue-600"></i>
                    <span>Confirmação da existência de tratamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-eye-line text-blue-600"></i>
                    <span>Acesso aos dados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-edit-line text-blue-600"></i>
                    <span>Correção de dados incompletos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-delete-bin-line text-blue-600"></i>
                    <span>Eliminação de dados desnecessários</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-download-line text-blue-600"></i>
                    <span>Portabilidade dos dados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-close-circle-line text-blue-600"></i>
                    <span>Revogação do consentimento</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border">
                  <h4 className="font-semibold mb-2">Como exercer seus direitos:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Entre em contato através dos canais oficiais:
                  </p>
                  <div className="flex gap-4 text-sm">
                    <span>📧 privacidade@rifacap.com.br</span>
                    <span>📱 (11) 99999-9999</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 mb-4">
                Mantemos seus dados pelo tempo necessário para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Cumprir as finalidades descritas nesta política</li>
                <li>Atender obrigações legais e regulatórias</li>
                <li>Exercer direitos em processos judiciais</li>
                <li>Período mínimo exigido pela SUSEP (5 anos)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Alterações desta Política</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-yellow-800">
                  Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças 
                  significativas através dos nossos canais oficiais. Recomendamos a revisão regular 
                  deste documento.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contato</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Encarregado de Dados (DPO)</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Para questões sobre tratamento de dados pessoais:
                    </p>
                    <div className="space-y-1 text-sm">
                      <div>📧 dpo@rifacap.com.br</div>
                      <div>📱 (11) 99999-9999</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Atendimento Geral</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Para outras dúvidas sobre nossos serviços:
                    </p>
                    <div className="space-y-1 text-sm">
                      <div>📧 contato@rifacap.com.br</div>
                      <div>📱 (11) 99999-9999</div>
                      <div>⏰ Seg-Sex • 8h às 18h</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}