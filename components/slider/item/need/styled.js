import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    align-items: center;
    justify-content: center;
    height: 100px;
`;

export const Content = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    align-items: center;
    justify-content: center;
    height: 100px;
    border-width: 1px;
    margin: 20px;
    border-radius: ${({width}) => width * 0.05 + 'px'};
`;