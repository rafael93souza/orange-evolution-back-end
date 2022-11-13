![]()

<div style="display: flex">
<img src =https://d335luupugsy2.cloudfront.net/images/landing_pages/2520863/1644350322045avatar_v2.png style="width:100px">

# Orange-evolution Back-end

</div>
<br>

Construida uma RESTful API que permite:

#### Aluno:

- Cadastrar-se na plataforma
- Fazer Login na plataforma
- Listar todos os cursos oferecidos na plataforma
- Listar todas as aulas de um curso cadastrado na plataforma
- Fazer checkout em uma aula de um curso especifico
- [Extra] Editar perfil do usuário logado na plataforma

### Administrador:

- Cadastrar novos administradores na plataforma
- Cadastrar novos cursos na plataforma
- Cadastrar novas aulas para um curso na plataforma
- Editar uma aula cadastrada na plataforma
- Editar um curso cadastrado na plataforma
- Excluir uma aula cadastrada na plataforma
- Excluir um curso cadastrado na plataforma
- Listar todos alunos cadastrados na plataforma
- Listar todas as aulas cadastradas na plataforma

## **Banco de dados**

Criado um Banco de Dados PostgreSQL onde o dump do banco de dados encontra-se na raiz do projeto, o mesmo contém as seguintes tabelas e colunas:

- usuarios
  - id
  - nome
  - email (campo único)
  - senha (senha Criptografada)
    <br>
- Administrador
  - id
  - nome
  - email (campo único)
  - senha (senha Criptografada)
    <br>
- cursos
  - id
  - nome (nome do curso)
    <br>
- todas_aulas
  - id
  - titulo
  - tipo
  - criador (quem produziu o conteúdo)
  - duracao
  - curso_id (relacionado com a tabela cursos pela coluna id)
  - status (por padrão marcada como "Não iniciada")
    <br>
- status
  - id
  - status
  - usuario_id (relacionado com a tabela usuarios pela coluna id)
  - curso_id (relacionado com a tabela cursos pela coluna id)
  - aula_id (relacionado com a tabela aulas pela coluna id)

## **Endpoints - Alunos**

---

### **Cadastrar usuário**

#### `POST` `/users`

Essa é a rota que será utilizada para cadastrar um novo usuario na plataforma.

- **Requisição**  
   O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome
  - email
  - senha

#### **Exemplo de requisição**

```javascript
// POST /usuario
{
    "nome": "José",
    "email": "jose@email.com",
    "senha": "123456"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
{
    "id": 1,
    "nome": "José",
    "email": "jose@email.com"
}
```

```javascript
// HTTP Status 409
{
    "message": "Já existe usuário cadastrado com o e-mail informado."
}
```

---

### **Login do usuário**

#### `POST` `/login`

Essa é a rota que permite o usuario cadastrado realizar o login no sistema.

- **Requisição**  
   O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - email
  - senha

#### **Exemplo de requisição**

```javascript
// POST /login
{
    "email": "jose@email.com",
    "senha": "123456"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
{
    "usuario": {
        "id": 1,
        "nome": "José",
        "email": "jose@email.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIzMjQ5NjIxLCJleHAiOjE2MjMyNzg0MjF9.KLR9t7m_JQJfpuRv9_8H2-XJ92TSjKhGPxJXVfX6wBI"
}
```

```javascript
// HTTP Status 400
{
    "message": "Usuário e/ou senha inválido(s)."
}
```

---

### **ATENÇÃO**: Todas os endpoints a seguir, exigem o token de autenticação do usuário logado, recebendo no header da requisição.

---

### **Detalhar todos os cursos**

#### `GET` `/trails`

Essa é a rota que será chamada quando o usuario quiser obter todos os cursos cadastrados no sistema.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo da requisição.

#### **Exemplo de requisição**

