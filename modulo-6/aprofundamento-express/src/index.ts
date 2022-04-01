import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import cors from "cors"
import { listToDo } from "./listToDo";

type ListToDo = {
    userId: string,
    id: string,
    title: string,
    completed: boolean
}[]

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// Exercicio 1
app.get("/ping", (req:Request, res:Response) => {
    res.send("pong")
})

// Exercicio 4
app.get("/tasks", (req:Request, res:Response) => {
    res.status(200).send(
        listToDo
    )
})

app.get("/tasks/finished", (req:Request, res:Response) => {
    let taskFinished = listToDo.filter(e => e.completed === true)

    res.status(200).send(
        taskFinished
    )
})

app.get("/tasks/todo", (req:Request, res:Response) => {
    let taskToDo = listToDo.filter(e => e.completed === false)

    res.status(200).send(
        taskToDo
    )
})

// Exercicio 5
app.post("/createTask", (req:Request, res:Response) => {
    const newTask =  {
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    }

    listToDo.push(newTask)
    res.status(200).send(listToDo)
})

// Exercicio 6
app.post("/changeTaskStatus", (req:Request, res:Response) => {
    const taskWhoChange = listToDo.map(e => e.id).filter(e => e === req.query.id)
    
  
    let result = listToDo.reduce((acc: ListToDo, o) => {

        let obj = taskWhoChange.includes(o.id) ? Object.assign(o, o.completed ? { completed: false } : { completed: true}) : o;
        
        acc.push(obj);
        
        return acc;
    }, []);

    res.status(200).send(result)
})