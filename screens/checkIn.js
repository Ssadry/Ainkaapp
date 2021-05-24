import React from 'react';
import styled from 'styled-components/native';
import Carousel from '../components/toCheckIn/myCarousel/card';
import Pagination from '../components/toCheckIn/myCarousel/pagination';
import Choose from '../components/toCheckIn/choose';
import Form from '../components/toCheckIn/loginOrSignup';
import Welcome from '../components/toCheckIn/welcome';
import {Dimensions} from 'react-native';

const SCREEN = 'screen';
const {width} = Dimensions.get(SCREEN);
const {height} = Dimensions.get(SCREEN);

const carouselHeight = height * 0.85;
const paginationHeight = height * 0.15;

export default () => {
    const [currentPos, setCurrentPos] = React.useState(0);

    const data = [
        {
            screen: 
                <Choose 
                    setCurrentPos={setCurrentPos}
                    currentPos={currentPos}
                />
        },
        {
            screen: 
                <Form 
                    setCurrentPos={setCurrentPos}
                    currentPos={currentPos}
                />
        },
        {
            screen: 
                <Welcome 
                    setCurrentPos={setCurrentPos}
                    currentPos={currentPos}
                />
        }
    ]

    return (
        <Container>
            <Carousel
                items={data}
                itemWidth={width}
                height={carouselHeight}
                currentPos={currentPos}
            />
            <Pagination
                width={width}
                height={paginationHeight}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;

`;