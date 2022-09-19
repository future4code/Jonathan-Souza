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

    public async getProductById(req: Request, res: Response) {
        try{
            const id = req.params.id as string;
    
            const product = await productBussines.getProductById(id)
            res.status(200).send({product})
        } catch (error:any) {
            res.status(500).send({error: error.message || error.sqlMessage})
        }
    }

    public async getAllProducts(req: Request, res: Response) {
        try{
            const tag = req.query.tag as string;
            
            const products = await productBussines.getAllProducts(tag)
            res.status(200).send({products})
        } catch (error:any) {
            res.status(500).send({error: error.message || error.sqlMessage})
        }
    }
}