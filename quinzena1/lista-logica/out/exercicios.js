// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("digite a altura do retangulo"))
  const largura = Number(prompt("digite a largura do retangulo"))
  const calculoDaArea = altura * largura
    console.log(calculoDaArea)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoDeNascimento = Number(prompt("Digite o ano em que nasceu"))
  const calculoDeIdade = anoAtual - anoDeNascimento
    console.log(calculoDeIdade)
}

// Exercício 3
function calculaIMC() {
  const pesoDoUsuario = Number(prompt("Digite o seu peso atual em kilogramas(Kg)"))
  const alturaDoUsuario = Number(prompt("Digite o sua altura em metros(m)"))
  const calculoDoImc = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)
    console.log(calculoDoImc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nomeDoUsuario = prompt("Qual o seu nome?")
  const idadeDoUsuario = prompt("Qual a sua idade?")
  const emailDoUsuario = prompt("Qual o seu e-mail?")
    console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const corFavoritaUsuario = prompt("Qual sua cor favorita ?")
  const corFavoritaUsuario2 = prompt("Qual sua segunda cor favorita ?")
  const corFavoritaUsuario3 = prompt("Qual sua terceira cor favorita ?")
  const arrayCofavoritaDoUsuario = [corFavoritaUsuario, corFavoritaUsuario2, corFavoritaUsuario3]
    console.log(arrayCofavoritaDoUsuario)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const fraseString = prompt("Insira uma frase")
    console.log(fraseString.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoDoEspetaculo = prompt("Quanto vocês gastou para fazer este espetaculo ?")
  const precoDoIngresso = prompt("Qual o valor de venda do ingressos ?")
  const calculoParaNaoDaPrejuizo = custoDoEspetaculo / precoDoIngresso
    console.log(calculoParaNaoDaPrejuizo)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const primeiraFrase = prompt("Escreva uma frase")
  const segundaFrase = prompt("Escreva outra frase")
    console.log(primeiraFrase.length === segundaFrase.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Escreva uma frase")
  const segundaString = prompt("Escreva outra frase")
    console.log(primeiraString.toUpperCase() === segundaString.toUpperCase())
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoDeNascimento = Number(prompt("Digite o ano em que nasceu"))
  const anoDoRg = Number(prompt("Digite o ano em que fez sua carteira de identidade"))
  const calculoDeIdade = anoAtual - anoDeNascimento
  const calculoDoRg = anoAtual - anoDoRg
  const menosDe20 = calculoDoRg
}

// Exercício 11
function checaAnoBissexto() {
  const ano = Number(prompt("Digite o ano"))
  const calculoMultiploDe400 = ano % 400
  const calculoMultiploDe4 = ano % 4
  const calculoMultiploDe100 = ano % 100
  const checar400 = calculoMultiploDe400 === 0
  const checar4 = calculoMultiploDe4 === 0
  const checar100 = calculoMultiploDe100 !== 0
    console.log(checar400 || checar4 && checar100) 
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Voce tem mais de 18 anos?")
  const escolariadde = prompt("Voce tem ensino medio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const checarIdade = idade === "sim"
  const checarEscolaridade = escolariadde === "sim"
  const checarDisponibilidade = disponibilidade === "sim"
    console.log(checarDisponibilidade && checarEscolaridade && checarIdade)
}