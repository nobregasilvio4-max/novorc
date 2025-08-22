'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Condições gerais para uso da plataforma RifaCap
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Última atualização: 10 de dezembro de 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-xl font-bold text-blue-900 mb-3">Importante</h2>
              <p className="text-blue-800">
                Ao acessar e utilizar a plataforma RifaCap, você aceita integralmente estes Termos de Uso. 
                Leia atentamente antes de prosseguir com qualquer compra ou cadastro.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Definições</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">RifaCap</h4>
                  <p className="text-sm text-gray-600">
                    Empresa responsável pela operação de títulos de capitalização, CNPJ 00.000.000/0001-00
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Plataforma</h4>
                  <p className="text-sm text-gray-600">
                    Website, aplicativo mobile e demais canais digitais da RifaCap
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Usuário/Cliente</h4>
                  <p className="text-sm text-gray-600">
                    Pessoa física maior de 18 anos que utiliza nossos serviços
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Título de Capitalização</h4>
                  <p className="text-sm text-gray-600">
                    Produto regulamentado pela SUSEP que combina formação de reserva com sorteios
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Elegibilidade e Cadastro</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Requisitos para Participação</h3>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-green-600"></i>
                    <span>Ser maior de 18 anos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-green-600"></i>
                    <span>Possuir CPF válido</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-green-600"></i>
                    <span>Residir no Brasil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="ri-checkbox-circle-line text-green-600"></i>
                    <span>Fornecer dados verídicos</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Responsabilidades do Usuário</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Manter seus dados atualizados</li>
                <li>Proteger suas credenciais de acesso</li>
                <li>Não compartilhar sua conta com terceiros</li>
                <li>Comunicar imediatamente qualquer uso não autorizado</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Títulos de Capitalização</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                  <i className="ri-information-line"></i>
                  Características do Produto
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                  <div>• Valor por número: R$ 25,00</div>
                  <div>• Sorteios mensais</div>
                  <div>• Números de 000001 a 100000</div>
                  <div>• Prêmio máximo: R$ 10 milhões</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Compra de Números</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mínimo de 1 número por compra</li>
                <li>Máximo de 500 números por CPF/mês</li>
                <li>Pagamento deve ser confirmado antes do sorteio</li>
                <li>Números são escolhidos automaticamente pelo sistema</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">3.2 Sorteios</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-calendar-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Periodicidade</h4>
                    <p className="text-gray-600 text-sm">Sorteios realizados todo último domingo do mês</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-bank-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Metodologia</h4>
                    <p className="text-gray-600 text-sm">Baseado nos números da Loteria Federal da Caixa Econômica</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <i className="ri-notification-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Divulgação</h4>
                    <p className="text-gray-600 text-sm">Resultados divulgados em até 48h após o sorteio</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pagamentos e Reembolsos</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Formas de Pagamento</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• PIX (aprovação instantânea)</li>
                    <li>• Cartão de crédito</li>
                    <li>• Cartão de débito</li>
                    <li>• Boleto bancário</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Política de Reembolso</h4>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Até 7 dias após a compra</li>
                    <li>• Antes da realização do sorteio</li>
                    <li>• Taxa administrativa de 5%</li>
                    <li>• Estorno em até 5 dias úteis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prêmios e Resgates</h2>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Estrutura de Premiação Mensal</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-trophy-line text-2xl text-yellow-600"></i>
                      <h4 className="font-bold text-gray-800">1º Prêmio</h4>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">R$ 10.000.000</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-medal-line text-2xl text-blue-600"></i>
                      <h4 className="font-bold text-gray-800">2º e 3º Prêmios</h4>
                    </div>
                    <div className="text-lg font-bold text-blue-600">R$ 5.000.000 cada</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-gift-line text-2xl text-green-600"></i>
                      <h4 className="font-bold text-gray-800">50 Prêmios</h4>
                    </div>
                    <div className="text-lg font-bold text-green-600">R$ 400.000 cada</div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-star-line text-2xl text-purple-600"></i>
                      <h4 className="font-bold text-gray-800">1000 Prêmios</h4>
                    </div>
                    <div className="text-lg font-bold text-purple-600">R$ 10.000 cada</div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">5.1 Processo de Resgate</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <p className="text-gray-700">Verificação automática dos números premiados</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <p className="text-gray-700">Notificação por e-mail e WhatsApp</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <p className="text-gray-700">Validação de dados e documentos</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <p className="text-gray-700">Transferência do prêmio em até 5 dias úteis</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsabilidades e Limitações</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-3">Limitações da RifaCap</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li>• Não garantimos ganhos</li>
                    <li>• Não somos responsáveis por falhas técnicas externas</li>
                    <li>• Prêmios não reclamados em 90 dias prescrevem</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Nossos Compromissos</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li>• Transparência total nos sorteios</li>
                    <li>• Segurança dos dados pessoais</li>
                    <li>• Suporte técnico especializado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Propriedade Intelectual</h2>
              <p className="text-gray-700 mb-4">
                Todo conteúdo da plataforma RifaCap, incluindo textos, imagens, logos, design e códigos, 
                é protegido por direitos autorais e propriedade intelectual.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">É proibido:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Copiar, reproduzir ou distribuir nosso conteúdo</li>
                  <li>Fazer engenharia reversa da plataforma</li>
                  <li>Usar nossos logos ou marcas sem autorização</li>
                  <li>Criar sites ou aplicações similares</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Violações e Penalidades</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-red-800 mb-2">Condutas Proibidas</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                  <li>Fornecer informações falsas</li>
                  <li>Tentar fraudar o sistema</li>
                  <li>Usar múltiplas contas</li>
                  <li>Atacar ou sobrecarregar nossos servidores</li>
                </ul>
              </div>

              <p className="text-gray-700 mt-4">
                <strong>Penalidades:</strong> Suspensão ou cancelamento da conta, perda de prêmios não pagos e 
                possíveis ações legais.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Alterações dos Termos</h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800">
                  Estes termos podem ser alterados a qualquer momento. Mudanças significativas serão 
                  comunicadas com 30 dias de antecedência através dos nossos canais oficiais.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Lei Aplicável e Foro</h2>
              <p className="text-gray-700 mb-4">
                Estes termos são regidos pela legislação brasileira. Qualquer controvérsia será resolvida 
                no foro da comarca de São Paulo/SP.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contato</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  Para dúvidas sobre estes Termos de Uso ou nossos serviços:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Atendimento ao Cliente</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>📧 contato@rifacap.com.br</div>
                      <div>📱 (11) 99999-9999</div>
                      <div>⏰ Seg-Sex • 8h às 18h</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Jurídico</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>📧 juridico@rifacap.com.br</div>
                      <div>📍 São Paulo/SP</div>
                      <div>🏢 CNPJ: 00.000.000/0001-00</div>
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