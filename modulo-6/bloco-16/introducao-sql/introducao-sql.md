```sql
### Exercício 1
a)  Usamos o DATE para declarar a data de nascimento, pois a variavel ira receber uma data
    Usamos o VARCHAR(x) para declarar o ID,nome e genero, pois ambas vão receber uma string.
    
b)  O SHOW DATABASE amostra todas as database que tenho acessso e o SHOW TABLES amostra todas as TABLE criada no BD.

c)  o DESCRIBE Actor amostra as variaveis e os tipos da tabela Actor.

```
SELECT * FROM Table;
```sql

### Exercício 2
b) Entradas duplicadas no ID '002' da chave primaria, o erro aconteceu pq o ID ta duplicado

c) Isso está errado, pelos motivos: esta falatando a variavel birth_date e gender

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);

d) Isso está errado, pelos motivos: esta falatando declarar a variavel name e passar o valor
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "004",
    "zumzibaue",
    400000,
    "1949-04-18", 
    "male"
);

e) Isso está errado, pelos motivos: valor do birth_date esta passando errado, pois ta como number
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    '1979-03-26', 
    "female"
);

```

```sql
### Exercicio 3

a) SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

b) SELECT id, salary from Actor WHERE name = "Tony Ramos";

c) SELECT id, salary from Actor WHERE name = "Tony Ramos" --> retornou uma tabela vazia pois não tem o genero com valorde "invalid"

d) SELECT id, name, salary, birth_date from Actor WHERE salary >= 500000;

e) Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos --> a var nome não existe na tabela

SELECT id, name from Actor WHERE id = "002"

```
```sql
### Exercicio 4

a)  A query abaixo foi escrita para selecionar todos os valores de "Actor" com 2 condicional onde, o nome tem que começar com a letra A ou J, pois LIKE "A%" OR LIKE "J%" representa exatamente isso porem na linguagem do SQL e o AND salary > 300000 diz que tem que TAMBEM ter o salario menor que 300000

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

b)  SELECT * FROM Actor
    WHERE (name NOT LIKE "A%") AND salary > 350000;

c)  SELECT * FROM Actor
    WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "%G%" OR name LIKE "%g%");

d) SELECT * FROM Actor
    WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "%G%" OR name LIKE "%g%" 
	OR name LIKE "A%" OR name LIKE "a%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000


```