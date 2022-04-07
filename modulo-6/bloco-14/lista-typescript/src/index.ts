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

// Exercicio 5

enum ROLE {
    USER = "User",
    ADMIN = "Admin"
}

type Usuarios = {
    name: string,
    email: string,
    role: ROLE
}[]

const listaUsuario: Usuarios = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

const filtrarEmailAdmin = (usuarios: Usuarios): string[] => {
    let emailsAdmin: string[] = []
    const admin = usuarios.filter(i => i.role === ROLE.ADMIN)
    admin.forEach(i => emailsAdmin.push(i.email))
    return emailsAdmin
}
console.log("Exercicio 5 -----> ", filtrarEmailAdmin(listaUsuario));

// Exercicio 6

type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos:number[]
}[]

const ListaDosClientes: Clientes= [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const descontarDebitos = (lista: Clientes): any => {
    
    const ListaAtualizada: Clientes = lista.map((cliente)=>{
        let Somadebitos:number = cliente.debitos.reduce((total, numero) => total + numero, 0)

        cliente["saldoTotal"] -= Somadebitos; 
        return cliente
    })

    return ListaAtualizada.filter(i => i.saldoTotal < 0)
}
console.log("Exercicio 6 -----> ", descontarDebitos(ListaDosClientes));
