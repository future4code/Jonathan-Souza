import React from "react";
import './featuredMovie.css'

function FeaturedMovie({item}){
    let realeaseDate = new Date(item.release_date)
    let genres = []
    for(let e in item.genres){
        genres.push(item.genres[e].name)
    }

    return(
      <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--title">{item.title}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{realeaseDate.getFullYear()}</div>
                        <div className="featured--runtime">{item.runtime} minutos</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--watchbutton"> ▶ Assistir </a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
      </section>
    )
}

export default FeaturedMovie