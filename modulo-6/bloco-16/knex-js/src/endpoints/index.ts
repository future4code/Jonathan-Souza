import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getActorById } from "./getActor";
import { getCountActorByGender } from "./getCountActorByGender";
import { putNewSalary } from "./putNewSalary";
import { deleteActor } from "./deleteActor";
import { getAverageSalary } from "./getAverageSalary";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
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

// Exercico 1

// A) - quando usamos o metodo RAW tem a mesma resposta que o SQL
//      ou seja um array de array de objetos 

// B)
app.get("/actors/:id", async (req:Request, res:Response) => {
try {
    const result =  await getActorById(req.params.id)
    res.status(200).send(result)
} catch (error) {
    res.status(400).send("Unexpected error")
}
})

// C)
app.get("/actorsCount/:gender", async (req:Request, res:Response) => {
    try {
        const result = await getCountActorByGender(req.params.gender)
        
        res.status(200).send(result.toString())
    } catch (error) {
        res.status(400).send("Unexpected error")
    }
})

// Exercicio 2

// A)
app.put("/actors/:id", async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        const salary = Number(req.body.salary)

        putNewSalary(id,salary)
        
        res.status(200).send({response: "salary has been updated"})
    } catch (error) {
        res.status(400).send("Unexpected error")
    }
})

// B)
app.delete("/actors/:id", async (req:Request, res:Response) => {
    try {
        const id = req.params.id
        deleteActor(id)

        res.status(200).send("Actor deleted")
    } catch (error) {
        res.status(400).send("Unexpected error")
    }
})

// C)
app.get("/averageSalary/:gender", async (req:Request, res:Response) => {
    try {
        const gender = req.params.gender
        
        const result = getAverageSalary(gender)

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Unexpected error")
    }
})