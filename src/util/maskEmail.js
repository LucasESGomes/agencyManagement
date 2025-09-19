const maskEmail = (value) => {
    return value
      .replace(/\s/g, '')              // Remove espaços
      .replace(/[^\w@.-]/g, '')        // Mantém apenas letras, números, @, ponto e hífen
      .replace(/(.+)@.*@+/, '$1@')     // Garante que só exista um "@"
      .replace(/(\..*)\./g, '$1');     // Evita dois pontos seguidos no domínio
  };
  
  export default maskEmail;