import React from 'react';
import { Container } from './styled';
import Category from '../elements/category/index';
import Profile from '../elements/profile/index';
import ScrollToElements from '../../scrollToElements/index';

export default ({ width, currentState }) => {
    const elementWidth = width * 0.5 * 0.9;

    const categories = [
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />,
        <Category width={elementWidth} />
    ];

    const profiles = [
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />,
        <Profile width={elementWidth} />
    ];

    return (
        <Container>
            <ScrollToElements width={width} elements={profiles} display={currentState === 1 ? 'flex' : 'none'} />
            <ScrollToElements width={width} elements={categories} display={currentState === 0 ? 'flex' : 'none'} />
        </Container>
    )
}