import jsonServer from "json-server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router("backend/db.json");
const middlewares = jsonServer.defaults();

// Chave secreta em .env
const SECRET = import.meta.env.VITE_SECRETKEY

server.use(middlewares);
server.use(jsonServer.bodyParser);


// Rota de resgistro de usuário
server.post("/register", async (req, res) => {
  const { username, password, role = "user" } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { id: Date.now(), username, password: hashedPassword, role };
  router.db.get("users").push(user).write();

  res.status(201).json({ message: "Usuário criado com sucesso" });
});


// Rota para tela de login
server.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username }).value();

  if (!user) return res.status(400).json({ message: "Usuário não encontrado" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Senha inválida" });

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});


// Proteção de rotas admin
server.use((req, res, next) => {
  if (req.path.startsWith("/admin")) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "Token não fornecido" });

    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, SECRET);
      if (decoded.role !== "admin") {
        return res.status(403).json({ message: "Acesso negado" });
      }
      next();
    } catch {
      return res.status(401).json({ message: "Token inválido" });
    }
  } else {
    next();
  }
});

server.use(router);