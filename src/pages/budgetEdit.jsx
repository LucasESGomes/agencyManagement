import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function BudgetEdit() {
    const [message, setMessage] = useState();
    const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = jwtDecode(token);
    if (decoded.role !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  return <h1>Página de Admin - Somente admins podem ver isso</h1>;
}