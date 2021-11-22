import React from "react"
import styled from "styled-components"

const ContainerCard = styled.section`
  display: flex;
  width: 100vw
  height: 100vh
  text-align: center;
  justify-content: center;
`

const Card = styled.div`
  display: grid;
  grid-template-rows: 4fr;
  width: 50vw;
  height: 100vh;
  border: black 1px;
  border-style: groove;
`;

const InputUsuario = styled.input`
  width: 20%
`
const InputMensagem = styled.input`
  width: 67.5%
`
const ButtonEnviar = styled.button`
  width: 10%
`

class MeuComponenteReact extends React.Component {
  state = {
    conversa: [
      {
        usuario:"",
        mensagem:""
      }
    ],
    
    valorUsuario: "",
    valorMensagem: "",
  }
  
  onChangeUsuario = (event) =>{
    this.setState({valorUsuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})
  }
  
  onClickEnviar = (event) =>{

    const novaMensagem = {
      usuario: this.state.valorUsuario,
      mensagem: this.state.valorMensagem,
    }

    const novaConversa = [...this.state.conversa, novaMensagem]

    this.setState({conversa: novaConversa})
  }

	render() {
    
    return (
      <ContainerCard>
        <Card>
          <div>
            <span><strong>{this.state.conversa}</strong></span>
            <span>{this.state.conversa.mensagem}</span>
          </div>
          <div>

            <InputUsuario
             value={this.state.valorUsuario}
             onChange={this.onChangeUsuario}
             placeholder="Usuario"
            />

            <InputMensagem 
              value={this.state.valorMensagem}
              onChange={this.onChangeMensagem}
              placeholder="Mensagem"
            />

            <ButtonEnviar onClick={this.onClickEnviar}>Enviar</ButtonEnviar>

          </div>
        </Card>
    </ContainerCard>
		)
	}
}

export default MeuComponenteReact