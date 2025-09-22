# Use a imagem oficial do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de configuração de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instale o json-server globalmente
RUN npm install -g json-server

# Copie o restante do código da aplicação
COPY . .

# Exponha as portas necessárias
EXPOSE 3000 5000

# Comando para iniciar a aplicação e o json-server
CMD ["sh", "-c", "json-server --watch server/users.json --port 5000 & npm start"]
