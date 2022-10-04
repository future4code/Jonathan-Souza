import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import "../src/App.css"
import FeaturedMovie from "./components/FeaturedMovie";


function App(){

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

  console.log(featuredMovieData);
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
    </div>
  )
}

export default App