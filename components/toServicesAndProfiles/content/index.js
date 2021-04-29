import React from 'react';
import { Container } from './styled';
import Category from '../elements/category/index';
import Profile from '../elements/profile/index';
import ScrollToElements from '../../scrollToElements/index';

export default ({ width, currentState }) => {
    const elementWidth = width * 0.5 * 0.9;

    const categories = [
        <Category width={elementWidth} key={0}/>,
        <Category width={elementWidth} key={1}/>,
        <Category width={elementWidth} key={2}/>,
        <Category width={elementWidth} key={3}/>,
        <Category width={elementWidth} key={5}/>,
        <Category width={elementWidth} key={6}/>,
        <Category width={elementWidth} key={7}/>,
        <Category width={elementWidth} key={8}/>,
        <Category width={elementWidth} key={9}/>,
        <Category width={elementWidth} key={10}/>,
        <Category width={elementWidth} key={11}/>
    ];

    const profiles = [
        <Profile width={elementWidth} key={0}/>,
        <Profile width={elementWidth} key={1}/>,
        <Profile width={elementWidth} key={2}/>,
        <Profile width={elementWidth} key={3}/>,
        <Profile width={elementWidth} key={4}/>,
        <Profile width={elementWidth} key={5}/>,
        <Profile width={elementWidth} key={6}/>,
        <Profile width={elementWidth} key={7}/>
    ];

    return (
        <Container>
            <ScrollToElements width={width} elements={profiles} display={currentState === 1 ? 'flex' : 'none'} />
            <ScrollToElements width={width} elements={categories} display={currentState === 0 ? 'flex' : 'none'} />
        </Container>
    )
}