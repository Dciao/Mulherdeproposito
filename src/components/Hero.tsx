import { BookOpen, Users } from 'lucide-react';

export default function Hero() {
  const scrollToPrice = () => {
    const element = document.getElementById('preco');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Planeje, Organize e Viva Cada Dia{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Com Propósito
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Planeje seu ano com intencionalidade e transforme cada dia em uma oportunidade para crescer e realizar seus propósitos.
            </p>
            <button
              onClick={scrollToPrice}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition inline-flex items-center gap-2"
            >
              <BookOpen size={24} />
              Quero meu Kit Completo
            </button>
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-gray-700">
              <Users className="text-purple-600" size={20} />
              <span className="font-semibold">Mais de 1200 mulheres já transformaram suas vidas</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/Design-sem-nome-4-1024x1024.png"
                  alt="Kit Completo de Planners"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold shadow-lg transform rotate-12">
              Acesso Imediato!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
