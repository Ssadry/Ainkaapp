import styled from 'styled-components/native';

export const Container = styled.View`
    /* padding-left: 10px;
    padding-right: 10px; */
    padding-top: 20px;
`;

export const ScrollView = styled.ScrollView`
    display: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 'none' : 'flex'};
`;