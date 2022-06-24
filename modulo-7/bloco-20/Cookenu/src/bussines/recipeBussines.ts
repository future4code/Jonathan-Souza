import { generateId } from './../services/generateID';
import { FieldEmpty } from '../error/customError';
import { getData } from '../services/authentication';
import { recipeDTO, recipeInput, recipeOutput } from './../model/recipeDTO';
import { RecipeDataBase } from '../data/recipeDataBase';

export class RecipeBussines {
    public async create(req:recipeInput):Promise<void>{
        let {title, description, token} = req
        console.log("bussines",req);
        
        if (!title || !description){
            throw new FieldEmpty
        }

        const userData = getData(token)

        const id = generateId()

        const input:recipeDTO = {
            id,
            title,
            description,
            userId: userData.id
        }

        await new RecipeDataBase().create(input)
    }

    public async getRecipe(id:string):Promise<recipeOutput>{
        
        if(!id){
            throw new FieldEmpty
        }

        const recipe = await new RecipeDataBase().getRecipe(id)
        
        const output:recipeOutput = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createAt: recipe.create_at
        }

        return output
    }
}