```javascript
// GET /trails
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 1,
    nome: 'Desenvolvimento Full Stack',
    subtitulo: 'Trilha para que ama um desafio...',
    descricao: 'O **Orange Evolution** consiste em trilhas...',
    urlimage: 'https://orange-evolution.s3.us-west-004',
  },
  {
    id: 2,
    nome: 'Ux/Ui Designer',
     subtitulo: 'Trilha para que ama um desafio...',
    descricao: 'O **Orange Evolution** consiste em trilhas...',
    urlimage: 'https://orange-evolution.s3.us-west-004',
	}
  {
    id: 3,
    nome: 'QA (Quality Assurance)',
     subtitulo: 'Trilha para que ama um desafio...',
    descricao: 'O **Orange Evolution** consiste em trilhas...',
    urlimage: 'https://orange-evolution.s3.us-west-004',
  },
  {
    id: 4,
    nome: 'Início',
     subtitulo: 'Trilha para que ama um desafio...',
    descricao: 'O **Orange Evolution** consiste em trilhas...',
    urlimage: 'https://orange-evolution.s3.us-west-004',
  },
];
```

```javascript
// HTTP Status 400
{
    "message": "Para acessar este recurso um token de autenticação válido deve ser enviado."
}
```

---

### **Escolher os cursos no sistema**

#### `POST` `/trails/choose`

Essa é a rota que será chamada quando o usuario quiser ingressar em um curso ou mais.

- **Requisição**  
   Sem parâmetros de rota ou de query.

  - **Requisição**  
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - cursos

  Que deverá ser um array, contendo os id dos cursos dos quais o usuário escolheu.

#### **Exemplo de requisição**

```javascript
// POST /trails/choose
{
    "cursos": [1,3]
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
[
  {
    id: 9,
    usuario_id: 4,
    curso_id: 2,
  },
  {
    id: 10,
    usuario_id: 4,
    curso_id: 3,
  },
];
```

```javascript
// HTTP Status 400
{
	"message": "Algum curso não foi encontrado no sistema!"
}
```

---

### **Detalhar os cursos escolhidos pelo Usuário**

#### `GET` `/trails/choose`

Essa é a rota que será chamada quando o usuario quiser obter as suas trilhas escolhidas.

- **Requisição**  
   Sem parâmetros de rota ou de query.
  - **Requisição**  
    O corpo (body) sem nenhuma propriedade

#### **Exemplo de requisição**

```javascript
// GET /trails/choose
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 8,
    usuario_id: 4,
    curso_id: 1,
  },
  {
    id: 9,
    usuario_id: 4,
    curso_id: 2,
  },
  {
    id: 10,
    usuario_id: 4,
    curso_id: 3,
  },
];
```

```javascript
// HTTP Status 401
{
    "message": "Usuário não autenticado"
}
```

---

### **Detalhar Aulas de um Curso**

#### `GET` `/classes/:id`

Essa é a rota que será chamada quando o usuário quiser buscar pelas aulas cadastradas de um curso especifico.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso especifico que o usuário deseja obter.  
   Sem propriedade no corpo (body) da requisição

#### **Exemplo de requisição**

```javascript
// GET /classes/1
// Sem conteúdo no corpo (body) da resposta
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
	{
		"id": 1,
		"titulo": "Migração de Carreira",
		"tipo": "Artigo",
		"criador": "Orange Juice",
		"duracao": null,
		"url": "https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",
		"curso_id": 4,
		"status": "Não iniciado"
	},
	{
		"id": 2,
		"titulo": "Migração de Carreira",
		"tipo": "Artigo",
		"criador": "Orange Juice",
		"duracao": null,
		"url": "https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5",
		"curso_id": 4,
		"status": "Não iniciado"
	}
[
```

```javascript
// HTTP Status 400
{
    "message": "Curso não cadastrado no sistema"
}
```

---

### **Checkout em um status de uma Aulas do Curso**

#### `POST` `/status/:usuario_id`

