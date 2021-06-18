import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 20px;
`;

export const Title = styled.Text`
    margin-left: 20px;
    font-size: 22px;
    font-weight: bold;
`;