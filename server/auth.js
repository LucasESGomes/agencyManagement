import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const secret = import.meta.env.VITE_SECRETKEY

//Gerando o Token a partir das informações do usuários
export function generateToken(user) {
    return({
        id: user.id, role: user.role}, secret, {expires: "7d"});
}

//Verificando o Token gerado
export function verifyToken(token) {
    try {
        return jwt.verify(token, secret)
        
    } catch (error) {
        console.log(error);
        throw new Error ('Token inválidade ou expirado')
    }
}