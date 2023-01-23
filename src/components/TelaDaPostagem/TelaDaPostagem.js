import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

// const TelaDaPostagem = ({linkImg, descricao, titulo}) => {
const TelaDaPostagem = ({enviarDados}) => {
  return (

    // (linkImg && descricao && titulo?
    (enviarDados.linkImg && enviarDados.descricao && enviarDados.titulo)?
    <ContainerPostagem>
            <Titulo>{enviarDados.titulo}</Titulo>
            <Image src={enviarDados.linkImg} alt={enviarDados.descricao}/>
            <Description>{enviarDados.descricao}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
            <Titulo>{'Coloque teu título aqui'}</Titulo>
            <Image src={'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=420'} alt='drone view'/>
            <Description>{'bota tua imagem aqui'}</Description>
    </ContainerPostagem>
    )
    }

export default TelaDaPostagem