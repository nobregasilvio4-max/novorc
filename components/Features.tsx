
'use client';

export default function Features() {
  const features = [
    {
      icon: 'ri-trophy-line',
      title: 'Prêmios de até R$ 50 Milhões',
      description: 'Sorteios mensais com prêmios milionários garantidos',
      highlight: true
    },
    {
      icon: 'ri-calendar-check-line',
      title: 'Sorteios Mensais',
      description: 'Todo mês novas chances de ganhar grandes prêmios',
      highlight: false
    },
    {
      icon: 'ri-ticket-line',
      title: 'Múltiplos Títulos',
      description: 'Compre quantos títulos quiser e aumente suas chances',
      highlight: true
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Autorizado pela SUSEP',
      description: 'Título de capitalização regulamentado e 100% seguro',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que escolher o RifaCap?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O único <strong>título de capitalização</strong> que oferece sorteios mensais 
            com prêmios milionários de forma totalmente regulamentada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className={`w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-full ${
                feature.highlight ? 'bg-blue-600 text-white' : 'bg-gray-600 text-white'
              }`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🏆 Como funciona o RifaCap?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">1️⃣</div>
              <h4 className="font-semibold mb-2">Compre seus títulos</h4>
              <p className="text-gray-600 text-sm">Escolha quantos títulos quer e finalize sua compra</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">2️⃣</div>
              <h4 className="font-semibold mb-2">Aguarde o sorteio</h4>
              <p className="text-gray-600 text-sm">Todo mês realizamos sorteios oficiais transparentes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl mb-3">3️⃣</div>
              <h4 className="font-semibold mb-2">Receba seu prêmio</h4>
              <p className="text-gray-600 text-sm">Prêmios são pagos direto na sua conta bancária</p>
            </div>
          </div>
          <p className="text-xl font-bold text-green-600 mt-6">
            ✅ Simples, seguro e regulamentado pela SUSEP!
          </p>
        </div>
      </div>
    </section>
  );
}