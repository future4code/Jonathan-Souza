import  express  from "express";
import { AthletesController } from "../controller/athletesController";

export const athletesRouter = express.Router()
const athletesController = new AthletesController()

athletesRouter.post('/insert', athletesController.insert)