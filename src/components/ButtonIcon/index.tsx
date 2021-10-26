import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import discordImg from '../../assets/discord.png';
import { Container, IconWrapper, Imagem, Title } from './styles';

interface Props extends TouchableOpacityProps {
    title?: string;
    course: string;
}


export function ButtonIcon({ title, course, ...rest }: Props){
    return(
        <Container {...rest}>
            <IconWrapper>
                <Imagem source={discordImg} />
            </IconWrapper>
            <Title>
                { title }
            </Title>
        </Container>
    )
}