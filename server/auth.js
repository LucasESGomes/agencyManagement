import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcryptjs/dist/bcrypt";

dotenv.config();

const secret = import.meta.env.VITE_SECRETKEY

//Gerando o Token a partir das informações do usuários
export function generateToken(user) {
    return jwt.sign({
        id: user.id, role: user.role}, secret, {expires: "7d"});
}

export async function checkPassword(password, hash) {
    return bcrypt.compare(password, hash);
}