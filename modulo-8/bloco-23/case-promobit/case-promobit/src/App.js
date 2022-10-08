import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import MovieDetails from "./components/movieDetails";


function App(){

  return(      
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/watch/:movieID" element={<MovieDetails/>}/>
        </Routes>
      </Router>
  )
}

export default App