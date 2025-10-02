import { Check, AlertCircle, Sparkles } from 'lucide-react';

export default function Pricing() {
  const handlePurchase = () => {
    window.open('https://pay.hotmart.com/your-checkout-link', '_blank');
  };

  return (
    <section id="preco" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que você deve agir agora?
          </h2>
          <p className="text-xl text-purple-100">Oferta exclusiva com valor promocional</p>
        </div>

        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 text-center">
            <p className="font-bold text-black flex items-center justify-center gap-2">
              <AlertCircle size={20} />
              Promoção por tempo limitado!
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-500 text-lg mb-2">De <span className="line-through text-red-600 font-semibold">R$ 119,90</span> por:</p>
              <div className="text-6xl font-bold text-green-600 mb-2">
                R$ 37,00
              </div>
              <p className="text-gray-600 uppercase font-medium">à vista ou em até 6x</p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Sparkles className="text-yellow-500" />
                Incluído no Kit Completo:
              </h3>
              {[
                'Estratégia de Guerra (Planner de Oração)',
                'Devocional Planner (Diário Espiritual)',
                'Planner de Leitura Bíblica Anual',
                'Diário da Gratidão',
                'Planner de Hábitos',
                'Desafio 30 Dias de Oração Inteligente',
                'Planner de Planejamento Diário',
                'Devocional com Propósito',
                'Planner Financeiro 2026'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-full p-1 flex-shrink-0 mt-1">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition"
            >
              Quero meu Material Completo + Bônus
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento 100% seguro via Hotmart
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
