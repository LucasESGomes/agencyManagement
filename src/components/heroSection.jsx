import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Wrench,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Imagens do carrossel - substitua pelos URLs reais das suas imagens
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&h=800&fit=crop",
      title: "Manutenção Completa",
      subtitle: "Cuidamos do seu veículo com excelência",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=800&fit=crop",
      title: "Equipe Especializada",
      subtitle: "Profissionais qualificados e experientes",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=800&fit=crop",
      title: "Tecnologia Avançada",
      subtitle: "Equipamentos de última geração",
    },
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative  -mt-16 pt-16">
      {/* Carrossel */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

              {/* Conteúdo do Slide */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-3 bg-[#c61010] text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105 shadow-lg">
                        Agendar Serviço
                      </button>
                      <button className="px-8 py-3 bg-white text-[#c61010] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
                        Conhecer Serviços
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controles do Carrossel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#c61010] w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cards de Destaques */}
      <div className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#c61010] p-3 rounded-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Serviço Completo
                  </h3>
                  <p className="text-gray-600">
                    Manutenção preventiva e corretiva
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#c61010] p-3 rounded-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Atendimento Rápido
                  </h3>
                  <p className="text-gray-600">
                    Agilidade e eficiência garantidas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="bg-[#c61010] p-3 rounded-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Garantia Total
                  </h3>
                  <p className="text-gray-600">
                    Serviços com garantia estendida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;