```sql
###Exercicio 1

A) Chave estrangeira é uma coluna que permiti relacionar uma tabela com a outra.

B)  CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
	FOREIGN KEY (movie_id) REFERENCES Movie(id)
    );

C) 
Não é possivel inserir esses dados na tabela "Rating", pois a coluna movie_id que é referenciada com o id dos filmes é uma invalida
logo não tem como referenciar um dado com o outro, fazendo assim com que não seja possivel inserir os dados.

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
	"002",
    "filme tresteressante",
    "1",
    "tres"
);

D)  ALTER TABLE Movie DROP COLUMN rating;

E) Não pode dropar uma linha quando uma variavel esta relacionada com a outra, para poder dropar qualquer coisa da tabela ou a propria table, precisa primeiro retirar o link, ou seja precisa desrelacionar.
```