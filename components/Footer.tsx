'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">RC</span>
              </div>
              <span className="font-['Pacifico'] text-2xl font-bold">RifaCap</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              O primeiro título de capitalização que combina sorteio e rendimento garantido.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/quem-somos" className="hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/perguntas-frequentes" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/regulamento" className="hover:text-white transition-colors">
                  Regulamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/politica-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <i className="ri-phone-line w-4 h-4 flex items-center justify-center"></i>
                (11) 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center"></i>
                contato@rifacap.com.br
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center"></i>
                São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        {/* Seção de Logos Oficiais */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-300 mb-4">Órgãos Reguladores e Parceiros</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* Caixa Econômica Federal */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Caixa%20Econ%C3%B4mica%20Federal%20official%20logo%2C%20blue%20and%20yellow%20colors%2C%20clean%20white%20background%2C%20bank%20institution%20symbol%2C%20Brazilian%20federal%20bank%20emblem%2C%20professional%20corporate%20logo&width=120&height=60&seq=caixa-logo&orientation=landscape"
                  alt="Caixa Econômica Federal"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* BNDES */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=BNDES%20official%20logo%2C%20Banco%20Nacional%20de%20Desenvolvimento%20Econ%C3%B4mico%20e%20Social%2C%20green%20corporate%20colors%2C%20Brazilian%20development%20bank%20emblem%2C%20clean%20white%20background%2C%20institutional%20logo&width=120&height=60&seq=bndes-logo&orientation=landscape"
                  alt="BNDES"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Banco Central */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Banco%20Central%20do%20Brasil%20official%20logo%2C%20BCB%20emblem%2C%20Brazilian%20central%20bank%20symbol%2C%20blue%20and%20gold%20colors%2C%20monetary%20authority%20logo%2C%20clean%20white%20background%2C%20institutional%20design&width=120&height=60&seq=bacen-logo&orientation=landscape"
                  alt="Banco Central do Brasil"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* SUSEP */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=SUSEP%20official%20logo%2C%20Superintend%C3%AAncia%20de%20Seguros%20Privados%2C%20Brazilian%20insurance%20regulator%20emblem%2C%20institutional%20colors%2C%20clean%20white%20background%2C%20regulatory%20authority%20symbol&width=120&height=60&seq=susep-logo&orientation=landscape"
                  alt="SUSEP"
                  className="h-12 w-auto object-contain"
                />
              </div>

              {/* Reclame Aqui */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all cursor-pointer">
                <img 
                  src="https://readdy.ai/api/search-image?query=Reclame%20Aqui%20official%20logo%2C%20orange%20and%20white%20colors%2C%20Brazilian%20consumer%20protection%20platform%20emblem%2C%20clean%20white%20background%2C%20customer%20service%20symbol%2C%20corporate%20logo&width=120&height=60&seq=reclame-logo&orientation=landscape"
                  alt="Reclame Aqui"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              <p>CNPJ: 12.345.678/0001-90 | Razão Social: RifaCap Títulos LTDA</p>
              <p>© 2024 RifaCap. Todos os direitos reservados.</p>
            </div>
            <div className="text-xs text-gray-500">
              <p>Autorizado pela SUSEP - Superintendência de Seguros Privados</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}