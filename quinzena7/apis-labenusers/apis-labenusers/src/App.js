import React from 'react';
import './App.css';
import Login from './Componentes/login'
import Usuario from './Componentes/usuario'

class App extends React.Component{
  state = {
    pagina: "login"
  }

  onClickMudarPagina = () =>{
    if(this.state.pagina === "login"){
      this.setState({pagina: "usuario"})
    }else if (this.state.pagina === "usuario"){
      this.setState({pagina: "login"})
    }
  }

  
  render(){ 
    const atual = this.state.pagina === "login" ? <Login/> : <Usuario/>

    return (
      <div>
        <button onClick={this.onClickMudarPagina}>Mudar pagina</button>
        {atual}
      </div>
    );
  }
}

export default App;
