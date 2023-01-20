import { useState } from "react";
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  const [linkImg, setLinkImg] = useState('');
  
  const [descricao, setDescricao] = useState('');

  const [titulo, setTitulo] = useState('');

  // const [enviarDados, setEnviarDados] = useState('');
  
  function changeLinkImg (e){
    setLinkImg(e.target.value);
  }
  
  function changeDescricao (e){
    setDescricao(e.target.value);
  }

  function changeTitulo (e){
    setTitulo(e.target.value);
  }

  // function changeEnviarDados (e){
  //   setEnviarDados()
  // }
  
  // console.log(linkImg);
  // console.log(descricao);
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
            linkImg={linkImg}
            changeLinkImg={changeLinkImg}
            descricao={descricao}
            changeDescricao={changeDescricao}
            titulo={titulo}
            changeTitulo={changeTitulo}
          />
        </aside>
          <TelaDaPostagem
            linkImg={linkImg}
            descricao={descricao}
            titulo={titulo}
          />
      </Container>
    </>
  );
}

export default App;
