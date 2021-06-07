import styled from 'styled-components/native';

export const Container = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
`;

export const ScrollView = styled.ScrollView`
    display: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 'none' : 'flex'};
`;