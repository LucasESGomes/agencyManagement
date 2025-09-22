import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

//Icons
import { Car } from "lucide-react";
import { LogIn } from "lucide-react";
import { Wrench } from "lucide-react";
import { Shield } from "lucide-react";

//Components
import Header from "../components/header";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setMessage("Preencha todos os campos");
      return;
    }

    // Busca usuário no json-server
    const response = await fetch(
      `http://localhost:5000/users?username=${username}`
    );
    const users = await response.json();

    if (!users || users.length === 0) {
      setMessage("Usuário não encontrado");
      return;
    }

    const findUser = users[0];
    const isMatch = await bcrypt.compare(password, findUser.password);

    if (!isMatch) {
      setMessage("Login ou senha incorreto(s)");
      return;
    }

    // 🔑 Gerando um "token fake" só para guardar no sessionStorage
    // Isso simula o payload de um JWT
    const payload = {
      id: findUser.id,
      role: findUser.role,
      username: findUser.username,
    };
    const token = btoa(JSON.stringify(payload)); // transforma em base64 string

    // Guarda na sessão
    sessionStorage.setItem("token", token);

    // Decodifica (simulação do jwtDecode, mas usando atob)
    const decoded = JSON.parse(atob(token));

    if (decoded.role === "admin") {
      navigate("/editarOrcamento");
    } else {
      navigate("/");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Lado esquerdo - Imagem e informações */}
          <div className="md:w-2/5 bg-gradient-to-br from-[#c61010] to-red-800 p-8 text-white flex flex-col justify-center items-center text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white p-3 rounded-full">
                  <Car className="w-10 h-10 text-[#c61010]" />
                </div>
                <h1 className="text-2xl font-bold ml-3">AutoFix</h1>
              </div>
              <p className="text-xl font-semibold mb-4">
                Sistema de Gerenciamento
              </p>
              <p className="text-sm opacity-90">
                Acesse sua conta para gerenciar orçamentos, clientes e serviços
                da oficina.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                <Wrench className="w-6 h-6 mb-2" />
                <span className="text-xs">Serviços</span>
              </div>
              <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
                <Shield className="w-6 h-6 mb-2" />
                <span className="text-xs">Segurança</span>
              </div>
            </div>

            <div className="mt-8 w-full max-w-xs">
              <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-white w-3/4"></div>
              </div>
              <p className="text-xs mt-2">Sistema protegido e criptografado</p>
            </div>
          </div>

          {/* Lado direito - Formulário de login */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Acessar Sistema
              </h2>
              <p className="text-gray-600">
                Digite suas credenciais para entrar
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome de usuário
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Digite o nome de usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Digite a sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent transition-colors"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-[#c61010] focus:ring-[#c61010] border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-600">Lembrar-me</span>
                </label>

                <a
                  href="#"
                  className="text-[#c61010] hover:text-red-700 font-medium"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-[#c61010] text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                Entrar no Sistema
              </button>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Ainda não possui conta?{" "}
                  <a
                    href="/Cadastro"
                    className="text-[#c61010] font-semibold hover:underline"
                  >
                    Cadastre-se
                  </a>
                </p>
              </div>

              {message && (
                <div className="mt-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-center">
                  {message}
                </div>
              )}
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© 2025 AutoFix - Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
