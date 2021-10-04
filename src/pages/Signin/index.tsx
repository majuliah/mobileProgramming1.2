import React from 'react';
import { View, Image } from 'react-native';

import Illustration from '../../assets/illustration3.png'
import { Container, Content, Title, SubTitle } from './styles';

export function Signin(){
    return(
        <Container>
            <Image source={Illustration}/>  
            <Content>
            <Title>
                Organizador {'\n'}
                de Partidas {'\n'}
            </Title>   
            <SubTitle>
                Criar grupos para jogar com amigos{'\n'}
            </SubTitle>
            </Content>
        </Container>
    )
}
