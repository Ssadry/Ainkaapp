import React from 'react';
import styled from 'styled-components/native';
import Carousel from '../components/toCheckIn/myCarousel/card';
import Pagination from '../components/toCheckIn/myCarousel/pagination';
import Choose from '../components/toCheckIn/choose';
import Form from '../components/toCheckIn/form';
import Welcome from '../components/toCheckIn/welcome';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const carouselHeight = height * 0.8;
const paginationHeight = height * 0.2;

export default () => {
    const [currentPos, setCurrentPos] = React.useState(0);

    const data = [
        {
            screen: <Choose setCurrentPos={setCurrentPos}/>
        },
        {
            screen: <Form setCurrentPos={setCurrentPos}/>
        },
        {
            screen: <Welcome setCurrentPos={setCurrentPos}/>
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