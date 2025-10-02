import { BookOpen, Sparkles, Bookmark, Map } from 'lucide-react';

const bonuses = [
  {
    icon: BookOpen,
    title: 'Coletânea de versículos por tema',
    value: 'R$ 49,90',
    color: 'from-purple-500 to-purple-600',
    image: '/mockup-mulher-virtuosa-9-768x768.png'
  },
  {
    icon: Sparkles,
    title: 'Pack de Templates Cristãos 3D Pixar',
    value: 'R$ 19,90',
    color: 'from-pink-500 to-pink-600',
    image: '/mockup-templates-3d.png'
  },
  {
    icon: Bookmark,
    title: '100 Marcadores de Páginas',
    value: 'R$ 19,90',
    color: 'from-fuchsia-500 to-purple-600',
    image: null
  },
  {
    icon: Map,
    title: 'Mapa Mental da Oração',
    value: 'GRÁTIS',
    color: 'from-rose-500 to-pink-600',
    image: null
  }
];

export default function Bonus() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full mb-6">
            <p className="font-bold text-black text-lg">BÔNUS EXCLUSIVOS</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você também vai receber{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              esses bônus incríveis!
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-2 border-purple-100 overflow-hidden"
            >
              {bonus.image ? (
                <div className="relative">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{bonus.title}</h3>
                    <div className="text-center">
                      <span className="line-through text-gray-400 text-sm">{bonus.value}</span>
                      <p className="text-green-600 font-bold text-lg">GRÁTIS</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className={`bg-gradient-to-br ${bonus.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <bonus.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-2">{bonus.title}</h3>
                  <div className="text-center">
                    <span className="line-through text-gray-400 text-sm">{bonus.value}</span>
                    <p className="text-green-600 font-bold text-lg">GRÁTIS</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-xl text-center text-white">
          <Sparkles className="mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-2">Presente Extra</h3>
          <p className="text-xl">Bíblia para imprimir com espaço de anotações</p>
        </div>
      </div>
    </section>
  );
}
