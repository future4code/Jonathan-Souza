
import express from "express";
import { UserController } from "../controller/userController";

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post("/signup", userController.create)
userRouter.post("/login", userController.login)
userRouter.get("/profile", userController.profile)