// --------------------------- Exercícios de interpretação de código --------------------------- \\ 

// --- Questão 1 --- \\

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a)  Explique o que o código faz. Qual o teste que ele realiza? 

// o codigo pega o numero que o usuario digitou no prompt e faz um resto da divisão com o 2 e iguala o resultado em 0
// o teste realiza se o numero que o cliten colocou vai ser par ou impar, em caso de par irá passar no teste caso o numero
// seja impar ira aparecer no console "não passou no teste."

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// numeros par

// c) Para que tipos de números a mensagem é "Não passou no teste"?

// numeros impar


// --- Questão 2 --- \\

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// saber quanto custa cada fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

// O preço da fruta maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos
//    o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

// O preço da fruta Pêra é R$ 5


// --- Questão 3 --- \\

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

//  Coleta o que o usuario ira escrever no prompt e salva como tipo number

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// no primeiro caso iria ser impresso "Esse numero passou no teste" e no segundo caso sera impresso "Essa mensagem é secreta!!!"

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// não pois quando o if da true ele para a leitura do bloco if, porem se dar false ele continua lendo, o que acaba ativando a variavel let mensagem,
// resultando assim na impressão da mensagem que esta guardada na variavel. ;)

// --------------------------- Exercícios de escrita de código --------------------------- \\ 

// --- Questão 1 --- \\

// const idadeUsuario = Number(prompt("Qual a sua idade ?"))

// const conferirIdade = (idade) =>{
//     if (idade >= 18){
//         console.log("Você pode dirigir.")
//     }else{
//         console.log("Você não pode dirigir.")
//     }
// }

// conferirIdade(idadeUsuario)

// --- Questão 2 --- \\

// const turnoUsuario = (prompt("Você estuda no turno M (matutino), V (vespertino) ou N (Noturno) ?"))

// const checarTurno = (turno) => {
//     if (turno == "M"){
        // console.log("Bom Dia! :)")
//     }else if (turno == "V"){
//         console.log("Boa Tarde! :)")
//     }else if (turno == "N"){
//         console.log("Boa Noite! :)")
//     }
// }

// checarTurno(turnoUsuario)

// --- Questão 3 --- \\

// let turnoUsuario = (prompt("Você estuda no turno M (matutino), V (vespertino) ou N (Noturno) ?"))
// switch (turnoUsuario){
//     case "M":
//         console.log("Bom Dia! :)")
//         break
//     case "V":
//         console.log("Boa Tarde! :)")
//         break
//     case "N":
//         console.log("Boa Noite! :)")
//         break
//     default:
//         console.log("Turno não encontrado :/, tente novamente utilizando apenas as letras inicias do turno em maisculas")
//         break
// }

// --- Questão 4 --- \\

// const genero = prompt("Qual genero de filme querem assistir ?")
// const preço = Number(prompt("Qual o valor do ingresso ?"))
// const confirmar = confirm(`o preço do ingresso é de R$ ${preço} deseja assistir o filme ?`)

// const confirmarEntrada = (genero, preco, confirma) =>{
//     const corrigirLetra = genero.toLowerCase()
//     const generoBoleano = corrigirLetra === "fantasia"
//     const precoBoleano = preco < 15 
//     const averiguar = (generoBoleano) && (confirma) && (precoBoleano)
//     console.log(averiguar)
//     if (averiguar){
//         console.log("Bom filme!")
//     }else{
//         console.log("Escolha outro filme :(")
//     }
// }

// confirmarEntrada (genero, preço, confirmar)