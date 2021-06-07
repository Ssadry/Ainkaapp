import styled from 'styled-components/native';

export const Container = styled.View`
    display: ${({textInputIsOnFocus}) => textInputIsOnFocus ? 'flex' : 'none'};
    flex: 1;
    margin-top: 30px;
`;