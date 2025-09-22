import { useState, useEffect } from "react";

//Icons
import {
  User,
  Mail,
  Phone,
  Wrench,
  FileText,
  DollarSign,
  Clock,
  Send,
  ClipboardCheck,
  Car,
} from "lucide-react";

//Components
import Header from "../components/header";
import Footer from "../components/footer";

export default function FormBudget() {
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [timeService, setTimeService] = useState("");
  const [userData, setUserData] = useState({});

  // Buscando dados do usuário
  useEffect(() => {
    const data = sessionStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  // Garantir o preenchimento de todos os campos e enviar orçamento
  const handleBudget = async () => {
    if (!service || !description || !maxBudget || !timeService) {
      setMessage("Preencha todos os campos!");
      return;
    }

    const newBuget = {
      ...userData,
      service,
      description,
      maxBudget,
      timeService,
    };

    try {
      const response = await fetch("http://localhost:5000/budget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBuget),
      });

      if (response.ok) {
        setMessage("Orçamento enviado com sucesso!");
        setService("");
        setDescription("");
        setMaxBudget("");
        setTimeService("");
      } else {
        setMessage("Erro ao enviar o orçamento");
      }
    } catch (error) {
      setMessage("Erro ao enviar o orçamento", error);
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-[#c61010] p-3 rounded-full">
                <ClipboardCheck className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Solicitar Orçamento
            </h1>
            <p className="text-gray-600">
              Preencha os dados abaixo para solicitar um orçamento personalizado
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-900 to-black text-white">
              <h2 className="text-xl font-semibold flex items-center">
                <Car className="w-5 h-5 mr-2" />
                Dados Pessoais
              </h2>
              <p className="text-gray-300 text-sm mt-1">
                Informações do seu cadastro
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBudget();
              }}
              className="p-6 space-y-6"
            >
              {/* Campos já preenchidos anteriormente */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      value={userData.username || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sobrenome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      value={userData.surname || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      value={userData.email || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      value={userData.telephone || ""}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    <Wrench className="w-5 h-5 mr-2 text-[#c61010]" />
                    Detalhes do Serviço
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Informe os detalhes do serviço desejado
                  </p>
                </div>

                {/* Campos à serem preenchidos */}
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Serviço
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Wrench className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        placeholder="Ex: Troca de óleo, revisão geral, reparo no motor..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição Detalhada
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Descreva com detalhes o problema ou serviço necessário..."
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Orçamento Máximo (R$)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="number"
                          value={maxBudget}
                          onChange={(e) => setMaxBudget(e.target.value)}
                          placeholder="Valor máximo que pretende investir"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prazo Desejado
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          value={timeService}
                          onChange={(e) => setTimeService(e.target.value)}
                          placeholder="Ex: 3 dias, 1 semana, urgente..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de enviar e mensagem */}
              <div className="pt-6 border-t border-gray-100">
                <button
                  type="submit"
                  className="w-full bg-[#c61010] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitação de Orçamento
                </button>

                {message && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      message.includes("sucesso")
                        ? "bg-green-100 border border-green-200 text-green-700"
                        : "bg-red-100 border border-red-200 text-red-700"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Informações adicionais */}
          <div className="mt-8 bg-gray-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Como funciona?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-[#c61010] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-medium text-gray-900">
                  Preencha o formulário
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Informe os detalhes do serviço desejado
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#c61010] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-medium text-gray-900">Análise da equipe</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Nossos especialistas avaliarão sua solicitação
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#c61010] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-medium text-gray-900">Retorno rápido</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Entraremos em contato em até 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
