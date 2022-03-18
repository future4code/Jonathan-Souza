// Exercicio 1

// A) Para acessar os paramentos enviado pelo terminla no node se utiliza o process.argv[2]
//    como ele ler estilo array tem que indicar a posição sendo que
//    indice 0 esta o proprio node e no 1 o arquivo e do 2 em diante vai ser os
//    paramentros enviados

// B)

const nome = process.argv[2]
const idade = process.argv[3]

const fraseRetornada = `Olá, ${nome}! Você tem ${idade} anos.`

console.log(fraseRetornada);

// C)


// const nome = process.argv[2]
// const idade = process.argv[3]
// const idadeFutura = parseInt(idade) + 7

// const fraseRetornada = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`

// console.log(fraseRetornada);