import React from "react"
import Etapa1 from "./pages/Etapa1"
import Etapa2 from "./pages/Etapa2"
import Etapa3 from "./pages/Etapa3"
import Final from "./pages/Final"
import "./App.css";

export default class app extends React.Component{
  state = {
    pagina: "Etapa1"
  }

  onClickEtapa2 = (props) =>{
    this.setState({pagina: "Etapa2"})
  }

  onClickEtapa3 = (props) =>{
    this.setState({pagina: "Etapa3"})
  }

  onClickFinal = (props) =>{
    this.setState({pagina: "Final"})
  }


  render(){
    let pagina = <h1>error 404 :/</h1>

    if (this.state.pagina === "Etapa1"){
      pagina = <Etapa1 irParaEtapa2={this.onClickEtapa2}/>
    }else if (this.state.pagina === "Etapa2"){
      pagina = <Etapa2 irParaEtapa3={this.onClickEtapa3}/>
    }else if (this.state.pagina === "Etapa3"){
      pagina = <Etapa3 irParaFinal={this.onClickFinal}/>
    }else if (this.state.pagina === "Final"){
      pagina = <Final/>
    }

    return(
     <div class="main">
       {pagina}
     </div>
    )
  }
}