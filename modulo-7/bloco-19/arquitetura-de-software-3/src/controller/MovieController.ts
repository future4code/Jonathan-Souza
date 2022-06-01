import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { createMovieDTO } from "../model/model";

export class MovieController {
    async create (
        req:Request,
        res:Response
    ):Promise<void>{
        try {
            const {title, description, yearRelease, durationMinutes} = req.body

            const input:createMovieDTO = {
                title,
                description,
                yearRelease,
                durationMinutes
            }

            const movieBusiness = new MovieBusiness()
            movieBusiness.create(input)

            res.status(201).send({message: "Filme Criado com sucesso!"})
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}