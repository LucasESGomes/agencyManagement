import { Zap, Wrench, Car, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Manutenção Preventiva",
      description:
        "Serviços regulares para manter seu veículo em perfeito estado",
      icon: <Wrench className="w-10 h-10" />,
      image:
        "src/assets/img/personalization.jpg",
    },
    {
      title: "Reparos Mecânicos",
      description:
        "Conserto de problemas no motor, transmissão e outros componentes",
      icon: <Car className="w-10 h-10" />,
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Diagnóstico Eletrônico",
      description:
        "Identificação precisa de problemas através de equipamentos modernos",
      icon: <Zap className="w-10 h-10" />,
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-[#c61010] mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos para manter seu
            veículo funcionando perfeitamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      <div className="text-[#c61010] mr-2">{service.icon}</div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-[#c61010] font-semibold flex items-center hover:text-red-700 transition-colors">
                  Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
