DESAFIO BACK END ESTANTE VIRTUAL

Neste repositorio foi feito uma API de um clone do case de back end da amaro, onde consiste em criar e consultar os produtos.

## Tecnologias Utilizadas

 1. Typescript
 2. Node.js
 3. Knex
 4. Express
 5. Uuid
 6. Jsonwebtoken
 7. Dotenv
 8. Mysql 
 9. Postman
 10. Arquitetura limpa com Solid e injenção de dependencias
 
 

> **Observações:**
>  1. não fiz o deploy pois meu Heroku não esta mais deixando fazer outro deploy.

## Tabelas Criadas

```sql
CREATE TABLE competicao (
    id VARCHAR(80) PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    encerrada BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE competidores (
    id_competicao VARCHAR(80) NOT NULL,
    atleta VARCHAR(80) NOT NULL,
    valor VARCHAR(40) NOT NULL,
    unidade VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_competicao) REFERENCES competicao(id)
)
```
## Endpoints Criados 

 - [x] Puxar todas as competições até as desativadas;
 - [x] Puxar o ranking provisório de uma competição pelo ID como paramentro;
 - [x] Encerrar uma competição e a mesma retorna o ranking final;
 - [x] Criar nova competição;
 - [x] Registrar pontuação de um atleta em uma competição utilizando o ID da competição pelo body;

> **Observações:**
>  1. competições que inclua "lançamento de dardos" os jogadores terão 3 tentativas e irá computar a maior.

## Documentação

- https://documenter.getpostman.com/view/18694716/2s83tDoXrM