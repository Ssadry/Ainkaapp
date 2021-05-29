import React from 'react';
import styled from 'styled-components/native';
import Carousel from '../components/toCheckIn/myCarousel/card';
import Pagination from '../components/toCheckIn/myCarousel/pagination';
import Choose from '../components/toCheckIn/choose';
import Signup from '../components/toCheckIn/singup';
import Welcome from '../components/toCheckIn/welcome';
import Community from '../components/toCheckIn/community';
import {Dimensions} from 'react-native';

const SCREEN = 'screen';
const {width} = Dimensions.get(SCREEN);
const {height} = Dimensions.get(SCREEN);

const carouselHeight = height * 0.8;

export default () => {
    const [currentPos, setCurrentPos] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(0);

    const changePage = (index) => {
        setCurrentPos(width * -(currentPos + index));
        setCurrentPage(currentPage + index);
    }

    const nextScreen = () => {
        alert('Cambio de pantalla');
    }

    const data = [
        {
            screen: 
                <Signup 
                    changePage={changePage}
                />
        },
        {
            screen: 
                <Welcome 
                    changePage={changePage}
                />
        },
        {
            screen: 
                <Community 
                    changePage={nextScreen}
                />
        },
    ];

    return (
        <Container>
            <Carousel
                items={data}
                itemWidth={width}
                height={carouselHeight}
                currentPage={currentPage}
            />
            <Pagination
                width={width}
                amountItems={data.length}
                currentPage={currentPage}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;