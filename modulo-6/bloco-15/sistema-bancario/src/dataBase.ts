export type extract = {
    value: number,
    date: string,
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
        name: "lontrinha",
        CPF: "110.120.130-20",
        birthday: "10/10/1999",
        balance: 0,
        extract: [
            {
                value:20,
                date:"09/05/2022",
                description:"chinelo"
            }
        ]
    }
]