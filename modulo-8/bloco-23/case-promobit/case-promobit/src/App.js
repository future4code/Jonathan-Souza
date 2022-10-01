import React, { useEffect } from "react";
import tmdb from "./tmdb";

function App(){
  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      console.log(list);
    }

    loadAll()
  }, [])




  return(
    <div>
        <h1>
          Dalé piazada
        </h1>
    </div>
  )
}

export default App