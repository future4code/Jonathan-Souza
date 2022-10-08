import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import tmdb from "../../tmdb";
import './movieDetails.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const MovieDetails = () => {
    const [movieInfo, setMovieInfo] = useState([])
    let { movieID } = useParams()

    useEffect(() => {
        const loadInfo = async () => {
            let chosenInfo = await tmdb.getMovieInfo(movieID, "movie")
            setMovieInfo(chosenInfo)
        }

        loadInfo()
    }, [])

    let realeaseDate = new Date(movieInfo.release_date)
    let genres = []
    for(let e in movieInfo.genres){
        genres.push(movieInfo.genres[e].name)
    }

    return(
        <section className="movieDetail"style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movieInfo.backdrop_path})`
      }}>
            <div className="movieDetail--horizontal">
            <a href="http://localhost:3000/"><NavigateBeforeIcon/></a>
                    <div className="movieDetail--title">{movieInfo.title}</div>
                    <div className="movieDetail--info">
                        <div className="movieDetail--points">{movieInfo.vote_average} pontos</div>
                        <div className="movieDetail--year">{realeaseDate.getFullYear()}</div>
                        <div className="movieDetail--runtime">{movieInfo.runtime} minutos</div>
                    </div>
                    <div className="movieDetail--description">{movieInfo.overview}</div>
                    <div className="movieDetail--buttons">
                        <div className="movieDetail--watchbutton"> ▶ Começar </div>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
        </section>
    )
}


export default MovieDetails