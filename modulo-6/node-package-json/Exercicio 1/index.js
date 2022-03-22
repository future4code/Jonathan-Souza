// Exercicio 1

// A) Para acessar os paramentos enviado pelo terminla no node se utiliza o process.argv[2]
//    como ele ler estilo array tem que indicar a posição sendo que
//    indice 0 esta o proprio node e no 1 o arquivo e do 2 em diante vai ser os
//    paramentros enviados

// B)
let red, blue
red = '\u001b[31m';
blue = '\u001b[34m';
    

if (process.argv[3] !== undefined){
    const nome = process.argv[2]
    const idade = process.argv[3]
    
    const fraseRetornada = `Olá, ${nome}! Você tem ${idade} anos.`
    
    console.log(blue, fraseRetornada);
    
    // C)
    
    
    const idadeFutura = parseInt(idade) + 7
    
    const fraseRetornada2 = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`
    
    console.log(blue, fraseRetornada2);
}else{
    console.log(red,"esperava pelo menos dois parametros, um nome e idade respectivamente");
}