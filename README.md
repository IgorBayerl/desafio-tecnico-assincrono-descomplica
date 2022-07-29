# Desafio Tecnico Assincrono  -  Descomplica

## Proposta
- [x] Desenvolver um serviço com API GraphQL que consuma um banco de dados de
alunos contendo: nome, CPF e e-mail.
  - [x] A API deve listar os alunos filtrando por quaisquer dos campos, retornando
todos, caso nenhum seja informado.

- [x] Desenvolver uma UI em React que nos permita realizar consultas a esse serviço,
consumindo e exibindo os dados retornados por ele.

## Requisitos não funcionais
- [x] Ser escrito em JavaScript ou TypeScript
- [x] Tanto o serviço no backend quanto a UI serem servidos em containers Docker
- [x] O banco de dados deve ser implementado num SGBD, como MySQL, Postgres ou
similares.
- [ ] Haver documentação (instruções sobre como devemos rodar seu projeto, por
exemplo, são indispensáveis)

## Você se destacará se...
- [x] Adicionar, editar ou excluir alunos via React app
- [x] Realizar commits específicos e detalhados
- [ ] Escrever testes automatizados
- [ ] Acrescentar algum tipo de cache para a consulta dos dados (no frontend, no
backend, ou nos dois :)
- [ ] Acrescentar um proxy reverso redirecionando as requisições que chegam para o
serviço
- [x] Disponibilizar uma solução completa para o deploy da aplicação (helm chart,
docker-compose)

-----


## Setup
1. docker-compose up --build
2. docker exec -it server-docker sh <!-- Enter backend docker container -->
3. NODE_ENV=docker node_modules/.bin/sequelize db:create
4. NODE_ENV=docker node_modules/.bin/sequelize db:migrate
5. NODE_ENV=docker node_modules/.bin/sequelize db:seed:all

