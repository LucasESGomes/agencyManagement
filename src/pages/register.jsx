import { useState } from "react";
import bcrypt from "bcryptjs";

//Icons
import { User, Mail, Phone, Lock, ArrowRight,
  Car, ShieldCheck, Award, Calendar,} from "lucide-react";

//util
import maskEmail from "../util/maskEmail";
import maskPhone from "../util/maskPhone";

//Components
import Header from "../components/header";

export default function Register() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Exigindo o preenchimento de todos os campos
  const handleRegister = async () => {
    if (!username || !surname || !email || !telephone || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    // Gera o hash da senha
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Cria o objeto de usuário
    const newUser = {
      username,
      surname,
      email,
      telephone,
      password: hashedPassword,
      role: "user",
    };

    // Envia para o json-server (rota POST /users)
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    // Salvando informaçoes do usuário no sessionStorage
    sessionStorage.setItem(
      "userData",
      JSON.stringify({ username, surname, email, telephone })
    );

    if (response.ok) {
      setMessage("Conta criada com sucesso!");
      setUsername("");
      setSurname("");
      setEmail("");
      setTelephone("");
      setPassword("");
    } else {
      setMessage("Erro ao registrar usuário");
    }
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-300 ">
        {/* Conteúdo principal */}
        <div className="flex-grow flex items-center justify-center p-4 md:p-8">
          <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Lado esquerdo - Ilustração e informações */}
            <div className="md:w-2/5 bg-gradient-to-br from-[#c61010] to-red-800 p-8 text-white flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-full">
                    <Car className="w-10 h-10 text-[#c61010]" />
                  </div>
                  <h1 className="text-2xl font-bold ml-3">AutoFix</h1>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Junte-se à nossa comunidade
                </h2>
                <p className="text-sm opacity-90 mb-6">
                  Faça parte da família AutoFix e tenha acesso a serviços
                  exclusivos, descontos especiais e muito mais.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-3" />
                    <span className="text-sm">
                      Dados protegidos e criptografados
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    <span className="text-sm">
                      Benefícios exclusivos para clientes cadastrados
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span className="text-sm">
                      Agendamento rápido de serviços
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-3/4"></div>
                </div>
                <p className="text-xs mt-2">Cadastro rápido e seguro</p>
              </div>
            </div>

            {/* Lado direito - Formulário de registro */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Criar Conta
                </h2>
                <p className="text-gray-600">
                  Preencha seus dados para se registrar
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="username"
                      type="text"
                      placeholder="Insira o seu primeiro nome"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="surname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sobrenome
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="surname"
                      type="text"
                      placeholder="Insira o seu sobrenome"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(maskEmail(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder="Telefone"
                    value={telephone}
                    onChange={(e) => setTelephone(maskPhone(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleRegister}
                className="w-full bg-[#c61010] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                Criar Conta
                <ArrowRight className="w-5 h-5" />
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

              <div className="mt-6 text-center text-sm text-gray-500">
                <p>
                  Ao se registrar, você concorda com nossos{" "}
                  <a href="#" className="text-[#c61010] hover:underline">
                    Termos de Serviço
                  </a>{" "}
                  e{" "}
                  <a href="#" className="text-[#c61010] hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Já tem uma conta?{" "}
                  <a
                    href="/Entrar"
                    className="text-[#c61010] font-semibold hover:underline"
                  >
                    Faça login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}