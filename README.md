# Projeto do desafio do Hackathon - Programa de Formação Season 4

## Orange Evolution - Back-end

Aplicação com o objetivo de disponibilizar cursos gratuitos para quem deseja estudar sobre tecnologis. Aplicação conta inicialmente com 3 trilhas:

- Desenvolvimento Full Stack
- Ux/Ui Designer
- QA (Quality Assurance).

## Requisitos

- NodeJs v16.15.1
- Banco de dados PostgresSQL
- \*Opicional: Docker

## Tecnologias usadas

- NodeJs
- Express
- Knex
- Dotenv
- Joi
- JWT - Json Web Token
- Bcrypt
- Cors
- Express Async Errors
- Swagger Ui Express
- Nodemon
- Pg

## Funcionalidades

- Rota de cadastro de novos usuários
- Rota de listagem de Trilhas (cursos)
- Rota de listagem de aulas por trilha
- Rota de seleção da trilha por parte do usuários
- Rota de para cadastar/alterar o status da aula
- Rota pra adicionar novas aulas - Somente administrado
- Rota para editar aula - Somente administrado
- Rota para apagar aula - Somente administrado
- Middleware de autenticação do usuários
- Middleware de autenticação do administrador
- Middleware de error (error handle)
- Schema de validação do corpo da requisição

## Rodando localmente

#### clone o repositório

Usando chave ssh

```bash
git@github.com:orange-squad-thirty-two/orange-evolution-back-end.git
```

Sem chave ssh

```bash
https://github.com/orange-squad-thirty-two/orange-evolution-back-end.git
```

### Entrar na pasta

```bash
cd orange-evolution-back-end
```

Instalar as dependencias

```bash
npm install
```

Start na aplicação

```bash
npm run dev
```

A API roda na port

```bash
http://localhost:3333/
```

Observação: O banco de dados precisa esta rodando;

Você pode usar o banco de dados localmente intalado em sua máquia ou pode optar por usar um container Docker;
Se opar por usar o Docker segue comando que deverár usar no terminal:

```bash
docker run --name postgres_container -e "POSTGRES_PASSWORD=12345678" -p 5432:5432 -d postgres
```

## Banco de dados

Na raiz do projeto existe um arquivo de nome `dump.sql` que contem as query para gerar o bando de tados e suas tabelas, bem com popular com dados das aulas.
Só copiar para a ferramenta que você utiliza para manipular banco de dados Postgres
Exemplo de ferramentas:
PgAdimin 4
Beekeeper Studio

Ao gerar o banco de dados e popular ele, será criado um usuário administrador que tera os seguintes dados:

- nome: Orange Admin
- email: admin@admin.com
- senha: 123456

Você deverá cadastrar um usuário para acessar a aplicação e começar a consumir as aulas

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

- Renomei o arquivo `.env.exemple` para `.env`

- Altere os valores das variáveis para os valores que você usa no banco de dados que esta instalado na sua máquina

```bash
PORT=
DB_PORT=
DB_HOST=
DB_USER=
DB_NAME=
DB_PWD=

SECRET_KEY=
```

## Documentação da API

Após feito os primeiros passos de entar na pasta, instalar as dempendências, e rodar a aplicação.
Acesse o seu navegador e digite ou copie e cole o seguinge:

```bash
http://localhost:3333/api-docs/
```

E tera ascesso a Documentação da API criada utilizando o Swagger Ui Express

## Autor

- [@eemr3](https://www.github.com/eemr3)
- [@afael93souza](https://github.com/rafael93souza)
