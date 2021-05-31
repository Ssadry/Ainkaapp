import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`;

export const Content = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
`;

export const FormContainer = styled.View`

`;

export const ChecksContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;