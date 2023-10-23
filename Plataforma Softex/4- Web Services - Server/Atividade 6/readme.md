## Rotas e métodos HTTP utilizados na resolução do exercício

1. **Listar Alunos:**
   - Rota: `GET /alunos`
   - Retorno de status HTTP:
     - `200 (OK)` em caso de sucesso.
     - `500 (Erro interno do servidor)` em caso de erro.

2. **Buscar Aluno por ID:**
   - Rota: `GET /alunos/:id`
   - Retorno de status HTTP:
     - `200 (OK)` se o aluno for encontrado.
     - `404 (Não encontrado)` se o aluno não existir.
     - `500 (Erro interno do servidor)` em caso de erro.

3. **Cadastrar Aluno:**
   - Rota: `POST /alunos/cadastrar`
   - Retorno de status HTTP:
     - `201 (Criado)` se o aluno for cadastrado com sucesso.
     - `500 (Erro interno do servidor)` em caso de erro.

4. **Atualizar Aluno por ID:**
   - Rota: `PUT /alunos/atualizar/:id`
   - Retorno de status HTTP:
     - `200 (OK)` se o aluno for atualizado com sucesso.
     - `404 (Não encontrado)` se o aluno não existir.
     - `500 (Erro interno do servidor)` em caso de erro.

5. **Excluir Aluno por ID:**
   - Rota: `DELETE /alunos/excluir/:id`
   - Retorno de status HTTP:
     - `200 (OK)` se o aluno for excluído com sucesso.
     - `404 (Não encontrado)` se o aluno não existir.
     - `500 (Erro interno do servidor)` em caso de erro.
