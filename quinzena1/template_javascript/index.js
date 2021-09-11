/*
Exercícios de interpretação de código

1º Questão
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) -> Resultado: False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) -> Resultado: False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) -> Resultado: True

console.log("d. ", typeof resultado) -> Resultado: Boolean

// ------------------------------------------------------------------------------------------------ \\
2º Questão
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

Todo e qualquer valor que vem de um prompt irá vim como uma string, logo para fazer operações aritmeticas é recomendado usar a atribuição number.
da forma que estar este algoritmo ele irá juntar os numeros e não soma-los, pois são duas string, ou seja para o computador são duas "frases",
para fazer a soma funcionar ele teria que re-escrever da seguinte maneira:

// ------------------------------------------------------------------------------------------------ \\
3º Questão
let primeiroNumero = Number(prompt("digite um numero!"))
let segundoNumero = Number(prompt("digite um numero!"))

*/
// ------------------------------------------------------------------------------------------------ \\

// Exercícios de escrita de código

// // 1º Questão
const idadeUsuario = Number(prompt("Qual sua idade?"))
const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log("a diferença de idade dos dois é de", idadeUsuario - idadeAmigo,"anos")

// ------------------------------------------------------------------------------------------------ \\

// 2º Questão

const numerPar = Number(prompt("Insira um numero Par!!"))
const divisão = 2
console.log("O resto da divisão é:", numerPar % divisão) 

// Qualquer numero Par dividido por 2 apareceu zero, pois não tem nenhuma sobra da divisão
// Todo numero impar apareceu uma sobra de divisão 1

// ------------------------------------------------------------------------------------------------ \\

// 3º Questão

const numero1 = Number(prompt("Insira um numero!!"))
const numero2 = Number(prompt("Insira outro numero!!"))

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 >= numero2)
console.log("O segundo numero é divisível pelo primeiro?", numero2 >= numero1)

// ------------------------------------------------------------------------------------------------ \\

// DESAFIO!!!

// 1º Questão

const numeroSolicitado = Number(prompt("calculadora °C para °F e °K"))
const conversaoCelsiuParaFarenheit = Number(numeroSolicitado * (9/5) + 32)
const conversaoFahrenheitParaKelvin = Number((conversaoCelsiuParaFarenheit - 32) * (5/9) + 273.15)


console.log("77°F em °K é",(77 - 32) * (5/9) + 273.15)
console.log("80°C em °F é", (80) * (9/5) + 32)
console.log("30°C em °F e °K respectivamente é", (30) * (9/5) + 32,"e", (86 - 32) * (5/9) + 273.15)
console.log("A conversão de", numeroSolicitado,"°C", "para °F é", conversaoCelsiuParaFarenheit, "e para °K é", conversaoFahrenheitParaKelvin)