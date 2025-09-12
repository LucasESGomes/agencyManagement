// Página do usuário para preencher o formulário de orçamento
import { useState, useEffect } from "react";


export default function FormBudget() {
    const [ message, setMessage ] = useState("");
    const [ service, setService ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ maxBudget, setMaxBudget ] = useState("");
    const [ timeService, setTimeService ] = useState("");
    const [userData, setUserData] = useState({})


    //Buscando dados do usuário
    useEffect(() => {
        const data = localStorage.getItem("userData");
        if (data) {
            setUserData(JSON.parse(data));
        };
    }, []) // Executando apenas uma vez
    

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
            timeService
        };

        try {
            const response = await fetch("http://localhost:5000/budget", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBuget)
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
            <h1>Formulário de Orçamento</h1>

            <form onSubmit={(e) => { e.preventDefault(); handleBudget(); }}>
                
                {/* Campos já preenchidos anteriormente */}
                <input value={userData.name} readOnly className="" />
                <input value={userData.surname} readOnly className="" />
                <input value={userData.email} readOnly className="" />
                <input value={userData.telephone} readOnly className="" />

                {/* Campos à serem preenchidos */}
                <input type="text" value={service} onChange={e => setService(e.target.value)} placeholder="Digite ou serviço" />
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descreva o serviço" />
                <input type="number" value={maxBudget} onChange={e => setMaxBudget(e.target.value)} placeholder="Orçamento máximo" />
                <input type="text" value={timeService} onChange={e => setTimeService(e.target.value)} placeholder="Prazo para realização do serviço" />

                <button type="submit">Enviar Orçamento</button>
                {message && <p>{message}</p>}
            </form>
        </>
    );
}