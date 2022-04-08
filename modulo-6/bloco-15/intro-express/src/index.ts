import express, {Request, Response} from "express";
import cors from "cors"
import { users } from "./users";

const app = express();
app.use(express.json());
app.use(cors());


app.listen(3000, () => {
    console.log("Servidor Rodando");
})

app.get("/", (req: Request,res: Response) => {
    res.status(200).send("tudo numa boa")
})


app.get("/users", (req:Request, res:Response) => {
    res.status(200).send(users)
})

app.get("/userspost", (req:Request, res:Response) => {
    // não conseguir acessar o array de post dentro do objeto
    let filtredUser

    if (!req.query.name === false){
        filtredUser = users.filter(e => e.name === req.query.name)  
    }else if(!req.query.id === false){
        filtredUser = users.filter(e => e.id === req.query.id)  
    }else{
        res.status(400).send("Key passada de forma errada, por favor tente name ou id")
    }
    
    res.status(200).send(filtredUser)
})