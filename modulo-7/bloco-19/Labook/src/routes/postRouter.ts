import express from "express"
import { PostController } from "../controller/postController"

export const postRouter = express.Router()
const postController = new PostController()

postRouter.get("/find/:id", postController.find)
postRouter.post("/create", postController.create)