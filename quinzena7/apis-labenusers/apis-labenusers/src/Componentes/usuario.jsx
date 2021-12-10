import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state = {
    listaUsuario: []
  }

  componentDidMount() {
      this.getAllUsers()
  }



  getAllUsers = () => {
      const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

      const headers = {
          headers:{
            Authorization: "jonathan-souza-joy"
          } 
      }

      axios.get(URL, headers)

      .then((response)=>{this.setState({listaUsuario: response.data}) })
      .catch((error)=>{alert(error.response.data)}) 
    }

    deletarUsuario = () =>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id";

        const header = {
            headers:{Authorization: "jonathan-souza-joy"}
        }

        const idUser = {
            id: {}
        }
    }

    
    render(){ 
        let listaDeUsario = this.state.listaUsuario.map((i) => {
            return <div><span key={i.id}>{i.name}</span> <button onClick={this.deletarUsuario}>Deletar</button></div>
        });

        console.log("variavel mapeada",listaDeUsario)
        console.log("estade", this.state.listaUsuario)
        return (
        <div>
           {listaDeUsario}
        </div>
    );
  }
}

export default App;