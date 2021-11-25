import React from "react"



export default class app extends React.Component{
   

  render(){
    return(
      <div>
        <h4>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h4>
        <form>
          <p>5. qual curso?</p>
            <input type="text" />
          <p>6. qual sua unidade de ensino?</p>
            <input type="text" />
        </form>
          <button onClick={this.props.irParaEtapa3}>proxima etapa</button>
      </div>
    )
  }
}