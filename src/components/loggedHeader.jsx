import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useState, useEffect } from "react";

//Icons
import { BookOpen } from "lucide-react";
import { MapPin } from "lucide-react";
import { Hammer } from "lucide-react";
import { LogOut } from "lucide-react";
import { Menu } from "lucide-react";
import { User } from "lucide-react";
import { X } from "lucide-react";


const HeaderLogged = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token));
        setUsername(decoded.username);
      } catch (error) {
        console.error("Erro ao decodificar token:", error);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Remove o token de autenticação
    sessionStorage.removeItem("token");
    // Redireciona para a página inicial
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center text-2xl font-bold text-gray-900">
              <img className="h-15" src={Logo} alt="AutoFix" />
              <a href="/">
                <span className="text-black">AutoFix</span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation - centralizada */}
          <nav className="hidden md:flex justify-center items-center space-x-10">
            <NavLink to="/" className="gap-1 nav-link flex items-center">
              <MapPin className="w-5 h-5" />
              Início
            </NavLink>
            <NavLink
              to="/Sobre-Nos"
              className="gap-1 nav-link flex items-center"
            >
              <BookOpen className="w-5 h-5" />
              Sobre Nós
            </NavLink>
            <NavLink
              to="/Formulario-Orcamento"
              className="gap-1 nav-link flex items-center"
            >
              <Hammer className="w-5 h-5" />
              Serviços
            </NavLink>
          </nav>

          {/* Botão de perfil e logout (desktop) */}
          <div className="hidden md:flex justify-end items-center space-x-4">
            <NavLink
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span>{username || "Usuário"}</span>
            </NavLink>
            <button
              onClick={handleLogout}
              className="h-10 flex items-center justify-center px-6 py-2 rounded-lg font-semibold bg-white text-red-600 border-2 border-red-600 shadow transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sair
            </button>
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
              <NavLink
                to="/"
                className="nav-link-mobile gap-1 nav-link flex items-center"
                onClick={toggleMenu}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Início
              </NavLink>
              <NavLink
                to="/Formulario-Orcamento"
                className="nav-link-mobile gap-1 nav-link flex items-center"
                onClick={toggleMenu}
              >
                <Hammer className="w-5 h-5 mr-2" />
                Serviços
              </NavLink>
              <NavLink
                to="/Sobre-Nos"
                className="nav-link-mobile gap-1 nav-link flex items-center"
                onClick={toggleMenu}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Sobre Nós
              </NavLink>
              <NavLink
                className="nav-link-mobile gap-1 nav-link flex items-center"
                onClick={toggleMenu}
              >
                <User className="w-5 h-5 mr-2" />
                {username || "Usuário"}
              </NavLink>
              {/* Botão de logout no mobile */}
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="w-full flex justify-center items-center h-10 px-6 py-2 rounded-lg font-semibold bg-white text-red-600 border-2 border-red-600 shadow transition-all duration-200 hover:bg-red-600 hover:text-white hover:scale-105 hover:shadow-lg"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sair
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderLogged;