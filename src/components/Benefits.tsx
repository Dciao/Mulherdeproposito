import { Heart, Calendar, BookMarked, Sparkles, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Fortaleça sua vida espiritual diariamente',
    description: 'Desenvolva uma conexão mais profunda com sua fé através de práticas diárias estruturadas'
  },
  {
    icon: Calendar,
    title: 'Organize sua rotina com disciplina e propósito',
    description: 'Tenha clareza e direção em cada área da sua vida com planejamento intencional'
  },
  {
    icon: BookMarked,
    title: 'Crie hábitos de oração e leitura da Bíblia',
    description: 'Estabeleça rotinas espirituais consistentes que transformam seu dia a dia'
  },
  {
    icon: Sparkles,
    title: 'Viva com mais clareza, gratidão e fé',
    description: 'Cultive uma mentalidade positiva e grata em todas as circunstâncias'
  },
  {
    icon: TrendingUp,
    title: 'Acompanhe seu progresso e alcance seus objetivos',
    description: 'Visualize seu crescimento e celebre cada conquista no seu caminho espiritual'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que a{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mulher de Propósito
            </span>{' '}
            é para você?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2 border border-purple-100"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
