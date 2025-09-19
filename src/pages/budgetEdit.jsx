import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BudgetEdit() {
    const [ message, setMessage ] = useState("")
    const [ budgets, setBudgets ] = useState([])
    const navigate = useNavigate();

  //Verificando se a pessoa está logada e o "role" do usuário
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    let decoded;
    try {
      decoded = JSON.parse(atob(token));
    } catch (e) {
      navigate("/login");
      return;
    }
    if (decoded.role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  //Fazendo a conexão com o banco
  useEffect(() => {
    fetch("http://localhost:5000/budget").then(res => {
      if(!res.ok) throw new Error("Erro ao buscar os orçamentos")
        return res.json();
    })
    .then(data => setBudgets(data))
    .catch(() => setMessage("Erro ao carregar dados"))
  }, [])

  return (
    <>
      {/* Exibindo os orçamentos cadastrados */}
      <h1>Página de Admin - Somente admins podem ver isso</h1>
      {message && <p>{message}</p>}

      <div className="mt-4">
        {budgets.map(budget => (

          <div key={budget.id} className="border p-4 mb-2">

            <h2>{budget.cliente}</h2>
            <p>Valor: {budget.valor}</p>
            <p>Status: {budget.status}</p>
            
          </div>
        ))}
      </div>
    </>

    
  );
}