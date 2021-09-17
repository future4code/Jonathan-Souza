//--------------------------- Exercícios de interpretação de código ---------------------------//

//--------------------------- 1º QUESTÃO ---------------------------//
/*
Leia o código abaixo:
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
    10
    50
b) O que aconteceria se retirasse os dois `console.log` e
simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    Não ira aparecer nada pois só fez chamar a função mas não deu o console.log, logo não irá aparecer no console
*/
//--------------------------- 2º QUESTÃO ---------------------------//
/*
Leia o código abaixo:
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) Explique o que essa função faz e qual é sua utilidade
     essa função irá colocar todas as letras em minusculo e irá procurar a palavra cenoura, tem como utilidade padronizar o texto que
     usuário irá fazer, podendo assim deixar fazer alguma busca de palavra, que no caso é a palavra cenoura.
b)Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura --> eu gosto de cenoura true
     ii.  CENOURA é bom pra vista --> cenoura é bom para vista true
     iii. Cenouras crescem na terra --> cenouras crescem na terra true
*/

//--------------------------- Exercícios de escrita de código ---------------------------//

//--------------------------- 1º QUESTÃO ---------------------------//
/*
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
    "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
Lembrando que a função não possui entradas, apenas imprime essa mensagem.
*/

const fazendoFrase = () => {
    const fraseNova = `Eu sou Jonathan, tenho 20 anos, moro em Salvador e sou um estudante!`
    return fraseNova
}

const saidaDaFrase = fazendoFrase()
    console.log(saidaDaFrase)
;

//--------------------------- 1º QUESTÃO ---------------------------//
/*
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string)
e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
    Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

const informacaoUsuario = (nome, idade, endereco, profissao) => {
    const dadosUsuario = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`
    return dadosUsuario
};

const coletaDeDados = informacaoUsuario(
    prompt("Qual o seu nome?"),
    Number(prompt("Qual a sua idade?")),
    prompt("Qual cidade você mora?"),
    prompt("Qual sua profissão?")
);

const salvarDados = coletaDeDados
    console.log(salvarDados)
;

//--------------------------- 2º QUESTÃO ---------------------------//
/*
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
Invoque a função e imprima no console o resultado.
*/

const calculadora = (numero1, numero2) => {
    const calculo = numero1 + numero2
    return calculo
};

const coletaDosNumeros = calculadora(
    Number(prompt("Numero 1")),
    Number(prompt("Numero 2"))
);

const retornoDoCalculo = coletaDosNumeros
    console.log(retornoDoCalculo)
;

/*
b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
*/

const FuncaoMaiorOuIgual = (numero1, numero2) => {
    const MaiorOuIgual = numero1 <= numero2
    return MaiorOuIgual
};

const comparadorDeNumero = FuncaoMaiorOuIgual(
    prompt("Numero 1"),
    prompt("Numero 2")
)

const imprimirComparadorDeNumero = comparadorDeNumero
    console.log("O numero 1 é maior ou igual que o segundo ? " + imprimirComparadorDeNumero)

/*
c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/

const FuncaoParOuImpar = (numero1) => {
    const RestoDadivisaoPorDois = numero1 % 2
    const parOuImpar = RestoDadivisaoPorDois === 0
    return parOuImpar
};

const coletaDoNumero = FuncaoParOuImpar(
    prompt("Coloque um numero")
);

const impressaoColetaDoNumero = coletaDoNumero
    console.log("O numero é par ? " + impressaoColetaDoNumero)
;

/*
d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem,
juntamente com uma versão dela em letras maiúsculas.
*/

const FuncaoMensagem = (mensagem) => {
    const nomeMaisculo = mensagem.toUpperCase()
    const comprimentoDaMensagem = nomeMaisculo.length
    const impressao = console.log(nomeMaisculo, comprimentoDaMensagem)
    return impressao
};

const receberMensagem = FuncaoMensagem(
    prompt("Escrava uma mensagem")
)

const imprimirMensagem = receberMensagem
    console.log(imprimirMensagem)
// ;

//--------------------------- 3º QUESTÃO ---------------------------//
/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação
e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4
funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre
no console o resultado das operações:
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
*/

const funcaoSoma = (numero1, numero2) => {
    const soma = numero1 + numero2
    const imprimirSoma = console.log("Soma: " + soma)
    return imprimirSoma
};

const funcaoSubtracao = (numero1, numero2) => {
    const subtracao = numero1 - numero2
    const imprimirSubtracao = console.log("Diferença: " + subtracao)
    return imprimirSubtracao
};

const funcaoMultiplicacao = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2
    const imprimirMultiplicacao = console.log("Multiplicação: " + multiplicacao)
    return imprimirMultiplicacao
};

const funcaoDivisao = (numero1, numero2) => {
    const divisao = numero1 / numero2
    const imprimirDivisao = console.log("Divisâo: " + divisao)
    return imprimirDivisao
};

const coletaDoNumero1 = Number(prompt("Insira um numero")) 
const coletaDoNumero2 = Number(prompt("Insira outro numero")) 

const distribuicao = funcaoSoma (coletaDoNumero1, coletaDoNumero2)
const distribuicao2 = funcaoSubtracao (coletaDoNumero1, coletaDoNumero2)
const distribuicao3 = funcaoMultiplicacao (coletaDoNumero1, coletaDoNumero2)
const distribuicao4 = funcaoDivisao (coletaDoNumero1, coletaDoNumero2)

