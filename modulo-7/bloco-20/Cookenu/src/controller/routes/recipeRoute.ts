import { RecipeController } from './../recipeController';
import express from "express";

export const recipeRouter = express.Router()
const recipeController = new RecipeController()

recipeRouter.post("/create", recipeController.create)
recipeRouter.get("/create/:id", recipeController.getRecipe)