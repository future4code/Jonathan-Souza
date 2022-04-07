// A)
/*
const minhaVar: string = 2 
o TS indica que tem um erro pois definimos que essa variavel iria guardar uma string
Logo quando ele percebe que chega um number ele não "ler" e acaba denunciando o erro.
*/

// B)
/*
const meuNumero: number = 2
para fazer com que a variavel aceite tanto valores de string quanto number, podemos colcar um pep
no tipo e escrever o novo tipo, no caso ficaria desta forma: const meuNumero: number | string = "2"
colocando desta forma, a variavel irá aceitar os dois tipo
*/

// C)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: ArcoIris
}

enum ArcoIris{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const pessoa: Pessoa = {
    nome: "",
    idade: 0,
    corFavorita: ArcoIris.AMARELO
}

const pessoa2: Pessoa = {
    nome: "",
    idade: 0,
    corFavorita: ArcoIris.LARANJA
}

const pessoa3: Pessoa = {
    nome: "",
    idade: 0,
    corFavorita: ArcoIris.VERDE
}