import { CompetitionController } from './../controller/competitionController';
import  express  from "express";

export const competitionRouter = express.Router()
const competitionController = new CompetitionController()

competitionRouter.post("/create", competitionController.create)
competitionRouter.get("/", competitionController.getAll)