import React, { useEffect, useState } from "react";

export default function BudgetEdit() {
  const [budgets, setBudgets] = useState([]);
  const [formData, setFormData] = useState({
    service: "",
    maxBudget: "",
    timeService: "",
  });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");

  // Buscar orçamentos (READ)
  function handleBudgets() {
    fetch("http://localhost:5000/budget")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar orçamentos");
        return res.json();
      })
      .then((data) => setBudgets(data))
      .catch(() => setMessage("Erro ao buscar orçamentos"));
  }

  useEffect(() => {
    handleBudgets(); // Carrega orçamentos ao abrir a página
  }, []);

  // Capturar inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  // Criar orçamento (CREATE)
  function handleCreateBudget(newBudget) {
    fetch("http://localhost:5000/budget", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBudget),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao criar orçamento");
        return res.json();
      })
      .then(() => {
        handleBudgets();
        setMessage("Orçamento criado com sucesso!");
      })
      .catch(() => setMessage("Erro ao criar orçamento"));
  }

  // Editar orçamento (UPDATE)
  function handleUpdateBudget() {
    fetch(`http://localhost:5000/budget/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao atualizar orçamento");
        return res.json();
      })
      .then(() => {
        handleBudgets();
        setEditId(null);
        setFormData({ service: "", maxBudget: "", timeService: "" });
        setMessage("Orçamento atualizado com sucesso!");
      })
      .catch(() => setMessage("Erro ao atualizar orçamento"));
  }

  // Deletar orçamento (DELETE)
  function handleDeleteBudget(id) {
    fetch(`http://localhost:5000/budget/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao deletar orçamento");
        handleBudgets();
        setMessage("Orçamento deletado com sucesso!");
      })
      .catch(() => setMessage("Erro ao deletar orçamento"));
  }

  // Quando clicar em editar
  function handleEditClick(budget) {
    setEditId(budget.id);
    setFormData({
      service: budget.service,
      maxBudget: budget.maxBudget,
      timeService: budget.timeService,
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gerenciar Orçamentos</h1>

      {message && <p>{message}</p>}

      {/* Formulário para criar novo orçamento */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editId) {
            handleUpdateBudget();
          } else {
            handleCreateBudget(formData);
          }
          setFormData({ service: "", maxBudget: "", timeService: "" });
        }}
        className="border p-4 mt-4"
      >
        <h2>{editId ? "Editar Orçamento" : "Novo Orçamento"}</h2>

        <label>
          Serviço:
          <input
            name="service"
            value={formData.service}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Valor máximo:
          <input
            name="maxBudget"
            value={formData.maxBudget}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Prazo:
          <input
            name="timeService"
            value={formData.timeService}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">{editId ? "Atualizar" : "Criar"}</button>
      </form>

      <h2>Lista de Orçamentos</h2>
      <div>
        {budgets.length === 0 ? (
          <p>Nenhum orçamento encontrado.</p>
        ) : (
          budgets.map((budget) => (
            <div
              key={budget.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px 0",
              }}
            >
              <p>
                <strong>Serviço:</strong> {budget.service}
              </p>
              <p>
                <strong>Valor:</strong> {budget.maxBudget}
              </p>
              <p>
                <strong>Prazo:</strong> {budget.timeService}
              </p>
              <button onClick={() => handleEditClick(budget)}>Editar</button>
              <button onClick={() => handleDeleteBudget(budget.id)}>Excluir</button>
              <button onClick={() => handleCreateBudget(budget)}>Criar novo orçamento</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
