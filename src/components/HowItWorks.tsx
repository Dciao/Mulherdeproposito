import { ShoppingCart, Download, Printer } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Adquira seu Kit completo em PDF',
    description: 'Faça seu pedido de forma rápida e segura em poucos cliques'
  },
  {
    icon: Download,
    title: 'Baixe imediatamente no seu celular ou computador',
    description: 'Receba acesso instantâneo após a confirmação do pagamento'
  },
  {
    icon: Printer,
    title: 'Imprima ou use digitalmente',
    description: 'Flexibilidade total para organizar sua vida espiritual do seu jeito'
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como funciona?
          </h2>
          <p className="text-lg text-gray-600">Simples, rápido e prático</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white" size={40} />
                </div>
                <div className="absolute -top-4 -left-4 bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
