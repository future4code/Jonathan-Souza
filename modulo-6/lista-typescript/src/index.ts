// Exercicio 1
const pessoa = (nome: string, nascimento: string) => {
    
    const parte = nascimento.split('').filter( p => p!= '/')
    
    let dia: string = parte[0] + parte[1]
    let mes: string = parte[2] + parte[3]
    let ano: string = parte[4] + parte[5] + parte[6] + parte[7]


    return (`"Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}" `);
}
console.log("Exercicio 1 -----> ",pessoa("jon",'14/07/2001'));

// Exercicio 2
const checkType = (type: any) =>{
    return typeof(type)
}
console.log("Exercicio 2 -----> ",checkType({}));

// Exercicio 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const filme = (nome : string, ano : number, genero : GENERO, nota? : number) =>{
    return {nome, ano, genero, nota}
}
console.log("Exercicio 3 -----> ", filme('teste', 2020, GENERO.ROMANCE, 10));

// Exercicio 4

enum SETOR {
    MARKETING = 'Marketing',
    VENDAS = 'Vendas',
    FINANCEIRO = 'Financeiro'
}

type Colaboradores = {
    nome: string,
    salário: number,
    setor: SETOR,
    presencial: boolean
}[]

const colaboradores: Colaboradores= [
	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
]

const filtroColaboradores = (colaboradores: Colaboradores) => {
    return colaboradores.filter(i => i.setor === SETOR.MARKETING && i.presencial === true)
}
console.log("Exercicio 4 -----> ",filtroColaboradores(colaboradores));
