import { Shield, CheckCircle } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-green-200">
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Experimente sem riscos! Se por qualquer motivo o material não fizer sentido para você, devolvemos 100% do seu investimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={24} />
                <span className="font-semibold">Sem perguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={24} />
                <span className="font-semibold">Sem burocracia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-green-600" size={24} />
                <span className="font-semibold">100% do dinheiro de volta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
