'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">RC</span>
              </div>
              <span className="font-['Pacifico'] text-2xl font-bold text-blue-600">
                RifaCap
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Início
              </Link>
              <Link href="/calculadora" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Calculadora
              </Link>
              <Link href="/regulamento" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Regulamento
              </Link>
              <Link href="/perguntas-frequentes" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                FAQ
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer">
                Contato
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={toggleLogin}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                <span className="hidden sm:inline">Área do Cliente</span>
              </button>

              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-6 z-50">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Acesse sua conta</h3>
                    <p className="text-sm text-gray-600">Entre para ver seus números e sorteios</p>
                  </div>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Senha
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="********"
                      />
                    </div>

                    <Link
                      href="/cliente"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer text-center block"
                    >
                      Entrar
                    </Link>
                  </form>

                  <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      Ainda não tem conta?
                    </p>
                    <Link
                      href="/cadastro"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer"
                    >
                      Cadastre-se agora
                    </Link>
                  </div>

                  <button
                    onClick={toggleLogin}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                Início
              </Link>
              <Link href="/calculadora" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                Calculadora
              </Link>
              <Link href="/regulamento" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                Regulamento
              </Link>
              <Link href="/perguntas-frequentes" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                FAQ
              </Link>
              <Link href="/contato" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg cursor-pointer">
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>

      {(isLoginOpen || isMenuOpen) && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => {
            setIsLoginOpen(false);
            setIsMenuOpen(false);
          }}
        ></div>
      )}
    </header>
  );
}