Essa é a rota que será chamada quando o usuário quiser fazer checkuout no status (mudar status) de uma aula do curso.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do usuário especifico que deseja fazer o checkout (o id deverá ser o mesmo do usuário que está logado na aplicação.).

  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - status
  - curso_id
  - aula_id

#### **Exemplo de requisição**

```javascript
// POST /status/1
{
    "status": "concluido",
    "curso_id": 4,
    "aula_id":1
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
[
	    {
        "id": 1,
        "status": "concluido",
        "usuario_id": 1,
        "curso_id": 4,
        "aula_id": 1
    }
[
```

```javascript
// HTTP Status 400
{
    "message": "Curso não cadastrado no sistema"
}
```

<br>

---

### **ATENÇÃO**: Todas os endpoints a seguir, exigem o token de autenticação do ADMINISTRADOR logado, recebendo no header da requisição.

---

## **Endpoints - Admnistradores**

---

### **Cadastrar um novo administrador**

#### `POST` `/admin`

Essa é a rota que será utilizada para cadastrar um novo administrador na plataforma.
(apena um administrador logado poderá cadastrar outro administrador)

- **Requisição**  
   O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome (nome do admin - obrigatório)
  - email (campo unico obrigratório)
  - senha (campo obrigatório)

#### **Exemplo de requisição**

```javascript
// POST /trails
{
    "nome":"rafael souza",
    "email": "rafaelsouzaadmin@email.com",
    "senha":"orangeJuiceAdm"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
[
  {
    id: 2,
    nome: 'Rafael Souza',
    email: 'rafaelsouzaadmin@email.com',
  },
];
```

```javascript
// HTTP Status 409
{
	"message": "E-mail já cadastrado no sistema!"
}
```

---

### **Cadastrar um curso**

#### `POST` `/trails`

Essa é a rota que será utilizada para cadastrar um novo curso na plataforma.

- **Requisição**  
   O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome (nome do curso)

#### **Exemplo de requisição**

```javascript
// POST /trails
{
    "nome":"QA (Quality Assurance)"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
{
	"id": 3,
	"nome": "QA (Quality Assurance)"
}
```

```javascript
// HTTP Status 409
{
	"message": "Trilha já cadastrada no sistema!"
}
```

---

### **Atualizar um curso cadastrado no sistema**

#### `PUT` `/trails/:curso_id`

Essa é a rota que permite o admnistrador edite um curso ja cadastrada no sistema.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso especifico que o administrador deseja atualizar
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - nome\*

(\*) Requisitos Obrigatórios

#### **Exemplo de requisição**

```javascript
// PUT/trails/5
{
	"nome":"Back-end"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
{
	"nome":"Back-end"
}
```

```javascript
// HTTP Status 404
{
	"message": "Curso não encontrado no sistema!"
}
```

---

### **Deletar um curso do sistema**

#### `DELETE` `/trails/:curso_id`

Essa é a rota que permite o admnistrador exclua um curso cadastrado no sistema.
(Essa rotá irá excluir todos os registros de aulas e status que tiverem relação com esse curso, por isso cuidado ao utilizar essa rota )

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso especifico que o administrador deseja excluir
  Sem propriedade no corpo (body) da requisição

#### **Exemplo de requisição**

```javascript
// DELETE/trails/5
// Sem propriedade no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 204
// Sem retorno conteúdo no retorno da requisição
```

```javascript
// HTTP Status 400
{
	"message": "Curso não encontrado no sistema!"
}
```

---

### **Cadastrar uma nova Aula no sistema**

#### `POST` `/classes/:curso_id`

Essa é a rota que permite o admnistrador cadastre uma nova aula para um curso especifico do sistema.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso especifico que o administrador deseja fazer o checkout (o id deverá ser o mesmo do usuário que está logado na aplicação) cadastro da aula.
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - titulo\*
  - tipo\*
  - criador\* (quem produziu o conteúdo Obrigatório)
  - duracao

(\*) Requisitos Obrigatórios

#### **Exemplo de requisição**

