# 🍷 Atividade Vinhos

API REST para gerenciamento de uma adega pessoal, com operações completas de CRUD. Desenvolvida com Node.js, Express, Sequelize e MySQL.

---

## 🛠️ Tecnologias

**Backend**
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/) — framework HTTP
- [Sequelize](https://sequelize.org/) — ORM para MySQL
- [MySQL2](https://www.npmjs.com/package/mysql2) — driver do banco de dados
- [dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente
- [cors](https://www.npmjs.com/package/cors) — controle de origens
- [nodemon](https://nodemon.io/) — hot reload em desenvolvimento

**Frontend** *(pasta `app-vinho`)*
- [Axios](https://axios-http.com/) — cliente HTTP configurado para `http://localhost:3000`

---

## 📁 Estrutura do projeto

```
atividade-vinhos-main/
├── backend/
│   ├── src/
│   │   ├── server.js               # Inicialização do servidor
│   │   ├── api.js                  # Configuração do Axios (frontend)
│   │   ├── config/
│   │   │   └── database.js         # Conexão com o MySQL via Sequelize
│   │   ├── models/
│   │   │   └── Vinho.js            # Model Sequelize da entidade Vinho
│   │   ├── controllers/
│   │   │   └── vinhoController.js  # Lógica das operações CRUD
│   │   └── routes/
│   │       └── vinhoRoutes.js      # Definição das rotas da API
│   ├── package.json
│   └── .gitignore
└── app-vinho/                      # Frontend (a configurar)
```

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js 18+
- MySQL rodando localmente (ou em nuvem)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/atividade-vinhos.git
cd atividade-vinhos/backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na pasta `backend/` com o seguinte conteúdo:

```env
PORT=3000
MYSQL_URI=mysql://usuario:senha@localhost:3306/nome_do_banco
```

### 4. Inicie o servidor

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Produção
npm start
```

O servidor sobe na porta `3000` por padrão. As tabelas são criadas/atualizadas automaticamente via `sequelize.sync({ alter: true })`.

---

## 📋 Endpoints da API

Base URL: `http://localhost:3000`

| Método | Rota            | Descrição                  |
|--------|-----------------|----------------------------|
| GET    | `/vinhos`       | Lista todos os vinhos      |
| GET    | `/vinhos/:id`   | Busca um vinho pelo ID     |
| POST   | `/vinhos`       | Cadastra um novo vinho     |
| PUT    | `/vinhos/:id`   | Atualiza um vinho existente|
| DELETE | `/vinhos/:id`   | Remove um vinho            |

### Corpo das requisições (POST / PUT)

```json
{
  "nome": "Reserva Cabernet Sauvignon",
  "descricao": "Vinho tinto encorpado com notas de frutas vermelhas",
  "nota": 8.5,
  "foto": "https://exemplo.com/imagem.jpg"
}
```

### Campos do modelo `Vinho`

| Campo      | Tipo    | Obrigatório | Validação         |
|------------|---------|-------------|-------------------|
| `nome`     | String  | ✅           | Não pode ser vazio |
| `descricao`| Text    | ✅           | Não pode ser vazio |
| `nota`     | Float   | ✅           | Entre 0 e 10      |
| `foto`     | String  | ❌           | URL da imagem     |

---

## 🔗 Integração com o Frontend

O arquivo `src/api.js` exporta uma instância do Axios pré-configurada para consumir o backend:

```js
import api from './api';

// Exemplo: listar vinhos
const { data } = await api.get('/vinhos');
```

Certifique-se de que a `baseURL` em `api.js` aponta para a porta correta do backend.
