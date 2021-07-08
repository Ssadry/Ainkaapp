import React, {useContext, useState} from 'react';
import styled from 'styled-components/native';
import Carousel from '../components/toCheckIn/myCarousel/card';
import Pagination from '../components/toCheckIn/myCarousel/pagination';
import Choose from '../components/toCheckIn/choose';
import Signup from '../components/toCheckIn/singup';
import Welcome from '../components/toCheckIn/welcome';
import Community from '../components/toCheckIn/community';
import {Dimensions} from 'react-native';
import {AppContext} from '../application/provider';
import defaultColors from '../assets/colors/defaultColors.json';

const width = Math.round(Dimensions.get('screen').width);

const carouselFlex = 0.9;
const paginationFlex = 0.1;

const CheckIn = ({navigation}) => {
    const [routeName] = useContext(AppContext);
    const [currentPos, setCurrentPos] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const changePage = (index) => {
        setCurrentPos(width * -(currentPos + index));
        setCurrentPage(currentPage + index);
    }

    const nextScreen = () => {
        navigation.navigate(routeName.bottomNavigation, {prevScreen: routeName.checkIn});
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
                flex={carouselFlex}
                currentPage={currentPage}
            />
            <Pagination
                width={width}
                flex={paginationFlex}
                amountItems={data.length}
                currentPage={currentPage}
            />
        </Container>
    )
}

export default CheckIn;

const Container = styled.View`
    flex: 1;
    background-color: ${defaultColors.GrisPerla};
`;