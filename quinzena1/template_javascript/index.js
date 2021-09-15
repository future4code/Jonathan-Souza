/*
Exercícios de interpretação de código

1º Questão

let array
console.log('a. ', array) --> a. 

array = null
console.log('b. ', array) --> b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) --> c. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13

let i = 0
console.log('d. ', array[i]) --> d. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0

array[i+1] = 19
console.log('e. ', array) --> e. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19

const valor = array[i+6]
console.log('f. ', valor) --> f. 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 6



2º Questão

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) --> SUBI NUM ÔNIBUS EM MIRROCOS 27 
*/

//--------------------------------------------------------------------------------------------------------------\\


//Exercícios de escrita de código

/*
1º Questão
Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario !
*/

const nomeDoUsuario = prompt("Insira seu nome")
const emailDoUsuario = prompt("Insira seu e-mail")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso!. Seja bem-vinda(o), ${nomeDoUsuario}`)



/*
2º Questão
Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima na tela o array completo

b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
*/

 let comidasFavoritas = [
   "Mousse de limão",
    "Chocolate amargo",
    "Churrasco",
     "Macarrão",
     "Vitamina de banana"
 ]
 console.log(comidasFavoritas)
 console.log("Essas são as minha comida preferidas:")
comidasFavoritas.forEach(item => console.log(item))

let comidaUsuario = prompt("Coloque aqui usa comida preferida!")
 let comidasFavoritasEditada = [
    "Mousse de limão",
    comidaUsuario,
    "Churrasco",
    "Macarrão",
     "Vitamina de banana"
 ]
 comidasFavoritasEditada.forEach(item => console.log(item))

/*
3º Questão
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array na tela

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array na tela
*/

let listaDeTarefas = []

const TarefaUsuario1 = prompt("Insira sua primeira tarefa à realizar")
const TarefaUsuario2 = prompt("Insira sua segunda tarefa à realizar")
const TarefaUsuario3 = prompt("Insira sua terceira tarefa à realizar")

listaDeTarefas.push(TarefaUsuario1, TarefaUsuario2, TarefaUsuario3)
    console.log(listaDeTarefas)
;

const TarefaTerminada = prompt("Qual tarefa você ja realizou: 1, 2 ou 3")
listaDeTarefas.splice(TarefaTerminada - 1, 1)
    console.log(listaDeTarefas)
;