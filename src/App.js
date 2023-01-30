import styled, { createGlobalStyle } from "styled-components";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
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
  const [title, setTitle] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro
            title={title}
            setTitle={setTitle}
            urlFoto={urlFoto}
            setUrlFoto={setUrlFoto}
            descricao={descricao}
            setDescricao={setDescricao}
          />
        </aside>
        <TelaDaPostagem title={title} urlFoto={urlFoto} descricao={descricao} />
      </Container>
    </>
  );
}

export default App;
