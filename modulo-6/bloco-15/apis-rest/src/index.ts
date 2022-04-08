import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

type user = { 
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// Exercicio 1
app.get("/users", (req:Request, res:Response) => {
    // A - Usa-se o metodo GET pois estamos pegando uma informação do "banco de dados"
    // B - Indicaria como user pois estamos puxando as infos dos usarios
    try{
        if(!users){
            throw new Error("users not found")
        }
        res.status(200).send(users)
    }catch(error:any){
        res.status(404).send(error.message)
    }
})

// Exercicio 2
app.get("/users/:type", (req:Request, res:Response) => {
    // A - Usei um filtro para ver os type do usarios ja criado
    // B - Não tinha pensado muito como fazer diferente, mas vendo as dicas
    // usando um enum type para apenas aceitar ADMIN ou NORMAL
    try {
        let type = req.params.type
        
        let filterType = users.filter(users => users.type === type)

        if(filterType.length < 1){
            throw new Error("users type not found try: ADMIN or NORMAL")
        }
        res.status(200).send(filterType)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

// Exercicio 3
app.get("/users/filter/:name", (req:Request, res:Response) => {
    // A - o tipo do paramentro normalmente é STRING
    try {
        let name = req.params.name
        
        let userFilter = users.find(users => users.name === name)
        
        if(!userFilter){
            throw new Error("user name not found")
        }

        res.status(200).send(userFilter)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

// Exercicio 4
app.post("/users", (req:Request, res:Response) => {
    try {
        // A - Não teve mudança nenhuma colocando o metodo como PUT, apenas tive que chama-lo
        // sendo PUT
        // B - Não, Pois estamos colocando um novo usuario por completo e não inserindo um
        // novo parametro para algo ja feito

        const {id, name, email, type, age} : user = req.body
        
        if(!id || !name || !email || !type || !age){
            throw new Error("you missed one or more field")
        }

        const newUser: user = {
            id, name, email, type, age
        }

        users.push(newUser)

        res.status(201).send(users)

    } catch (error:any) {
        res.status(402).send(error.message)
    }
})