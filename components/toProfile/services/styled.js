import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: ${({width}) => width};
    padding-bottom: 200px;
`;

export const Lateral = styled.View`
    width: ${({width}) => width};
    align-items: center;
`;