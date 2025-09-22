import { useState, useEffect } from "react";

//Components
import NormalHeader from "./normalHeader"
import LoggedHeader from "./loggedHeader";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar se o usuário está logado (verificar se existe um token no sessionStorage)
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return isLoggedIn ? <LoggedHeader /> : <NormalHeader />;
};

export default Header;