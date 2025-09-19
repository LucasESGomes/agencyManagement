const maskPhone = (value) => {
    return value
        .replace(/\D/g, '') // Remove tudo o que não é dígito
        .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses em volta dos dois primeiros dígitos
        .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen entre o quarto e o quinto dígito
        .replace(/(-\d{4})\d+?$/, '$1'); // Limita o número de dígitos após o hífen a 4
};

export default maskPhone;