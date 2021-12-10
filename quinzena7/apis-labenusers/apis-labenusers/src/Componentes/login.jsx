import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {
    usuarioValue: "",
    emailValue: ""
  }

  componentDidMount(){

  }


  handleUsuario = (e) => {
    const novoUsuario = e.target.value

    this.setState({usuarioValue: novoUsuario})
  }

  handleEmail = (e) => {
    const novoEmail = e.target.value

    this.setState({emailValue: novoEmail})
  }

  postCriarUsuario = () => {
      const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

      const body = {
          name: this.state.usuarioValue,
          email: this.state.emailValue
      };

      const headers = {
        headers: {Authorization: "jonathan-souza-joy"}
      }
      
      axios.post(URL,body,headers)

      .then((res) =>{
          alert("usuario cadastrado")
          this.pegaUsuario();
      })
      .catch((err) => {
          console.log(err.response);
      });
  }

  render(){

    
    return (
      <div>
          <input
            placeholder="Usuario"
            value={this.state.usuarioValue}
            onChange={this.handleUsuario}
          />
          <input
            placeholder="E-mail"
            value={this.state.emailValue}
            onChange={this.handleEmail}
          />
          <button onClick={this.postCriarUsuario}>Enviar</button>
      </div>
    );
  }
}

export default App;