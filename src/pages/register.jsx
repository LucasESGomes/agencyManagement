import { useState } from 'react';
import bcrypt from 'bcryptjs';

export default function Register () {

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
        await fetch("http://localhost:5000/users", {
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
        <div className='p-4 bg-white shadow rounded space-y-3'>
            
            <input type="text" placeholder='Insira o nome' value={username} onChange={(e) => setUsername(e.target.value)} 
            className='border p-2 w-full rounded-md'/>

            <input type="text" placeholder='Insira o Email' value={email} onChange={(e) => setEmail(e.target.value)} 
            className=''/>

            <input type="number" placeholder='Insira o telefone' value={phone} onChange={(e) => setPhone(e.target.value)}
            className=''/>

            <input type="password" placeholder='Insira a sua senha' value={password} onChange={(e) => setPassword(e.target.value)} 
            className=''/>

            <button onClick={handleRegister}>
                Registrar
            </button>

        {message && <p>{message}</p>}
        </div>
    );
}