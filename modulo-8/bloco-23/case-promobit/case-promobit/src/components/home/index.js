import React, { useEffect, useState } from "react";
import tmdb from '../../tmdb'
import MovieRow from '../movieRow/';
import './home.css'
import FeaturedMovie from "../featuredMovie";


function Home(){
  const [movieList, setMovieList] = useState([])
  const [featuredMovieData, setFeaturedMovieData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list)

      let topRated = list.filter(e => e.slug === "top rated")
      let randomChosen = Math.floor(Math.random() * (topRated[0].items.results.length) -1 )
      let chosen = topRated[0].items.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'movie')
      setFeaturedMovieData(chosenInfo)
    }

    loadAll()
  }, [])


  return(
    <div className="page">
        {featuredMovieData &&
        <FeaturedMovie item={featuredMovieData} key={featuredMovieData.id}/>
      }

      <section className="list">
          {movieList.map((item, key) =>(
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
      </section>

      {movieList.length <= 0 &&
      <div className="loading">
        <iframe src="https://giphy.com/embed/3y0oCOkdKKRi0" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      }
    </div>
  )
}

export default Home