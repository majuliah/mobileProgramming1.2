import React from 'react';
import { Avatar } from '../Avatar';
import { Container, Message, Content, User, Greetings, UserName } from './styled';


export function Profile(){
    return(
        <Container>
            <Avatar urlImage='https://avatars.githubusercontent.com/u/66448487?v=4' />
            <Content>
                <User>
                    <Greetings>
                        <UserName>
                            MaraJúlha
                        </UserName>
                    </Greetings>
                </User>
                <Message>
                    Hoje é dia de derrota
                </Message>
            </Content>

        </Container>
    )
}