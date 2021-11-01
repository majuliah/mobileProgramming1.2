import styled from "styled-components/native";


export const Container = styled.View`
    flex-direction: row;
`;

export const Content = styled.View`

`;

export const User = styled.View`
    flex-direction: row;
`;

export const Greetings = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.heading};
    margin-right: 5px;
`;

export const UserName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title700};
    font-size: 24px;
    color: ${({ theme }) => theme.colors.heading};
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.heading};
`;