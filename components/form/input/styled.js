import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
`;

export const Content = styled.View`
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextInput = styled.TextInput`
    font-size: 15px;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px;
`;

export const IconButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;

export const Line = styled.View`
    position: absolute;
    bottom: 0px;
    width: ${({width}) => width + 'px'};
    height: ${({isCorrect, hasBeenFocused}) => isCorrect ? hasBeenFocused ? '2px' : '1px' : hasBeenFocused ? '2px' : '1px'};
    background-color: ${({isCorrect, hasBeenFocused}) => isCorrect ? hasBeenFocused ? 'green' : 'black' : hasBeenFocused ? 'red' : 'black'};
`;

export const ErrorTextContainer = styled.View`
    justify-content: flex-end;
    width: ${({width}) => width + 'px'};
    margin-top: 2px;
`;

export const ErrorText = styled.Text`
    color: ${({isCorrect, hasBeenFocused}) => isCorrect ? 'transparent' : hasBeenFocused ? 'red' : 'transparent'};
    align-self: flex-end;
    text-align: right;
`;