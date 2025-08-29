import { useState } from 'react';
import bcrypt from 'bcryptjs';

function Register () {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        if (!username || !email || !phone || !password) {
            return setMessage("Preencha todos os campos");
        }

        // Gerando a senha criptografada
        const hashedPassword = await bcrypt.hash(password, 10);

        // Enviando os dados para a API
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, phone, password: hashedPassword }),
        });

        setMessage("Usuário cadastrado com sucesso!");
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');  
    };

    return (
        <div>
            {message && <p>{message}</p>}

            <input type="text" placeholder='Insira o nome' value={username} onChange={(e) => setPassword(e.target.value)} 
            className=''/>

            <input type="text" placeholder='Insira o Email' value={email} onChange={(e) => setPassword(e.target.value)} 
            className=''/>

            <input type="" placeholder='Insira o telefone' />

            <button onClick={handleRegister}>
                Registrar
            </button>
        </div>
    );
}

export default Register;