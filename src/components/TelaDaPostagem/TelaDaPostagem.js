import React from "react";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <h2>{props.title}</h2>
      <Image src={props.urlFoto} alt="drone view" />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
