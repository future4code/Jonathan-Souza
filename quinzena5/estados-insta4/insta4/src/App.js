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
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'Bobzinho'}
            fotoUsuario={'https://picsum.photos/id/237/50/50'}
            fotoPost={'https://picsum.photos/id/1011/200/150'}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'agenorzinho'}
            fotoUsuario={'https://picsum.photos/id/120/50/50'}
            fotoPost={'https://picsum.photos/id/100/200/150'}
          />
        </MainContainer>
      </div>
    );
  }
}

export default App;
