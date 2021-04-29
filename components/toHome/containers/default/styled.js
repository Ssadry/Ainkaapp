import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: ${({searchText}) => searchText.trim() != '' ? 'none' : 'flex'};
`;