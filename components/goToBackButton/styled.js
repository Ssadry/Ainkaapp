import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    display: ${({navigation}) => navigation != null ? 'flex' : 'none'};
`;