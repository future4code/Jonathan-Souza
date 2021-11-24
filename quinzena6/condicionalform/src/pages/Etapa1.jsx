import React from "react"



export default class app extends React.Component{
    state = {
        concluido: false
    }

  render(){
    return(
      <div>
        <h4>ETAPA 1 - DADOS GERAIS</h4>
        <form>
          <label>1. qual seu nome?</label>
            <input type="text" />
          <label>2. qual sua idade?</label>
            <input type="number" />
          <label>3. qual seu email?</label>
            <input type="text" />
          <label>4. qual a sua escolaridade?</label>
          <select>
              <option>Ensino médio incompleto</option>
              <option>Ensino médio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>
          </select>
          <button>proxima etapa</button>
        </form>
      </div>
    )
  }
}