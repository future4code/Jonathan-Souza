import { recipeDTO } from "../model/recipeDTO";
import { DataBase } from "./dataBase";

export class RecipeDataBase extends DataBase{
    private static TABLE_NAME = "cook_recipe"

    public async create(recipe:recipeDTO):Promise<void>{
        await DataBase.connection
        .insert({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            user_id: recipe.userId
        })
        .into(RecipeDataBase.TABLE_NAME)
    } 

    public async getRecipe(id:string){
        const result = await DataBase.connection
        .select("id", "title", "description", "create_at")
        .where({id})
        .from(RecipeDataBase.TABLE_NAME)

        return result[0]
    }
}