import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
            <Titulo>{props.inputTitulo}</Titulo>
            <Image src={props.inputImage} alt='drone view'/>
            <Description>{props.inputDescricao}</Description>
    </ContainerPostagem>
  )
}

export default TelaDaPostagem