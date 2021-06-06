import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex: 1;
    width: ${({width}) => width + 'px'};
    height: ${({height}) => height + 'px'};
    z-index: 99;
    position: ${({isActivated}) => isActivated ? 'absolute' : 'relative'};
    top: 0px;
    left: 0px;
    display: ${({isActivated}) => isActivated ? 'flex' : 'none'};
    background-color: rgba(100, 100, 100, 0.5);
`;