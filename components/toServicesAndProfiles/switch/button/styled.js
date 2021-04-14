import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${({width}) => width};
    height: 40px;
    border-bottom-width: 1px;
    justify-content: center;
    align-items: center;
    background-color: ${({currentState, name}) => currentState === name ? 'gray' : 'transparent'};
`;