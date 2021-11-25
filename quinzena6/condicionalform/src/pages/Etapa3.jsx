import React from "react"



export default class app extends React.Component{


  render(){
    return(
      <div>
        <h4>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h4>
        <form>
          <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text" />
          <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso técnico</option>
                <option>Curso de inglês</option>
            </select>
        </form>
          <button onClick={this.props.irParaFinal}>proxima etapa</button>
      </div>
    )
  }
}