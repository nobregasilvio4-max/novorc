
'use client';

import { useState } from 'react';

export default function ProofSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      story: 'Coloquei R$500 e já estou com R$575 em 30 dias. Nunca pensei que rifa desse dinheiro assim!',
      amount: 'R$ 1.725,00',
      image: 'https://readdy.ai/api/search-image?query=Happy%20Brazilian%20woman%20in%20her%2030s%20smiling%20at%20camera%2C%20professional%20photo%2C%20clean%20background%2C%20positive%20expression%2C%20casual%20business%20attire%2C%20confident%20look&width=200&height=200&seq=person1&orientation=squarish'
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ', 
      story: 'Eu entrei pelo rendimento e acabei ganhando no sorteio. Mudou minha vida!',
      amount: 'R$ 2.450,00',
      image: 'https://readdy.ai/api/search-image?query=Confident%20Brazilian%20man%20in%20his%2040s%20smiling%2C%20professional%20headshot%2C%20clean%20background%2C%20business%20casual%20shirt%2C%20trustworthy%20appearance&width=200&height=200&seq=person2&orientation=squarish'
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      story: 'O melhor investimento que já fiz. Rendimento garantido e ainda concorro aos prêmios!',
      amount: 'R$ 3.180,00', 
      image: 'https://readdy.ai/api/search-image?query=Professional%20Brazilian%20woman%20in%20her%2035s%2C%20warm%20smile%2C%20business%20attire%2C%20clean%20studio%20background%2C%20approachable%20and%20successful%20appearance&width=200&height=200&seq=person3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📱 Veja o que nossos clientes estão dizendo
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reais de pessoas reais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                    <i className="ri-whatsapp-line text-green-500 text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm opacity-90">RifaCap Oficial</div>
                  </div>
                </div>
                <div className="text-sm opacity-90">Agora</div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="bg-green-100 rounded-2xl p-4 mb-4">
                <div className="font-semibold text-green-800 mb-2">
                  🎉 Resgate disponível!
                </div>
                <div className="text-2xl font-bold text-green-800">
                  {testimonials[activeTestimonial].amount}
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-3 text-sm font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer">
                  Clique para sacar
                </button>
              </div>
              
              <div className="text-gray-600 text-sm">
                Parabéns! Seu rendimento está disponível para saque.
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-blue-50 border-2 border-blue-200 shadow-lg' 
                    : 'bg-white border border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <span className="text-sm text-gray-500">• {testimonial.location}</span>
                      <i className="ri-verified-badge-fill text-blue-500 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <p className="text-gray-700 italic">
                      "{testimonial.story}"
                    </p>
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">Verificado</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}