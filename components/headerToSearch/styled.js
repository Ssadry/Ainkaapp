import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: ${({ width }) => width + 'px'};
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
`;
