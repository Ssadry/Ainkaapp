import React from 'react';
import {Container, Line, PhotoServicie} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';

const width = Math.round(Dimensions.get('screen').width);

export default Header = ({
    icon = Icon
}) => {
    return (
        <Container>
            <PhotoServicie
                width={width}
            >

            </PhotoServicie>
            <Line
                width={width}
            />
        </Container>
    )
}