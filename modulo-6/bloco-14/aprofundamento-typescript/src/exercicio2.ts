// A) entradas --> numeros, numerosOrdenados e soma || saidas --> estatisticas

// B)

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


// C)
type AmostraDeDados = {
    numeros: number[],
    estatisticas: Estatisticas
}

type Estatisticas = {
    maior: number,
    menor: number,
    media: number,
}

const numeros = [21, 18, 65, 44, 15, 18]

const amostraDeIdades : AmostraDeDados = {

    numeros: numeros,

    estatisticas: obterEstatisticas(numeros)
}