import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
    width: ${width + 'px'};
    height: 200px;
    background-color: red;
    justify-content: center;
    align-items: center;
    border-bottom-width: 1px;
`;

export const Image = styled.Image`
    width: ${width + 'px'};
    flex: 1;
`;