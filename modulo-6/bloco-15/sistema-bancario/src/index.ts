import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users, extract } from "./dataBase";



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

// criar novo usuario (conta)
app.post("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        
        const {name, CPF, birthday}: Users = req.body

        // pega o ano atual
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear()

        // separa a data de nascimento para pegar apenas o ano
        const userBirthday = birthday.split("/")
        const userYear = Number(userBirthday[2])
        const userAge = currentYear - userYear

        // checa se é maior de idade
        if(userAge < 18){
            // retorna um erro como resposta da API
            errorCode = 406
            throw new Error("user must have 18+ years old")
        }

        const newUser: Users = {
            name: name,
            CPF: CPF,
            birthday: birthday,
            balance: 0,
            extract: undefined
        }

        users.push(newUser)

        res.status(201).send("account created")

    }catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// buscar saldo da conta pelo CPF
app.get("/users/:CPF", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        const CPF = req.params.CPF
        
        const findUser = users.find(e => e.CPF === CPF)
        
        const userBalance = findUser?.balance.toString()
        
        
        
        if(!findUser){
            errorCode = 404
            throw new Error("user not found try put CPF like this: XXX.XXX.XXX-XX")
        }

        res.status(200).send(userBalance)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// adcionar saldo na conta pelo CPF
app.put("/users/:balance", (req:Request, res:Response) =>{
    let errorCode = 400
    try {
        const {CPF, name, balance} = req.body

        const findUser = users.find(e => e.CPF === CPF)     
    
        if(!findUser){
            errorCode = 404
            throw new Error("user not found try put CPF like this: XXX.XXX.XXX-XX")
        }

        findUser.balance += Number(balance);
        
        res.status(200).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})