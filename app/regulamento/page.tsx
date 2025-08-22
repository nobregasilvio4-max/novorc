
'use client';

import Link from 'next/link';

export default function RegulamentoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="font-['Pacifico'] text-4xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
            RifaCap
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Regulamento</h1>
          <p className="text-xl text-gray-600">Título de Capitalização RifaCap</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
              <div className="text-center">
                <i className="ri-file-text-line w-12 h-12 flex items-center justify-center mx-auto mb-4 text-3xl"></i>
                <h2 className="text-2xl font-bold mb-2">Regulamento Oficial</h2>
                <p className="text-blue-100">Processo SUSEP nº 15414.901574/2024-17</p>
              </div>
            </div>

            <div className="p-8 prose prose-blue max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. IDENTIFICAÇÃO</h3>
              <p className="mb-4">
                <strong>Título:</strong> RifaCap - Título de Capitalização<br />
                <strong>Modalidade:</strong> Incentivo<br />
                <strong>Série:</strong> Única<br />
                <strong>Processo SUSEP:</strong> 15414.901574/2024-17<br />
                <strong>CNPJ:</strong> 00.000.000/0001-00
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. OBJETIVO</h3>
              <p className="mb-4">
                O RifaCap é um título de capitalização que permite ao portador participar de sorteios 
                mensais enquanto forma uma reserva financeira com rentabilidade de 15% ao mês.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. CARACTERÍSTICAS DO TÍTULO</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Valor Mínimo:</strong> R$ 5,00 por número</li>
                <li><strong>Prazo de Vigência:</strong> Indeterminado</li>
                <li><strong>Prazo de Carência para Resgate:</strong> 90 dias</li>
                <li><strong>Rentabilidade:</strong> 15% ao mês sobre o valor investido</li>
                <li><strong>Periodicidade dos Sorteios:</strong> Mensal</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. SORTEIOS</h3>
              <p className="mb-4">
                Os sorteios serão realizados mensalmente, utilizando como base os três primeiros 
                números sorteados pela Caixa Econômica Federal na Loteria Federal.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>1º Prêmio:</strong> R$ 10.000.000,00 (dez milhões de reais)</li>
                <li><strong>2º Prêmio:</strong> R$ 10.000.000,00 (dez milhões de reais)</li>
                <li><strong>3º Prêmio:</strong> R$ 10.000.000,00 (dez milhões de reais)</li>
                <li><strong>Prêmio Especial:</strong> R$ 400.000,00 para cada um dos 50 maiores compradores</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">5. RESGATE</h3>
              <p className="mb-4">
                O portador poderá resgatar o valor investido acrescido da rentabilidade após 90 dias 
                da data da aquisição. O resgate pode ser:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Parcial:</strong> Parte do valor investido</li>
                <li><strong>Total:</strong> Todo o valor investido</li>
                <li><strong>Prazo para Pagamento:</strong> Até 2 dias úteis após a solicitação</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">6. RENTABILIDADE</h3>
              <p className="mb-4">
                O valor investido será remunerado à taxa de 15% ao mês, calculada sobre o valor 
                aplicado e creditada mensalmente na conta do portador.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">7. TRIBUTOS</h3>
              <p className="mb-4">
                Incidirá Imposto de Renda sobre os rendimentos obtidos, conforme legislação vigente:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Até 180 dias: 22,5%</li>
                <li>De 181 a 360 dias: 20%</li>
                <li>De 361 a 720 dias: 17,5%</li>
                <li>Acima de 720 dias: 15%</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">8. TAXAS</h3>
              <p className="mb-4">
                Não há cobrança de taxa de adesão ou manutenção. Os primeiros 1.000 cadastros 
                ficam isentos de qualquer taxa pelos primeiros 6 meses.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">9. DISPOSIÇÕES GERAIS</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Este título está sujeito à fiscalização da SUSEP</li>
                <li>As reclamações devem ser dirigidas primeiramente à empresa</li>
                <li>Caso não sejam atendidas, podem ser encaminhadas à SUSEP</li>
                <li>O regulamento completo está disponível na sede da empresa</li>
              </ul>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <div className="flex items-start gap-3">
                  <i className="ri-alert-line w-6 h-6 flex items-center justify-center text-yellow-600 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Importante</h4>
                    <p className="text-gray-700 text-sm">
                      Este é um resumo do regulamento. O regulamento completo está disponível 
                      em nossa sede e no site da SUSEP. Recomendamos a leitura integral antes 
                      da aquisição do título.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">
                  <strong>Data de Aprovação:</strong> 15 de dezembro de 2024<br />
                  <strong>Data de Início de Comercialização:</strong> 20 de dezembro de 2024
                </p>
                <Link 
                  href="/"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-colors whitespace-nowrap cursor-pointer inline-block"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