```javascript
// POST /classes/1
{
	"titulo":"Habilidades além do código! | Com Mateus Oliveira",
	"tipo":"vídeo",
	"criador": "Orange Juice",
	"url":"https://www.youtube.com/watch?v=Mmukepu3yRs",
	"duracao": "00:45:01"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 201
[
  {
    id: 9,
    titulo: 'Habilidades além do código! | Com Mateus Oliveira',
    tipo: 'vídeo',
    criador: 'Orange Juice',
    duracao: '00:45:01',
    url: 'https://www.youtube.com/watch?v=Mmukepu3yRs',
    curso_id: 1,
    status: 'Não iniciado',
  },
];
```

```javascript
// HTTP Status 409
{
	"message": "Aula já cadastrada no sistema!"
}
```

---

### **Atualizar uma aula cadastrada no sistema**

#### `PUT` `/classes/:curso_id/:aula_id`

Essa é a rota que permite o admnistrador edite uma aula ja cadastrada no sistema.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso /e o id da aula especifica que o administrador deseja atualizar
  O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):
  - titulo\*
  - tipo\*
  - criador\* (quem produziu o conteúdo Obrigatório)
  - duracao

(\*) Requisitos Obrigatórios

#### **Exemplo de requisição**

```javascript
// PUT/classes/1/9
{
	"titulo":"Habilidades além do código!",
	"tipo":"vídeo",
	"criador": "Orange Juice",
	"url":"https://www.youtube.com/watch?v=Mmukepu3yRs",
	"duracao": "00:45:01"
}
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 9,
    titulo: 'Habilidades além do código!',
    tipo: 'vídeo',
    criador: 'Orange Juice',
    duracao: '00:45:01',
    url: 'https://www.youtube.com/watch?v=Mmukepu3yRs',
    curso_id: 1,
    status: 'Não iniciado',
  },
];
```

```javascript
// HTTP Status 400
{
	"message": "Aula não encontrada no sistema!"
}
```

---

### **Deletar uma aula do curso do sistema**

#### `DELETE` `/trails/:curso_id/:aula_id`

Essa é a rota que permite o admnistrador exclua uma aula ja cadastrada no sistema.
(Essa rotá irá excluir todos os registros de status que tiverem relação com essa aula, por isso cuidado ao utilizar essa rota )

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso e o id da aula especifica que o administrador deseja excluir
  Sem propriedade no corpo (body) da requisição

#### **Exemplo de requisição**

```javascript
// DELETE/trails/5/1
// Sem propriedade no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 204
// Sem retorno conteúdo no retorno da requisição
```

```javascript
// HTTP Status 400
{
	"message": "Aula não encontrada no sistema!"
}
```

---

### **Detalhar todos os cursos**

#### `GET` `/trails`

Essa é a rota que será chamada quando o admnistrador quiser obter todos os cursos cadastrados no sistema.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo da requisição.

#### **Exemplo de requisição**

```javascript
// GET /trails
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 1,
    nome: 'Desenvolvimento Full Stack',
  },
  {
    id: 2,
    nome: 'UX/UI Design',
  },
  {
    id: 3,
    nome: 'QA (Quality Assurance)',
  },
  {
    id: 4,
    nome: 'Início',
  },
];
```

```javascript
// HTTP Status 400
{
    "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
}
```

---

### **Detalhar Aulas de um Curso**

#### `GET` `/classes/:curso_id`

Essa é a rota que será chamada quando o administrador quiser buscar pelas aulas cadastradas de um curso especifico.

- **Requisição**  
   Com parâmetro de rota que deve conter o id do curso especifico que o usuário deseja obter.  
   Sem propriedade no corpo (body) da requisição

#### **Exemplo de requisição**

