# DESAFIO BACK END AMARO   

Neste repositorio foi feito uma API de um clone do case de back end da amaro, onde consiste em criar e consultar os produtos.

## Tecnologias Utilizadas

 1. Typescript
 2. Node.js
 3. Bcryptjs
 4. Knex
 5. Express
 6. Uuid
 7. Jsonwebtoken
 8. Dotenv
 9. Mysql 
 10. Postman
 11. Arquitetura limpa com Solid e injenção de dependencias
 
 

> **Observações:**
>  1. não fiz o deploy pois meu Heroku não esta mais deixando fazer outro deploy.

## Tabelas Criadas

```sql
CREATE TABLE amaro_users (
	id VARCHAR(80) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(7) DEFAULT"NORMAL"
);

CREATE TABLE amaro_products(
	id VARCHAR(80) PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE amaro_tags(
	tag_id VARCHAR(80) PRIMARY KEY,
    tag VARCHAR(40),
    product_id VARCHAR(80) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES amaro_products(id);
);
```
## Endpoints Criados 

 - [x] Signup do usuário;
 - [x] Login do usuário;
 - [x] Adcionar produto no catalogo --> apenas admin;
 - [x] Pegar lista de todos os produto;
 - [x] Pegar um produto especifico pelo ID;
 - [x] Filtrat os produtos por tags.

## Documentação
