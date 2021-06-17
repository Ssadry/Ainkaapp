import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: ${({width}) => width + 'px'};
`;

export const Content = styled.View`
    width: ${({width}) => width + 'px'};    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    color: ${({ currentState, pos, color }) => currentState === pos ? color : 'black'};
`;

export const LineToButton = styled.View`
    margin-top: 5px;
    margin-bottom: 1px;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${({pos, currentState, color}) => currentState === pos ? color : 'transparent'};
    width: ${({width}) => width + 'px'};
`;

export const NotificationsPoints = styled.View`
    position: ${({isVisible}) => isVisible ? 'absolute' : 'relative'};;
    top: -5px;
    right: -5px;
    width: 10px;
    height: 10px;
    background-color: ${({backgroundColor}) => backgroundColor};
    border-radius: 5px;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;

export const Line = styled.View`
    flex: 1;
    position: absolute;
    bottom: 0px;
    height: 1px;
    width: ${({width}) => width + 'px'};    
    background-color: ${({color}) => color};
`;