import { useState } from "react";

//Icones
import { MapPin } from "lucide-react";
import { BookOpen } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-red-600">Auto </span>
              <span className="text-gray-800">Fix</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link flex items-center">
              <MapPin className="w-5 h-5 mr-1" />
              Location
            </a>
            <a href="#" className="nav-link flex items-center">
              <BookOpen className="w-5 h-5 mr-1" />
              Blog
            </a>
            <a href="#" className="nav-link">
              DOMO
            </a>
            <a href="#" className="nav-link">
              KAKI KAKI
            </a>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="whatsapp-button flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Entrar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
              <a href="#" className="nav-link-mobile flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Location
              </a>
              <a href="#" className="nav-link-mobile flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Blog
              </a>
              <a href="#" className="nav-link-mobile">
                DOMO
              </a>
              <a href="#" className="nav-link-mobile">
                KAKI KAKI
              </a>
              <a
                href="#"
                className="whatsapp-button-mobile flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors mt-4"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi Whatsapp
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: #4a5568;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #2d3748;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3b82f6;
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

        .whatsapp-button {
          box-shadow: 0 4px 6px rgba(5, 150, 105, 0.3);
        }

        .whatsapp-button:hover {
          box-shadow: 0 6px 8px rgba(5, 150, 105, 0.4);
          transform: translateY(-1px);
        }

        .whatsapp-button-mobile {
          box-shadow: 0 4px 6px rgba(5, 150, 105, 0.3);
        }
      `}</style>
    </header>
  );
};

export default Header;