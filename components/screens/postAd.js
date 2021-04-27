import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AppContext} from '../../application/provider';
import {Dimensions} from 'react-native';
import Header from '../toPostAd/header';
import Info from '../toPostAd/info';
import Button from '../toPostAd/button';

const WINDOW = 'window';
const marginBottom = 70;
const {width} = Dimensions.get(WINDOW);
const height = Dimensions.get(WINDOW).height - marginBottom;

export default () => {
    const [popUpIsVisible, setPopUpIsVisible] = useContext(AppContext);

    return (
        <Container isVisible={popUpIsVisible}>
            <Header/>
            <Info/>
            <Button/>
        </Container>
    )
}

export const Container = styled.View`
    position: ${({isVisible}) => isVisible ? 'absolute' : 'relative'};
    bottom: ${marginBottom + 'px'};
    right: 0px;
    width: ${width + 'px'};
    height: ${height + 'px'};
    border: 1px solid black;
    background-color: white;
    z-index: 5;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;