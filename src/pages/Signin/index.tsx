import React from 'react';
import {  Image, StatusBar } from 'react-native';

import Illustration from '../../assets/illustration3.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Content, Title, SubTitle } from './styles';

export function Signin(){
    return(
        <>
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent={true} />
            <Image source={Illustration}/>  
            <Content>
            <Title>
                Organizador {'\n'}
                de Partidas {'\n'}
                Com os amigos :)
            </Title>   
            <SubTitle>
                Criar grupos para jogar com amigos{'\n'}
            </SubTitle>
            
            <ButtonIcon />

            </Content>
        </Container>
        
        </>
    )
}
