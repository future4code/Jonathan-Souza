import express from "express"
import { FriendController } from "../controller/friendController"

export const friendRouter = express.Router()
const friendController = new FriendController

friendRouter.post("/create", friendController.create)
friendRouter.delete("/delete", friendController.delete)
friendRouter.get("/feed/:userId", friendController.feed)