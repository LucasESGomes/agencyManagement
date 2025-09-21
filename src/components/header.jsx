import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.png";

//Icones
import { MapPin } from "lucide-react";
import { BookOpen } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Hammer } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center text-2xl font-bold text-gray-900">
              <img className="h-15" src={Logo} alt="/" />

              <span className="text-black">AutoFix</span>
            </div>
          </div>

          {/* Desktop Navigation - centralizada */}
          <nav className="hidden md:flex justify-center items-center space-x-10">
            <a href="/" className="gap-1 nav-link flex items-center">
              <MapPin className="w-5 h-5" />
              Início
            </a>
            <a href="/Sobre-Nos" className="gap-1 nav-link flex items-center">
              <BookOpen className="w-5 h-5" />
              Sobre Nós
            </a>
            <a href="/Formulario-Orcamento" className="gap-1 nav-link flex items-center">
              <Hammer className="w-5 h-5" />
              Serviços
            </a>
          </nav>

          {/* Registrar ou Entrar na conta (desktop) */}
          <div className="hidden md:flex justify-end items-center space-x-4">
            <a href="/Entrar" role="button" className="h-10 px-6 py-2 rounded-lg font-semibold bg-red-600 text-white shadow transition-all duration-200 hover:bg-red-700 hover:scale-105 hover:shadow-lg">
              Entrar
            </a>
            <a href="/Cadastro" role="button" className="h-10 flex items-center justify-center px-6 py-2 rounded-lg font-semibold bg-white text-red-600 border-2 border-red-600 shadow transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg">
              Cadastre-se
            </a>
          </div>

          {/* Botão menu mobile (alinhado na grid) */}
          <div className="flex md:hidden justify-end items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="nav-link-mobile gap-1 nav-link flex items-center"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Início
              </a>
              <a
                href="#"
                className="nav-link-mobile gap-1 nav-link flex items-center"
              >
                <Hammer className="w-5 h-5 mr-2" />
                Serviços
              </a>
              <a
                href="#"
                className="nav-link-mobile gap-1 nav-link flex items-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Sobre Nós
              </a>
              {/* Botões de Entrar e Cadastre-se no mobile */}
              <button className="w-full h-10 px-6 py-2 rounded-lg font-semibold bg-red-600 text-white shadow transition-all duration-200 hover:bg-red-700 hover:scale-105 hover:shadow-lg">
                Entrar
              </button>
              <button className="w-full flex justify-center items-center h-10 px-6 py-2 rounded-lg font-semibold bg-white text-red-600 border-2 border-red-600 shadow transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg">
                Cadastre-se
              </button>
            </div>
          </div>
        )}

        <style jsx>{`
          .nav-link {
            position: relative;
            color: #4a5568;
            font-weight: 500;
            transition: color 0.3s;
          }

          .nav-link:hover {
            color: #c61010;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -4px;
            left: 0;
            background-color: #c61010;
            transform: scaleX(0);
            transform-origin: bottom right;
            transition: transform 0.3s;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          .nav-link-mobile {
            color: #4a5568;
            font-weight: 500;
            padding: 8px 0;
            border-bottom: 1px solid #e2e8f0;
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;
