import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import { useState } from "react";
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
  
  const [inputImage, setInputImage] = useState('')
  const [inputDescricao, setInputDescricao] = useState('')
  const [inputTitulo, setInputTitulo] = useState("")

  const onChangeImage =(e)=>{
  setInputImage(e.target.value)
  
  }

  const onChangeDescricao =(e)=>{
  setInputDescricao(e.target.value)
  
  }

  const onChangeTitulo = (e)=>{
  setInputTitulo(e.target.value)
  }
  
  console.log(inputImage, inputDescricao , inputTitulo)
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          inputImage={inputImage}
          onChangeImage={onChangeImage}
          inputDescricao={inputDescricao}
          onChangeDescricao={onChangeDescricao}
          inputTitulo={inputTitulo}
          onChangeTitulo={onChangeTitulo}
          />
        </aside>
        <TelaDaPostagem 
        inputImage={inputImage}
        inputDescricao={inputDescricao}
        inputTitulo={inputTitulo}
        />
      </Container>
    </>
  );
}

export default App;
