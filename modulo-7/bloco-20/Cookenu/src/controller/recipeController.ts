import { RecipeBussines } from './../bussines/recipeBussines';
import { recipeInput } from './../model/recipeDTO';
import { Request, Response } from "express";

export class RecipeController {

    public async create(req:Request, res:Response){
        try {            
            const { title, description } = req.body
            console.log(title);
            
            const token = req.headers.authorization as string

            const input:recipeInput = {
                title,
                description,
                token
            }
            console.log("controller", input);
            
            await new RecipeBussines().create(input)
            res.status(201).send({message: "receita criada com sucesso!"})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        } 
    }  

    public async getRecipe(req:Request, res:Response){
        try {
            const id = req.params.id
            const token = req.headers.authorization

            const result = await new RecipeBussines().getRecipe(id)

            res.status(200).send({result})
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message);
        } 
    }
}