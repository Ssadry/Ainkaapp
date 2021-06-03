import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    background-color: green;
`;

export const ScrollView = styled.ScrollView`
    display: ${({searchText}) => searchText.trim() != '' ? 'none' : 'flex'};
`;