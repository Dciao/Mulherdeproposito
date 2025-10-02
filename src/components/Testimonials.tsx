import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'Esse kit transformou minha vida espiritual! Agora tenho disciplina para orar e ler a Bíblia todos os dias. Melhor investimento que já fiz!',
    rating: 5
  },
  {
    name: 'Ana Carolina',
    text: 'Simplesmente perfeito! Os planners são lindos e super práticos. Consigo organizar tudo e ainda fortalecer minha fé diariamente.',
    rating: 5
  },
  {
    name: 'Juliana Santos',
    text: 'Nunca imaginei que um planner pudesse fazer tanta diferença. Minha rotina de oração melhorou 100%. Recomendo demais!',
    rating: 5
  },
  {
    name: 'Patricia Oliveira',
    text: 'Material de excelente qualidade! Uso tanto no celular quanto impresso. Os bônus são incríveis, vale muito a pena!',
    rating: 5
  },
  {
    name: 'Fernanda Costa',
    text: 'Estou amando cada página! O devocional é maravilhoso e me ajuda a ter momentos especiais com Deus todos os dias.',
    rating: 5
  },
  {
    name: 'Camila Rodrigues',
    text: 'Excelente! Finalmente consegui criar o hábito de leitura bíblica diária. O planner me motiva a continuar firme na fé.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Amadas por mulheres{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              em todo o Brasil
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border border-purple-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
