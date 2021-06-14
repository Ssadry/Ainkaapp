import React from 'react';
import {Container} from './styled';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export default Background = ({
    click = () => alert('background'),
    isActivated = false
}) => <Container
    width={width}
    height={height}
    onPress={click}
    isActivated={isActivated}
/>
