import styled from 'styled-components/native';

export const Container = styled.View`
    display: ${({searchText}) => searchText.trim() != '' ? 'flex' : 'none'};
    background-color: grey;
    flex: 1;
`;