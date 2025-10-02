import { Facebook, Instagram, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Mulher de Propósito
            </h3>
            <p className="text-gray-400">
              Transformando vidas através da organização espiritual e crescimento pessoal.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400 transition">Contato</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">Termos de Uso</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition">Suporte</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Mulher de Propósito. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.</p>
            </div>
          </div>
          <p className="text-center mt-4 text-gray-500 text-xs">
            Aviso Legal: A pirataria é crime. Todos os materiais são protegidos por direitos autorais.
          </p>
        </div>
      </div>
    </footer>
  );
}
