<h1 align="center">
  <img src=".github/banner.png" alt="Time & Attendance">
</h1>

<p align="center">Registre e acompanhe seus pontos eletrônicos de maneira simples e fácil!</p>

<h4 align="center">Versão 1.0</h4>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-instalação-e-uso">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-requisitos-e-regras-de-negocio">Requisitos e RN</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licença">Licença</a>
</p>

<p align="center">
  <img
    alt="Github Top Language"
    src="https://img.shields.io/github/languages/top/carlosmfreitas2409/time-and-attendance-api?message=TOPLanguage&color=5965E0"
  >
  <img
    alt="Github Language Count"
    src="https://img.shields.io/github/languages/count/carlosmfreitas2409/time-and-attendance-api?message=Languages&color=5965E0"
  >

  <a href="https://github.com/carlosmfreitas2409/time-and-attendance-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/carlosmfreitas2409/time-and-attendance-api?message=Commit&color=5965E0">
  </a>
  <img
    alt="Project License"
    src="https://img.shields.io/github/license/carlosmfreitas2409/time-and-attendance-api?message=MIT&color=5965E0"
  >
</p>

----

## 💡 Sobre

O <b>Time & Attendance</b> é uma aplicação em que você pode registrar e acompanhar seus pontos eletrônicos de maneira simples e fácil!

Este projeto foi um desafio desenvolvido para uma avaliação técnica.

**OBS:** Esta é a versão back-end do projeto.

## 🛠️ Tecnologias

Esse projeto foi desenvolvido usando as seguintes tecnologias:

- [Express](https://expressjs.com)
- [Typescript](https://typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](hhttps://typeorm.io/#/)
- [class-validator](https://github.com/typestack/class-validator)
- [class-transformer](https://github.com/typestack/class-transformer)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [UUID](https://github.com/uuidjs/uuid)
- [Swagger](https://swagger.io)

## :information_source: Instalação e uso

Para clonar e executar esta aplicação, você precisará do [Git](https://git-scm.com/) e [Yarn](https://yarnpkg.com/). A partir de sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/carlosmfreitas2409/time-and-attendance-api

# Entre no repositório
$ cd time-and-attendance-api

# Instale as dependências
$ yarn

# Preencha as variáveis ambientes em .env

# Crie o serviço docker da Database
$ docker-compose up

# Gere as seeds
$ yarn seed:skills
$ yarn seed:admin

# Rode a aplicação
$ yarn dev

# A API estará ativa em http://localhost:3333
# OBS: A senha do usuário admin (seed) é "admin"
```

## :construction: Requisitos e Regras de negócio
```md
### Requisitos

- [x] Deve ser possível cadastrar uma nova skill
- [x] Deve ser possível listar as skills
- [x] Deve ser possível deletar uma skill
- [X] Deve ser possível cadastrar um novo colaborador
- [X] Deve ser possível atualizar novo colaborador
- [X] Deve ser possível adicionar Skills ao colaborador
- [X] Deve ser possível listar os colaboradores em ordem alfabética
- [X] Deve ser possível listar os colaboradores com o status
- [X] Deve ser possível retornar um colaborador pela matricula
- [X] Deve ser possível gravar um ponto
- [X] Deve ser possível fechar um ponto
- [X] Deve ser possível cadastrar um novo usuário
- [X] Deve ser possível se autenticar como usuário
- [x] Deve ser possível tornar um usuário administrador
- [x] Deve ser possível validar um colaborador

---

### Regras de negócio

- [x] Não deve ser possível cadastrar uma nova skill já existente
- [x] Não deve ser possível deletar uma nova skill não existente
- [X] Não deve ser possível cadastrar um novo colaborador com e-mail ou CPF já existente
- [X] Não deve ser possível retornar um colaborador não existente
- [x] Não deve ser possível cadastrar um colaborador se os dados não estiverem válidos
- [X] Não deve ser possível atualizar um colaborador com e-mail ou CPF já existente
- [X] Não deve ser possível gravar um ponto com colaborador não existente.
- [X] Não deve ser possível gravar um ponto se um já estiver em andamento.
- [X] Não deve ser possível gravar um ponto se o colaborador não estiver validado.
- [X] Não deve ser possível cadastrar um novo usuário com e-mail já existente
- [X] Não deve ser possível se autenticar se o e-mail/senha estiverem incorretos.
- [x] Não deve ser possível tornar um usuário administrador se o atual não for administrador
- [x] Não deve ser possível tornar um usuário administrador para o usuário atual
- [X] Não deve ser possível validar um colaborador se não for usuário admin
```

## ⚙️ Como contribuir

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`;

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/carlosmfreitas2409/time-and-attendance-api/blob/master/LICENSE) para mais detalhes.

---

Feito com 💜 por Carlos Eduardo 👋 [Confira meu LinkedIn](https://www.linkedin.com/in/carlosmeduardo/)
