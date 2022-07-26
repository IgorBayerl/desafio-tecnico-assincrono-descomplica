# desafio-tecnico-assincrono-descomplica

## Proposta
- Desenvolver um serviço com API GraphQL que consuma um banco de dados de
alunos contendo: nome, CPF e e-mail.
  - A API deve listar os alunos filtrando por quaisquer dos campos, retornando
todos, caso nenhum seja informado.

- Desenvolver uma UI em React que nos permita realizar consultas a esse serviço,
consumindo e exibindo os dados retornados por ele.

## Requisitos não funcionais
- Ser escrito em JavaScript ou TypeScript
- Tanto o serviço no backend quanto a UI serem servidos em containers Docker
- O banco de dados deve ser implementado num SGBD, como MySQL, Postgres ou
similares.
- Haver documentação (instruções sobre como devemos rodar seu projeto, por
exemplo, são indispensáveis)

## Você se destacará se...
- Adicionar, editar ou excluir alunos via React app
- Realizar commits específicos e detalhados
- Escrever testes automatizados
- Acrescentar algum tipo de cache para a consulta dos dados (no frontend, no
backend, ou nos dois :)
- Acrescentar um proxy reverso redirecionando as requisições que chegam para o
serviço
- Disponibilizar uma solução completa para o deploy da aplicação (helm chart,
docker-compose)
