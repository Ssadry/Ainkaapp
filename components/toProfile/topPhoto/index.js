import React from 'react';
import {Container, Line, PhotoServicie} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';

const {width} = Dimensions.get('screen');

export default Header = ({
    icon = Icon
}) => {
    return (
        <Container>
            <PhotoServicie>

            </PhotoServicie>
            <Line
                width={width}
            />
        </Container>
    )
}