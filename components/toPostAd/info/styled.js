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
    justify-content: space-between;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${width + 'px'};
    height: 200px;
`;

export const BasicInfoContainer = styled.View`
    margin: 20px;
`;

export const TopBasicInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const BottomBasicInfo = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
`;

export const Hours = styled.Text`
    font-size: 20px;
`;

export const Location = styled.Text`
    font-size: 16px;
`;

export const IconsContainer = styled.View`
    flex-direction: row;
`;

export const Description = styled.Text`
    margin-top: 20px;
`;
