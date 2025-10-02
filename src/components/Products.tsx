import { BookOpen, Heart, BookMarked, Calendar, CheckSquare, Zap, ClipboardList, Sparkles, DollarSign } from 'lucide-react';

const products = [
  { icon: Zap, name: 'Estratégia de Guerra (Planner de Oração)', color: 'from-purple-500 to-purple-600', image: null },
  { icon: BookOpen, name: 'Devocional Planner (Diário Espiritual)', color: 'from-pink-500 to-pink-600', image: null },
  { icon: BookMarked, name: 'Planner de Leitura Bíblica Anual', color: 'from-purple-600 to-pink-600', image: null },
  { icon: Heart, name: 'Diário da Gratidão', color: 'from-rose-500 to-pink-600', image: null },
  { icon: CheckSquare, name: 'Planner de Hábitos', color: 'from-purple-500 to-pink-500', image: null },
  { icon: Zap, name: 'Desafio 30 Dias de Oração Inteligente', color: 'from-fuchsia-500 to-purple-600', image: null },
  { icon: Calendar, name: 'Planner de Planejamento Diário', color: 'from-pink-600 to-rose-600', image: null },
  { icon: Sparkles, name: 'Devocional com Propósito', color: 'from-purple-600 to-fuchsia-600', image: null },
  { icon: DollarSign, name: 'Planner Financeiro 2026', color: 'from-pink-500 to-purple-500', image: null }
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que você vai receber:
          </h2>
          <p className="text-lg text-gray-600">Kit completo com 9 produtos digitais para transformar sua vida</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300 overflow-hidden aspect-square"
            >
              {product.image ? (
                <div className="relative w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                  </div>
                </div>
              ) : (
                <div className="p-6 flex flex-col justify-center h-full">
                  <div className={`bg-gradient-to-br ${product.color} w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                    <product.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 rounded-full shadow-lg transform rotate-1">
            <p className="text-black font-bold text-xl">9 Produtos Digitais Completos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
