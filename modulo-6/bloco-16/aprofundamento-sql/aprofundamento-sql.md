```sql
### Exercicio 01

a) ALTER TABLE Actor DROP COLUMN salary; -> irá fazer com que a coluna salary suma

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); -> irá mudar o limite e o nome da colunaa sex

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); -> irá mudar a coluna gender para o limite de 255

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

```

```sql
### Exercicio 02

a) UPDATE Actor 
SET name = "FERNANDA MONTENEGRO"
WHERE id = "003";

UPDATE Actor 
SET birth_date = "1920-10-19" 
WHERE id = "003";

b) UPDATE Actor 
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE id = "005";

c) UPDATE Actor
SET name = "exercici2c",
	salary = 2000,
    birth_date = "1111-10-10",
    gender = "male",
    favorite_ice_cream_flavor = "chocolate",
    type = Director
WHERE id = "005";

d)  Error Code: 1054. Unknown column 'Director' in 'field list' 
    -> quanto tentar atualizar uma coluna que não existe ele fala que o campo não existe
    e não faz nada.


```
```sql
### Exercicio 03

a) DELETE FROM Actor WHERE id = "003";

b) DELETE FROM Actor WHERE (gender LIKE "male" AND salary > 1000000);
```

```sql
### Exercicio 04

a) SELECT MAX(salary) FROM Actor

b) SELECT MIN(salary) FROM Actor

c) SELECT COUNT(*) FROM Actor WHERE gender = "female"

d) SELECT SUM(salary) FROM Actor
```
```sql
### Exercicio 05

a) SELECT COUNT(*), gender
FROM Actor
GROUP BY gender ->  essa função conta todos os generos e junto em um grupo
                    
b) SELECT id, name
FROM Actor
GROUP BY name DESC

c) SELECT name 
FROM Actor
ORDER BY salary ESC

d) SELECT name 
FROM Actor
ORDER BY salary ESC
LIMIT 3

e) SELECT AVG(salary), gender FROM Actor
GROUP BY averageSalary;
```