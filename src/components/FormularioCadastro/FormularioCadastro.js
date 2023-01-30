import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({
  title,
  setTitle,
  urlFoto,
  setUrlFoto,
  descricao,
  setDescricao,
}) => {
  const onChangeUrlFoto = (e) => {
    setUrlFoto(e.target.value);
  };

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel>
          Título:
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input value={urlFoto} onChange={onChangeUrlFoto} id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            id="descricao"
          />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
