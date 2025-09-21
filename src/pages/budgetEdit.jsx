import { useEffect, useState } from "react";

//Icons
import {Plus, Edit, Trash2, Save, X, Clock, 
  DollarSign, Settings, Wrench, Calendar, CheckCircle, AlertCircle
} from "lucide-react";

//Components
import Header from "../components/header";
import Footer from "../components/footer";

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

  // Cancelar edição
  function handleCancelEdit() {
    setEditId(null);
    setFormData({ service: "", maxBudget: "", timeService: "" });
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Gerenciar Orçamentos
              </h1>
              <p className="text-gray-600 mt-2">
                Crie, edite e gerencie os orçamentos da AutoFix
              </p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <Settings className="w-6 h-6 text-[#c61010] mr-2" />
              <span className="text-sm text-gray-500">
                Painel Administrativo
              </span>
            </div>
          </div>

          {/* Mensagem de status */}
          {message && (
            <div
              className={`p-4 rounded-lg mb-6 flex items-center ${
                message.includes("sucesso") || message.includes("criado")
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              {message.includes("sucesso") || message.includes("criado") ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
              )}
              {message}
            </div>
          )}

          {/* Formulário para criar/editar orçamento */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              {editId ? (
                <>
                  <Edit className="w-5 h-5 mr-2 text-[#c61010]" />
                  Editar Orçamento
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2 text-[#c61010]" />
                  Novo Orçamento
                </>
              )}
            </h2>

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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Serviço
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Wrench className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                    placeholder="Nome do serviço"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Valor máximo (R$)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    name="maxBudget"
                    value={formData.maxBudget}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                    placeholder="0,00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prazo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    name="timeService"
                    value={formData.timeService}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c61010] focus:border-transparent"
                    placeholder="Ex: 3 dias"
                    required
                  />
                </div>
              </div>

              <div className="flex items-end">
                {editId ? (
                  <div className="flex space-x-2 w-full">
                    <button
                      type="submit"
                      className="flex-1 bg-[#c61010] text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                    >
                      <Save className="w-4 h-4 mr-1" />
                      Atualizar
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-[#c61010] text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Criar Orçamento
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Lista de orçamentos */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Orçamentos Cadastrados
              </h2>
              <span className="bg-[#c61010] text-white text-sm font-medium px-3 py-1 rounded-full">
                {budgets.length} {budgets.length === 1 ? "item" : "itens"}
              </span>
            </div>

            {budgets.length === 0 ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  Nenhum orçamento encontrado
                </h3>
                <p className="text-gray-500">
                  Comece criando seu primeiro orçamento usando o formulário
                  acima.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {budgets.map((budget) => (
                  <div
                    key={budget.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {budget.service}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Ativo
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center">
                          <DollarSign className="w-5 h-5 text-[#c61010] mr-2" />
                          <div>
                            <p className="text-xs text-gray-500">
                              Valor máximo
                            </p>
                            <p className="font-medium text-gray-900">
                              R$ {budget.maxBudget}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-[#c61010] mr-2" />
                          <div>
                            <p className="text-xs text-gray-500">
                              Prazo de entrega
                            </p>
                            <p className="font-medium text-gray-900">
                              {budget.timeService}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditClick(budget)}
                          className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
                        >
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </button>
                        <button
                          onClick={() => handleDeleteBudget(budget.id)}
                          className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors flex items-center justify-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          Excluir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}