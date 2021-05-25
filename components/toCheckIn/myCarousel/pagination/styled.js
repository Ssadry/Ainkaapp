import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const Circle = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 15px;
    border: 1px solid gray;
    background-color: ${({index, currentPage}) => index === currentPage ? 'gray' : 'white'};
    margin: 15px;
`;