import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imgWidth = width * 0.5;

export const Container = styled.View`
    width: ${width + 'px'};
`;

export const Top = styled.View`
    width: ${imgWidth + 'px'};
`;

export const Bottom = styled.View`

`;

export const Image = styled.Image`
    flex: 1;
`;