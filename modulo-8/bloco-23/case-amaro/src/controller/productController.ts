import { ProductBussines } from './../business/productBussines';
import { Request, Response } from "express";
import { Authenticator } from "../services/authenticator";
import { GeneratorID } from "../services/generatorID";
import { EmptyFields, NoLog } from "../error/customError";

const authenticator = new Authenticator()
const generatorID = new GeneratorID()
const productBussines = new ProductBussines(authenticator, generatorID)

export class ProductController {
    public async insertProduct(req: Request, res: Response) {
        try{
            if(!req.body.name || !req.body.tag){
                throw new EmptyFields();
            }

            if(!req.headers.authorization){
                throw new NoLog();
            }

            const input = {
                name: req.body.name,
                tag: req.body.tag,
                token: req.headers.authorization as string
            }

            productBussines.insertProduct(input)
            res.status(200).send({message: "Produto adcionado com sucesso!"})
        } catch (error:any) {
            res.status(error.code).send({error: error.message || error.sqlMessage})
        }
    }
}