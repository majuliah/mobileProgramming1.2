import React from 'react';
import { Container, Message, Content, User, Greetings, UserName } from './styled';


export function Profile(){
    return(
        <Container>
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