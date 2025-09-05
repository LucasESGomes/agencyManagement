import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import bcrypt from 'bcryptjs';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setMessage("Preencha todos os campos");
            return;
        }

        // 1. Busca usuário no json-server
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

        // 2. Requisita o token ao backend (rota /login no server.js)
        const tokenResponse = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await tokenResponse.json();

        if (!tokenResponse.ok) {
            setMessage(data.message || "Erro ao gerar token");
            return;
        }

        const token = data.token;

        // 3. Guarda o token apenas durante a sessão
        sessionStorage.setItem("Token", token);

        // 4. Decodifica o token para pegar o role
        const decoded = jwtDecode(token);

        // 5. Redireciona pelo role
        if (decoded.role === "admin") {
            navigate('/budgetEdit');
        } else {
            navigate('/home');
        }

        setUsername('');
        setPassword('');
    };

    return (
        <div className='p-4 bg-white shadow rounded space-y-3'>
            <h1>Login</h1>

            <input
                type="text"
                placeholder='Digite o nome de usuário'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder='Digite a sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleLogin} className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200'>
                Entrar
            </button>

            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;  