import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: cyan;
    border: 5px solid black;
    display: ${({searchText}) => searchText.trim() != '' ? 'flex' : 'none'};
`;