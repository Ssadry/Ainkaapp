import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width * 0.5};
    background-color: ${({ currentState, pos }) => currentState === pos ? 'gray' : 'transparent'};
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    margin: 20px;
`;