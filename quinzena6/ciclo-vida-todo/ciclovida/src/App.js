import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    listaDeTarefa: [
      {
      tarefa: ""
      }
    ],

    valorTarefa: ""
  }


  onChangeInput = (event) => {
    // salvar o que foi escrito no input na variavel dentro do estado
    this.setState({valorTarefa: event.target.value})
  }

  onClickAdicionar = () =>{
    // adciona um novo objeto no estado com o que foi escrito no input
    const novaTarefa = {
      tarefa: this.state.valorTarefa
    }

    const attListaDeTarefa = [...this.state.listaDeTarefa, novaTarefa]

    this.setState({listaDeTarefa: attListaDeTarefa})
  }

  render(){
    // imprimir novo objeto que foi colocado na lista do state
    const lista = this.state.listaDeTarefa
    const imprimir = lista.map(i => <div><p>{i.tarefa}</p></div>)
    console.log(this.state.valorTarefa);



    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <input 
          value={this.state.valorTarefa}
          onChange={this.onChangeInput}
        />
        <button onClick={this.onClickAdicionar}>Adicionar</button>
        <hr/>
        <span>Filtro  </span>
          <select>
            <option>Nenhum</option>
            <option>Pendentes</option>
            <option>Concluido</option>
          </select>
        {imprimir}
      </div>
    );
  }
}

export default App;
