import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    }
  ]
}

  render() {

    const renderizarPost = this.state.post.map((post) => {
      return(
      <Post>
        {post.nomeUsuario}
        {post.fotoUsuario}
        {post.fotoPost}
      </Post>
      )
    })

    const adcionarPost = this.state.post

    return (
      <div>
        <MainContainer>
          {renderizarPost}
        </MainContainer>
        <div>
          <input 

          />
        </div>
      </div>
    );
  }
}

export default App;
