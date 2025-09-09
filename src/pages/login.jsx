import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";

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
    const response = await fetch(`http://localhost:5000/users?username=${username}`);
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
    sessionStorage.setItem("Token", token);

    // Decodifica (simulação do jwtDecode, mas usando atob)
    const decoded = JSON.parse(atob(token));

    if (decoded.role === "admin") {
      navigate("/budgetEdit");
    } else {
      navigate("/home");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="p-4 bg-white shadow rounded space-y-3">
      <h1>Login</h1>

      <input
        type="text" placeholder="Digite o nome de usuário" value={username} onChange={(e) => setUsername(e.target.value)}
        className=""
      />

      <input
        type="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)}
        className=""
      />

      <button
        onClick={handleLogin}
        className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
      >
        Entrar
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}