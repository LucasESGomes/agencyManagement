import { NavLink } from "react-router-dom";

//Icones
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Heart } from "lucide-react";
import { MapPin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-red-950 text-white">
      {/* Seção principal do footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Seção Empresa */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Orçamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Testemunhos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Seção Navegação */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Nosso eventos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Os nossos serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Nosso projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Clientes e feedbacks
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Seção Contacto */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 mr-2 mt-0.5 text-gray-300 flex-shrink-0" />
                  <a
                    href="mailto:info@azimute.pt"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    autofix@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 mr-2 mt-0.5 text-gray-300 flex-shrink-0" />
                  <a
                    href="tel:+351123456789"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +55 (11) 91234-5678
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 mt-0.5 text-gray-300 flex-shrink-0" />
                  <span className="text-gray-300">Mogi das Cruzes, São Paulo</span>
                </li>
              </ul>
            </address>
          </section>
        </div>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-700"></div>

      {/* Mensagem de transformação digital */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="text-xl font-semibold">
          A oficina de personalização mais conceituada do Brasil!
        </p>
      </div>

      {/* Separador */}
      <div className="border-t border-gray-700"></div>

      {/* Rodapé inferior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-300 mr-1">
              © 2025 Auto Fix. Todos os direitos reservados.
            </span>
          </div>

          <nav className="flex flex-wrap justify-center">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors mx-2 mb-2 md:mb-0"
            >
              Termos e Condições
            </a>
            <span className="text-gray-500 mx-1">•</span>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors mx-2 mb-2 md:mb-0"
            >
              Políticas de Privacidade
            </a>
            <span className="text-gray-500 mx-1">•</span>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors mx-2 mb-2 md:mb-0"
            >
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;