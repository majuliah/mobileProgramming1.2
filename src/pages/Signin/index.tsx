import React from 'react';
import { Image } from 'react-native';

import Illustration from '../../assets/illustration3.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import { Container, Content, Title, SubTitle } from './styles';

export function Signin(){
    return(
        <>
        <Container>
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
            
            <ButtonIcon 
            title="LogIn Discord"
            course="SI"
            activeOpacity={0.7}
            disabled={false}
            />

            </Content>
        </Container>
        
        </>
    )
}
