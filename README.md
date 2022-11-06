![]()
<div style="display: flex">
<img src =https://d335luupugsy2.cloudfront.net/images/landing_pages/2520863/1644350322045avatar_v2.png style="width:100px">

# Orange-evolution Back-end

</div>
<br>

Construida uma RESTful API que permite:

####Aluno:
- Cadastrar-se na plataforma
- Fazer Login na plataforma
- Listar todos os cursos oferecidos na plataforma
- Listar todas as aulas de um curso cadastrado na plataforma
- [Extra] Editar perfil do usuário logado na plataforma

###Admnistrador:
- Cadastrar novos cursos na plataforma
- Cadastrar novas aulas para um curso na plataforma
- Editar uma aula cadastrada na plataforma
- Excluir uma aula cadastrada na plataforma
- [Extra] Filtrar transações por categoria 


## **Banco de dados**

Criar um Banco de Dados PostgreSQL onde o dump do banco de dados encontra-se na raiz do projeto, onde o mesmo contendo as seguintes tabelas e colunas:

- usuarios
  - id
  - nome
  - email (campo único)
  - senha (senha Criptografada)
<br>
- Admnistrador
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
		"id": 1,
		"nome": "Desenvolvimento Full Stack"
	},
	{
		"id": 2,
		"nome": "UX/UI Design"
	},
	{
		"id": 3,
		"nome": "QA (Quality Assurance)"
	},
	{
		"id": 4,
		"nome": "Início"
	}
]
```

```javascript
// HTTP Status 400
{
    "message": "Para acessar este recurso um token de autenticação válido deve ser enviado."
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

## **Endpoints - Admnistradores**
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

### **Cadastrar uma nova Aula no sistema**

#### `POST` `/classes/:id`

Essa é a rota que permite o admnistrador cadastre uma nova aula para um curso especifico do sistema.

- **Requisição**  
    O corpo (body) deverá possuir um objeto com as seguintes propriedades (respeitando estes nomes):

  - titulo* 
  - tipo*
  - criador* (quem produziu o conteúdo Obrigatório)
  - duracao

(*) Requisitos Obrigatórios, além disso o id do curso em que se deseja cadastrar o curso deverá ser enviado pelo parâmetro de rota

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
		"id": 9,
		"titulo": "Habilidades além do código! | Com Mateus Oliveira",
		"tipo": "vídeo",
		"criador": "Orange Juice",
		"duracao": "00:45:01",
		"url": "https://www.youtube.com/watch?v=Mmukepu3yRs",
		"curso_id": 1,
		"status": "Não iniciado"
	}
]
```

```javascript
// HTTP Status 409
{
	"message": "Aula já cadastrada no sistema!"
}
```
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
		"id": 1,
		"nome": "Desenvolvimento Full Stack"
	},
	{
		"id": 2,
		"nome": "UX/UI Design"
	},
	{
		"id": 3,
		"nome": "QA (Quality Assurance)"
	},
	{
		"id": 4,
		"nome": "Início"
	}
]
```

```javascript
// HTTP Status 400
{
    "mensagem": "Para acessar este recurso um token de autenticação válido deve ser enviado."
}
```
---
### **Detalhar Aulas de um Curso**

#### `GET` `/classes/:id`

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
// GET /categoria
// Sem conteúdo no corpo (body) da requisição
```

#### **Exemplos de resposta**

```javascript
// HTTP Status 200 
[
    {
		"id": 6,
		"titulo": "Qualidade além dos bugs",
		"tipo": "live",
		"criador": "Orange Juice",
		"duracao": "01:04:11",
		"url": "https://www.youtube.com/watch?v=voE1-yUY-Qg&feature=youtu.be",
		"curso_id": 4,
		"status": "Não iniciado"
	},
	{
		"id": 7,
		"titulo": "Dev Júnior",
		"tipo": "vídeo",
		"criador": "Orange Juice",
		"duracao": "00:50:29",
		"url": "https://www.youtube.com/watch?v=qZ4ZKJSmf4k",
		"curso_id": 1,
		"status": "Não iniciado"
	}
]
```

```javascript
// HTTP Status 200 / 201 / 204
[]
```

---

**API AINDA EM DESENVOLVIMENTO**: Etaremos atualizando o README!!!

