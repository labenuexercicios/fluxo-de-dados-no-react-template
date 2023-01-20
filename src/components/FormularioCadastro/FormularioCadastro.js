import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({linkImg, changeLinkImg, descricao, changeDescricao, titulo, changeTitulo}) => {

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
        {/* <button onClick={enviarDados}>Enviar</button> */}
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro