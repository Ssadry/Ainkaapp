import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width * 0.5};
    height: 100px;
    background-color: ${({ currentState, pos }) => currentState === pos ? 'gray' : 'transparent'};
    justify-content: center;
    align-items: center;
`;