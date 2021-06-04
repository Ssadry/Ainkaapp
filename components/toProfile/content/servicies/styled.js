import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: ${({currentState, pos}) => currentState === pos ? 'flex' : 'none'};
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Title = styled.Text`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    color: gray;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
`;