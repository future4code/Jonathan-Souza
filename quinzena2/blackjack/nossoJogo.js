/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const boasVindas = alert("Boas vindas ao jogo de Blackjack!")
const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

const jogo = () =>{
   
   let pontosDoUsuario 
   let pontosDaMesa
   let maoDaMesa
   let maoDoUsuario

   if (iniciarJogo === true){
      let usuarioCarta1 = comprarCarta()
      let usuarioCarta2 = comprarCarta()
      let mesaCarta1 = comprarCarta()
      let mesaCarta2 = comprarCarta()
      pontosDoUsuario = usuarioCarta1.valor + usuarioCarta2.valor
      pontosDaMesa = mesaCarta1.valor + mesaCarta2.valor
      maoDoUsuario = `Usuário - cartas: ${usuarioCarta1.texto} ${usuarioCarta2.texto}  - pontuação ${pontosDoUsuario}`
      maoDaMesa = `Usuário - cartas: ${mesaCarta1.texto} ${mesaCarta2.texto}  - pontuação ${pontosDaMesa}`

      console.log(maoDoUsuario)
      console.log(maoDaMesa)
   }else{
      console.log("O jogo acabou")
   }
  
   if (pontosDoUsuario > pontosDaMesa) {
      console.log("O usuário ganhou!")
   }else if(pontosDoUsuario < pontosDaMesa) {
      console.log("A mesa ganhou!")
   }else if(iniciarJogo === true && pontosDoUsuario == pontosDaMesa){
      console.log("Empate!")
   }
}
console.log(jogo())