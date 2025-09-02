* 🚀 Rocketlog - 
- Projeto de aprendizado da plataforma Rocketseat.

- Aplicação de registro de logs com autenticação JWT .
-------------------------------
* 📦 Tecnologias
- Node.js
- Express
- JWT (JSON Web Token)
- Docker / Docker Compose
- Supertest (testes de integração)
- .env - para variáveis de ambiente
-------------------------------
* ⚙️ Instalação
git clone https://github.com/EduJMarinho/rocketlog.git
cd rocketlog
npm install

-------------------------------
* 🛠️ Configuração
- Crie um arquivo .env com base no .env.example:
PORT=3333

JWT_SECRET=sua_chave_secreta

-------------------------------
rocketlog/
├── src/

│   ├── controllers/

│   ├── routes/

│   ├── middlewares/

│   ├── services/

│   └── app.js

├── tests/

├── .env.example

├── docker-compose.yml

├── Dockerfile

├── package.json

└── README.md


-------------------------------
* ▶️ Executando
npm start


- Ou com Docker:
docker-compose up
-------------------------------

* 🔐 Autenticação
As rotas protegidas exigem o header:
Authorization: Bearer <seu_token>


------------------------------------

* 📄 Licença

- Este projeto está sob a licença MIT.

------------------------------------
**
🧠 Analisar 📚 Aprender ❌ Errar  
   🔁 Refatorar  🛠️ Construir  
          
→ Esse é o caminho do Dev. — Edu Marinho