```javascript
// GET /classes/1
// Sem conteúdo no corpo (body) da resposta
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
	{
		"id": 1,
		"titulo": "Migração de Carreira",
		"tipo": "Artigo",
		"criador": "Orange Juice",
		"duracao": null,
		"url": "https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4",
		"curso_id": 4,
		"status": "Não iniciado"
	},
	{
		"id": 2,
		"titulo": "Migração de Carreira",
		"tipo": "Artigo",
		"criador": "Orange Juice",
		"duracao": null,
		"url": "https://medium.com/orangejuicefc/design-thinking-e-carreira-como-migrei-de-psicologia-para-ux-design-cb79e8b47df5",
		"curso_id": 4,
		"status": "Não iniciado"
	}
[
```

```javascript
// HTTP Status 400
{
    "mensagem": "Curso não cadastrado no sistema"
}
```

---

### **Listar todas as aulas cadastradas**

#### `GET` `/classes`

Essa é a rota que será chamada quando o admnistrador quiser listar todas as as aulas cadastradas no sistema, independentemente do curso.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo (body) da requisição.

#### **Exemplo de requisição**

```javascript
// GET /classes
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 6,
    titulo: 'Qualidade além dos bugs',
    tipo: 'live',
    criador: 'Orange Juice',
    duracao: '01:04:11',
    url: 'https://www.youtube.com/watch?v=voE1-yUY-Qg&feature=youtu.be',
    curso_id: 4,
    status: 'Não iniciado',
  },
  {
    id: 7,
    titulo: 'Dev Júnior',
    tipo: 'vídeo',
    criador: 'Orange Juice',
    duracao: '00:50:29',
    url: 'https://www.youtube.com/watch?v=qZ4ZKJSmf4k',
    curso_id: 1,
    status: 'Não iniciado',
  },
];
```

```javascript
// HTTP Status 200 / 201 / 204
[];
```

---

### **Listar todos os administradores cadastradas**

#### `GET` `/admin`

Essa é a rota que será chamada quando o admnistrador quiser listar todos os administradores cadastrados no sistema.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo (body) da requisição.

#### **Exemplo de requisição**

```javascript
// GET /admin
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 1,
    nome: 'Rafael Souza',
    email: 'rafaelsouza@email.com',
  },
  {
    id: 2,
    nome: 'Rafael Souza',
    email: 'rafaelsouzaadmin@email.com',
  },
];
```

```javascript
// HTTP Status 200 / 201 / 204
{
	"message": "administrador não autorizado"
}
```

---

### **Listar todos os alunos cadastrados no sistema**

#### `GET` `/users`

Essa é a rota que será chamada quando o admnistrador quiser listar todos os alunos cadastrados no sistema.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo (body) da requisição.

#### **Exemplo de requisição**

```javascript
// GET /users
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 1,
    nome: 'Rafael Souza',
    email: 'rafaelsouza@email.com',
  },
  {
    id: 2,
    nome: 'Joana Angelica',
    email: 'joanaangelica@email.com',
  },

  {
    id: 3,
    nome: 'Emersom Moreira',
    email: 'emersommoreira@email.com',
  },
];
```

```javascript
// HTTP Status 200 / 201 / 204
{
	"message": "administrador não autorizado"
}
```

### **Listar todos os status de aulas cadastradas**

#### `GET` `/status`

Essa é a rota que será chamada quando o admnistrador quiser listar todos os statos de aulas cadastrados no sistema.

- **Requisição**  
   Sem parâmetros de rota ou de query.  
   Não deverá possuir conteúdo no corpo (body) da requisição.

#### **Exemplo de requisição**

```javascript
// GET /status
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200
[
  {
    id: 4,
    status: 'iniciado',
    usuario_id: 1,
    curso_id: 1,
    aula_id: 7,
  },
  {
    id: 5,
    status: 'concluido',
    usuario_id: 1,
    curso_id: 4,
    aula_id: 1,
  },
];
```

```javascript
// HTTP Status 200 / 201 / 204
{
	"message": "administrador não autorizado"
}
```

---

---

**API AINDA EM DESENVOLVIMENTO**: Etaremos atualizando o README!!!
