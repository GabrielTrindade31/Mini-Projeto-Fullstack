# Mini-Projeto Fullstack - Backend

API REST desenvolvida em Node.js com TypeScript, Express e MongoDB, implementando autenticação baseada em JWT e estrutura em camadas (middlewares, routes, controllers, services, models e database). O projeto contempla validações robustas, hash de senhas com **bcrypt**, logs estruturados e exemplos de requisições via `curl`.

## Sumário

- [Tecnologias](#tecnologias)
- [Arquitetura de pastas](#arquitetura-de-pastas)
- [Configuração](#configuração)
- [Execução local](#execução-local)
- [Scripts de requisição](#scripts-de-requisição)
- [Boas práticas implementadas](#boas-práticas-implementadas)
- [Hospedagem e vídeo](#hospedagem-e-vídeo)

## Tecnologias

- Node.js & TypeScript
- Express
- MongoDB & Mongoose
- JWT (`jsonwebtoken`)
- Hash de senha com `bcryptjs`
- Validações com `zod`
- Logs estruturados com `winston`

## Arquitetura de pastas

```
src/
├── app.ts
├── config/
├── controllers/
├── database/
├── errors/
├── middlewares/
├── models/
├── routes/
├── services/
└── utils/
requests/
```

Cada camada possui responsabilidade única e isolada, facilitando a manutenção e evolução.

## Configuração

1. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente:

   ```bash
   cp .env.example .env
   ```

2. Configure os valores necessários:

   ```env
   PORT=3333
   NODE_ENV=development
   MONGO_URI=mongodb://localhost:27017/mini_projeto_fullstack
   MONGO_URI_PROD= # URI do cluster Atlas ou equivalente
   JWT_SECRET= # chave secreta segura
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Execução local

```bash
npm run dev
```

O servidor sobe na porta definida em `PORT` (padrão `3333`). As rotas disponíveis são:

- `POST /register`
- `POST /login`
- `GET /protected` (necessita header `Authorization: Bearer <token>`)

## Scripts de requisição

A pasta [`requests/`](requests/) contém arquivos `.sh` com exemplos de requisições utilizando `curl`. Execute-os conforme necessário:

```bash
bash requests/register_success.sh
bash requests/login_success.sh
# ...
```

Os scripts aceitam variáveis de ambiente (`BASE_URL`, `EMAIL`, `PASSWORD`, `TOKEN`, etc.) para reutilização em ambientes locais ou hospedados.

## Boas práticas implementadas

- Estrutura em camadas seguindo o padrão solicitado.
- Conexão com MongoDB configurável para ambientes local e produção.
- Validações semânticas para cadastro e login (tamanho mínimo, formato de e-mail, política de senhas forte).
- Hash de senha com `bcrypt` e campo `password` não selecionável.
- Tratamento centralizado de erros e respostas com status HTTP adequados.
- Logs de requisições e de eventos importantes (sucesso/erro) utilizando Winston.
- Scripts de exemplo para todos os cenários exigidos.

## Hospedagem e vídeo

- **Link da aplicação hospedada:** <!-- Adicione aqui o link após publicar -->
- **Vídeo demonstrativo:** <!-- Adicione aqui o link do vídeo (até 2 minutos) -->

Atualize esta seção após realizar o deploy (ex.: Vercel, Render) e gravar o vídeo demostrando as funcionalidades exigidas.
