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

// chamar o array de usarios
app.get("/allusers", (req:Request, res:Response) => {
    res.status(200).send(users)
})

// criar novo usuario (conta)
app.post("/users", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        
        const {name, CPF, birthday}: Users = req.body

        // procura se usario existe
        const findUser = users.find(e => e.CPF === CPF)
        if(findUser !== undefined){
            errorCode = 409
            throw new Error("cpf already cadastred")
        }

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

        // separa o usario pelo CPF
        const findUser = users.find(e => e.CPF === CPF)     
        
        // valida se o usario ja existe
        if(!findUser){
            errorCode = 404
            throw new Error("user not found try put CPF like this: XXX.XXX.XXX-XX")
        }

        findUser.balance += Number(balance);
        
        res.status(200).send("deposit made successfully")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// faz o agendamento para pagar a conta
app.put("/users/payment/:CPF/:name", (req:Request, res:Response) => {
    let errorCode = 400
    try {
        // pega informação do usuario
        const {CPF, name} = req.params 
        let {value, date, description} = req.body
        
        // pega a data atual
        const currentTime = new Date();
        const currentYear = currentTime.getFullYear()
        const currentDay = currentTime.getDate();
        const currentMonth = currentTime.getMonth() + 1;
        const currentDate = currentDay + "/" + currentMonth + "/" + currentYear

        // pega a data do pagamento
        const userData = date.split("/")
        const userDay = Number(userData[0])
        const userMonth = Number(userData[1])
        const userYear = Number(userData[2])

        // separa o usario pelo CPF
        const findUser = users.find(e => e.CPF === CPF)     
        
        // valida se o usario ja existe
        if(!findUser){
            errorCode = 404
            throw new Error("user not found")
        }       
        
        // Valida se a data de agendamento é um dia que já passou
        if(userYear <= currentYear && userMonth <= currentMonth && userDay < currentDay){
            errorCode = 406
            throw new Error("date is not acceptable")
        }
        
        // Valida se o usario tem dinheiro para fazer o pagamento
        if(findUser.balance < value){
            errorCode = 406
            throw new Error("you don't have money for that :(")
        }

        // se o usario não passou a data ele adiciona a data manualmente
        if(!date){
            date = currentDate
        }

        // adciona o extrato na conta do usario e faz o pagamento
        if(!findUser.extract){

            const newPayment: extract[] = [{
                value: Number(value),
                date: date,
                description: description
            }]
            
            findUser.extract = newPayment
            findUser.balance -= value
        }else{

            const newPayment: extract = {
                value: Number(value),
                date: date,
                description: description
            }

            findUser.extract?.push(newPayment)
            findUser.balance -= value
        }


        res.status(200).send("scheduled payment")

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})