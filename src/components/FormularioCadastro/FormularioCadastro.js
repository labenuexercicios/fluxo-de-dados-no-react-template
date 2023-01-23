import { FormContainer, Form, Input, StyledLabel } from "./styled";
import { useState } from "react";

// export const FormularioCadastro = ({linkImg, changeLinkImg, descricao, changeDescricao, titulo, changeTitulo, enviarDados, changeEnviarDados}) => {

export const FormularioCadastro = ({enviarDados, setEnviarDados}) => {

  const [linkImg, setLinkImg] = useState('');
  
  const [descricao, setDescricao] = useState('');

  const [titulo, setTitulo] = useState('');

  function changeLinkImg (e){
    setLinkImg(e.target.value);
  }
  
  function changeDescricao (e){
    setDescricao(e.target.value);
  }

  function changeTitulo (e){
    setTitulo(e.target.value);
  }

  function postar (e){
    e.preventDefault();

    const post = {
      titulo: titulo,
      linkImg: linkImg,
      descricao: descricao
    }

    setEnviarDados(post);
    setLinkImg('');
    setTitulo('');
    setDescricao('');
    console.log(post);
  }


  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel>
          Título:
          <Input id='titulo' onChange={changeTitulo} value={titulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={changeLinkImg} value={linkImg}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={changeDescricao} value={descricao}/>
        </StyledLabel>
        <button onClick={postar}>Enviar</button>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro