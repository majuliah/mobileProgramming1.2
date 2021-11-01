import React, { ReactNode} from 'react';
import { theme } from '../../global/styles/theme';
import { Container } from './styles';

interface Props {
    children: ReactNode
}

export function Background({ children }: Props){
    const { secundary60, secundary100} = theme.colors
    return(
        <>
        <Container colors={[secundary60, secundary100]}>
        {children}
        </Container>
        </>
    )
}