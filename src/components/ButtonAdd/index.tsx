import React from "react";
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from "./styles";


export function ButtonAdd({ ...rest }: TouchableOpacityProps){
    return(
        <Container {...rest} accessibilityLabel='adicionar'>
            <Icon nome='plus' acessibilityLabel='maisInfos' />
        </Container>
    )
}