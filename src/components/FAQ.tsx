import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Posso usar pelo celular?',
    answer: 'Sim! Todos os materiais são em formato PDF e podem ser acessados pelo celular, tablet ou computador. Você pode usar digitalmente ou imprimir.'
  },
  {
    question: 'Como vou receber acesso?',
    answer: 'Após a confirmação do pagamento, você receberá imediatamente por e-mail o link para download de todos os materiais. O acesso é instantâneo!'
  },
  {
    question: 'Tem suporte para dúvidas?',
    answer: 'Sim! Oferecemos suporte completo via e-mail e WhatsApp para tirar todas as suas dúvidas sobre o uso dos materiais.'
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'O acesso é vitalício! Você pode baixar os materiais quantas vezes quiser e usar para sempre.'
  },
  {
    question: 'Os materiais são editáveis?',
    answer: 'Os planners vêm em formato PDF pronto para uso. Você pode imprimir ou usar aplicativos como GoodNotes e Notability para fazer anotações digitais.'
  },
  {
    question: 'Existe garantia?',
    answer: 'Sim! Oferecemos garantia incondicional de 7 dias. Se você não gostar por qualquer motivo, devolvemos 100% do seu dinheiro.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">Tire suas dúvidas antes de adquirir</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-50 transition"
              >
                <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`text-purple-600 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gradient-to-br from-purple-50 to-pink-50 border-t border-purple-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
