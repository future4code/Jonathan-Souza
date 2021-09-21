// ---------- Exercícios de interpretação de código ---------- \\

// --- Questão 1 --- \\

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Virginia Cavendish
// Canal Brasil 19h


// --- Questão 2 --- \\

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?

// nome: "Juca",
// idade: 3,
// raca: "SRD"

// nome: "Juba",
// idade: 3,
// raca: "SRD"

// nome: "Jubo",
// idade: 3,
// raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ele irá copiar tudo que esta dentro do console


// --- Questão 3 --- \\

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// tem duas formas de chamar um item dentro do objeto, a primeira utilizando um ponto "." e outra com colchete e aspas
// então como a parametro "objeto" e "propriedade" estão como "any", ou seja pode assumir qualquer valor que for empurrado posteriormente para eles
// quando empurramos o objeto "pessoa" para o parametro "objeto" e damos o valor de ""backender"" para o parametro propriedade, acabamos de fazer a
// sintaxe de chamar um item dentro do objeto, que no caso é pessoa["backender"] -> aqui ele esta pedindo o seguinte oque tem dentro de backender que
// esta dentro de pessoa ? e ele acaba retornando "false" no console pois esse é o valor que esta atribuido para o "backender" dentro do objeto "pessoa"
// e quando colocamos "altura" depois vem como undefined pois não tem nenhuma propriedade com esse nome dentro do objeto "pessoa"



// ---------- Exercícios de escrita de código ---------- \\

// --- Questão 1 --- \\
 
// const pessoa = {
//     nome: "Jonathan",
//     apelido: [
//         "john",
//         " jonjon",
//         " jonata"    
//     ]
// }

// const elaboraçãoDaFrase = (objeto) => {
//     const elaboracaoDaFrase = `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}`
//     const imprecao = elaboracaoDaFrase
//     return imprecao
// }

// console.log(elaboraçãoDaFrase(pessoa))

// const apelidoNovo = {
//     ...pessoa,
//     apelido: [
//         "Sevenths",
//         " uva",
//         " lreporter"
//     ]
// }

// console.log(elaboraçãoDaFrase(apelidoNovo))


// --- Questão 2 --- \\

// const dados = {
//     nome: "Jonathan",
//     idade: 20,
//     profissao: "Jovem aprendiz"
// }

// const imprimir = () =>{
//     const numeroDeCaracteresDeNome = dados.nome.length
//     const numeroDeCaracteresDeProfissao = dados.profissao.length
//     const array = [
//         dados.nome,
//         numeroDeCaracteresDeNome,
//         dados.idade,
//         dados.profissao,
//         numeroDeCaracteresDeProfissao
//     ]
//     return array
// }

// console.log(imprimir())


// --- Questão 3 --- \\

// let carrinho = []

// const primeiraFruta = {
//     fruta: "Banana",
//     disponivel: true
// }

// const segundaFruta = {
//     fruta: "Uva",
//     disponivel: true
// }

// const terceiraFruta = {
//     fruta: "Melancia",
//     disponivel: false
// }

// const empurrarParaCarrinho = (frutaA, frutaB, frutaC) =>{
//     const empurrar1 = carrinho.push(frutaA)
//     const empurrar2 = carrinho.push(frutaB)
//     const empurrar3 = carrinho.push(frutaC)
// }

// const jogaraParaFuncao = empurrarParaCarrinho(primeiraFruta, segundaFruta, terceiraFruta)

// console.log(carrinho)



// ---------- Desafios  ---------- \\


// --- Questão 1 --- \\

// const dadosDoUsuario = () =>{
//     const nome = prompt("Qual seu nome?")
//     const idade = Number(prompt("Qual sua idade?"))
//     const profissao = prompt("Qual sua profissao?")
//     const juntarDados = {
//         nomeDoUsuario: nome,
//         idadeDoUsuario: idade,
//         profissaoDoUsuario: profissao
//     }
//     return juntarDados
// }

// console.log(dadosDoUsuario())


// --- Questão 2 --- \\

// const comparadorDeFilmes = () => {
//     const filme1 = {
//         anoDeLancamento: 2004,
//         nomeDoFilme: "Harry potter e o prisioneiro de azkaban"
//     }

//     const filme2 = {
//         anoDeLancamento: 2014,
//         nomeDoFilme:"O Hobbit: A Batalha dos Cinco Exércitos"
//     }

//     const imprimir = `
//         O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}
//         O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento == filme2.anoDeLancamento}
//     `

//     return imprimir
// }

// console.log(comparadorDeFilmes())


// --- Questão 3 --- \\

// let carrinho = []

// const primeiraFruta = {
//     fruta: "Banana",
//     disponivel: true
// }

// const segundaFruta = {
//     fruta: "Uva",
//     disponivel: true
// }

// const terceiraFruta = {
//     fruta: "Melancia",
//     disponivel: false
// }

// const empurrarParaCarrinho = (frutaA, frutaB, frutaC) =>{
//     const empurrar1 = carrinho.push(frutaA)
//     const empurrar2 = carrinho.push(frutaB)
//     const empurrar3 = carrinho.push(frutaC)
// }

// const jogaraParaFuncao = empurrarParaCarrinho(primeiraFruta, segundaFruta, terceiraFruta)

// console.log(carrinho)


// const  auxiliarControleDeEstoque = (fruta1) => {
//     const mudarDisponibilidade = fruta1.disponivel = !fruta1.disponivel
//     const imprimirMudanca = fruta1
//     return imprimirMudanca
// }

// const jogarParaAuxiliar = auxiliarControleDeEstoque(primeiraFruta)
// console.log(jogarParaAuxiliar)