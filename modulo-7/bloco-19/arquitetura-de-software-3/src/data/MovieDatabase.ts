import { createMovieDataDTO } from "../model/model";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDataBase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE"

    async create (movie:createMovieDataDTO): Promise<void> {
        await MovieDataBase.connection
        .insert({
            id: movie.id,
            title: movie.title,
            description: movie.description,
            duration_in_minutes: movie.durationMinutes,
            year_of_release: movie.yearRelease
        })
        .into(MovieDataBase.TABLE_NAME)
    }
}