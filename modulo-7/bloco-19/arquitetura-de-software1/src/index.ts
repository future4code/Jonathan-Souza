import { app } from "./Controller/app";
import { UserController } from "./Controller/userController";

const userController = new UserController()

app.post("/user", userController.captureUser)