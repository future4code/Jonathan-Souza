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

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

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
