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

## Execução no GitHub Codespaces

1. Crie o Codespace a partir deste repositório selecionando o template padrão de Node.js.
2. Copie o arquivo `.env.example` para `.env` e informe as variáveis necessárias (recomenda-se utilizar um cluster MongoDB Atlas).
3. No terminal do Codespace, instale as dependências e inicie o servidor:

   ```bash
   npm install
   npm run dev
   ```

4. Utilize a aba **Ports** para expor a porta `3333` e acesse a URL pública fornecida pelo Codespace para testar os endpoints (os scripts em [`requests/`](requests/) também funcionam ajustando `BASE_URL`).

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

## Deploy na Vercel

1. Instale a CLI da Vercel (localmente ou no Codespace):

   ```bash
   npm install -g vercel
   ```

2. Autentique-se e associe o projeto:

   ```bash
   vercel login
   vercel link
   ```

3. Configure as variáveis de ambiente no painel da Vercel (`MONGO_URI_PROD`, `JWT_SECRET`, `NODE_ENV=production`) ou via CLI:

   ```bash
   vercel env add MONGO_URI_PROD production
   vercel env add JWT_SECRET production
   vercel env add NODE_ENV production
   ```

4. Faça o deploy (primeiro um preview, depois produção):

   ```bash
   vercel --prod
   ```

O arquivo [`vercel.json`](vercel.json) direciona todas as requisições para o handler serverless em [`api/index.ts`](api/index.ts), que reutiliza a mesma aplicação Express do ambiente local. Após o deploy, atualize a seção [Hospedagem e vídeo](#hospedagem-e-vídeo) com a URL final e grave a demonstração solicitada.

Atualize esta seção após realizar o deploy (ex.: Vercel, Render) e gravar o vídeo demostrando as funcionalidades exigidas.
