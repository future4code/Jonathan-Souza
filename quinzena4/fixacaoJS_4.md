```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

  const filtrarNumeroEscolhido = (item) => {
      return  item === numeroEscolhido
  }
  
  let contagem = arrayDeNumeros.filter(filtrarNumeroEscolhido)
  
  if(contagem.length === 0){
    return "Número não encontrado"
  }else{
     return `O número ${numeroEscolhido} aparece ${contagem.length}x`
  }
 
}

```