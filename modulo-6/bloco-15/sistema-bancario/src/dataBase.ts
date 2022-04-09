export type extract = {
    value: number,
    data: string,
    description: string
}

export type Users = {
    name: string,
    CPF: string,
    birthday: string,
    balance: number,
    extract: extract[] | undefined
}

export const users: Users[] = [
    {
        name: "teste",
        CPF: "teste",
        birthday: "tururu",
        balance: 0,
        extract: [{value:0, data:"", description:""}]
    }
]