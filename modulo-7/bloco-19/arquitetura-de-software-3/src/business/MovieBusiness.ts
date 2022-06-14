import { MovieDataBase } from '../data/MovieDatabase'
import { generateId } from "../services/generateID"
import { createMovieDataDTO, createMovieDTO } from "../model/model"

export class MovieBusiness {
  async create(movie:createMovieDTO):Promise<void> {
    if (!movie.title || !movie.description || !movie.yearRelease || !movie.durationMinutes) {
      throw new Error("Dados inválidos (title, description, yearRelease, durationMinutes)")
    }

    const id:string = generateId()

    const inputData:createMovieDataDTO = {
      id,
      title: movie.title,
      description: movie.description,
      durationMinutes: movie.durationMinutes,
      yearRelease: movie.yearRelease
    }

    const movieDatabase = new MovieDataBase()
    movieDatabase.create(inputData)
  }
}