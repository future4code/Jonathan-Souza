// exercicio 1

function checarTriangulo(a:number, b:number, c:number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
    }
}

console.log("Exercicio 1  --> ",checarTriangulo(2,2,2))

// exercicio 2

function imprimeTresCoresFavoritas(a:string, b:string, c:string): string[]{
   const listaDeCores: string[] = [a,b,c]
    return listaDeCores
}

console.log("Exercicio 2  --> ",imprimeTresCoresFavoritas("azul", "vermelho", "laranja"))

// exercicio 3

function checaAnoBissexto(ano:number): boolean {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}

console.log("Exercicio 3  --> ",checaAnoBissexto(1989));

// Exercicio 4

function comparaDoisNumeros(num1:number, num2:number): number {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca:number = maiorNumero - menorNumero;
  
    return diferenca 
}

console.log("Exercicio 4  --> ", comparaDoisNumeros(5,10))

// Exercicio 5

function checaRenovacaoRG(anoAtual:number, anoNascimento:number, anoEmissao:number) {

    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
 
    if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
    }else {
        return "error"
    }
}

console.log("Exercicio 4  --> ", checaRenovacaoRG(2022, 2010, 2015))