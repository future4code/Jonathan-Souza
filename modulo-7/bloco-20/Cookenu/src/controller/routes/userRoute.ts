import { FollowController } from './../followController';

import express from "express";
import { UserController } from "../userController";

export const userRouter = express.Router()
const userController = new UserController()
const followController = new FollowController()

userRouter.get("/profile", userController.profile)
userRouter.get("/:id", userController.otherUserProfile)
userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)

userRouter.post("/follow", followController.followUser)
userRouter.delete("/unfollow", followController.unFollowUser)