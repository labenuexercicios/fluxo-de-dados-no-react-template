import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = ({linkImg, descricao}) => {
  return (

    (linkImg && descricao?
    <ContainerPostagem>
            <Image src={linkImg} alt='drone view'/>
            <Description>{descricao}</Description>
    </ContainerPostagem>
    :
    <ContainerPostagem>
            <Image src={'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=420'} alt='drone view'/>
            <Description>{'bota tua imagem aqui'}</Description>
    </ContainerPostagem>
    ))
    }

export default TelaDaPostagem