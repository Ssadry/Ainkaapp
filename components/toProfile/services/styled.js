import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: ${({width}) => width + 'px'};
    padding-bottom: 200px;
`;

export const Lateral = styled.View`
    width: ${({width}) => width + 'px'};
    align-items: center;
`;