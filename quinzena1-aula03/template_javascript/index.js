/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1º
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

Irá aparecer 3 informações impressa no console do navegador, a primeira vai ser o valor da variável "let b" que no caso essa vai aparecer somente o numero 10,
pois o comando "console.log" está antes da atualização da variavel "let b", as outras duas informações que iram aparecer no console vai ser o valor
de "let a" e "let b" na mesma linha, pois quando colocamos duas ou mais variaveis divida por virgula depois do "console.log" faz com que os resultados
dessas duas variaveis apareça na mesma linha em vez de linhas diferentes, mas dessa vez irá aparecer da seguinte forma no console do navegador (10 5)
sendo o valor 10 referente a variavel "a" e o valor 5 referente a variavel "b", no caso o valor de "b" foi alterado por que antes do comando "console.log(a, b)"
tem uma nova informação da variavel "b" dizendo que a mesma alterou o valor de 10 para 5 "b = 5", essa troca foi aceita pois foi o "b" é uma variavel "let"
que é permitida a troca do valor da variavel.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2º
let a = 10
let b = 20
let c
c = a
b = c
a = b

console.log(a, b, c)

Nesta questão ira aparecer no console do navegador os seguintes valores: 10 10 10, pois antes de pedir para imprimir os valores das variáveis "a", "b" e "c"
teve novas atribuições para essas variáveis, e essa troca foi efetuada por que o código foi escrito com "let" e não "const" fazendo assim possivel a troca,
por exemplo a variável "a" no ínicio teve um atribuição inicial de 10, porem logo em seguida teve uma atribuição que foi a seguinte "a = b" sendo que
a variável "b" tem a mesma atribuição de "c" e a variavel tem a mesma atribuição de "a" fazendo assim com que todas as variaveis fiquem com os mesmo valores
que no caso é o "10".

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3º
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let ganhoPorDia = prompt("Quanto você receber por dia?")
alert("Você recebe ${horasTrabalhadas/ganhoPorDia} por hora")
*/


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1º Questão

let nome = prompt ("Insira seu nome")                            //d) -Apareceu ambos como string, pois não teve nenhum valor atribuido e quando não tem um valor atribuido não tem como saber se vai ser number, logo vem como string por padrão.
let idade = prompt ("Insira sua idade")                          //f) -Apareceu ambas string, pois qualquer valor escrito no prompt vem como string indepentede se você escrever palavra ou numero.

typeof nome
typeof idade
console.log(typeof nome, typeof idade)
console.log("Olá", nome, "você tem", idade, "anos")

//2º Questão

let refeição = prompt ("Já comeu hoje?")
let compra = prompt ("Já fez a compra do mês?")
let exercicio = prompt ("Já se exercitou hoje?")

console.log("Já comeu hoje?", refeição)
console.log("Já fez a compra do mês?", compra)
console.log("Já se exercitou hoje?", exercicio)

//3º Questão

let a = 10
let b = 25
let c 

c = a
a = b
b = c

console.log("O novo valor de b é", b)
console.log("O novo valor de a é", a)