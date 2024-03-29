import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 30px;
    flex: 1;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'QuicksandBold';
`;

export const FormContainer = styled.View`
    flex: 1;
`;

export const ChecksContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const BothPasswords = styled.Text`
    flex: 1;
    color: red;
    text-align: right;
    color: ${({isVisible}) => isVisible ? 'transparent' : 'red'};
    margin-bottom: 10px;
`;