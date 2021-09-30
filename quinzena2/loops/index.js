// ---------- Exercícios de interpretação de código ---------- \\

// --- Questão 1 --- \\

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// esse loop esta fazendo com que o i percorra o valor de 0 até 4, ou seja o i e depois
// somando o valor de i com o valor da variavel "valor", fazendo com que seja impreço
// no console o resultado de "10", pois vai fazer o seguinte passo a passo
// 0 + 0 = 0 (e armazenar o resulado na variavel "valor")
// 0 + 1 = 1 (e armazenar o resulado na variavel "valor")   
// 1 + 2 = 3 (e armazenar o resulado na variavel "valor")
// 3 + 3 = 6 (e armazenar o resulado na variavel "valor")
// 6 + 4 = 10 (e armazenar o resulado na variavel "valor")
// parando o loop aqui pois atingiu a condição de parada pois i ficou igual ou maior 5
// fazendo assim a parada do codigo

// --- Questão 2 --- \\

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?

// 19, 21, 23, 25, 27, 30

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of...
// é suficiente? Se não, o que poderia ser usado para fazer isso?

// podemos acessar com o for...of..., porem podemos ter um maior controle usando o
// o for, escrevendo da seguinte forma:
// valor = undefined
// for(let i = 0; i < lista.length; i++){
//     valor = lista[i]
// }

// --- Questão 3 --- \\

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Qual seria o resultado impresso no console, se o usuário digitasse o número 4 
// *
// **
// ***
// ****
// pois a situação de parada do loop é quando a quantidadeAtual for igual a quantidadeTotal
// fazendo com que seja impresso uma linha com "*" até que a quantidadeAtual fique = quantidadeTotal
// quem adciona os "*" no console é um loop for, que sua situação de parada é quando asterisco for igual ou maior que a quantidadeAtual + 1
// que é a mesma coisa de quantidadeTotal, enquanto não chegar nesse cenario ele ira continuar percorrendo e adcionando mais um "*"
// na variavel "linha"



// ---------- Exercícios de escrita de código ---------- \\

// --- Questão 1 --- \\

// const bichosUsuario = Number(prompt("Quantos bichos de estimação você tem, caso não tenha coloque 0"))

// const bichos = (pet) =>{
//     if(pet === 0){
//         console.log("Que pena! Você pode adotar um pet!")
//     }else if (pet !== 0){
//         let arrayPets = []
//         let quantidadeAtual = 0
//         let quantidadeTotal = pet
//         while (quantidadeAtual < quantidadeTotal){
//             const nomeDosPets = prompt("Qual(s) o(s) nome(s) do(s) seu(s) pet(s) ?")
//             let implementarArray = arrayPets.push(nomeDosPets)
//             quantidadeAtual ++
//         }
//         console.log(arrayPets)
//     }
// }

// bichos(bichosUsuario)


// --- Questão 2 --- \\

// const ArrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta Item A

// ArrayOriginal.forEach(function (item, indice, array) {
//     console.log(item)}
// )

// Resposta Item B

// ArrayOriginal.forEach(function (item, indice, array) {
//     console.log(item/10)}
// )

// Resposta Item C

// const puxarNumerosPares = () =>{
//     let novoArray = []
//     for (let i = 0; i < ArrayOriginal.length; i++){
//         const posicaoAtual = ArrayOriginal[i]
//         if(posicaoAtual%2 === 0){
//             novoArray.push(ArrayOriginal[i])
//         }
//     }
//     return novoArray
// }
// console.log(puxarNumerosPares())

// Resposta Item D

// ArrayOriginal.forEach(function (item, indice) {
//     console.log(`O elemento do índex ${indice} é: ${item}`)}
// )

// Resposta Item E

// const maiorNumero = () =>{
//     let numeroMaior = ArrayOriginal[0]
//     for (let i = 0; i < ArrayOriginal.length; i++){
//         const posicaoAtual = ArrayOriginal[i]
//         if(posicaoAtual >= numeroMaior)
//             numeroMaior = posicaoAtual
//     }
//     return numeroMaior
// }

// const menorNumero = () =>{
//     let numeroMenor = ArrayOriginal[0]
//     for (let i = 0; i < ArrayOriginal.length; i++){
//         const posicaoAtual = ArrayOriginal[i]
//         if(posicaoAtual < numeroMenor)
//             numeroMenor = posicaoAtual
//     }
//     return numeroMenor
// }

// console.log(`O maior número é ${maiorNumero()} e o menor é ${menorNumero()}`)