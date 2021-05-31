import styled from 'styled-components/native';

export const Container = styled.View`
    display: ${({searchText}) => searchText.trim() != '' ? 'none' : 'flex'};
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;