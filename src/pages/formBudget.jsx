// Página do usuário para preencher o formulário de orçamento
import { useState } from "react";


export default function FormBudget() {
    const [ message, setMessage ] = useState("");
    const [ service, setService ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ maxBudget, setMaxBudget ] = useState("");
    const [ timeService, setTimeService ] = useState("");

    // Garantir o preenchimento de todos os campos
    const handleBudget = async () => {
        if (!service || !description || !maxBudget || !timeService) {
            setMessage("Preencha todos os campos!");
            return;
        }
    };

    // Criando o objeto do orçamento
    const newBuget = {
        service,
        description,
        maxBudget,
        timeService
    }

    // Enviando dados para o json-server
    const response = async () => await fetch("http://localhost:5000/budgets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBuget)
    });

    // Verificando se tudo está ok
    if (response.ok) {
        setMessage( "Orçamento enviado com sucesso!" );
        setService("");
        setDescription("");
        setMaxBudget("");
        setTimeService(""); 
    } else {
        setMessage("Erro ao enviar o orçamento");
    }
    


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); handleBudget(); }}>
                {/* Add your form fields here */}
                <button type="submit">Enviar Orçamento</button>
                {message && <p>{message}</p>}
            </form>
        </>
    );
}

