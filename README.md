# Users API

API REST para gerenciamento de usuários, desenvolvida com Node.js, TypeScript e Express, utilizando PostgreSQL para persistência de dados e Sequelize como ORM.

O projeto foi desenvolvido para praticar conceitos de desenvolvimento backend, operações CRUD, validação de dados, migrations e conteinerização com Docker.

## 🚀 Funcionalidades

- Cadastro, listagem, atualização e exclusão de usuários (CRUD).
- Validação de dados com Zod.
- Persistência de dados no PostgreSQL.
- Identificação de usuários por UUID.
- Restrição de e-mail único no banco de dados.
- Gerenciamento da estrutura do banco com Sequelize Migrations.
- Ambiente conteinerizado com Docker e Docker Compose.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| Node.js 22 | Ambiente de execução |
| TypeScript 7 | Tipagem estática |
| Express 5 | Construção da API REST |
| PostgreSQL 17 | Banco de dados relacional |
| Sequelize 6 | Mapeamento objeto-relacional (ORM) |
| Sequelize CLI | Gerenciamento de migrations |
| Zod 4 | Validação de dados |
| Docker | Conteinerização |
| Docker Compose | Orquestração dos serviços |
| tsx | Execução em desenvolvimento |

## ⚙️ Executando com Docker

**Pré-requisito:** Docker Desktop instalado e em execução.

Clone o repositório:

```bash
git clone https://github.com/Mateus-DB/users-api
cd users-api
```

Inicie a aplicação:

```bash
docker compose up --build
```

O Docker Compose gerencia três serviços:

- **API:** aplicação Node.js.
- **Migrate:** execução das migrations do banco.
- **DB:** banco de dados PostgreSQL.

A API estará disponível em:

```text
http://localhost:3000
```

**Comandos úteis:**

```bash
# Visualizar logs
docker compose logs -f

# Parar os serviços
docker compose down

# Parar os serviços e remover os dados do volume
docker compose down -v
```

## 🔗 Endpoints

Todos os endpoints utilizam o prefixo `/usuarios`.

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/usuarios/cadastro` | Cadastrar usuário |
| GET | `/usuarios/todos` | Listar usuários |
| PUT | `/usuarios/atualizar/:id` | Atualizar usuário |
| DELETE | `/usuarios/deletar/:id` | Excluir usuário |

**Exemplo de cadastro:**

`POST /usuarios/cadastro`

```json
{
  "name": "João Silva",
  "age": 25,
  "email": "joao@email.com"
}
```

**Exemplo de teste com cURL:**

```bash
curl -X POST http://localhost:3000/usuarios/cadastro \
-H "Content-Type: application/json" \
-d '{"name":"João Silva","age":25,"email":"joao@email.com"}'
```

## 🗄️ Validação e banco de dados

A aplicação utiliza Zod para validar os dados recebidos no cadastro.

| Campo | Regra |
|---|---|
| `id` | UUID gerado automaticamente |
| `name` | Obrigatório, mínimo de 3 caracteres |
| `age` | Número inteiro, mínimo de 1 |
| `email` | E-mail válido e único |

O Sequelize gerencia a comunicação com o PostgreSQL, enquanto as migrations do Sequelize CLI controlam a criação e evolução da estrutura da tabela `users`.

O modelo também utiliza timestamps automáticos (`created_at` e `updated_at`).

## 📁 Estrutura do projeto

```text
├── src/
│   ├── config/
│   │   ├── database.ts
│   │   └── database-cli.cjs
│   ├── controller/
│   │   └── userController.ts
│   ├── database/
│   │   └── migrations/
│   ├── models/
│   │   └── User.ts
│   ├── types/
│   │   └── userSchema.ts
│   ├── routes.ts
│   └── server.ts
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

## 💻 Execução local

Para executar a aplicação sem Docker, é necessário ter Node.js e PostgreSQL instalados e o banco de dados configurado.

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=usersdb
```

Execute as migrations:

```bash
npx sequelize-cli db:migrate
```

Inicie a aplicação em desenvolvimento:

```bash
npm run dev
```

Outros comandos:

```bash
# Compilar TypeScript
npm run build

# Executar versão compilada
npm start
```

## ⚠️ Tratamento de erros

A API utiliza códigos HTTP para indicar os resultados das operações:

| Código | Descrição |
|---|---|
| `200` | Operação executada com sucesso |
| `201` | Usuário cadastrado |
| `400` | Dados inválidos |
| `500` | Erro interno do servidor |

## 🔐 Configuração de segurança

As credenciais presentes no ambiente Docker são destinadas exclusivamente ao desenvolvimento. Para utilização em produção, devem ser substituídas por credenciais seguras e variáveis de ambiente adequadamente configuradas.

## 👨‍💻 Autor

**Mateus Demartino**

- [LinkedIn](https://www.linkedin.com/in/mateus-demartino)
- [GitHub](https://www.github.com/MateusDB)
