import React from 'react';
import {Container} from './styled';
import Category from '../switch/elements/category/index';
import Profile from '../switch/elements/profile/index';
import ScrollToElements from '../../scrollToElements/index';

export default ({width, currentState, states}) => {
    const elementWidth = width * 0.5 * 0.9;
    
    const categories = [
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>,
        <Category width={elementWidth}/>
    ];

    const profiles = [
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>,
        <Profile width={elementWidth}/>
    ];

    return (
        <Container>
            <ScrollToElements width={width} elements={profiles} display={currentState === states.profiles ? 'flex' : 'none'}/>
            <ScrollToElements width={width} elements={categories} display={currentState === states.categories ? 'flex' : 'none'}/>
        </Container>
    )
}