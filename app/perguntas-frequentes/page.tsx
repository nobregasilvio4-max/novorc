
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PerguntasFrequentesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o RifaCap?",
      answer: "O RifaCap é um título de capitalização autorizado pela SUSEP que combina investimento com sorteio. Seu dinheiro rende 15% ao mês e você ainda concorre a prêmios de até R$ 50 milhões mensais."
    },
    {
      question: "É seguro investir no RifaCap?",
      answer: "Sim, totalmente seguro. O RifaCap é regulamentado pela SUSEP (Superintendência de Seguros Privados), órgão do governo federal que fiscaliza o setor de seguros e capitalização no Brasil."
    },
    {
      question: "Como funciona o rendimento de 15% ao mês?",
      answer: "O rendimento de 15% ao mês é calculado sobre o valor investido e creditado mensalmente na sua conta. Por exemplo, se você investir R$ 1.000, receberá R$ 150 de rendimento todo mês."
    },
    {
      question: "Quando posso resgatar meu dinheiro?",
      answer: "Você pode resgatar seu investimento após 90 dias da aplicação. O resgate pode ser parcial ou total, e o dinheiro é depositado na sua conta em até 2 dias úteis."
    },
    {
      question: "Como funcionam os sorteios?",
      answer: "Os sorteios acontecem todo mês com base nos números oficiais da Caixa Econômica Federal. São 3 prêmios de R$ 10 milhões cada, além de 50 prêmios de R$ 400 mil para os maiores compradores."
    },
    {
      question: "Qual o valor mínimo para investir?",
      answer: "O valor mínimo para participar do RifaCap é de R$ 100. Você pode escolher quantos números quer comprar, sendo R$ 5 por número."
    },
    {
      question: "Preciso pagar taxa para investir?",
      answer: "Não há taxa de abertura ou manutenção de conta. Os primeiros 1.000 cadastros ainda ganham taxa zero nos primeiros 6 meses."
    },
    {
      question: "Como recebo meus rendimentos?",
      answer: "Os rendimentos são creditados automaticamente na sua conta RifaCap todo mês. Você pode acompanhar pelo app ou site e solicitar o saque quando quiser."
    },
    {
      question: "O RifaCap tem garantia?",
      answer: "Sim, como título de capitalização regulamentado pela SUSEP, o RifaCap segue todas as normas de segurança e proteção ao investidor estabelecidas pelo órgão regulador."
    },
    {
      question: "Como faço para começar a investir?",
      answer: "É muito simples! Basta se cadastrar no site, escolher quantos números quer comprar, fazer o pagamento via PIX e pronto. Você já estará investindo e concorrendo aos sorteios."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="font-['Pacifico'] text-4xl font-bold text-blue-600 hover:text-blue-700 cursor-pointer">
            RifaCap
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">Perguntas Frequentes</h1>
          <p className="text-xl text-gray-600">Tire suas dúvidas sobre o RifaCap</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
              <div className="text-center">
                <i className="ri-question-answer-line w-12 h-12 flex items-center justify-center mx-auto mb-3 text-3xl"></i>
                <h2 className="text-2xl font-bold">Dúvidas mais comuns</h2>
                <p className="text-blue-100 mt-2">Encontre respostas rápidas para suas perguntas</p>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform duration-200 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}>
                        <i className="ri-arrow-down-s-line w-6 h-6 flex items-center justify-center text-gray-500"></i>
                      </div>
                    </button>
                    
                    {activeIndex === index && (
                      <div className="px-6 py-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-customer-service-line text-xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Ainda tem dúvidas?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Nossa equipe de atendimento está pronta para ajudar você com qualquer questão.
              </p>
              <Link 
                href="/contato"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer inline-block"
              >
                Entrar em Contato
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <i className="ri-calculator-line text-xl"></i>
                </div>
                <h3 className="text-lg font-bold">Simule seu investimento</h3>
              </div>
              <p className="text-green-100 mb-4">
                Use nossa calculadora e veja quanto você pode ganhar com o RifaCap.
              </p>
              <Link 
                href="/calculadora"
                className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer inline-block"
              >
                Calcular Rendimento
              </Link>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <i className="ri-information-line text-yellow-600"></i>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Aviso Importante</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  O RifaCap é um título de capitalização regulamentado pela SUSEP. 
                  Recomendamos a leitura completa do regulamento antes da aquisição. 
                  Rentabilidade passada não garante resultados futuros. 
                  Este produto pode não ser adequado aos seus objetivos de investimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
