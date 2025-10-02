import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mulher de Propósito
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-purple-600 transition">
              Início
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-700 hover:text-purple-600 transition">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-purple-600 transition">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('preco')} className="text-gray-700 hover:text-purple-600 transition">
              Preço
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-purple-600 transition">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition"
            >
              Comprar Agora
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">
              Início
            </button>
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('preco')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">
              Preço
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-purple-50 rounded">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('preco')}
              className="block w-full text-left px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded font-semibold"
            >
              Comprar Agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
