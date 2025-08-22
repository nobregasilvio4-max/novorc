
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Money%20rain%20falling%20from%20sky%2C%20golden%20coins%20and%20banknotes%20floating%20in%20air%2C%20lottery%20balls%2C%20Brazilian%20currency%2C%20celebration%20atmosphere%2C%20wealth%20and%20prosperity%2C%20dark%20blue%20background%20with%20golden%20elements&width=1400&height=800&seq=hero-money-rain&orientation=landscape')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="font-['Pacifico'] text-5xl md:text-7xl font-bold mb-6 leading-tight">
            RifaCap
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Títulos de Capitalização com<br />
            <span className="text-yellow-300">Sorteios Mensais de R$ 50 Milhões!</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Compre seus números e concorra mensalmente a <strong className="text-yellow-300">R$ 50 milhões em prêmios</strong>. 
            Sorteios oficiais pela <strong className="text-yellow-300">Caixa Econômica Federal</strong> com total transparência!
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 mb-8 border-2 border-blue-500 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🏆 PRÓXIMO SORTEIO PELA CAIXA</h3>
            <p className="text-lg mb-4">
              Prêmio principal de <strong>R$ 10.000.000</strong> + R$ 40 milhões em outros prêmios
            </p>
            <p className="text-base opacity-90">
              Sorteio oficial pela Caixa Econômica Federal • Números a partir de R$ 25,00
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link 
            href="/calculadora"
            className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-12 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer mb-4 inline-block"
          >
            <i className="ri-calculator-line w-6 h-6 flex items-center justify-center mr-3 inline-flex"></i>
            CALCULAR RENDIMENTOS
          </Link>
          
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Autorizado pela SUSEP • Sorteios pela Caixa Econômica</span>
          </div>
        </div>
      </div>
    </div>
  );
}
