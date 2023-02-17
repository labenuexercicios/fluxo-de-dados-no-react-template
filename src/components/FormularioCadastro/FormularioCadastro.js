import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {

 

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel >
          Titulo:
          <Input  value={props.inputTitulo} onChange={props.onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.inputImage} onChange={props.onChangeImage}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao" >
          Descrição:
          <Input id="descricao"value={props.inputDescricao} onChange={props.onChangeDescricao} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro