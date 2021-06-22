import styled from 'styled-components/native';

export const Container = styled.View`
    flex: ${({flex}) => flex};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    background-color: ${({index, currentPage}) => index === currentPage ? 'white' : 'transparent'};
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    border: ${({index, currentPage}) => index === currentPage ? '1px solid gray' : '0px solid gray'};
`;

export const Text = styled.Text`
    color: ${({index, currentPage}) => index === currentPage ? 'black' : 'gray'};
    text-align: center;
    margin: 10px;
    font-weight: ${({index, currentPage}) => index === currentPage ? 'bold' : 'normal'};
`;