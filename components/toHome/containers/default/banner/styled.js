import styled from 'styled-components/native';

export const Banner = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
`;

export const Text = styled.Text`
    text-align: center;
    margin-bottom: 25px;
    font-size: 25px;
`;