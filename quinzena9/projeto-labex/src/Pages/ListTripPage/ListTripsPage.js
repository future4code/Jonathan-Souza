import axios from "axios";
import React, { useState, useEffect } from "react"

function App() {
  const [listTrip, setListTrip] = useState([])

  useEffect(() =>{
    getListTrip()
  }, [])

  const getListTrip = () => {
    axios
      .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips')
      .then(response =>{
       setListTrip(response.data.trips)
      })
      .catch(err => {
        console.log(err)
      })
  }

 const renderizar = listTrip.map(i => 
    <div>
      <p>{i.name}</p>
      <p>{i.description}</p>
      <p>{i.planet}</p>
      <p>{i.durationInDays}</p>
      <p>{i.date}</p>
    </div>
 )

  return (
    <div>
      <h1>lista de Viagens</h1>
      {renderizar}
    </div>
  );
}

export default App;