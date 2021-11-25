import React from "react"


export default class app extends React.Component{


  render(){
    return(
      <div>
        <h4>ETAPA 1 - DADOS GERAIS</h4>
        <form>
          <p>1. qual seu nome?</p>
            <input type="text" />
          <p>2. qual sua idade?</p>
            <input type="number" />
          <p>3. qual seu email?</p>
            <input type="text" />
          <p>4. qual a sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>
        </form>
        <button onClick={this.props.irParaEtapa2}>proxima etapa</button>
      </div>
    )
  }
}