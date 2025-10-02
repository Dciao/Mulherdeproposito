import { Sparkles } from 'lucide-react';

export default function FinalCTA() {
  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/your-checkout-link', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="mx-auto mb-6" size={60} />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Transforme sua rotina espiritual AGORA!
        </h2>
        <p className="text-xl mb-8 text-purple-100">
          Junte-se a mais de 1200 mulheres que já estão vivendo com mais propósito, fé e disciplina espiritual
        </p>
        <button
          onClick={handlePurchase}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-12 py-6 rounded-full text-2xl font-bold hover:shadow-2xl transform hover:scale-105 transition inline-flex items-center gap-3"
        >
          <Sparkles size={28} />
          Quero transformar minha vida agora!
        </button>
        <p className="mt-6 text-purple-200">
          Oferta por tempo limitado - Apenas 9 vagas restantes
        </p>
      </div>
    </section>
  );
}
