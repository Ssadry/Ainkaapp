import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
    width: ${({width}) => width + 'px'};
`;

export const Button = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Text = styled.Text`
    color: ${({ currentState, pos }) => currentState === pos ? 'green' : 'black'};
`;

export const BottomLine = styled.View`
    margin-top: 5px;
    height: 3px;
    background-color: ${({pos, currentState}) => currentState === pos ? 'green' : 'transparent'};
    width: ${({width}) => width + 'px'};
`;