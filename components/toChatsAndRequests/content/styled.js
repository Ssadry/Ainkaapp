import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const ChatContainer = styled.View`
    width: ${width + 'px'};
    justify-content: center;
    align-items: center;
    display: ${({currentState, state}) => currentState === state ? 'flex' : 'none'};
`;

export const RequestContainer = styled.View`
    width: ${width + 'px'};
    justify-content: center;
    align-items: center;
    display: ${({currentState, state}) => currentState === state ? 'flex' : 'none'};
`;