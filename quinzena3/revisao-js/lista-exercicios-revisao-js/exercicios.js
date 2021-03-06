// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = [] 
  for (let i = array.length - 1; i >= 0; i --){
    arrayInvertido.push(array[i])
 }
  return arrayInvertido
} 

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let filtro = (item) =>{
    if (item % 2 == 0){
      return item
    }
  }
  let filtrarNumeroPar = array.filter(filtro)
  let elevarAoQuadrado = (item) =>{
    return item*item
  }
  const novoArray = filtrarNumeroPar.map(elevarAoQuadrado) 
  return novoArray
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let filtroNumeropar = (item) =>{
    if (item % 2 == 0){
      return item
    }
  }
  let filtrarNumeroPar = array.filter(filtroNumeropar)
  return filtrarNumeroPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for (i = 0; i < array.length; i++) {
    if (array[i] > maiorNumero){
      maiorNumero = array[i]
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  function tamanhoDaLista (lista) {
    return lista.length
  }
  return tamanhoDaLista(array)
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  let arrayBooleanos = []

  const fazerListaBooleana = () =>{
    let primeiraExpressão = booleano1 && booleano2 && !booleano4
    arrayBooleanos.push(primeiraExpressão)

    let segundaExpressão = (booleano1 && booleano2) || !booleano3
    arrayBooleanos.push(segundaExpressão)

    let terceiraExpressão = (booleano2 || booleano3) && (booleano4 || booleano1)
    arrayBooleanos.push(terceiraExpressão)

    let quartaExpressão = !(booleano2 && booleano3) || !(booleano1 && booleano3)
    arrayBooleanos.push(quartaExpressão)

    let quintaExpressão = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
    arrayBooleanos.push(quintaExpressão)
  }

  fazerListaBooleana()

  return arrayBooleanos
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  
  arrayNumerosParesSelicionados = [];

  let separarNumerosPares = () =>{

    let todosOsNumerosPares = [];
    let numeros1Ao500 = [];

    for (let i = 0; i < 500; i++) {
      numeros1Ao500.push(i)
    };

    for (let i = 0; i < numeros1Ao500.length; i++) {
      if (i % 2 === 0) {
        todosOsNumerosPares.push(i)
      };    
    };
    
    return todosOsNumerosPares
  };

  let selicionarNumerosEscolhidos = (numerosPares) => {
    for (let i = 0; i < n; i++) {
      arrayNumerosParesSelicionados.push(numerosPares[i])
    };
  };

  selicionarNumerosEscolhidos(separarNumerosPares());

  return arrayNumerosParesSelicionados
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  
  let verificarLados = (a, b, c) => {
    if (a === b && a === c) {
      return "Equilátero"
    }else if (a === b && a !== c){
      return "Isósceles"
    }else if (a !== b && a !== c){
      return "Escaleno"
    }
  }

  return verificarLados(a, b, c)
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  
  const maiorNumero = (num1, num2) =>{
    if (num1 > num2) {
      return num1
    }else{
      return num2
    }
  }

  const menorNumero = (num1, num2) =>{
    if (num1 < num2) {
      return num1
    }else{
      return num2
    }
  }

  const checarDivisao = (maior, menor) => {
    if (maior % menor === 0){
      return true
    }else{
      return false
    }
  }

  let diferenca = maiorNumero(num1, num2) - menorNumero(num1, num2)

  let objetoRetornado = {
    maiorNumero: maiorNumero(num1,num2),
    maiorDivisivelPorMenor: checarDivisao(maiorNumero(num1,num2),menorNumero(num1,num2) ),
    diferenca: diferenca
  }

  return objetoRetornado
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
    
  let novoArray = []

  let maiorNumeroOriginal = -Infinity
  let menorNumeroOriginal = Infinity

  let segundoMaior = -Infinity
  let segundoMenor = Infinity

   const maiorNumero = (array) =>{
    for (let index = 0; index < array.length; index++) {
      if (array[index] > maiorNumeroOriginal){
        maiorNumeroOriginal = array[index]
      }
    }
  }
  maiorNumero(array)

  const menorNumero = (array) =>{
    for (let index = 0; index < array.length; index++) {
      if (array[index] < menorNumeroOriginal){
        menorNumeroOriginal = array[index]
      }
    }
  }
  menorNumero(array)

  let maiorNumeroFiltrado = array.filter(function(item){
      return item < maiorNumeroOriginal
  })
  
  let menorNumeroFiltrado = array.filter(function(item){
      return item > menorNumeroOriginal
  })

  const segundoMaiorNumero = (array) =>{
    for (let index = 0; index < array.length; index++) {
      if (array[index] > segundoMaior){
        segundoMaior = array[index]
      }
    }
  }
  segundoMaiorNumero(maiorNumeroFiltrado)

  const segundoMenorNumero = (array) =>{
    for (let index = 0; index < array.length; index++) {
      if (array[index] < segundoMenor){
        segundoMenor= array[index]
      }
    }
  }
  segundoMenorNumero(menorNumeroFiltrado)

  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)
    
  return novoArray
}

// EXERCÍCIO 11
function ordenaArray(array) {
  
  function bubbleSort(item) {
    for (let last = item.length -1; last > 0; last --){
      for (let i = 0; i < last; i++){
       if (item[i] > item[i + 1]){
         [item[i], item[i + 1]] = [item[i + 1], item[i]]
       } 
      }
    }
    return item
  }

  return bubbleSort(array)
}

// EXERCÍCIO 12
function filmeFavorito() {
  
  let filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }

  return filmeFavorito
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."

  let filmeFavorito = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }

  return `Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  let retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
 
  let anonimo = (pessoa) =>{
    const receber = pessoa
    const mudarNome ={
      ...receber, nome: "ANÔNIMO"
    } 
    return mudarNome
  }

  return anonimo(pessoa)
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  
  const filtrarAdultos = arrayDePessoas.filter(function(item){
    return (item.idade >= 18)
  })

  return filtrarAdultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  
  const filtrarAdolescente = arrayDePessoas.filter(function(item){
    return (item.idade < 18)
  })

  return filtrarAdolescente
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  const multiplarPor2 = array.map(function(item){
    return item * 2
  })

  return multiplarPor2
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  
  const multiplarPor2 = array.map(function(item){
    return item * 2
  })

  const passarParaString = multiplarPor2.map(function(item){
    return item.toString()
  })

  return passarParaString
}

// EXERCÍCIO 17C
function verificaParidade(array) {

  const verificarParOuImpar = array.map(function(item){
    if (item % 2 === 0){
      return `${item} é par`
    }else{
      return `${item} é ímpar`
    }
  })

  return verificarParOuImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  const pessoasAutorizadas = pessoas.filter(function(item){
    return item.altura >= 1.5 && item.idade > 14 && item.idade < 60 
  })

  return pessoasAutorizadas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

  const pessoasNaoAutorizadas = pessoas.filter(function(item){
    return item.altura < 1.5 || item.idade <= 14 || item.idade > 60
  })

  return pessoasNaoAutorizadas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
