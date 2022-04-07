import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import cors from "cors"
import { products } from "./data"


const app = express();
app.use(express.json());
app.use(cors());
const { v4: uuidv4 } = require('uuid');

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

// Exercicio 1
app.get("/teste", (req: Request, res:Response) => {
    res.status(201).send("Server is running")
})

// Exercicio 2
// data criado

// Exercicio 3 / 7
app.post("/addproduct", (req:Request, res:Response) => {
    
    if(!req.body.name && !req.body.price){
        throw new Error();
    }

    const newProduct = {
        id: uuidv4(),
        name: req.body.name,
        price: Number(req.body.price)
    }

    products.push(newProduct)

    res.status(201).send(products)
})

// Exercicio 4
app.get("/allproduct", (req:Request, res:Response) => {
    res.status(200).send(products)
})

// Exercicio 5
app.put("/editprice", (req:Request, res:Response) => {
    
    const productWhoChangePrice:any = products.find(e => e.name === req.query.name)
    productWhoChangePrice.price = Number(req.body.price);
   
    res.status(200).send(products)
})

// Exercicio 6
app.delete("/deleteproduct", (req:Request, res:Response) => {
    const productWhoDelete:any = products.find(e => e.name === req.query.name)
    products.splice(products.indexOf(productWhoDelete), 1)
    res.status(200).send(products)
})