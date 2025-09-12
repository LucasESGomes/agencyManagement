import { useState } from "react";
import bcrypt from "bcryptjs";

export default function Register() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
      role: "user" 
    };

    // Envia para o json-server (rota POST /users)
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)
    });

    localStorage.setItem("userData", JSON.stringify({ username, surname, email, telephone}));

    if (response.ok) {
      setMessage("Usuário registrado com sucesso!");
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
    <div>
      <h1>Registro</h1>

      <input
        type="text" placeholder="Insira o seu primeiro nome" value={username} onChange={(e) => setUsername(e.target.value)}
        className=""
      />

      <input
        type="text" placeholder="Insira o seu sobrenome" value={username} onChange={(e) => setUsername(e.target.value)}
        className=""
      />  

      <input
        type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}
        className=""
      />

      <input
        type="text" placeholder="Telefone" value={telephone} onChange={(e) => setTelephone(e.target.value)}
      />

      <input
        type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Registrar</button>
      {message && <p>{message}</p>}
    </div>
  );
}