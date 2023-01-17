import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = () => {

  const [linkImg, setLinkImg] = useState('');

  const [descricao, setDescricao] = useState('');

  function changeLinkImg (e){
    setLinkImg(e.target.value);
  }

  function changeDescricao (e){
    setDescricao(e.target.value);
  }

  console.log(linkImg);
  console.log(descricao);

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" onChange={changeLinkImg} value={linkImg}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" onChange={changeDescricao} value={descricao}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro