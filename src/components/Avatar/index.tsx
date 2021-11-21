import React from 'react';
import { theme } from '../../global/styles/theme';
import { Container, AvatarImage } from './styles';


interface AvatarProps{
    urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps){
    const { secundary50, secundary70 } = theme.colors
    return(
        
        <Container colors={[secundary50, secundary70]}>
            <AvatarImage source={ { uri: urlImage } }  />
        </Container>
    )

}
