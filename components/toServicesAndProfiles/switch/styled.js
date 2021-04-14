import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex: 0.1;
    width: ${({width}) => width};
    justify-content: center;
    align-items: flex-end;
`;