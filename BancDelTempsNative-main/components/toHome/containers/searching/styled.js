import styled from 'styled-components/native';

export const Container = styled.View`
    display: ${({searchText}) => searchText.trim() != '' ? 'flex' : 'none'};
    flex: 1;
`;