## Registro de ponto eletrônico - Avaliação Técnica

---

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
- [] Deve ser possível cadastrar um novo usuário
- [] Deve ser possível se autenticar como usuário
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
- [] Não deve ser possível cadastrar um novo usuário com e-mail já existente
- [] Não deve ser possível se autenticar se o e-mail/senha estiverem incorretos.
- [] Não deve ser possível validar um colaborador se não for usuário admin

