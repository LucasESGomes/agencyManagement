//Icones
import {
  Award, Users ,Clock, ThumbsUp, CheckCircle, TrendingUp, Shield, Zap,
  Wrench, Car, MapPin, Phone, Mail, Calendar, Star
} from "lucide-react";

//Components
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

const AboutSection = () => {
  const stats = [
    {
      number: "15+",
      label: "Anos de Experiência",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "5000+",
      label: "Clientes Satisfeitos",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Suporte ao Cliente",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Taxa de Satisfação",
      icon: <ThumbsUp className="w-6 h-6" />,
    },
  ];

  const features = [
    "Equipe certificada e treinada",
    "Peças originais e de qualidade",
    "Garantia estendida em todos os serviços",
    "Orçamento gratuito e sem compromisso",
    "Ambiente climatizado para espera",
    "Sistema de agendamento online",
  ];

  const services = [
    {
      title: "Mecânica Geral",
      description: "Reparos e manutenção completa do motor e componentes",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Elétrica Automotiva",
      description: "Sistema elétrico, bateria, alternador e partida",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Suspensão e Direção",
      description: "Amortecedores, molas, terminais e homocinéticas",
      icon: <Car className="w-8 h-8" />,
    },
    {
      title: "Revisão Preventiva",
      description: "Manutenção programada para evitar problemas",
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  const team = [
    {
      name: "Carlos Silva",
      role: "Mecânico Chefe",
      experience: "12 anos de experiência",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ana Santos",
      role: "Especialista em Elétrica",
      experience: "8 anos de experiência",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Ricardo Oliveira",
      role: "Especialista em Suspensão",
      experience: "10 anos de experiência",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Mariana Costa",
      role: "Atendimento ao Cliente",
      experience: "5 anos de experiência",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
              alt="Oficina AutoFix"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a AutoFix
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sua oficina de confiança há mais de 15 anos, oferecendo serviços
              automotivos de qualidade com transparência e excelência.
            </p>
          </div>
        </section>

        {/* História da Empresa */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Nossa <span className="text-[#c61010]">História</span>
                </h2>
                <div className="w-24 h-1 bg-[#c61010] mb-6"></div>
                <p className="text-lg text-gray-600 mb-4">
                  A AutoFix nasceu em 2008 com a missão de revolucionar o
                  mercado de serviços automotivos, trazendo transparência,
                  confiança e qualidade para um setor que muitas vezes é marcado
                  pela desconfiança dos consumidores.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Começamos como uma pequena oficina de bairro e, graças à
                  confiança de nossos clientes, crescemos para nos tornarmos uma
                  referência em serviços automotivos na região, com equipamentos
                  de última geração e uma equipe altamente qualificada.
                </p>
                <p className="text-lg text-gray-600">
                  Nosso compromisso é sempre oferecer o melhor serviço, com
                  honestidade e preços justos, mantendo-nos atualizados com as
                  últimas tecnologias e tendências do setor automotivo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/src/assets/img/autoFixOut.png"
                  alt="Oficina AutoFix"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Por que escolher a AutoFix */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Coluna de Conteúdo */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Por que escolher a{" "}
                  <span className="text-[#c61010]">AutoFix</span>?
                </h2>
                <div className="w-24 h-1 bg-[#c61010] mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Com mais de 15 anos de experiência no mercado automotivo,
                  somos referência em qualidade e confiança. Nossa missão é
                  oferecer o melhor serviço com transparência e excelência.
                </p>

                <p className="text-lg text-gray-600 mb-6">
                  Na AutoFix, combinamos tecnologia de ponta com know-how
                  tradicional para garantir que seu veículo receba o melhor
                  cuidado possível. Nossos técnicos são constantemente treinados
                  nas últimas técnicas e tecnologias automotivas.
                </p>

                {/* Lista de Recursos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#c61010] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-[#c61010] text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-200 hover:scale-105 shadow-lg">
                    Conhecer a Oficina
                  </button>
                  <button className="px-6 py-3 bg-white text-[#c61010] border-2 border-[#c61010] font-semibold rounded-lg hover:bg-[#c61010] hover:text-white transition-all duration-200 hover:scale-105">
                    Falar com Especialista
                  </button>
                </div>
              </div>

              {/* Coluna de Imagem e Stats */}
              <div className="relative">
                {/* Imagem Principal */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="src/assets/img/autoFixIn.png"
                    alt="Nossa oficina"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Badge de Qualidade */}
                  <div className="absolute top-4 right-4 bg-[#c61010] text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Certificado ISO 9001</span>
                  </div>
                </div>

                {/* Cards flutuantes com estatísticas */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#c61010] p-2 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">15+</p>
                      <p className="text-sm text-gray-600">Anos no mercado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 group-hover:bg-[#c61010] transition-colors duration-300 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-[#c61010] group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossos Serviços */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nossos <span className="text-[#c61010]">Serviços</span>
              </h2>
              <div className="w-24 h-1 bg-[#c61010] mx-auto mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Oferecemos uma gama completa de serviços automotivos para manter
                seu veículo funcionando perfeitamente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="bg-[#c61010] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nossa <span className="text-[#c61010]">Equipe</span>
              </h2>
              <div className="w-24 h-1 bg-[#c61010] mx-auto mt-4 mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça os profissionais dedicados que tornam a AutoFix uma
                referência em serviços automotivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md text-center transition-all duration-300 hover:shadow-xl"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#c61010] font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.experience}</p>
                    <div className="flex justify-center mt-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Entre em <span className="text-[#c61010]">Contato</span>
                </h2>
                <div className="w-24 h-1 bg-[#c61010] mb-6"></div>
                <p className="text-lg text-gray-600 mb-6">
                  Estamos sempre à disposição para atender suas necessidades.
                  Venha nos visitar ou entre em contato pelos canais abaixo.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#c61010] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Endereço</h3>
                      <p className="text-gray-600">
                        Rua das Oficinas, 123 - Centro, São Paulo - SP
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#c61010] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Telefone</h3>
                      <p className="text-gray-600">(11) 3456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#c61010] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">E-mail</h3>
                      <p className="text-gray-600">contato@autofix.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#c61010] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Horário de Funcionamento
                      </h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h
                      </p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Envie uma Mensagem
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                        placeholder="Seu e-mail"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                        placeholder="Sua mensagem"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#c61010] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AboutSection;
