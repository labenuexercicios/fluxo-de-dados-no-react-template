import React from 'react'
import {ContainerPostagem, Image, Description, Titulo} from './styles'

const TelaDaPostagem = ({linkImg, descricao, titulo}) => {
  return (

    (linkImg && descricao && titulo?
    <ContainerPostagem>
            <Titulo>{titulo}</Titulo>
            <Image src={linkImg} alt={descricao}/>
            <Description>{descricao}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
            <Titulo>{'Coloque teu título aqui'}</Titulo>
            <Image src={'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=420'} alt='drone view'/>
            <Description>{'bota tua imagem aqui'}</Description>
    </ContainerPostagem>
    ))
    }

export default TelaDaPostagem