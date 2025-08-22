
'use client';

export default function PrizeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Money%20rain%20falling%20from%20sky%2C%20golden%20coins%20and%20banknotes%20floating%20in%20air%2C%20lottery%20balls%2C%20Brazilian%20currency%2C%20celebration%20atmosphere%2C%20wealth%20and%20prosperity%2C%20dark%20blue%20background%20with%20golden%20elements&width=1400&height=800&seq=prize1&orientation=landscape')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            🏆 <span className="text-yellow-300">R$ 50 MILHÕES</span> em Prêmios Mensais!
          </h2>
          <p className="text-xl mb-4">
            <strong>Sorteios oficiais pela Caixa Econômica Federal</strong>
          </p>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 mx-auto max-w-2xl border-2 border-yellow-400">
            <p className="text-lg font-bold">
              💰 <span className="text-yellow-300">IMPORTANTE:</span> Seu dinheiro investido pode ser retirado em apenas <span className="text-yellow-300">90 DIAS</span>!
            </p>
          </div>
        </div>

        {/* Prêmios dos Sorteios pela Caixa */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-yellow-300 mb-4">🎯 20 Números Sorteados — R$ 25 MILHÕES</h3>
            <p className="text-lg opacity-90">Sorteios oficiais baseados nos números da <strong className="text-yellow-300">Caixa Econômica Federal</strong></p>
            <p className="text-base opacity-80 mt-2">Mesma transparência e confiabilidade da loteria federal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-center text-black border-2 border-yellow-400">
              <div className="text-4xl mb-3">🥇</div>
              <h4 className="text-lg font-bold mb-2">1º LUGAR</h4>
              <div className="text-2xl font-bold mb-1">R$ 10.000.000</div>
              <p className="text-sm opacity-80">10 Milhões para 1 Ganhador</p>
              <div className="text-xs mt-2 opacity-70">Prêmio Principal</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center text-white border-2 border-purple-400">
              <div className="text-4xl mb-3">🥈</div>
              <h4 className="text-lg font-bold mb-2">2º LUGAR</h4>
              <div className="text-2xl font-bold mb-1">R$ 5.000.000</div>
              <p className="text-sm opacity-80">5 Milhões para 1 Ganhador</p>
              <div className="text-xs mt-2 opacity-70">Segundo Maior Prêmio</div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-center text-white border-2 border-blue-400">
              <div className="text-4xl mb-3">🥉</div>
              <h4 className="text-lg font-bold mb-2">3º AO 5º LUGAR</h4>
              <div className="text-2xl font-bold mb-1">R$ 1.000.000</div>
              <p className="text-sm opacity-80">1 Milhão para cada um</p>
              <div className="text-xs mt-2 opacity-70">3 Ganhadores</div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-center text-white border-2 border-green-400">
              <div className="text-4xl mb-3">🎁</div>
              <h4 className="text-lg font-bold mb-2">6º AO 20º LUGAR</h4>
              <div className="text-2xl font-bold mb-1">R$ 500.000</div>
              <p className="text-sm opacity-80">500 mil para cada um</p>
              <div className="text-xs mt-2 opacity-70">15 Ganhadores</div>
            </div>
          </div>

          {/* Detalhamento dos Prêmios */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-yellow-300 text-center">
              📋 Detalhamento Completo dos R$ 25 Milhões em Sorteios
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>🥇 1º Lugar:</span>
                  <span className="font-bold text-yellow-300">R$ 10.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>🥈 2º Lugar:</span>
                  <span className="font-bold text-purple-300">R$ 5.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>🥉 3º ao 5º Lugar (3x):</span>
                  <span className="font-bold text-blue-300">R$ 3.000.000</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>🎁 6º ao 20º Lugar (15x):</span>
                  <span className="font-bold text-green-300">R$ 7.500.000</span>
                </div>
                <div className="flex justify-between border-t border-white/20 pt-2">
                  <span className="font-bold">TOTAL:</span>
                  <span className="font-bold text-yellow-300">R$ 25.500.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção dos 100 Maiores Compradores */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-center text-black mb-8">
            <h3 className="text-3xl font-bold mb-4">
              👑 100 MAIORES COMPRADORES — R$ 25 MILHÕES
            </h3>
            <p className="text-lg mb-2">
              Além de concorrer nos sorteios da Caixa, os <strong>100 clientes que mais comprarem títulos</strong> ainda garantem prêmios exclusivos!
            </p>
            <p className="text-sm font-medium opacity-90">
              Ranking automático • Premiação garantida • Sem sorteio adicional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <i className="ri-car-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2 text-yellow-300">10 Carros Zero KM</h4>
              <div className="text-lg font-bold mb-2">SUVs Premium</div>
              <p className="text-sm opacity-90">Valor: R$ 200.000 cada</p>
              <div className="text-xs mt-2 bg-red-500/20 rounded px-2 py-1">Para os 10 primeiros</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <i className="ri-motorbike-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2 text-yellow-300">20 Motos Premium</h4>
              <div className="text-lg font-bold mb-2">Alto Padrão</div>
              <p className="text-sm opacity-90">Valor: R$ 50.000 cada</p>
              <div className="text-xs mt-2 bg-orange-500/20 rounded px-2 py-1">11º ao 30º lugar</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <i className="ri-plane-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2 text-yellow-300">20 Viagens Luxo</h4>
              <div className="text-lg font-bold mb-2">Destinos Internacionais</div>
              <p className="text-sm opacity-90">Valor: R$ 30.000 cada</p>
              <div className="text-xs mt-2 bg-blue-500/20 rounded px-2 py-1">31º ao 50º lugar</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <i className="ri-money-dollar-circle-line text-2xl text-white"></i>
              </div>
              <h4 className="text-xl font-bold mb-2 text-yellow-300">50 Prêmios em Dinheiro</h4>
              <div className="text-lg font-bold mb-2">R$ 50.000 cada</div>
              <p className="text-sm opacity-90">Total: R$ 2.500.000</p>
              <div className="text-xs mt-2 bg-green-500/20 rounded px-2 py-1">51º ao 100º lugar</div>
            </div>
          </div>

          {/* Resumo dos Prêmios para Maiores Compradores */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="text-lg font-bold mb-4 text-yellow-300 text-center">
              💎 Resumo: R$ 25 Milhões para os 100 Maiores Compradores
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>10 SUVs (R$ 200k cada):</span>
                  <span className="font-bold text-red-300">R$ 2.000.000</span>
                </div>
                <div className="flex justify-between">
                  <span>20 Motos (R$ 50k cada):</span>
                  <span className="font-bold text-orange-300">R$ 1.000.000</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>20 Viagens (R$ 30k cada):</span>
                  <span className="font-bold text-blue-300">R$ 600.000</span>
                </div>
                <div className="flex justify-between">
                  <span>50 Prêmios (R$ 50k cada):</span>
                  <span className="font-bold text-green-300">R$ 2.500.000</span>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-2 mt-4">
              <div className="flex justify-between font-bold">
                <span>TOTAL RANKING:</span>
                <span className="text-yellow-300">R$ 6.100.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Importantes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-yellow-300">
              <i className="ri-bank-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Sorteio pela Caixa Econômica
            </h4>
            <p className="text-lg mb-3">Mesma confiabilidade da Loteria Federal - números sorteados oficialmente pela Caixa.</p>
            <p className="text-base opacity-90">Transparência total, impossível de manipulação, com transmissão ao vivo dos sorteios.</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-4 text-yellow-300">
              <i className="ri-calendar-line w-5 h-5 flex items-center justify-center mr-2 inline-flex"></i>
              Resgate Garantido em 90 Dias
            </h4>
            <p className="text-lg mb-3">Seu investimento não fica preso! Você pode resgatar em apenas 90 dias.</p>
            <p className="text-base opacity-90">Além de concorrer aos R$ 50 milhões, seu dinheiro fica rendendo e pode ser sacado quando quiser.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 mb-8 border-2 border-yellow-400">
            <h3 className="text-2xl font-bold mb-4">
              🚀 TOTAL: R$ 50 MILHÕES EM PRÊMIOS MENSAIS
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <i className="ri-trophy-fill text-yellow-400"></i>
                <span>R$ 25M sorteados pela Caixa</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="ri-crown-fill text-yellow-400"></i>
                <span>R$ 25M ranking compradores</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <i className="ri-money-dollar-circle-fill text-yellow-400"></i>
                <span>Resgate em 90 dias</span>
              </div>
            </div>
          </div>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-bold py-4 px-12 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
            QUERO CONCORRER AOS R$ 50 MILHÕES
          </button>
        </div>
      </div>
    </section>
  );
}
