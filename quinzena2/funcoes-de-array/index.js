// ----------------------- Exercícios de interpretação de código ----------------------- \\

// --- Questão 1 --- \\

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
// })

// a) O que vai ser impresso no console? 

// 0 objeto objeto
// 1 objeto objeto
// 2 objeto objeto
// [{ nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }]

// --- Questão 2 --- \\

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

// a) O que vai ser impresso no console? 

// [Amanda Rangel, Laís Petra, Letícia Chijo]

// --- Questão 3 --- \\

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

// a) O que vai ser impresso no console? 

// [Mandi, Laura]



// ----------------------- Exercícios de escrita de código ----------------------- \\

// --- Questão 1 --- \\

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
// ]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomePets = pets.map((item) => {
//     return item.nome
// })

// console.log(nomePets)

// -----------------------------------------------------------------------

// b) Crie um novo array apenas com os cachorros salsicha

// const petSalsicha = pets.filter((item) => {
//     return item.raca === "Salsicha"
// })

// console.log(petSalsicha)

// -----------------------------------------------------------------------

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//    A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!

// const selecionarPoodles = pets.filter((item) => {
//     return item.raca === "Poodle"
// })

// const imprimirDesconto = selecionarPoodles.map((item) => {
//     const imprimir = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
//     return imprimir
// })

// console.log(imprimirDesconto)






// --- Questão 2 --- \\

// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomeItem = produtos.map((item) => {
//     return item.nome
// })

// console.log(nomeItem)


// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const produtosComDesconto = produtos.map((item) =>{
//     const desconto = {nome: item.nome, preco: item.preco*0.05}
//     return desconto
// })

// console.log(produtosComDesconto)


// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const filtrarBebidas = produtos.filter((item) => {
//     return item.categoria === "Bebidas"
// })

// console.log(filtrarBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const filtrarYpê = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })

// console.log(filtrarYpê)


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse
//    array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê

// const filtrarYpê = produtos.filter((item, index, array) => {
//     return item.nome.includes("Ypê")
// })

// const imprimirPropaganda = filtrarYpê.map((item) => {
//     return `Compre ${item.nome} por ${item.preco}`
// })

// console.log(imprimirPropaganda)